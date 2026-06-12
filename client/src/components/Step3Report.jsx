import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { motion } from "motion/react"
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"


function Step3Report({ report }) {

    if (!report) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500 text-lg">Loading Report...</p>
            </div>
        );
    }


    const navigate = useNavigate()

    const {
        finalScore = 0,
        confidence = 0,
        communication = 0,
        correctness = 0,
        questionWiseScore = [],
    } = report;

    const questionScoreData = questionWiseScore.map((score, index) => ({
        name: `Q${index + 1}`,
        score: score.score || 0
    }))

    const skills = [
        { label: "Confidence", value: confidence },
        { label: "Communication", value: communication },
        { label: "Correctness", value: correctness },
    ];



    let performanceText = "";
    let shortTagline = "";

    if (finalScore >= 8) {
        performanceText = "Ready for job opportunities.";
        shortTagline = "Excellent clarity and structured responses.";
    } else if (finalScore >= 5) {
        performanceText = "Needs minor improvement before interviews.";
        shortTagline = "Good foundation, refine articulation.";
    } else {
        performanceText = "Significant improvement required.";
        shortTagline = "Work on clarity and confidence.";
    }


    return (
        <div className='min-h-screen bg-linear-to-br from-gray-50 to-green-50 px-4 sm:px-6 lg:px-10 py-8'>
            <div className='mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>

            </div>


        </div>
    )
}

export default Step3Report;