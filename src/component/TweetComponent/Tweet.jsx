import React,{useState} from 'react'
import './Tweet.css';
import Alltweets from '../AllTweets/Alltweets';
import {InsertData} from '../../firebaseconfig';
import { Slide, ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Tweet({props}){
     const [message,setMessage] = useState("");
     const [url,setUrl] = useState("");

    function mess(e){
      
        setMessage(e.target.value);
    }

    function link(e){
        setUrl(e.target.value);
    }

    var currentUser = null;
    var KeepLoggedIn= "";

    function getUserName(){
       KeepLoggedIn = localStorage.getItem("keepLoggedIn");
    
      currentUser = JSON.parse(localStorage.getItem('user'));
    }

  return(
    <div className='middle'>
   
   

    <div id='tweet'>
      <h2 id='tweetPage'>Home</h2>
    
      <hr style={{border:'1px solid rgb(206, 198, 198)'}}/>
      
    <form id='tweetForm' onSubmit={(event)=>{
      event.preventDefault();
      console.log(event.target)
      const data = new FormData(event.target);
      const z = data.get("tweet");
      const a = data.get('url');
      if(KeepLoggedIn == "yes"){
      InsertData(z,a,currentUser.username);
      }else{
        toast.error('Please Login In First', {
          position: "top-right",
          autoClose: 13,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    }}>
         {getUserName()}
      <img className="profil" src={`https://i.pravatar.cc/150?u=${currentUser.username}`} />
      <input type='text' name='tweet' onChange={mess} className="input1" placeholder="What's happening ?"  required/>
      <br />
      <label className="optional">Optional : </label>
      <input type='url' onChange={link} name='url'className="input1" placeholder='Enter image url' />
      <br />
      <button type="submit"  className="btn btn-primary btn1">Tweet</button> 
       </form>

      <ToastContainer />
      </div>
      { KeepLoggedIn == "yes"&&
      <Alltweets  />
  }
      </div>

  )
}
export default Tweet;