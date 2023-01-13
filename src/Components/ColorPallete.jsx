import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    IconButton,
    Button,
  } from '@chakra-ui/react'
  import { FaPalette } from "react-icons/fa";

export default function ColorPallete() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
      <IconButton onClick={onOpen} icon={<FaPalette/>}  _hover={{color:"pink.400"}} />
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            
            </ModalBody>

            <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
        </ModalContent>
        </Modal>
    </div>
  )
}
