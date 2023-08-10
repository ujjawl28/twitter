import Slide  from '../SlideComponenets/Slide';
// import Slide from "./component/SlideComponenet/Slide.jsx";
import Tweet from "../TweetComponent/Tweet";
import Search from "../SearchComponent/Search";
import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router';
import { Outlet } from 'react-router';


function Home() {
   return (<div id='main'>
  <Slide />
    <Outlet ></Outlet>
    <Search />
  </div>)
  }


export default Home;
