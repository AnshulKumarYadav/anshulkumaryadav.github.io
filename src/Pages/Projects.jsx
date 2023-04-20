import React from "react";
import {
  FaBookReader,
  FaEye,
  FaFacebook,
  FaGithub,
  FaGithubAlt,
  FaLinkedin,
  FaUserAlt,
} from "react-icons/fa";
import shoppingApp from "../assets/shopping.jpg";
import redbus from "../assets/redbus.jpg";
import wheather from "../assets/wheather.png";
import foodyShop from "../assets/foodyShop.png";
// import masailearn from '../assets/masailearn.png'
import {
  Box,
  Flex,
  Grid,
  Heading,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import Work from "./Work";

let projects = [
  {
    image: redbus,
    name: " Redbus - Bus Ticketing App ",
    type: "Backend App",
    description:
      "Redbus is a bus ticket booking app where we book a ticket with a particular sourct station to destination station. ",
    liveLink: "",
    repoLink: "http://github.com/AnshulKumarYadav/redbus",
    techStacks: [
      "https://img.shields.io/badge/Java-005C84?style=for-the-badge&logo=openjdk&logoColor=white",
      "https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot",
      "https://img.shields.io/badge/Maven-C7F3F1?style=for-the-badge&logo=apachemaven&logoColor=red",
      "https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white",
      "https://img.shields.io/badge/Apache-D22128?style=for-the-badge&logo=Apache&logoColor=white",
      "https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=Spring-Security&logoColor=white",
      "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white",
      "https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white",
      "https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white",
      "https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white",
    ],
  },
  {
    image: shoppingApp,
    name: " Online Shopping App ",
    type: "Backend App",
    description:
      "Redbus is a bus ticket booking app where we book a ticket with a particular sourct station to destination station.",
    liveLink: "",
    repoLink: "http://github.com/AnshulKumarYadav/redbus",
    techStacks: [
      "https://img.shields.io/badge/Java-005C84?style=for-the-badge&logo=openjdk&logoColor=white",
      "https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot",
      "https://img.shields.io/badge/Maven-C7F3F1?style=for-the-badge&logo=apachemaven&logoColor=red",
      "https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white",
      "https://img.shields.io/badge/Apache-D22128?style=for-the-badge&logo=Apache&logoColor=white",
      "https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=Spring-Security&logoColor=white",
      "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white",
      "https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white",
      "https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white",
      "https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white",
    ],
  },
  {
    image: "https://miro.medium.com/max/1050/1*jdopOSsDRiGDWu9M3GviCQ.png",
    name: "BobbiBrown Website Clone ",
    type: "Frontend App",
    description:
      "BobbiBrown providing branded cosmetics products online, makeup kit online. In this project, I was leading my team and majorly worked on Home page, Product page, Signin functionality, Cart page, Wishlist and Payment page.",
    liveLink: "https://anshulkumaryadav.github.io/BobbiBrown",
    repoLink: "http://github.com/AnshulKumarYadav/BobbiBrown",
    techStacks: [
      "https://img.shields.io/badge/HTML-EC4C15?style=for-the-badge&logo=html5&logoColor=white",
      "https://img.shields.io/badge/CSS-47EDFA?style=for-the-badge&logo=css3&logoColor=white",
      "https://img.shields.io/badge/JAVASCRIPT-E3E879?style=for-the-badge&logo=javascript&logoColor=white",
    ],
  }
];

const Projects = () => {
  return (
    <Box id="Projects" p={"10"}>
      <Work />
      <Heading mb={"5"}>Projects</Heading>
      <div className="ul1"></div>
      <div className="ul2"></div>
      <Grid
        gridTemplateColumns={[
          "repeat(1,auto)",
          "repeat(1,auto)",
          "repeat(2,auto)",
          "repeat(3,auto)",
        ]}
        gridTemplateRows="repeat(auto,auto)"
        justifyContent={["center", "center", "space-between", "space-between"]}
        gap={"10"}
        mt={"10"}
        p={"5"}
      >
        {projects?.map((el, i) => (
          <Box
            borderRadius={"10"}
            boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
            p={"5"}
            key={i}
            border={`1px solid --skin-color`}
          >
            <Box key={i}>
              <Image h={"40%"} w={"100%"} src={el.image} />
              <Box mt={"2"}>
                <Heading fontSize={"22"}>{el.name}</Heading>
                <Text fontWeight={"700"}>{el.type}</Text>
                <Text>{el.description}</Text>
                <Flex mt={"2"} justifyContent={"space-around"}>
                  {
                    <a href={el.liveLink} target="blank">
                      <IconButton icon={<FaEye />} />
                    </a>
                  }

                  <a href={el.repoLink} target="blank">
                    <IconButton icon={<FaGithub />} />
                  </a>
                </Flex>
                <Flex
                  mt={"3"}
                  justifyContent={"space-around"}
                  flexWrap={"wrap"}
                  gap={"1"}
                >
                  {el?.techStacks?.map((stack, stacki) => (
                    <Image key={stacki} src={stack} />
                  ))}
                </Flex>
              </Box>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
