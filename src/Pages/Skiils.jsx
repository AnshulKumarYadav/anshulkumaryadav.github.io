import React from "react";

import dsa from "../assets/dsa.png";
import html from "../assets/html.png";
import css from "../assets/css.jpeg";
import js from "../assets/js.jpeg";
import react from "../assets/react.png";
import chakra from "../assets/chakra.jpeg";
import sass from "../assets/sass.png";
import boot from "../assets/bootstrap.png";
import java from "../assets/java.png";
import maven from "../assets/maven.png";
import hibernate from "../assets/hibernate.png";
import spring from "../assets/spring.png";
import mysql from "../assets/mysql.png";
import postman from "../assets/postman.png";
import aws from "../assets/aws.png";
import vercel from "../assets/vercel.png";
import heroku from "../assets/heroku.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import { Box, Grid, Heading, Image, Text } from "@chakra-ui/react";

let skillsCards = [
  {
    image: dsa,
    name: "DSA",
    type : 'Language'
  },
  {
    image: "https://skillicons.dev/icons?i=java&theme=light",
    name: "Java",
    type : 'Language'
  },
  {
    image: "https://skillicons.dev/icons?i=cpp&theme=light",
    name: "C++",
    type : 'Language'
  },
  {
    image: "https://skillicons.dev/icons?i=js&theme=light",
    name: "JavaScript",
    type : 'Language'
  },
  {
    image: "https://skillicons.dev/icons?i=html&theme=light",
    name: "HTML",
    type : 'Frontend'
  },
  {
    image: "https://skillicons.dev/icons?i=react&theme=light",
    name: "React",
    type : "Frontend"
  },
  {
    image: chakra,
    name: "Chakra-UI",
    type : "Frontend"
  },
  {
    image: "https://skillicons.dev/icons?i=css&theme=light",
    name: "CSS",
    type : 'Frontend'
  },
  {
    image: "https://skillicons.dev/icons?i=bootstrap&theme=light",
    name: "BootStrap",
    type : "Frontend"
  },
  {
    image: "https://skillicons.dev/icons?i=spring&theme=light",
    name: "Spring Boot",
    type : "Backend"
  },
  {
    image: "https://skillicons.dev/icons?i=hibernate&theme=light",
    name: "Hibernate",
    type : "Backend"
  },
  {
    image: "https://skillicons.dev/icons?i=maven&theme=light",
    name: "Maven",
    type : "Backend"
  },
  {
    image: "https://skillicons.dev/icons?i=mysql&theme=light",
    name: "MySql",
    type : "All"
  },
  {
    image: "https://skillicons.dev/icons?i=aws&theme=light",
    name: "AWS",
    type : "All"
  },
];

const Skills = () => {
  return (
    <Box id="Skills" p={'10'}>
      <Heading mb={"5"}>Skills</Heading>
      <div className="ul1"></div>
      <div className="ul2"></div>
      <Grid
        gridTemplateColumns={[
          "repeat(2,auto)",
          "repeat(3,auto)",
          "repeat(4,auto)",
          "repeat(5,auto)",
        ]}
        gridTemplateRows="repeat(auto,auto)"
        justifyContent={["center", "center", "space-between", "space-between"]}
        gap={["5","6","8","10"]}
        mt={"10"}
        p={"5"}
      >
        {skillsCards?.map((el, i) => (
          <Box
          p={['6','6','8','10']}
          borderRadius={'10'}
          fontWeight={'600'}
          textAlign={'center'}
            boxShadow={
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            }
            key={i}
          >
            <Image width={"100px"} src={el.image} />
            <Text>{el.name}</Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
