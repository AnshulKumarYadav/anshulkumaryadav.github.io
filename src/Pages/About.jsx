import React from "react";
import '../Styles/About.scss';
import pic from '../assets/profilePic2.png';
import Resume from "../Components/Resume";
import MasaiCertificate from '../assets/MasaiCetificate.pdf';
import DiplomaCertificate from '../assets/DiplomahCertificate.pdf';

import Certificate from "../Components/Certificate";
import { SiGmail } from "react-icons/si";
import { FaPhone, FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
const About = () => {
  return (
    <div id="about-education">
      <div style={{padding:"1rem 0rem 0rem 2.5rem"}} >
         <h2 className="heading">About me</h2>
         <div className='ul1'></div>
         <div className='ul2'></div>
      </div>
        <div id="About">
          <div className="about-content">
            <h3>👤 Summary</h3>
            <p>➡️ I am a passionate software developer with web development technologies.</p>

            <p>➡️ Currently pursuing web development course from Masai School and ready to work.</p>

            <p>➡️ Have an experience of 1000+ hours of coding and 300+ hours of data sturctures and algorithms.</p> 

            <p>➡️ 5 ⭐⭐⭐⭐⭐ problem solver on HackerRank.</p> 

            <p>➡️ Love to writing 👨‍💻 code and solve problem.</p> 

            <p>➡️ When I'm not at the keyboard, I like playing cricket and hanging out with friends.</p>
            <div style={{width:"90%",height:"1px",border:"2px dotted black",margin:"1rem"}}></div>
            <div className="about-Details">
              <div>
                <a target='blank' href="mailto:rishabhyadav3602@gmail.com"><SiGmail color="#df484" /> rishabhyadav3602@gmail.com</a>
                <a target='blank' href="tel:7060476249"><FaPhoneAlt color="green" /> 7060476249</a>
                <p><MdLocationOn color="#0A66C2"/>Aligarh,UttarPradesh</p>
              </div>
              <div style={{marginLeft:"2rem",marginTop:"2rem"}}>
                <Resume/>
              </div>
            </div>
          </div>
          <div className="img">
            <img src={pic} alt="pic" />
          </div>
        </div>
        <div id="education">
          <div id="heading">
            <h2 className="heading">Education</h2>
            <div className="ul1"></div>
            <div className="ul2"></div>
          </div>
          <div className="college">
            <div className="edu_cont">
                  <div className="ed-img">
                      <img src="https://www.masaischool.com/img/navbar/logo.svg" alt="masaiLogo" />
                  </div>
                  <div className="ed-name">
                      <h2>Web Development</h2>
                      <p>Masai School, Banglore,Karnataka</p>
                      <Certificate certificate={MasaiCertificate}/>
                  </div>
              </div>
              <div className="edu_cont">
                  <div className="ed-img">
                      <img src="https://gphindalpur.in/wp-content/uploads/2021/09/1logo.png" alt="masaiLogo" />
                  </div>
                  <div className="ed-name">
                      <h2>Diploma in Electrical Engineering</h2>
                      <p>Government Polytechnic College,Hapur,U.P</p>
                      <Certificate certificate={DiplomaCertificate}/>
                  </div>
              </div>
          </div>
        </div>
    </div>
  );
};

export default About;
