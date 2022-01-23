import React from 'react';
import Common from './Common';
import Pic from '../image/hjpeg.jpeg';

const Home = () => {
  return (
    <>
     <Common imgsrc={Pic} 
      name=" Grow your business with "
      visit="/service"  
      btname=" Our Service" />
    </>
  )
}

export default Home;
