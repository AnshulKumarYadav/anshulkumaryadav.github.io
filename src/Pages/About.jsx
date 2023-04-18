import React from "react";
import pic from '../assets/profilePic2.png';
import { Box, Flex, Heading, Image } from "@chakra-ui/react";

const About = () => {
  return (
    <Box id="About" p={'10'}>
      <Heading mb={"5"}>About me</Heading>
      <div className="ul1"></div>
      <div className="ul2"></div>
        <Flex mt={'5'} justifyContent={'space-around'} flexDirection={['column','column','row','row']}>
          <Box fontSize={'20'} >
            <h3>👤 Summary</h3>
            <p>➡️ I am a passionate software developer with web development technologies.</p>

            <p>➡️Currently pursing Bachelor's Of Computer Applications from Indira Ghandi National Open University.</p>

            <p>➡️ I had pursued web development course from Masai School and ready to work.</p>

            <p>➡️ Have an experience of 1000+ hours of coding and 500+ hours of data sturctures and algorithms.</p> 

            <p>➡️ 5 ⭐⭐⭐⭐⭐ problem solver on HackerRank.</p> 

            <p>➡️ Love to writing 👨‍💻 code and solve problem.</p> 

            <p>➡️ When I'm not at the keyboard, I like playing cricket and hanging out with friends.</p>
          </Box>
          <Box >
            <Image border={'10px inset gold'} bgGradient={'linear-gradient(90deg, rgba(125,215,213,1) 0%, rgba(176,232,231,1) 6%, rgba(249,214,214,1) 27%, rgba(217,254,255,1) 82%)'}  h={'250px'} src={pic} />
          </Box>
        </Flex>
    </Box>
  );
};

export default About;
