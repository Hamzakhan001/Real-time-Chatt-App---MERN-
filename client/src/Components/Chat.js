import React,{useEffect,useState} from 'react';
import axios from 'axios';

function Chat() {
	const [chats,setChats]=useState([])
	useEffect(()=>{
		fetchChats();
	})

	const fetchChats=async ()=>{
		const data=axios.get("/api/chat");
		console.log("data")
	}

  return (
	<div>Chat</div>
  )
}

export default Chat