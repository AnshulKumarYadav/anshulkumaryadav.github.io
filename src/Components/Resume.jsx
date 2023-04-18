import {Button,useDisclosure} from '@chakra-ui/react';
import { FaEye, FaFileDownload } from 'react-icons/fa';
import {IoIosDocument} from 'react-icons/io';
import Anshul_Kumar_Yadav from "../assets/Anshul_Kumar_Yadav.pdf";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
export default function Resume() {
  
  const { isOpen, onOpen, onClose } = useDisclosure();

  const viewResume = () => {
    window.open(Anshul_Kumar_Yadav);
  };

  const downloadResume = () => {
    let alink = document.createElement('a');
    alink.href = Anshul_Kumar_Yadav;
    alink.download = 'Anshul_Resume.pdf';
    alink.click();
    viewResume();
  };
  return (
    <>
       <Button className='resumeButton' colorScheme='blue' variant='solid' leftIcon={<IoIosDocument/>} onClick={onOpen}>Resume</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Resume</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <iframe src={Anshul_Kumar_Yadav} frameborder="1" />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme='blue' mr={3} 
            variant='outline'
            leftIcon={<FaEye/>}
            onClick={viewResume}
            >View</Button>
            <Button colorScheme='blue' 
            variant='outline'
            leftIcon={<FaFileDownload/>}
            onClick={downloadResume}
            >
              Download</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}