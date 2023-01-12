import React from 'react'

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

import {GrCertificate} from 'react-icons/gr';

export default function Certificate({certificate}) {
  
  const { isOpen, onOpen, onClose } = useDisclosure();

  const viewResume = () => {
    window.open(certificate);
  };

  const downloadResume = () => {
    let alink = document.createElement('a');
    alink.href = certificate;
    alink.download = 'Anshul_Certificate.pdf';
    alink.click();
  };
  return (
    <>
       <Button colorScheme='green' variant='ghost' marginTop={1} leftIcon={<GrCertificate/>} onClick={onOpen}>Certificate</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Certificate</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <iframe src={certificate} frameborder="1" />
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