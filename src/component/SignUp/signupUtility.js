import {getDatabase,ref,set,child,remove,update,onValue,get} from 'firebase/database'
// import React  from 'react';
import {db} from '../../firebaseconfig'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}
 function validation(emailValue,userValue,passwordValue){
    // let emailCheck = /^[a-zA-Z0-9]+@(gmail|yahoo|outlook)\.com$/;
    let emailCheck = /^[a-zA-Z0-9+_.-]+@(gmail|yahoo|outlook)\.com$/;
    // let emailCheck = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    let userCheck = /^[a-zA-Z0-9]{5,}$/;

    if(isEmptyOrSpaces(emailValue) || isEmptyOrSpaces(userValue) || isEmptyOrSpaces(passwordValue)){
        // alert("You cannot left any field empty");
        // toast("")
        toast.error(' You cannot left any field empty', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        return false;
    }

    if(!emailCheck.test(emailValue)){
     
        toast.error('enter a valid email', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        return false;
    }

    if(!userCheck.test(userValue)){
        // alert("-username can only be alphanumeric \n -usernamemust be atleast 5 characters")
        toast.error(' -username can only be alphanumeric \n -usernamemust be atleast 5 characters', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
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
              toast.error('Account Already Exist', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
            else{
               set(ref(db,"UsersList/"+userValue),
               {
                username : userValue,
                email : emailValue,
                password : passwordValue,
              })
              .then(()=>{
                // alert("User added successfully");
                toast.success('User added successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
              })
              .catch((error)=>{
                // alert("error"+error);
                toast.error(`${error}`, {
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
        });
          
    }
}

 export default RegisterUser;













