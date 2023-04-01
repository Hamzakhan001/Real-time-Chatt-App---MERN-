import React,{useState} from 'react';
import {VStack,useToast,StackDivider,InputRightElement,Input,InputGroup,Box,FormControl, FormLabel,Button} from '@chakra-ui/react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'

const Signup = () => {
	const[show,setShow]=useState(false)
	const[name,setName]=useState()
	const[pass,setPass]=useState()
	const[confirmpass,setConfirmPass]=useState()
	const[email,setEmail]=useState()
	const[picture,setPicture]=useState();
	const [loading,setLoading]=useState(false);
	const toast=useToast();
	const history=useHistory()
 

	// https://api.cloudinary.com/v1_1/dwdoxchcm/image/upload
	const handleClick=()=>{
		setShow(!show)
	}

	const postDetails=async (picture)=>{
		setLoading(true);
		debugger
		if(picture == undefined){
			toast({
				title:"Please select an image",
				status:"warning",
				duration:5000,
				isClosable:true,
				position:"bottom"
			});
			return;
		}

		if(picture.type=="image/jpeg" || picture.type=="image/png"){
			const data=new FormData();
			data.append("file",picture);
			data.append("upload_preset","chatapplication");
			data.append("cloud_name","dwdoxchcm");
			let dt=await axios.post("https://api.cloudinary.com/v1_1/dwdoxchcm/image/upload",data)
			if(dt){
				console.log("dt",dt)
				setPicture(dt.data.url.toString());
				setLoading(false);
			}
		}
		else{
			toast({
				title:"Please select an image",
				status:"warning",
				duration:5000,
				isClosable:true,
				position:"bottom"
			});
		}

		try{
			const config={
				headers:{
					'Content-type':"application/json"
				}
			};
			const {data}=await axios.post("/api/user",{name,email,pass,picture},config
			);
			toast({
				title:"Registeration successful",
				status:"success",
				duration:5000,
				isClosable:true,
				position:"bottom"
			});
			localStorage.setItem("userInfo",JSON.stringify(data));
			setLoading(false);
			history.push('/chats')
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

		}

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
	isLoading={loading}
	>
		Signup
	</Button>
</VStack>
  )
}

export default Signup