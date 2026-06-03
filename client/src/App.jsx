import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUserData } from './redux/userSlice.js';
import InterviewPage from './pages/InterviewPage.jsx';


export const ServerUrl = "http://localhost:8000"

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {

      try {
        const result = await axios.get(ServerUrl + "/api/user/current-user", { withCredentials: true });
        // console.log(result.data);
        dispatch(setUserData(result.data.user));
      }
      catch (error) {
        console.log("Status:", error.response?.status);
        console.log("Data:", error.response?.data);
        dispatch(setUserData(null));
      }

    }
    getUser();

  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/interview" element={<InterviewPage />} />




    </Routes>

  )
}

export default App;