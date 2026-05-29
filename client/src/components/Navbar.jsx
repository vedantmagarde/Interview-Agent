import React from 'react'
import { useSelector } from 'react-redux';
import { BsRobot } from 'react-icons/bs';
import { RiCopperCoinLine } from "react-icons/ri";
import { motion } from 'framer-motion';
import { FaRegUser } from "react-icons/fa6";

function Navbar() {

    const { userData } = useSelector((state) => state.user);

    return (
        <div className='bg-[#f3f3f3] flex justify-center px-4 pt-6'>
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='w-full max-w-6xl bg-white rounded-[24px] shadow-sm border border-gray-200 px-8 py-4 flex items-center relative justify-between'>
                {/* Left wala part */}
                <div className='flex item-center gap-3 cursor-pointer'>

                    <div className='bg-black text-white p-2 rounded-lg'>
                        <BsRobot size={17} />
                    </div>

                    <h1 className='font-semibold hidden md:block text-lg'>Interview Agent</h1>
                </div>


                {/* Right wala part */}
                <div className='flex items-center gap-6  relative'>

                    <div className='relative '>
                        <button className='flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-md
                        hover:bg-gray-200 transition '>

                            <RiCopperCoinLine size={20} />
                            {userData?.credits || 0}

                        </button>

                    </div>

                    <div className='relative '>
                        <button className='w-9 h-9 bg-black text-white rounded-full flex items-center justify-center 
                        font-semibold'>

                            {userData ? userData?.name.charAt(0)?.toUpperCase() : <FaRegUser size={16} />}

                        </button>

                    </div>

                </div>
            </motion.div >
        </div >
    )
}

export default Navbar;