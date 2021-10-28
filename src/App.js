import React, { useEffect, useReducer } from 'react';
import MessageCard from './MessageCard';
import ColourChoicePanel from './ColourChoicePanel';
import { Heading, Button } from './Styled';
import { getJoke, reducer } from './utils/Services';
import Background from './images/oldman.jpeg';

const App = () => {
  const initialState = {
    message: "Hi there buddy",
    textColour: "#ffffff",
    cardColour: "#000000"
  }

  

  return (
    <div>
    </div>
  );
}

export default App;
