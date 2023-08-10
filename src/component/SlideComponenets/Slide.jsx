import React,{useState} from "react";
import { Link } from "react-router-dom";
import {SignOut} from "./signOutUtility";
import { useNavigate } from "react-router-dom";
import {GrClose} from 'react-icons/gr';
import {RxHamburgerMenu} from 'react-icons/rx';



import './Slide.css'

function Slide(){
  const [click,setClick] = useState(false);
  const navigate = useNavigate();
  return(
    <>
    <RxHamburgerMenu className={click ? 'openHumbergur' : 'Hamburger'} onClick={()=>{
      setClick(true);
     }}/>

    <div className="slide">

    <GrClose className="closeIcons" onClick={()=>{
      setClick(false);
    }} />
     
      <span className="twitterIcon"><i className="fa-brands fa-twitter icon" ></i></span>

    <button type="submit" className="btn btn-outline-primary btn-lg add" onClick={()=>{navigate('/home')}}> 
    <i className="fa-solid fa-house font"></i> <span className="signOut">Home</span></button>
    <br />
    <button type="submit" className="btn btn-outline-primary btn-lg add" onClick={()=>{navigate('/home/explore')}}>
       <i className="fa-sharp fa-solid fa-magnifying-glass font"></i><span className="signOut">Explore</span></button>
    <br />
       <button type="submit" className="btn btn-outline-primary btn-lg add" onClick={()=>{navigate('/home/notification')}}>
       <i className="fa-regular fa-bell font"></i>  <span className="signOut" >Notification</span>
         </button>
         <br />
         <button type="submit"className="btn btn-outline-primary btn-lg add" onClick={()=>{navigate('/home/messages')}} >
         <i className="fa-regular fa-message font"></i>   <span className="signOut">Message</span>
           </button>
           <br />
           <button type="submit" className="btn btn-outline-primary btn-lg add" onClick={()=>{navigate('/home/bookmarks')}}>
           <i className="fa-regular fa-bookmark font"></i>  <span className="signOut">BookMarks</span>
           </button>
           <br />
           <button type="submit" className="btn btn-outline-primary btn-lg add" onClick={()=>{navigate('/home/lists')}} >
           <i className="fa-solid fa-list font"></i>   <span className="signOut">Lists</span>
           </button>
           <br />
           <button type="submit" className="btn btn-outline-primary btn-lg add" onClick={()=>{navigate('/home/profile')}}>
           <i className="fa-regular fa-user font"></i>   <span className="signOut">Profile</span>
           </button>
           {/* <br /> */}
           {/* <button type="submit" className="btn btn-outline-primary btn-lg add" onClick={()=>{navigate('/home/more')}}>
           ...       <span className="signOut">More</span>
           </button> */}
           <br />
           <button className="btn btn-primary btn-lg add " type="submit">
           Tweet
           </button>
           <br />
           <button type="submit"  onClick={SignOut}
           className="btn btn-outline-primary btn-lg add">
           <i className="fa-solid fa-power-off font"></i> <span className="signOut">Sign Out</span>
           </button>
      </div>
      </>
  )
}

export default Slide;