import React from "react";
import {FaBookReader, FaEye, FaFacebook, FaGithub, FaGithubAlt, FaLinkedin, FaUserAlt} from 'react-icons/fa';
import shoppingApp from '../assets/shopping.jpg';
import redbus from '../assets/redbus.jpg';
import wheather from '../assets/wheather.png';
import foodyShop from '../assets/foodyShop.png';
import { Box, Grid, Heading, Image, Text } from "@chakra-ui/react";

let projects = [
    {
        image : redbus,
        name : " Redbus - Bus Ticketing App ",
        type : "Backend App",
        description : " Redbus - Bus Ticketing App ",
        liveLink : "",
        repoLink : "http://github.com/AnshulKumarYadav/redbus",
        techStacks : [
            
        ],

    },
    {
        image : shoppingApp,
        name : " Online Shopping App ",
        type : "Backend App",
        description : " Redbus - Bus Ticketing App ",
        liveLink : "",
        repoLink : "http://github.com/AnshulKumarYadav/redbus",
        techStacks : [
            
        ],

    },
    {
        image : wheather,
        name : " Wheather App ",
        type : "Backend App",
        description : " Redbus - Bus Ticketing App ",
        liveLink : "",
        repoLink : "http://github.com/AnshulKumarYadav/redbus",
        techStacks : [
            
        ],

    },
    {
        image : foodyShop,
        name : " Food Reciepe App ",
        type : "Backend App",
        description : " Redbus - Bus Ticketing App ",
        liveLink : "",
        repoLink : "http://github.com/AnshulKumarYadav/redbus",
        techStacks : [
            
        ],

    },
    {
        image : redbus,
        name : "BobbiBrown Website Clone ",
        type : "Backend App",
        description : " Redbus - Bus Ticketing App ",
        liveLink : "",
        repoLink : "http://github.com/AnshulKumarYadav/redbus",
        techStacks : [
            
        ],

    },
    {
        image : redbus,
        name : " Redbus - Bus Ticketing App ",
        type : "Backend App",
        description : " Redbus - Bus Ticketing App ",
        liveLink : "",
        repoLink : "http://github.com/AnshulKumarYadav/redbus",
        techStacks : [
            
        ],

    },
    {
        image : redbus,
        name : " Redbus - Bus Ticketing App ",
        type : "Backend App",
        description : " Redbus - Bus Ticketing App ",
        liveLink : "",
        repoLink : "http://github.com/AnshulKumarYadav/redbus",
        techStacks : [
            
        ],

    }
]

const Projects = () => {
  return (
    <Box id="projects">
        <Grid gridTemplateColumns='repeat(2,1fr)' gridTemplateRows='repeat(auto,300px)'>
            {
                projects?.map((el)=>(
                    <Box>
                        <Image src={el.image} />
                        <Heading>{el.name}</Heading>
                        <Text>{el.description}</Text>
                    </Box>
                ))
            }
        </Grid>
    </Box>
  );
};

export default Projects;
