import React from 'react'
import Card from './Card';
import './Sdata';
import { Sdata } from './Sdata';

const Service = () => {
  return (
    <>
      <h1 className='text-center'> Our Service</h1>
      <div className='container-fluid mt-4'>
         <div className='row'>
             <div className='col-10 mx-auto'>
                 <div className='row g-2'>
                 {
                   Sdata.map((val, index) =>{
                   return <Card key={index} imgsrc={val.imgpic} title={val.tittle} />
                   })
                   }
                 </div>
             </div>
         </div>
      </div>
     
    </>
  )
}

export default Service;