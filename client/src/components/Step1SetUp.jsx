import React from "react";
import { motion } from "framer-motion";

function Step1SetUp({ onStart }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex  items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 px-4"
        >

            {/* left side wala area */}
            <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl grid md:grid-cols-2 overflow-hidden">

                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative bg-gradient-to-br from-green-50 to-green-100 p-12 flex flex-col justify-center">

                    <h2 className="text-4xl font-bold text-gray-800 mb-6">Start your AI Interview</h2>

                    <p className="text-gray-600 mb-10">
                        Practice real interview scenarios powered by AI.
                        Improve your communication,technical skills and boost your confidence.
                    </p>


                </motion.div>

                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-lg text-gray-600">
                        Get ready to ace your next interview with our comprehensive preparation tools.
                    </p>
                </motion.div>
            </div>

        </motion.div>
    )
}

export default Step1SetUp;