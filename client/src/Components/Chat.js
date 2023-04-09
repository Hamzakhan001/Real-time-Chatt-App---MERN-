import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {Box} from '@chakra-ui/react'
import { chatState } from '../Context/ChatProvider';
import MyChats from './MyChats';
import Chatbox from './Chatbox';
import SideDrawer from './miscellaneous/SideDrawer';

function Chat() {
	const {user}=chatState();


  return (
	<div style={{width:"100%"}}>
		{/* {user && <SideDrawer/>} */}
		<SideDrawer/>
	<Box
	d="flex"
	justifyContent='space-between'
	w='100%'
	h='91.5vh'
	p='10px'
	>
		<MyChats/>
		<Chatbox/>
	{/* {user && <MyChats/>} */}
	{/* {user && <Chatbox/>} */}
	</Box>
	</div >

  )
}

export default Chat