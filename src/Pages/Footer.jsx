import React from 'react';
import '../Styles/Footer..scss';

export default function Footer() {
  return (
    <div id='Footer'>
         <h2>Anshul Kumar Yadav</h2>
         <div className="line"></div>
         <div className="nav">
           <a href="#Home">Home</a>
           <a href="#About">About</a>
           <a href="#Skills">Skills</a>
           <a href="#Projects">Projects</a>
           <a href="#Contact">Contact</a>
         </div>
         <div className="line"></div>
         <p>© 2023 copyright all right reserved</p>
    </div>
  )
}
