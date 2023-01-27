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
  import '../Styles/ColorPallete.scss';
import { SettingsIcon } from '@chakra-ui/icons';
export default function ColorPallete() {

  let setColors = () => {

  }

    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div>
      <IconButton id='themeColor' onClick={onOpen}  _hover={{color:"pink.400"}} icon={<SettingsIcon className='settingSpin'/>} />
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Colors</ModalHeader>
            <ModalCloseButton />
            <ModalBody className='modalBody'>
                <div className="colorDiv" onClick={setColors}></div>
                <div className="colorDiv"></div>
                <div className="colorDiv"></div>
                <div className="colorDiv"></div>
                <div className="colorDiv"></div>
                <div className="colorDiv"></div>
                <div className="colorDiv"></div>
                <div className="colorDiv"></div>
                <div className="colorDiv"></div>
                <div className="colorDiv"></div>
                <div className="colorDiv"></div>
                <div className="colorDiv"></div>
            </ModalBody>

            <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
            </Button>
            </ModalFooter>
        </ModalContent>
        </Modal>
    </div>
  )
}
