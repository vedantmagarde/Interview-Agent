import React from 'react'
import { useSelector } from 'react-redux';
import { BsRobot } from 'react-icons/bs';
import { RiCopperCoinLine } from "react-icons/ri";
import { motion } from 'framer-motion';
import { FaRegUser } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { LuLogOut } from "react-icons/lu";
import axios from 'axios';
import { ServerUrl } from '../App';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice.js';
import { useState } from 'react';
import AuthModel from './AuthModel.jsx';


function Navbar() {

    const { userData } = useSelector((state) => state.user);
    const [showCreditPopup, setShowCreditPopup] = React.useState(false);
    const [showUserPopup, setShowUserPopup] = React.useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showAuth, setShowAuth] = useState(false);

    const handleLogout = async () => {
        try {
            await axios.get(ServerUrl + "/api/auth/logout", { withCredentials: true });
            dispatch(setUserData(null));
            setShowCreditPopup(false);
            setShowUserPopup(false);
            navigate("/");

        } catch (error) {
            console.error("Logout failed:", error);
        }
    }

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

                    {/* Credit Popup */}
                    <div className='relative '>
                        <button onClick={() => {
                            if (!userData) {
                                setShowAuth(true);
                                return;
                            }
                            setShowCreditPopup(!showCreditPopup);
                            setShowUserPopup(false);
                        }}
                            className='flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-md
                        hover:bg-gray-200 transition '>

                            <RiCopperCoinLine size={20} />
                            {userData?.credits || 0}

                        </button>

                        {showCreditPopup && (
                            <div className='absolute right-[-50px] mt-3 w-64 bg-white shadow-xl border border-gray-200 rounded p-5 z-50'>

                                <p className='text-sm text-gray-600 mb4 py-2'>Need more credits to continue Interviews.</p>
                                <button
                                    onClick={() => {
                                        navigate("/pricing");
                                    }}
                                    className='w-full bg-gray-700 text-white py-2 rounded-lg text-sm'>Buy More Credits
                                </button>

                            </div>
                        )}

                    </div>

                    {/* User Popup */}
                    <div className='relative '>

                        <button
                            onClick={() => {
                                if (!userData) {
                                    setShowAuth(true);
                                    return;
                                }
                                setShowUserPopup(!showUserPopup);
                                setShowCreditPopup(false);
                            }}
                            className='w-9 h-9 bg-black text-white rounded-full flex items-center justify-center 
                        font-semibold'>

                            {userData?.name ? userData.name.charAt(0).toUpperCase() : <FaRegUser size={16} />}

                        </button>

                        {showUserPopup && (
                            <div className='absolute right-0 mt-3 w-48 bg-white shadow-xl border border-gray-200 rounded-xl p-4 z-50'>

                                <p className='text-md text-blue-500 font-medium  mb-1'>{userData?.name || 'User'}</p>

                                {/* Interview History Button */}
                                <button
                                    onClick={() => {
                                        navigate("/history");
                                    }}
                                    className='w-full text-left text-sm py-2 hover:text-black text-gray-600'>
                                    Interview History
                                </button>

                                {/* Log out Button */}
                                <button
                                    onClick={handleLogout}
                                    className='w-full text-left text-sm py-2 flex items-center gap-2 text-red-500'>
                                    <LuLogOut size={16} />
                                    Log Out
                                </button>
                            </div>
                        )}

                    </div>

                </div>


            </motion.div >

            {showAuth && <AuthModel onClose={() => setShowAuth(false)} />}

        </div >
    )
}

export default Navbar;