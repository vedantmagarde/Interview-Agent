import React from "react";
import { BsRobot } from "react-icons/bs";
import { PiSparkleDuotone } from "react-icons/pi";
import { motion } from "motion/react";
import { FcGoogle } from "react-icons/fc";

function Auth() {
    return (
        <div className="w-full min-h-screen bg-[#f3f3f3] flex items-center justify-center px-6 py-20">
            {/* Auth  me hu abhi toh..... */}

            <motion.div
                initial={{ opacity: 0, y: -67 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}

                className="w-full max-w-md p-8 rounded-3xl bg-white shadow-2xl border border-gray-200">

                <div className="flex items-center justify-center gap-3 mb-6">

                    <div className="bg-black text-white p-2 rounded-lg">
                        <BsRobot size={24} />
                    </div>
                    <h2 className="font-semibold text-lg">
                        Interview Agent
                    </h2>
                </div>

                <h1 className="text-2xl md:text-3xl font-semibold text-center leading-snug mb-4">Continue with{" "}
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full inline-flex items-center gap-2">
                        <PiSparkleDuotone size={16} />
                        AI-Plugged Interview
                    </span>
                </h1>

                <p className="text-gray-500 text-center text-sm md:text-base leading-relaxed mb-8">Sign in to start AI-Plugged mock interviews,track your progress ,get personalized feedback, and boost your interview skills!
                </p>

                <motion.button
                    whileHover={{ opacity: 0.85, scale: 1.02 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full flex item-center justify-center gap-3  py-3 bg-black text-white rounded-full shadow-md">

                    <FcGoogle size={20} />
                    Continue with Google

                </motion.button>

            </motion.div>
        </div>
    )
}

export default Auth;