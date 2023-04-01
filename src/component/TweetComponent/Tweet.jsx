import React,{useState} from 'react'
import './Tweet.css';
import Alltweets from '../AllTweets/Alltweets';
import {InsertData} from '../../firebaseconfig';

function Tweet(){
    // const [arr,setArr] = useState([{itemMessage : "",
    //     itemUrl : "",}]);
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
    
      <hr />
      
    <form id='tweetForm' onSubmit={(event)=>{
      event.preventDefault();
      console.log(event.target)
      const data = new FormData(event.target);
      const z = data.get("tweet");
      const a = data.get('url');
      if(KeepLoggedIn == "yes"){
      InsertData(z,a,currentUser.username);
      }else{
        alert("Please Login In First");
      }
    }}>
         {getUserName()}
      <img className="profil" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
      <input type='text' name='tweet' onChange={mess} className="input1" placeholder="What's happening ?"  required/>
      <br />
      <label className="optional">Optional : </label>
      <input type='url' onChange={link} name='url'className="input1" placeholder='Enter image url' />
      <br />
      {/* <div className='btnContainer'> */}

      {/* { KeepLoggedIn == "yes"&& */}
      <button type="submit"  className="btn btn-primary btn1">Tweet</button> 
      {/* } */}
      {/* </div> */}
       
      </form>

      
      </div>
      {/* <Alltweets  /> */}
      {/* {console.log(arr)} */}

     { KeepLoggedIn == "yes"&&
      <Alltweets  />
  }
      </div>

  )
}
export default Tweet;