import React from 'react';
import './Sdata';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
  return (
    <>
          <div className='col-md-4 col-xxl-4 col-xl-4 col-sm-4 col-10'>
           <div className="card" >
            <img src={props.imgsrc} className="card-img-top img-fluid pic"  alt="card_pic"/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <NavLink to="/about" className="btn btn-primary">Go About page</NavLink>
                    </div>
                </div>
             </div>
    </>
  )
}

export default Card;
