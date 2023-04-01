import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getDatabase,ref,set,child,remove,update,onValue,get} from 'firebase/database'
import { v4 as uuidv4 } from 'uuid';
import React from "react";


const firebaseConfig = {
  apiKey: "AIzaSyDqpvv4wW778pY2iBfO-31nAfb36tqRyBM",
  authDomain: "firstproject-f0d5d.firebaseapp.com",
  projectId: "firstproject-f0d5d",
  storageBucket: "firstproject-f0d5d.appspot.com",
  messagingSenderId: "480628115255",
  appId: "1:480628115255:web:e4ddcb3cd02132fca5fcb2",
  measurementId: "G-9BTPEY7WY3"
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
        alert('data stored successfully');
    }).catch((error)=>{
        console.log("unsuccessful"+error);
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