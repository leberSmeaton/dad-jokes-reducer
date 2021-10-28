import React, { useEffect, useReducer } from 'react';
import MessageCard from './MessageCard';
import ColourChoicePanel from './ColourChoicePanel';
import { Heading, Button } from './Styled';
import { getJoke } from './utils/Services';
import { reducer } from './utils/Reducer';
import Background from './images/oldman.jpeg';

const App = () => {
  const initialState = {
    message: "Hi there, Son.",
    textColour: "#ffffff",
    cardColour: "#000000"
  }

  const [store, dispatch] = useReducer(reducer, initialState);
  const {message, textColour, cardColour} = store;

  function setMessage(message) {
    dispatch({
      type: 'setMessage',
      data: message
    })
  }

  function setTextColour(textColour){
    dispatch({
      type: 'setTextColour',
      data: textColour
    })
  }

  function setCardColour(cardColour){
    dispatch({
      type: 'setCardColour',
      data: cardColour
    })
  }

  // onClick we're setMessage on the joke
	function handleClick(event) {
		event.preventDefault()
		// if the callback function, callback data.joke 
		getJoke(joke => setMessage(joke))
	}

  useEffect(() => {
    console.log("I'm in useEffect.")
    getJoke(joke => setMessage(joke))
  }, [])

  return (
    <div style={{
			backgroundSize: 'cover', 
			borderRadius: "50px",
			backgroundImage: `url(${Background})`}}>

			<Heading>Colour Tester</Heading>
			<Heading>Tester of Colours</Heading>
			<Heading>Dad of Dads</Heading>
			<Button onClick={handleClick}>
				Surprise me!
			</Button>
			{/* <MessageField setMessage={setMessage} /> */}
			<MessageCard 
			// setMessage={setMessage}
			message={message} 
			textColour={textColour}
			cardColour={cardColour}/>
			{/* because we're setting values... */}
			<ColourChoicePanel 
			setCardColour={setCardColour} 
			setTextColour={setTextColour} />
    </div>
  );
}

export default App;
