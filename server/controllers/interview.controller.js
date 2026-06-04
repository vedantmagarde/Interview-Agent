import fs from 'fs';
import * as  pdfjslib from 'pdfjs-dist/legacy/build/pdf.mjs';
import { askAi } from "../services/openRouter.service.js";
import User from "../models/user.model.js"


export const analyzeResume = async (req, res) => {

    // console.log("Resume endpoint hit");
    // console.log("File:", req.file);

    try {
        if (!req.file) {
            return res.status(400).json({ error: "No Resume uploaded" });
        }

        const filePath = req.file.path;

        const fileBuffer = await fs.promises.readFile(filePath);
        const uint8Array = new Uint8Array(fileBuffer);

        const pdf = await pdfjslib.getDocument({ data: uint8Array }).promise;

        // Extract text from each page of the PDF
        let resumeText = "";
        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
            const page = await pdf.getPage(pageNum);
            const content = await page.getTextContent();

            const pageText = content.items.map(item => item.str).join(" ");

            resumeText += pageText + "\n";
        }

        resumeText = resumeText.replace(/\s+/g, ' ').trim();



        //  ** Resume Prompt **

        const messages = [
            {
                role: "system",
                content: `
Extract structured data from resume.

Return strictly JSON:

{
    "role": "string",
    "experience": "string",
    "projects": ["project1", "project2"],
    "skills": ["skill1", "skill2"]
}`
            },
            {
                role: "user",
                content: resumeText
            }
        ];


        const aiResponse = await askAi(messages);

        const parsed = JSON.parse(aiResponse);

        fs.unlinkSync(filePath);

        res.json({
            role: parsed.role,
            experience: parsed.experience,
            projects: parsed.projects,
            skills: parsed.skills,
            resumeText: resumeText

        });




    } catch (error) {
        console.error("Error in analyzeResume:", error);

        if (req.file && fs.existsSync(req.file.path)) {
            fs.unlinkSync(req.file.path);
        }

        return res.status(500).json({ message: "Error analyzing resume", error: error.message });
    }
};




export const generateQuestion = async (req, res) => {
    try {
        const { role, experience, mode, resumeText, projects, skills } = req.body;

        role = role?.trim();
        experience = experience?.trim();
        mode = mode?.trim();

        // if any thing missing 
        if (!role || !experience || !mode) return res.status(400).json({ message: "Role, Experience and Mode are required." });

        const user = await User.findById(req.userId);

        if (!user) {
            return res.status(404).json({
                message: "User not found."
            });
        }

        if (user.credits < 50) {
            return res.status(400).json({
                message: "Not enough credits. Minimum 50 credits required."
            });
        }

        const projectText = Array.isArray(projects) && projects.length ? projects.join(',') : "None";
        const skillsText = Array.isArray(skills) && skills.length ? projects.join(',') : "None";
        const safeResume = resumeText?.trim() || "None";


        // ** Generate Question Prompt **
        const userPrompt = `
    Role:${role},
    Experience:${experience},
    InterviewMode:${mode},
    Projects:${projectText},
    Skills:${skillsText},
    Resume:${safeResume}
    `;


        if (!userPrompt.trim()) {
            return res.status(400).json({
                message: "Prompt contents is empty..."
            });
        }


        const messages = [

            {
                role: "system",
                content: `
You are a real human interviewer conducting a professional interview.

Speak in simple, natural English as if you are directly talking to the candidate.

Generate exactly 5 interview questions.

Strict Rules:
- Each question must contain between 15 and 25 words.
- Each question must be a single complete sentence.
- Do NOT number them.
- Do NOT add explanations.
- Do NOT add extra text before or after.
- One question per line only.
- Keep language simple and conversational.
- Questions must feel practical and realistic.

Difficulty progression:
Question 1 → easy  
Question 2 → medium  
Question 3 → medium  
Question 4 → medium-hard  
Question 5 → hard  

Make questions based on the candidate’s role, experience,interviewMode, projects, skills, and resume details.
`
            }
            ,
            {
                role: "user",
                content: userPrompt
            }
        ];



        const aiResponse = await askAi(messages);

    } catch (error) {

    }
}