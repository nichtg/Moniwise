import { initializeApp } from "firebase/app";

import 'dotenv/config' //using this as the vite way of using .env files is not working :()
// Firebase configuration
// Please add in secrets in .env file and DO NOT commit to git! or else...
// oh yea remember to create the .env file
const config = {
  apiKey: `${process.env.VITE_apiKey}`,
  authDomain: `${process.env.VITE_authDomain}`,
  projectId: `${process.env.VITE_projectId}`,
  storageBucket: `${process.env.VITE_storageBucket}`,
  messagingSenderId: `${process.env.VITE_messagingSenderId}`,
  appId: `${process.env.VITE_appId}`
};
const firebaseApp = initializeApp(config);
export default firebaseApp;
