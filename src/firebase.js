import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAbaK3xJTor4sxqZjCqYo3oC8jPKxSXbdE",
  authDomain: "xstrange-chatapp.firebaseapp.com",
  projectId: "xstrange-chatapp",
  storageBucket: "xstrange-chatapp.appspot.com",
  messagingSenderId: "601448041108",
  appId: "1:601448041108:web:a2b58683aa1601ca974281"
};


export const app = initializeApp(firebaseConfig);