import React,{useState} from 'react'
import {VStack,StackDivider,InputRightElement,Input,InputGroup,Box,FormControl, FormLabel,Button} from '@chakra-ui/react';

const Login = () => {
	const[show,setShow]=useState(false)
	const[pass,setPass]=useState()
	const[email,setEmail]=useState()

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
	<Button
	colorScheme='blue'
	width="100%"
	style={{marginTop:15}}
	onClick={submitHandler}	
	>
		Login
	</Button>
	<Button
	variant="solid"
	colorScheme="red"
	width="100%"
	style={{marginTop:15}}
	onClick={()=>{
		setEmail("guest@hamza.com");
		setPass("Test*1234")
	}}	
	>
		Get guest credentials
	</Button>
</VStack>
  )
}

export default Login