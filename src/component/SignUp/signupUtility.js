import {getDatabase,ref,set,child,remove,update,onValue,get} from 'firebase/database'
// import React  from 'react';
import {db} from '../../firebaseconfig'
// import { AES,CryptoJS } from 'crypto-js';


function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}
 function validation(emailValue,userValue,passwordValue){
    let emailCheck = /^[a-zA-Z0-9]+@(gmail|yahoo|outlook)\.com$/;
    // let emailCheck = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    let userCheck = /^[a-zA-Z0-9]{5,}$/;

    if(isEmptyOrSpaces(emailValue) || isEmptyOrSpaces(userValue) || isEmptyOrSpaces(passwordValue)){
        alert("You cannot left any field empty");
        return false;
    }

    if(!emailCheck.test(emailValue)){
        alert("enter a valid email");
        return false;
    }

    if(!userCheck.test(userValue)){
        alert("-username can only be alphanumeric \n -usernamemust be atleast 5 characters")
        return false;
    }

    return true;
 }

//  const db = getDatabase();

//  function encPass(passwordValue){
//     var pass12 = CryptoJS.AES.encrypt(passwordValue,passwordValue);
//     // CryptoJS.AES.encrypt("Message", "Secret Passphrase");
//     return pass12.toString();
//  }
 function RegisterUser(e){
    e.preventDefault();
    const data = new FormData(e.target);
    const emailValue = data.get("signInEmail");
    
    const userValue = data.get("signInUser");
    const passwordValue = data.get("signInPassword");
    console.log(emailValue,userValue,passwordValue)    

    if(!validation(emailValue,userValue,passwordValue)){
        return ;
    }else{
        
          const dbRef = ref(db);

          get(child(dbRef, "UsersList/"+userValue))
          .then((snapshot)=>{
            if(snapshot.exists()){
                alert("Account Already Exist");
            }
            else{
               set(ref(db,"UsersList/"+userValue),
               {
                username : userValue,
                email : emailValue,
                password : passwordValue,
              })
              .then(()=>{
                alert("User added successfully");
              })
              .catch((error)=>{
                alert("error"+error);
              })
    
            }
        });
          
    }
}

 export default RegisterUser;













