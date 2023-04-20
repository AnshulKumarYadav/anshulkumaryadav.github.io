import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { SiGmail, SiTwitter } from "react-icons/si";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  const toast = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  //   const form = useRef();

  let submitForm = (e) => {
    e.preventDefault();

    fetch(`https://api.emailjs.com/api/v1.0/email/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: "service_3fqa39v",
        template_id: "template_ce5qexv",
        user_id: "_DrOsoMqXO_KcO1Fq",
        template_params: {
          name: name,
          email: email,
          subject: subject,
          description: description,
        },
      }),
    })
      .then((res) => {
        if (res.status == 200) {
          handleToast("Message Sent Successfully", "success");
        }
      })
      .catch((err) => handleToast(err.message, "error"));
  };

  let contactStyle = {
    margin : 'auto',
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    borderRadius : '50%',
    width : 'fit-content',
    padding : '10px',
  };

  const handleToast = (title, status) => {
    toast({
      title: title,
      status: status,
      isClosable: true,
      duration: 2000,
      position: "top",
    });
  };

  return (
    <Box id="Contact" p={"10"}>
      <Heading mb={"5"}>Contact</Heading>
      <div className="ul1"></div>
      <div className="ul2"></div>
      <Flex flexWrap="wrap" m="auto" w="80%" justifyContent={"space-around"}>
        <Stack>
          <div style={contactStyle}>
            <a target="blank" href="mailto:rishabhyadav3602@gmail.com">
              <SiGmail color="#df484b" />
            </a>
          </div>
          <a textAlign="center" href="mailto:rishabhyadav3602@gmail.com">
            rishabhyadav3602@gmail.com
          </a>
        </Stack>
        <Stack>
          <div style={contactStyle}>
            <a target="blank" href="tel:+917060476249">
              <FaPhone color="green" />
            </a>
          </div>
          <a textAlign="center" href="tel:+917060476249">
            +917060476249
          </a>
        </Stack>
        <Stack>
          <div style={contactStyle}>
            <a
              target="blank"
              href="https://www.linkedin.com/in/anshul-kumar-yadav/"
            >
              <FaLinkedinIn color="#0A66C2" />
            </a>
          </div>
          <a
            target="blank"
            href="https://www.linkedin.com/in/anshul-kumar-yadav/"
          >
            anshul-kumar-yadav
          </a>
        </Stack>
        <Stack>
          <div style={contactStyle}>
            <a target="blank" href="https://github.com/AnshulKumarYadav">
              <FaGithub color="#242425" />
            </a>
          </div>
          <a target="blank" href="https://github.com/AnshulKumarYadav">
            AnshulKumarYadav
          </a>
        </Stack>
        <Stack>
          <div style={contactStyle}>
            <a target="blank" href="https://twitter.com/RISHABH48133056">
              <SiTwitter color="#1DA1F2" />
            </a>
          </div>
          <a target="blank" href="https://twitter.com/RISHABH48133056">
            RISHABH48133056
          </a>
        </Stack>
        <Stack>
          <div style={contactStyle}>
            <a target="blank" href="https://www.instagram.com/rishuyadav3602/">
              <FaInstagram color="radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)" />
            </a>
          </div>
          <a target="blank" href="https://www.instagram.com/rishuyadav3602/">
            rishuyadav3602
          </a>
        </Stack>
      </Flex>
      <form onSubmit={submitForm}>
        <Stack w={"80%"} margin={"auto"} mt={"10"} spacing={"4"}>
          <Flex flexWrap={["wrap", "wrap", "none", "none"]} gap={"10px"}>
            <Input
              placeholder="Enter Your Name"
              mr={"5"}
              onChange={(e) => setName(e.target.value)}
              isRequired
            />
            <Input
              type="email"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
              isRequired
            />
          </Flex>
          <Input
            placeholder="Enter Subject"
            onChange={(e) => setSubject(e.target.value)}
            isRequired
          />
          <Textarea
            placeholder="Enter Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <Flex justifyContent={"right"}>
            <Button
              w={"300px"}
              color={"white"}
              bg="#525CE5"
              _hover={{ bg: "#5964F3" }}
              type="submit"
            >
              Submit
            </Button>
          </Flex>
        </Stack>
      </form>
    </Box>
  );
};

export default Contact;
