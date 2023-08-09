import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getDatabase,ref,set,child,remove,update,onValue,get} from 'firebase/database'
import { v4 as uuidv4 } from 'uuid';
import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



// new

const firebaseConfig = {
  apiKey: "AIzaSyDVM8aT1DKt3CNmBqaOQLkr05bREDhWqBI",
  authDomain: "twitter-data-4.firebaseapp.com",
  projectId: "twitter-data-4",
  storageBucket: "twitter-data-4.appspot.com",
  messagingSenderId: "210246222512",
  appId: "1:210246222512:web:38eaa20a39aa4f4bfab175",
  measurementId: "G-P8DWZYF69G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getDatabase(app);


function InsertData(message,url,user){
    var uniqueid = uuidv4();
    set(ref(db,"user/"+uniqueid),{
        userName : user,
        mess : message,
        url1 : url,
        cmnt : [],
        id : uniqueid,
        likes : 0,
        
    }).then(()=>{
        // alert('data stored successfully');
        toast.success('data stored successfully', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
    }).catch((error)=>{
        // console.log("unsuccessful"+error);
        toast.error("unsuccessful"+error, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
    }) 
}


function user(setAns){
    const dbRef = ref(db,"user");
    onValue(dbRef,(snapshot)=>{
      let students = [];
      snapshot.forEach(childSnapshot => {
        students.push(childSnapshot.val());
      });
      setAns(students);
   
    })
    
   }
export  {InsertData,user,db};
