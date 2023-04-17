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

const Contact = () => {
  const toast = useToast();
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [subject,setSubject] = useState("");
  const [description,setDescription] = useState("");
//   const form = useRef();

  let submitForm = (e) => {
    e.preventDefault();

    fetch(`https://api.emailjs.com/api/v1.0/email/send`,{
        method : "POST",
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            service_id: 'service_3fqa39v',
            template_id: 'template_ce5qexv',
            user_id: '_DrOsoMqXO_KcO1Fq',
            template_params: {
                'name': name,
                'email': email,
                'subject' : subject,
                'description' : description,
            }
        })
    }).then((res)=> {
        if(res.status==200)
        {
            handleToast("Message Sent Successfully","success");
        }
    }).catch((err)=> handleToast(err.message,"error"))
  };

  const handleToast = (title,status) => {
    toast({
        title : title,
        status : status,
        isClosable : true,
        duration : 2000,
        position : 'top'

    })
  }

  return (
    <Box p={"5"} mb={"5"}>
      <Heading ml={"10px"}>Contact Me</Heading>
      <form onSubmit={submitForm}>
        <Stack w={"80%"} margin={"auto"} spacing={"4"}>
          <Flex>
            <Input placeholder="Enter Your Name" mr={"5"} onChange={(e)=> setName(e.target.value)} isRequired />
            <Input type="email" placeholder="Enter Your Email" onChange={(e)=> setEmail(e.target.value)} isRequired />
          </Flex>
          <Input placeholder="Enter Subject" onChange={(e)=> setSubject(e.target.value)} isRequired />
          <Textarea placeholder="Enter Description" onChange={(e)=> setDescription(e.target.value)} />
          <Flex justifyContent={'right'}>
            <Button w={'300px'} colorScheme="blue" type="submit">
              Submit
            </Button>
          </Flex>
        </Stack>
      </form>
    </Box>
  );
};

export default Contact;
