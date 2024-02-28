import React from 'react';
import image1 from '../1.png';
import image2 from '../2.png';
import logo from '../logo.png';
import './criPumpsAward.css';


const CriPumpsAward = () => {
  return (
   <>
    <div className="awardContainer">
          <div className='award'>
         <img src={image1} alt="award" className='award-image' />
           </div>
          <div className="award-content">
      <img src={logo} className="logo" alt="logo"/>
      <h3 className="award-title">C.R.I. Pumps Wins National Energy Conservation 2018 for the 4th time.</h3>
      <div>
        <ul>
            <li>
              <p>
                 C.R.I.'s energy efficient products are well recognized by various Government Institutions as trustworthy products for various projects across the globe to save energy. 
             </p>
            </li>

            <li>
              <p>
                 C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 star rated energy efficient smart pumps with IoT enabled control panel.
              </p>
            </li>
        </ul>
        <img className="award-presented" src={image2} alt="awardpresent"/>
        <p>
            C.R.I. Pumps Pvt. Ltd. (CRI) has won the National Energy Conservation Award 2018 for the 4th time. The award was presented by Smt. Sumitra Mahajan, Speaker of Lok Sabha, and Shri. Raj Kumar Singh, Honorable Minister of State, to Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group.
        </p>
        </div>
          </div>
    </div>  
    </>   
  );
};

export default CriPumpsAward;