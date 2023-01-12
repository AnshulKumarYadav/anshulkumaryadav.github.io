import React from "react";
import '../Styles/About.scss';
import pic from '../assets/profilePic2.png';
import Resume from "../Components/Resume";
import MasaiCertificate from '../assets/MasaiCetificate.pdf';
import DiplomaCertificate from '../assets/DiplomahCertificate.pdf';

import Certificate from "../Components/Certificate";
const About = () => {
  return (
    <div id="about-education">
        <div id="About">
          <div className="img">
            <img src={pic} alt="pic" />
          </div>
          <div className="about-content">
            <h2 className="heading">About me</h2>
            <div className="ul1"></div>
            <div className="ul2"></div>
            <p>➡️ I am a passionate software developer with web development technologies.</p>

            <p>➡️ Currently pursuing web development course from Masai School and ready to work.</p>

            <p>➡️ Have an experience of 1000+ hours of coding and 300+ hours of data sturctures and algorithms.</p> 

            <p>➡️ 5 ⭐⭐⭐⭐⭐ problem solver on HackerRank.</p> 

            <p>➡️ Love to writing 👨‍💻 code and solve problem.</p> 

            <p style={{marginBottom:"2rem"}} >➡️ When I'm not at the keyboard, I like playing cricket and hanging out with friends.</p>
            <div className="about-Details">
              <Resume/>
            </div>
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
                      <p>Government Polytechnic College,Hapur,Uttar Pradesh</p>
                      <Certificate certificate={DiplomaCertificate}/>
                  </div>
              </div>
          </div>
        </div>
    </div>
  );
};

export default About;
