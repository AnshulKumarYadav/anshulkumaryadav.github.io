import React from "react";
import '../Styles/Home.scss';
import Typewriter from 'typewriter-effect';
import Resume from "../Components/Resume";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiGmail, SiTwitter } from "react-icons/si";
import { Button } from "@chakra-ui/react";

const Home = () => {
  return (
    <div id="Home">
      <div id="textAbout">
            <p>Hello, My name is </p>
            <p className="nametxt">Anshul Kumar Yadav</p>
            <p>I am a </p>
            <div className="typeAnimation">
            <Typewriter options={{
                    autoStart : true,
                    loop : true ,
                    delay: 40,
                    strings:[
                        'Software Developer...',
                        'Web Developer...',
                        'Java Backend Developer...',
                    ],
                }}/>
            </div>
            <p>Passionate Software Developer with web development technologies. Skilled, collaborative and attentive developer with a drive to develop the most relevant products. Always looking forward to learning something new to strengthen skills learned.</p>
        </div>
      <div id="homeSocial">
        <div className="socialMedia">
          <div>
            <a target='blank' href="mailto:rishabhyadav3602@gmail.com">
              <SiGmail className="mediaIcons"/>
            </a>
          </div>
          <div>
            <a target='blank' href="https://www.linkedin.com/in/anshul-kumar-yadav/">
              <FaLinkedinIn className="mediaIcons"/>
            </a>
          </div>
          <div>
            <a target='blank' href="https://github.com/AnshulKumarYadav">
              <FaGithub className="mediaIcons"/>
            </a>
          </div>
          <div>
            <a target='blank' href="https://twitter.com/RISHABH48133056">
              <SiTwitter className="mediaIcons"/>
            </a>
          </div>
          <div>
            <a target='blank' href="https://www.instagram.com/rishuyadav3602/">
              <FaInstagram className="mediaIcons"/>
            </a>
          </div>
          <div>
            <a target='blank' href="https://www.facebook.com/people/Rishabh-Yadav/100020567491022/">
              <FaFacebookF className="mediaIcons"/>
            </a>
          </div>
        </div>
        <div>
          <Resume/>
          <div class="wrapper">
            <a href="#Contact"><span>Hire Me</span></a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
