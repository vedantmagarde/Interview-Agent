


import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: "interview-agent-6b647.firebaseapp.com",
    projectId: "interview-agent-6b647",
    storageBucket: "interview-agent-6b647.firebasestorage.app",
    messagingSenderId: "306469722397",
    appId: "1:306469722397:web:fcb1e2ff2138f84a3429f4"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };