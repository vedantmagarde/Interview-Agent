import React from "react";
import Step1SetUp from "../components/Step1SetUp.jsx";
import Step2Interview from "../components/Step2Interview.jsx";
import Step3Report from "../components/Step3Report.jsx";
import { useState } from "react";
import Footer from "../components/Footer.jsx";
import { useNavigate } from "react-router-dom";

function InterviewPage({ interviewData, onFinish }) {

    const [step, setStep] = React.useState(1);
    const [interviewData, setInterviewData] = useState(null);
    const [report, setReport] = useState(null);

    return (
        <div className="min-h-screen bg-grey-50">
            {step === 1 && (
                <Step1SetUp onStart={(data) => {
                    setInterviewData(data);
                    setStep(2);
                }} />)}

            {step === 2 && (
                <Step2Interview interviewData={interviewData} onFinish={(report) => {
                    setReport(report);
                    setStep(3);
                }} />)}

            {step === 3 && (
                <Step3Report report={report} />)}


        </div>
    )
}

export default InterviewPage;