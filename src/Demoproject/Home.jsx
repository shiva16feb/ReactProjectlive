import React from 'react'
import { NavLink } from 'react-router-dom';
import Common from './Common';

const Home = () => {
  return (
    <>
     <Common imgsrc="image/hjpeg.jpeg" 
      name=" Grow your business with "
      visit="/service"  
      btname=" Our Service" />
    </>
  )
}

export default Home;
