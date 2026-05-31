import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { motion } from "motion/react";
import { BsRobot, BsMic, BsClock, BsBarChart, BsFileEarmarkText } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";
import { useState } from "react";
import AuthModel from "../components/AuthModel.jsx";
import { useNavigate } from "react-router-dom";

function Home() {

    const { userData } = useSelector((state) => state.user);
    const [showAuth, setShowAuth] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#f3f3f3] flex flex-col">
            <Navbar />

            <div className="flex-1 px-6 py-20">

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

                    <div className="mt-10 gap -4 flex flex-wrap justify-center gap-6">
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
            </div>

            {showAuth && <AuthModel onClose={() => setShowAuth(false)} />}

        </div>
    )
}

export default Home; 