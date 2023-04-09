import { ViewIcon } from "@chakra-ui/icons";
import { IconButton, useDisclosure,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,ModalFooter,Button,Image} from "@chakra-ui/react";
import React from "react";


function ProfileModal({user,children}) {
	const { isOpen, onOpen, onClose } = useDisclosure()
	
  return (
	<div>{
		children?
		<span onClick={onOpen}>{children}</span>:
		(<IconButton d={{base:"flex"}} icon={<ViewIcon/>} onClick={onOpen} ></IconButton>)}
		 <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
		  fontSize="40px"
		  fontFamily="Work sans"
		  d="flex"
		  justifyContent="center"
		  >
			{/* {user.name} */}
		  </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
			{/* <Image
			borderRadius="full"
			boxSize="150px"
			src={user.pic}
			alt={user.name}
			/> */}
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

export default ProfileModal