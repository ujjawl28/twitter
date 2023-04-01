import {getDatabase,ref,set,child,remove,update,onValue,get} from 'firebase/database';
import {db} from '../../firebaseconfig';
// import { AES,CryptoJS } from 'crypto-js';


function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}

function login(user){

    localStorage.setItem('keepLoggedIn','yes');
    localStorage.setItem('user',JSON.stringify(user));
    window.location="/home";
}



function AuthenticateUser(e){
    e.preventDefault();
    const data = new FormData(e.target);
    const userValue = data.get("LoginUser");
    const passwordValue = data.get("LoginPassword");

    const dbref = ref(db);

    if(isEmptyOrSpaces(userValue) || isEmptyOrSpaces(passwordValue)){
        alert("You cannot left any field empty");
        return ;
    }

    if(passwordValue == ""){
        alert("You cannot left any field empty");
        return ;
    }

    get(child(dbref, "UsersList/"+userValue))
    .then((snapshot)=>{
      if(snapshot.exists()){
        //   alert("Account Already Exist");
        // let dbpass = decPass(snapshot.val().password,passwordValue)
        if(snapshot.val().password == passwordValue){
            console.log(snapshot.val());
            login(snapshot.val());
        }
        else{
            alert("Please Enter The Correct password"); 
        }

      }
      else{
       alert("user does not exist");
      }
      }); 
}

 

// var pass12 = CryptoJS.AES.encrypt(passwordValue,passwordValue);



export default AuthenticateUser;









