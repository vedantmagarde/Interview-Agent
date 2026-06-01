import axios from "axios";

export const askAi = async ({ messages }) => {
    try {
        if (!messages || messages.length === 0 || !Array.isArray(messages)) {
            throw new Error("Messages  array is empty.");
        }

        const response = await axios.post("https://openrouter.ai/api/v1/chat/completions", {
            model: "openai/gpt-4o-mini",
            messages: messages,
            stream: true
        },
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    'Content-Type': 'application/json',
                }
            });
    } catch (error) {
        console.error("Error in askAi:", error);
        throw error;
    }
}