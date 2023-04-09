import React,{useState} from 'react'
import {VStack,StackDivider,useToast,InputRightElement,Input,InputGroup,Box,FormControl, FormLabel,Button} from '@chakra-ui/react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'

const Login = () => {
	const[show,setShow]=useState(false)
	const[pass,setPass]=useState()
	const[email,setEmail]=useState();
	const [loading,setLoading]=useState(false);
	const toast=useToast();
	const history=useHistory()

	const handleClick=()=>{
		setShow(!show)
	}

	const postDetails=(pics)=>{

	}
	
	const submitHandler=async ()=>{
		setLoading(true);

		if(!email || !pass){
			toast({
				title:"Please fill all fields",
				status:"warnin g",
				duration:5000,
				isClosable:true,
				position:"bottom"
			});
			setLoading(false);
			return;
		}

		try{
			const config={
				headers:{
					'Content-type':"application/json"
				}
			};
			const {data}=await axios.post("/api/user/login",{email,pass},config
			);
			toast({
				title:"Login successful",
				status:"success",
				duration:5000,
				isClosable:true,
				position:"bottom"
			});
			localStorage.setItem("userInfo",JSON.stringify(data));
			setLoading(false);
			// history.push('/chats')
		}
		catch(err){
			toast({
				title:"Error occured",
				description:err.response.data.message,
				status:"error",
				duration:5000,
				isClosable:true,
				position:"bottom"
			});
			setLoading(false);
		}

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
			value={email}
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
			value={pass}
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
		isLoading={loading}
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