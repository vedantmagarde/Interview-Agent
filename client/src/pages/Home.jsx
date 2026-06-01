import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { motion } from "motion/react";
import { BsRobot, BsMic, BsClock, BsBarChart, BsFileEarmarkText } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";
import { useState } from "react";
import AuthModel from "../components/AuthModel.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { ServerUrl } from "../App";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice.js";
import { useRef } from "react";
import evalImg from "../assets/ai-ans.png";
import hrImg from "../assets/HR.png";
import techImg from "../assets/tech.png";
import confidenceImg from "../assets/confi.png";
import creditImg from "../assets/credit.png";
import resumeImg from "../assets/resume.png";
import pdfImg from "../assets/pdf.png";
import analyticsImg from "../assets/history.png";
import Footer from "../components/Footer.jsx";

function Home() {

    const { userData } = useSelector((state) => state.user);
    const [showAuth, setShowAuth] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#f3f3f3] flex flex-col">
            <Navbar />

            <div className="flex-1 px-6 py-20">

                <div className="max-w-6xl mx-auto">

                    <div className="flex justify-center mb-6">
                        <div className="bg-gray-100 text-gray-600 text-sm px-4 py-2 rounded-full flex items-center gap-2">
                            <HiSparkles size={16} className="bg-green50 text-green-600" />
                            AI Powered Smart Interview Preparation Platform
                        </div>
                    </div>
                    <div className="text-center mb-28">

                        {/* Practice Interviews withAI Intelligence */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl font-semibold leading-tight max-w-4xl mx-auto">

                            Practice Interviews with
                            <span className="relative inline-block">
                                <span className="bg-green-100 text-green-600 px-5 py-1 rounded-full">
                                    AI Intelligence
                                </span>
                            </span>
                        </motion.h1>

                        {/* Role-based mock interview simulations, personalized feedback, and performance analytics to help you ace your next interview. */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="text-gray-510 text-lg mt-6 max-w-2xl mx-auto">
                            Role-based mock interview simulations, personalized feedback, and performance analytics to help you ace your next interview.
                        </motion.p>

                        {/* Both Buttons */}
                        <div className="mt-10 gap -4 flex flex-wrap justify-center gap-6">
                            {/* Start Interview Button */}
                            <motion.button
                                whileHover={{ opacity: 0.85, scale: 1.02 }}
                                whileTap={{ opacity: 1, scale: 0.99 }}
                                onClick={() => {
                                    if (!userData) {
                                        setShowAuth(true);
                                        return;
                                    }

                                    navigate("/interview");
                                }}
                                className="bg-black text-white hover:opacity-90  py-3 px-10 rounded-full transition shadow-md "
                            >
                                Start Interview
                            </motion.button>

                            {/* View History Button */}
                            <motion.button
                                whileHover={{ opacity: 0.85, scale: 1.02 }}
                                whileTap={{ opacity: 1, scale: 0.99 }}
                                onClick={() => {
                                    if (!userData) {
                                        setShowAuth(true);
                                        return;
                                    }

                                    navigate("/history");
                                }}
                                className="border border-gray-300  py-3 px-10 rounded-full hover:bg-gray-100 transition  "
                            >
                                View History
                            </motion.button>
                        </div>

                    </div>

                    {/* Steps Boxes */}
                    <div className="flex flex-col md:flex-row justify-center items-center  gap-10 mb-28">
                        {
                            [
                                {
                                    icon: <BsRobot size={24} />,
                                    step: "STEP 1",
                                    title: "Role & Experience Selection",
                                    desc: "Choose your desired role and experience level to receive tailored interview questions and feedback."
                                }, {
                                    icon: <BsMic size={24} />,
                                    step: "STEP 2",
                                    title: "Smart Voice Interview",
                                    desc: "Dynamic voice-based interview experience with real-time AI follow-up question feedback and analysis."
                                }, {
                                    icon: <BsClock size={24} />,
                                    step: "STEP 3",
                                    title: "Timer Based Simulation",
                                    desc: "Real interview pressure with time tracker."
                                }
                            ].map((item, index) => {
                                return (<motion.div key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 + index * 0.3 }}
                                    whileHover={{ rotate: 0, scale: 1.05 }}

                                    className={`relative bg-white  rounded-3xl border-2  border-green-100 hover:border-green-500 p-10 w-80 max-w-[90%] shadow-md hover:shadow-2xl transition-all duration-300
                                    ${index === 0 ? "rotate-[-4deg]" : ""}
                                    ${index === 1 ? "rotate-[3deg] md:-md-6 shadow-xl" : ""}
                                    ${index === 2 ? "rotate-[-3deg]" : ""}
                                `}>

                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white border-2 border-green-500 text-green-600 w-16 h-16 flex rounded-2xl flex  items-center justify-center shadow-lg">
                                        {item.icon}
                                    </div>

                                    <div className="pt-10 text-center">
                                        <div className="text-xs text-green-600 font-semibold mb-2 tracking-wider">{item.step}</div>
                                        <h3 className="font-semibold mb-3 text-lg">{item.title}</h3>
                                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>)
                            })
                        }

                    </div>


                    <div className="mb-32">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="text-4xl  font-semibold text-center mb-16">
                            Advanced AI{"  "}
                            <span className="text-green-600">Capabilities</span>
                        </motion.h2>

                        {/* Advanced AI Capabilities 4 steps */}
                        <div className="grid md:grid-cols-2 gap-10">
                            {
                                [
                                    {
                                        image: evalImg,
                                        icon: <BsBarChart size={21} />,
                                        title: "AI Answer Evaluation",
                                        desc: "Scores communication ,technical accuracy and confidence."
                                    }, {
                                        image: resumeImg,
                                        icon: <BsFileEarmarkText size={21} />,
                                        title: "Resume Based Interview",
                                        desc: "Project and experience based interview questions for better preparation."
                                    }, {
                                        image: pdfImg,
                                        icon: <BsFileEarmarkText size={21} />,
                                        title: "Download PDF Report",
                                        desc: "Detailed strengths ,weakness and improvement areas in a PDF report after each interview session."
                                    }, {
                                        image: analyticsImg,
                                        icon: <BsBarChart size={21} />,
                                        title: "Analytics, Insights & History",
                                        desc: "Track progress with performance graphs and topic analysis."
                                    }
                                ].map((item, index) => {
                                    return (
                                        <motion.div key={index}
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6 + index * 0.3 }}
                                            whileHover={{ scale: 1.03 }}

                                            className="bg-white border rounded-3xl p-8 border-gray-200 shadow-sm hover:shadow-xl transition-all">

                                            <div className="flex flex-col md:flex-row items-center gap-8">
                                                {/* Image Container */}
                                                <div className="w-full md:w-1/2 flex justify-center">
                                                    <img src={item.image} alt={item.title} className="w-full h-auto object-contain max-h-64" />
                                                </div>

                                                {/* Content Container */}
                                                <div className="w-full md:w-1/2">
                                                    <div className="bg-green-50 text-green-600 w-12 h-12  rounded-xl flex items-center justify-center mb-6">
                                                        {item.icon}
                                                    </div>
                                                    <h3 className="font-semibold mb-3 text-xl">{item.title}</h3>
                                                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                                </div>

                                            </div>
                                        </motion.div>
                                    )
                                })
                            }
                        </div>

                    </div>


                    <div className="mb-32">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="text-4xl  font-semibold text-center mb-16">
                            Multiple Interview{"  "}
                            <span className="text-green-600">Modes</span>
                        </motion.h2>

                        {/* Advanced AI Capabilities 4 steps */}
                        <div className="grid md:grid-cols-2 gap-10">
                            {
                                [
                                    {
                                        img: hrImg,
                                        title: "HR Interview Mode",
                                        desc: "Behavioral and communication based evaluation."
                                    }, {
                                        img: techImg,
                                        title: "Technical Interview Mode",
                                        desc: "Assesses technical knowledge and problem-solving abilities."
                                    }, {
                                        img: confidenceImg,
                                        title: "Confidence Checking Mode",
                                        desc: "Basic tone and confidence assessment."
                                    }, {
                                        img: creditImg,
                                        title: "Credit System",
                                        desc: "Unlock premium interview sessions."
                                    }
                                ].map((mode, index) => {
                                    return (
                                        <motion.div key={index}
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6 + index * 0.1 }}
                                            whileHover={{ y: -6 }}

                                            className="bg-white border rounded-3xl p-8 border-gray-200 shadow-sm hover:shadow-xl transition-all">

                                            <div className="flex items-center 
                                            justify-center gap-6">

                                                <div className="w-1/2">
                                                    <h3 className="font-semibold text-xl mb-3 ">{mode.title}</h3>

                                                    <p className="text-gray-500 text-sm leading-relaxed">{mode.desc}</p>
                                                </div>

                                                {/* right Image */}
                                                <div className="w-1/2 justify-end">
                                                    <img src={mode.img} alt={mode.title} className="w-28 h-28 object-contain" />
                                                </div>

                                            </div>
                                        </motion.div>
                                    )
                                })
                            }
                        </div>

                    </div>

                </div>
            </div>
            {showAuth && <AuthModel onClose={() => setShowAuth(false)} />}

            <Footer />

        </div>
    )
}

export default Home; 