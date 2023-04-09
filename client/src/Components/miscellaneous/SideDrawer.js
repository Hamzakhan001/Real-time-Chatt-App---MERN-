import React,{useState} from 'react'
import { Box, Button, Tooltip,Text,Menu, MenuButton, MenuList, Avatar, MenuItem, MenuDivider} from '@chakra-ui/react'
import {BellIcon,ChevronDownIcon} from '@chakra-ui/icons'
import { chatState } from '../../Context/ChatProvider'
import ProfileModal from './ProfileModal'

function SideDrawer() {
	const [search,setSearch]=useState()
	const [searchResults,setSearchResults]=useState([])
	const [loading,setLoading]=useState(false)
	const [loadingChat,setLoadingChat]=useState()

	const {user }=chatState();
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
				<Button variant='ghost'>
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
						<MenuItem>Logout</MenuItem>
					</MenuList>
				</Menu>
			</div>
		</Box>
	</div>
  )
}

export default SideDrawer