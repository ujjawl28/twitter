import React from 'react';
import './Search.css';
// import TwitterTweetEmbed from 'react-twitter-embed';
import { TwitterTweetEmbed } from 'react-twitter-embed';

function Search(){
  return(
    <div id='Searchmain'>
      <input type='text' className="search" placeholder='Search Tweet' />
      
      <div id="SearchLikes" >
       <h2>What's happening</h2>
       <TwitterTweetEmbed  tweetId={'1605957811162054656'} />
      <TwitterTweetEmbed  tweetId={'1639184709115625472'} />
      </div>

      </div>
        
  )
}
export default Search;