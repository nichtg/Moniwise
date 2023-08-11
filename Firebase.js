import { initializeApp } from "firebase/app";

// Firebase configuration
// Please add in secrets in .env file and DO NOT commit to git! or else...
const config = {
  apiKey: `${import.meta.env.VITE_apiKey}`,
  authDomain: `${import.meta.env.VITE_authDomain}`,
  projectId: `${import.meta.env.VITE_projectId}`,
  storageBucket: `${import.meta.env.VITE_storageBucket}`,
  messagingSenderId: `${import.meta.env.VITE_messagingSenderId}`,
  appId: `${import.meta.env.VITE_appId}`
};

initializeApp(config);

export default firebaseConfig;