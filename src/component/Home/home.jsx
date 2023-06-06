import Slide  from '../SlideComponenets/Slide';
// import Slide from "./component/SlideComponenet/Slide.jsx";
import Tweet from "../TweetComponent/Tweet";
import Search from "../SearchComponent/Search";
import React from 'react';
import { Outlet } from 'react-router';


function Home() {
  return (<div id='main'>
  <Slide />
  
    {/* <Tweet /> */}
    <Outlet></Outlet>
    <Search />
  </div>)
  }


export default Home;
