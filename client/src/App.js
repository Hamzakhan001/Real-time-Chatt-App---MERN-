import './App.css';
import {Route,Switch} from 'react-router-dom';
import { Button, ButtonGroup } from '@chakra-ui/react';
import HomePage from './Components/HomePage';
import Chat from './Components/Chat';

function App() {
  return (
      <Switch>
      <Route exact path="/"><HomePage/></Route>
      <Route path="/chats"><Chat/></Route>
      </Switch>
  );
}

export default App;
