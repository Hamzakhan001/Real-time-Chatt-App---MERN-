import React,{useState} from 'react'
import { Box, Button, Tooltip,Text,Menu, MenuButton, MenuList, Avatar, MenuItem, MenuDivider, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody,Input,useDisclosure, useToast} from '@chakra-ui/react'
import {BellIcon,ChevronDownIcon} from '@chakra-ui/icons'
import { chatState } from '../../Context/ChatProvider'
import ProfileModal from './ProfileModal'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import ChatLoading from './ChatLoading'

function SideDrawer() {
	const [search,setSearch]=useState()
	const [searchResults,setSearchResults]=useState([])
	const [loading,setLoading]=useState(false)
	const [loadingChat,setLoadingChat]=useState()

	const {user }=chatState();
	const history=useHistory();
	const { isOpen, onOpen, onClose } = useDisclosure()


	const logoutHandler=()=>{
		localStorage.removeItem("userInfo");
		// history.push("/")
	}

	const toast=useToast();
	const handleSearch=async ()=>{
		if(!search){
			toast({
				title:"Please enter something in search",
				status:"warning",
				duration:5000,
				isClosable:true,
				position:'top-left',
			});
			return;
		}

		try{
			setLoading(true);
			const config={
				headers:{
					Authorization:`Bearer ${user.token}`
				}
			}
			const data=await axios.get(`/api/user?search=${search}`,config)
			setLoading(false)
			setSearchResults(data);

		}
		catch(err){

		}
	}

  return (
	<div>
		<Box
		d="flex"
		justifyContent="space-between"
		alignItems="center"
		bg="white"
		w="100%"
		p="5px 10px 5px 10px"
		borderWidth="5px"
		>
			<Tooltip 
			label="Search chat users"
			hasArrow
			placement='bottom-end'
			>
				<Button variant='ghost' onClick={onOpen}>
					<i className='fas fa-search'>
					</i>
					<Text d={{base:"none", md:'flex'}} px="4">
						Search Users
					</Text>
				</Button>
			</Tooltip>
			<Text fontSize="2xl" fontFamily="Work sans">
				Get Connected to your friends!
			</Text>
			<div>
				<Menu>
					<MenuButton p={1}>
						<BellIcon fontSize='2xl' m={1}/>
					</MenuButton>
					{/* <MenuList></MenuList> */}
				</Menu>
				<Menu>
					<MenuButton 
					as={Button}
					rightIcon={<ChevronDownIcon/>}
					>
						<Avatar size='sm' cursor='pointer'
						// name={user.name}
						/>
					</MenuButton>
					<MenuList>
						<ProfileModal user={user}>
						<MenuItem>My profile</MenuItem>
						</ProfileModal>
						<MenuDivider/>
						<MenuItem onClick={logoutHandler}>Logout</MenuItem>
					</MenuList>
				</Menu>
			</div>
		</Box>
		<Drawer placement='left' onClose={onClose} isOpen={isOpen}>
		<DrawerOverlay/>
			<DrawerContent>
				<DrawerHeader borderBottomWidth="1px">
					Search Users
				</DrawerHeader>
				<DrawerBody>
				<Box d="flex" pb={2}>
					 <Input
					 placeholder="Search user by name or email"
					 mr={2}
					 value={search}
					 onChange={(e)=>setSearch(e.target.value)}
					 />
					 <Button onClick={handleSearch}>Go</Button>
				</Box>
				{loading? (
					<ChatLoading/>
				):(
					<span>resutls</span>
				)}
			</DrawerBody>
			</DrawerContent>
		</Drawer>
	</div>
  )
}

export default SideDrawer