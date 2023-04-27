import React from "react";
import ignou from "../assets/ignou.png";
import masailogo from "../assets/masailogo.png";
import mpslogo from "../assets/mps.jpeg";
import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
export default function Education() {
  let educationCard = [
    {
      image: ignou,
      degree: "Bachelor's Of Computer Applications",
      name: "Indira Ghandi National Open University",
      duration: "January 2023 - Present",
    },
    {
      image: masailogo,
      degree: "Web Development",
      name: "Masai School, Banglore,Karnataka",
      duration: "January 2022 - November 2022",
    },
    {
      image: "https://gphindalpur.in/wp-content/uploads/2021/09/1logo.png",
      degree: "Diploma in Electrical Engineering",
      name: "Government Polytechnic College,Hapur,U.P",
      duration: "August 2018 - October 2021",
    },
    {
      image: mpslogo,
      degree: "High School (10th)",
      name: "Marehra Public School,Marehra,Etah,U.P",
      duration: "2016-2018",
    },
  ];
  return (
    <Box id="Education" p={"10"}>
      <Heading mb={"5"}>Education</Heading>
      <div className="ul1"></div>
      <div className="ul2"></div>
      <Grid
      w={'80%'}
      m={'auto'}
        gridTemplateColumns={[
          "repeat(1,auto)",
          "repeat(1,auto)",
          "repeat(1,auto)",
          "repeat(2,auto)",
        ]}
        gridTemplateRows="repeat(auto,auto)"
        justifyContent={["center", "center", "center", "space-between"]}
        gap={["5", "6", "8", "10"]}
        mt={"10"}
        p={"5"}
      >
        {educationCard?.map((el, i) => (
          <Flex flexDirection={["column","column","row","row"]}
            borderRadius={"10"}
            textAlign={"left"}
            boxShadow={
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            }
            key={i}
          >
            <Flex justifyContent={'center'} alignItems={'center'} w={['100%',"100%","30%","30%"]} p={['0','0','5','5']} borderRight={['0px','0px','2px solid gray','2px solid gray']} >
              <Image h={'100px'} w={'100%'} src={el.image} />
            </Flex>
            <Box  p={["4", "4", "6", "8"]}>
              <Text fontWeight={"600"}>{el.degree}</Text>
              <Text>{el.name}</Text>
              <Text>{el.duration}</Text>
            </Box>
          </Flex>
        ))}
      </Grid>
    </Box>
  );
}
