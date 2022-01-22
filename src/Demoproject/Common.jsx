import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
  return (
    <>
    <section id='header' className='d-flex align-items-center  '>
    <div className='container-fluid nav_bg'>
    <div className='row'>
          <div className='col-10 mx-auto'>
             <div className='row'>
                <div className='col-lg-6 col-md-6 order-2 order-lg-1 d-flex align-items-center flex-column justify-content-center   '>
                 <h1>{props.name} <strong className='text-primary'>Shivanand Verma</strong></h1>
                 <h3 className=' mt-2'>Hi, this is my React project </h3>
                <NavLink to={props.visit} className="btn btn-outline-primary ">{props.btname}</NavLink>
                      
                </div>
                <div className='col-lg-6 col-md-6 order-1 order-lg-2 '>
                     <img src={props.imgsrc} alt="homepic"  className=" img-fluid effect"/>
                 </div>
             </div>
          </div>
    </div>
  </div>
    </section>
    </>
  )
}

export default Common;
