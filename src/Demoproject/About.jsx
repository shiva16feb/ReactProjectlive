import React from 'react';
import Common from './Common';
import Pic from '../image/apng.png';


const About = () => {
  return (
    <>
      <Common imgsrc={Pic} 
      name=" Welcome my About page"
      visit="/contact"  
      btname=" Contact now" />
    </>
  )
}

export default About;