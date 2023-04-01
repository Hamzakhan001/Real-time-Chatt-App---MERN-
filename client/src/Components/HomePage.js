import React from 'react'
import { Container,Box,Text, Tabs, TabList, TabPanels, Tab, TabPanel,VStack} from '@chakra-ui/react';
import Login from './Authentication/Login';
import Signup from './Authentication/Signup';


function HomePage() {
  return (
	<Container
  maxW='xl'
  centerContent
  >
    <Box
    d="flex"
    justifyContent="center"
    bg="white"
    w="100%"
    m="40px 0 15px 0"
    borderRadius="lg"
    borderWidth="1px"
    >
      <Text fontSize="4xl" fontFamily="work sans" color="black"> 
        Real Time Chatt App
      </Text>
    </Box>
    <Box bg="white" color="black" w="100%" p={4} borderRadius="lg" borderWidth="1px">
    <Tabs variant='soft-rounded' >
  <TabList mb="1em">
    <Tab width="50%">Login</Tab>
    <Tab width="50%">Signup</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
    <Login/>
    </TabPanel>
    <TabPanel>
    <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>
    </Box>
  </Container>
  )
}

export default HomePage