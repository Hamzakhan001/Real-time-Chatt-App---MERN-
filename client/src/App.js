import './App.css';
import {Route,Switch} from 'react-router-dom';
import { Button, ButtonGroup } from '@chakra-ui/react';
import HomePage from './Components/HomePage';
import { useHistory } from "react-router-dom";
import Chat from './Components/Chat';

function App() {
    const history=useHistory()
  console.log("history",history)
  return (
      <Switch>
      <Route exact path="/"><HomePage/></Route>
      <Route path="/chats"><Chat/></Route>
      </Switch>
  );
}

export default App;
