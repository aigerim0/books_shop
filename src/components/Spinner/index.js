import React from 'react';
import './style.css'
const Spinner = () => {
    return (
       <div className='d-flex justify-content-center my-5'>
           <div className="orbit-spinner">
               <div className="orbit"></div>
               <div className="orbit"></div>
               <div className="orbit"></div>
           </div>
       </div>
    );
};

export default Spinner;