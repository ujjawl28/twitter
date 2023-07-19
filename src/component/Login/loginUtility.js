import {getDatabase,ref,set,child,remove,update,onValue,get} from 'firebase/database';
import {db} from '../../firebaseconfig';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
        return ;
    }
 
    if(passwordValue == ""){
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
            toast.error('Please Enter The Correct password', {
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

      }
      else{
       toast.error('user does not exist', {
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
      }); 
}




export default AuthenticateUser;









