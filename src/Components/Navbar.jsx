import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Show,
  HStack,
  Text,
  useDisclosure,
  IconButton,
  Hide,
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
  HamburgerIcon,
  CloseIcon,
  AddIcon,
} from "@chakra-ui/icons";
import Name from "./Name";
import "./Navbar.css";

import { FaFileDownload, FaHome, FaList, FaProjectDiagram, FaUserAlt } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";
import {HiAcademicCap} from 'react-icons/hi'

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const downloadAndOpenResume = () => {
    viewResume();
    let downloadLink = document.createElement("a");
    downloadLink.href =
      "https://drive.google.com/uc?export=download&id=14k8jyuzmjHquZP5SRLwy2WsW0keFespf";
    downloadLink.download = "Anshul_Resume.pdf";
    downloadLink.click();
  };

  const viewResume = () => {
    window.open(
      "https://drive.google.com/file/d/14k8jyuzmjHquZP5SRLwy2WsW0keFespf/view?usp=sharing"
    );
  };
  return (
    <div id="navFix">
      <Box
        bg={useColorModeValue("gray.100", "blue.800")}
        px={9}
        width={["100%"]}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack w="20%">
            <Name mode={colorMode} />
          </HStack>

          <Flex h={16} alignItems={"center"} justifyContent={"space-around"}>
            <HStack spacing={8} alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={12}
                display={{ base: "none", md: "flex" }}
                id="myDIV"
              >
                <Button
                  variant="link"
                  colorScheme="gray.900"
                  leftIcon={<FaHome />}
                  className="btnRes"
                >
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>

                <Button
                  variant="link"
                  colorScheme="gray.900"
                  leftIcon={<FaUserAlt />}
                  className="btnRes"
                >
                  <a href="#About">
                    <b>About</b>
                  </a>
                </Button>
                <Button
                  variant="link"
                  colorScheme="gray.900"
                  leftIcon={<HiAcademicCap />}
                  className="btnRes"
                >
                  <a href="#Education">
                    {" "}
                    <b>Education</b>
                  </a>
                </Button>
                <Button
                  variant="link"
                  colorScheme="gray.900"
                  leftIcon={<FaList />}
                  className="btnRes"
                >
                  <a href="#Skills">
                    {" "}
                    <b>Skills</b>
                  </a>
                </Button>

                <Button
                  variant="link"
                  colorScheme="gray.900"
                  leftIcon={<FaProjectDiagram />}
                  className="btnRes"
                >
                  <a href="#Projects">
                    <b>Projects</b>
                  </a>
                </Button>

                <Button
                  variant="link"
                  colorScheme="gray.900"
                  leftIcon={<IoIosChatboxes />}
                  className="btnRes"
                >
                  <a href="#Contact">
                    <b>Contact</b>
                  </a>
                </Button>
              </HStack>
            </HStack>
          </Flex>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={2} display={['none','none','none','block']}>
              <Button
                color={"white"}
                bg="#525CE5"
                _hover={{ bg: "#5964F3" }}
                leftIcon={<FaFileDownload />}
                onClick={downloadAndOpenResume}
              >
                Resume
              </Button>
            </Stack>
          </Flex>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          {isOpen ? (
            <Box display={{ md: "none" }} bg={'white'} margin={'auto'} >
              <Stack as={"nav"} spacing={4} width={'100%'}>
                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#About">
                    <b>About</b>
                  </a>
                </Button>
                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#Education">
                    {" "}
                    <b>Education</b>
                  </a>
                </Button>
                <Button
                // added skills
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#Skills">
                    {" "}
                    <b>Skills</b>
                  </a>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#Projects">
                    <b>Projects</b>
                  </a>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#Contact">
                    <b>Contact</b>
                  </a>
                </Button>
              </Stack>
            </Box>
          ) : null}
        </Flex>
      </Box>
    </div>
  );
}
