import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { FaCircle, FaUser } from "react-icons/fa";
import masailearn from "../assets/masailearn.png";
import { BsBoxArrowUpRight } from "react-icons/bs";
export default function Work() {
  let products = [
    {
      image:
        "https://3684774000-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6RefrrOaX6OJy8uzduX9%2Fuploads%2FK6ZdMhXDGh3XKBTLPWcn%2Fimage.png?alt=media&token=1b4b0b57-d481-48fc-8e3e-256b1434500e",
      title: "AIMEE School Management System",
      type: "Full Stack",
      description:
        "A school mangement platform where we are managing the various branches of AIMEE International School. Here the access of all the branches having to Administrator of AIMEE International School.",
      users: [
        "Administrator",
        "Director",
        "Principal",
        "Admin Staff",
        "Teacher",
      ],
      liveLink: "http://52.65.35.157/",
      techStacks: [
        "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
        "https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white",
        "https://img.shields.io/badge/Chakra--UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white",
        "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
        "https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white",
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
      note: [
        "This product is private so accessible only with credentials",
        "Student User Access Is Not Provided Because of some restriction by AIMEE",
      ],
    },
    {
      image: masailearn,
      title: "MasaiLearn - A Learning System",
      type: "Full Stack App",
      description:
        "Masai Learn is your one stop solution for enhancing your tech knowledge and upskilling to stand out in the IT industry. Be it Python or Java, MasaiLearn has got something for everyone. The project uses Java Springboot to implement the microservice serving the frontend built in React.js.",
      features: [
        "Signup/login with email-otp, mobile-otp, email-password and google",
        "Tutorials on various topics",
        "Video lessons, bookmarking, likes",
        "Search with topics and sub-topics",
        "Easy to read and accessible",
      ],
      liveLink: "http://13.233.50.68",
      techStacks: [
        "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
        "https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white",
        "https://img.shields.io/badge/Chakra--UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white",
        "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
        "https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white",
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
  ];
  return (
    <Box mb={"5"}>
      <Heading mb={"5"}>Industry Product</Heading>
      <div className="ul1"></div>
      <div className="ul2"></div>
      <Box>
        {products?.map((el, i) => (
          <Flex
            // gap={"6"}
            p={"6"}
            key={i}
            flexDirection={["column", "column", "column", "row"]}
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            // alignItems={"center"}
            mb={"40px"}
            borderRadius={"10"}
          >
            <Box w={["100%", "100%", "100%", "40%"]}>
              <Image
                h={["auto", "auto", "300px", "300px"]}
                w={["100%", "100%", "100%", "90%"]}
                src={el.image}
              />

              <Flex mt={"2"} justifyContent={"center"}>
                <a margin="auto" href={el.liveLink} target="blank">
                  <Button
                    w={["auto", "auto", "100px", "200px"]}
                    color={"white"}
                    bg="#525CE5"
                    _hover={{ bg: "#5964F3" }}
                    rightIcon={<BsBoxArrowUpRight />}
                  >
                    Go Live
                  </Button>
                </a>
              </Flex>
            </Box>
            <Box w={["100%", "100%", "100%", "60%"]}>
              <Heading fontSize={"30"} fontWeight={"700"}>
                {el.title}
              </Heading>
              <Text>{el.description}</Text>

              {el.title === "AIMEE School Management System" ? (
                <Text fontWeight={"700"}>
                  These following roles has different dashboards with their
                  Authorities:
                </Text>
              ) : (
                <Text fontWeight={"700"}>Features :</Text>
              )}

              {el.users ? (
                <List>
                 { el?.users?.map((u) => (
                  <ListItem>
                    <ListIcon as={FaUser} color="green.500" />
                    {u}
                  </ListItem>
                  ))}
                </List>
              ) : (
                <UnorderedList>
                  {el?.features?.map((el) => (<ListItem>{el}</ListItem>))}
                </UnorderedList>
              )}
              {el.note ? <Text fontWeight={"600"}>Note:</Text> : null}
              <UnorderedList>
                {el?.note?.map((notes) => (
                  <ListItem>{notes}</ListItem>
                ))}
              </UnorderedList>
              <Flex mt={"2"} flexWrap={"wrap"} gap={"2"}>
                {el?.techStacks?.map((st) => (
                  <Image src={st} />
                ))}
              </Flex>
            </Box>
          </Flex>
        ))}
      </Box>
    </Box>
  );
}
