// import logo from './logo.svg';
import './App.css';
import Slide  from './component/SlideComponenets/Slide';
// import Slide from "./component/SlideComponenet/Slide.jsx";
import Tweet from "./component/TweetComponent/Tweet";
import Search from "./component/SearchComponent/Search";
import Home from "./component/Home/home";
import Explore from './component/Explore/explore';
import Notification from './component/Notification/notification';
import Profile from './component/Profile/profile';
import Messages from './component/Messages/messages'; 
import Lists from './component/Lists/lists';
import Bookmarks from './component/Bookmarks/bookmarks';
import Login  from './component/Login/login';
import SignIn from './component/SignUp/signup';

import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {
  
 const router = createBrowserRouter([
  {
    path:"/",
    element: <SignIn />
  },
  {
    path:"/home",
    element: <Home />,
    children :[
      {
       path : '/home',
       element : <Tweet />
      },
      {
        path : "/home/explore",
        element :< Explore />,
      },{
        path : "/home/notification",
        element : < Notification />
      },{
        path: "/home/messages",
        element : < Messages />,
      },{
        path : "/home/lists",
        element: <Lists />,
      },
      {
        path : "/home/profile",
        element : < Profile />,
      },{
        path : "/home/bookmarks",
        element : < Bookmarks />,
      },
    ]

  },
 {
    path : "/login",
    element : <Login />
  },
 ]);

 return (
  <RouterProvider router={router}></RouterProvider>
  )
}



export default App;
