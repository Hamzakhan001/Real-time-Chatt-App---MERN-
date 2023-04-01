import React,{useState} from 'react';
import {VStack,StackDivider,InputRightElement,Input,InputGroup,Box,FormControl, FormLabel,Button} from '@chakra-ui/react';

const Signup = () => {
	const[show,setShow]=useState(false)
	const[name,setName]=useState()
	const[pass,setPass]=useState()
	const[confirmpass,setConfirmPass]=useState()
	const[email,setEmail]=useState()
	const[picture,setPicture]=useState()

	const handleClick=()=>{
		setShow(!show)
	}

	const postDetails=(pics)=>{

	}
	
	const submitHandler=()=>{

	}

  return (
	<VStack
  	spacing='5px'
  	align='stretch'
	color='black'
	>
	<FormControl id="first-name" isRequired>
		<FormLabel>
			Name
		</FormLabel>
		<Input
			placeholder='Enter your name'
			onChange={(e)=>{setName(e.target.value)}}
			>
			</Input>
	</FormControl> 
	<FormControl id="email" isRequired>
		<FormLabel>
			Email
		</FormLabel>
		<Input
			placeholder='Enter your email'
			onChange={(e)=>{setEmail(e.target.value)}}
			>
			</Input>
	</FormControl> 
	<FormControl id="password" isRequired>
		<FormLabel>
			Password
		</FormLabel>
		<InputGroup>
		<Input
			type={show? "text":"password"}
			placeholder='Enter your password'
			onChange={(e)=>{setPass(e.target.value)}}
			/>
		<InputRightElement>
		<Button h="1.75rem" size="sm" onClick={handleClick}>
			{show? "Hide":"Show"}
		</Button>
		</InputRightElement>
		</InputGroup>
	</FormControl> 
	<FormControl id="password" isRequired>
		<FormLabel>
			Confirm Password
		</FormLabel>
		<InputGroup>
		<Input
			type={show? "text":"password"}
			placeholder='Enter your password'
			onChange={(e)=>{setConfirmPass(e.target.value)}}
			/>
		<InputRightElement>
		<Button h="1.75rem" size="sm" onClick={handleClick}>
			{show? "Hide":"Show"}
		</Button>
		</InputRightElement>
		</InputGroup>
	</FormControl> 
	<FormControl id="picture" isRequired>
		<FormLabel>
			Upload your picture
		</FormLabel>
		<InputGroup>
		<Input
			type="file"
			p={1.5}
			accept='image/*'
			onChange={(e)=>{postDetails(e.target.files[0])}}
			/>
		</InputGroup>
	</FormControl> 
	<Button
	colorScheme='blue'
	width="100%"
	style={{marginTop:15}}
	onClick={submitHandler}	
	>
	</Button>
</VStack>
  )
}

export default Signup