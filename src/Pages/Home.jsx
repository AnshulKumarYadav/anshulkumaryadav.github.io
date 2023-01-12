import React from "react";
import '../Styles/Home.scss';
import Typewriter from 'typewriter-effect';
import profilePic from '../assets/pic.png';
import profilePic2 from '../assets/profilePic.png';
import blob from '../assets/blob.svg';
import blob2 from '../assets/blob2.svg';
import Resume from "../Components/Resume";

const Home = () => {
  return (
    <div id="Home">
      <div id="textAbout">
            <p>Hello,</p>
            <div className="typeAnimation">
            <Typewriter options={{
                    autoStart : true,
                    loop : true ,
                    delay: 60,
                    strings:[
                        'My name is Anshul Kumar Yadav',
                    ],
                }}/>
            </div>
            <p>I am a </p>
            <div className="typeAnimation">
            <Typewriter options={{
                    autoStart : true,
                    loop : true ,
                    delay: 40,
                    strings:[
                        'Software Developer',
                        'Web Developer',
                        'Java Backend Developer',
                    ],
                }}/>
            </div>
            <p>Passionate Software Developer with web development technologies. Skilled, collaborative and attentive developer with a drive to develop the most relevant products. Always looking forward to learning something new to strengthen skills learned.</p>
            <Resume/>
        </div>
        <div id='imgBox'>
           {/* <video src={profileVideo} autoPlay /> */}
            <img className="blobs"  src={blob} alt="blob" />
            <img className="blobs"  src={blob2} alt="blob"/>
            <img className="profilePic" src={
               window.screen.width>740?profilePic:profilePic2} alt="picture" />
        </div>
    </div>
  );
};

export default Home;
