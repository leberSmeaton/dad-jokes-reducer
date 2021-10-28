import React from 'react';
import {CenteredRow, Label} from './Styled'

const ColourChoicePanel = (props) => {
	// setting the props from app.js
	const { setCardColour, setTextColour } = props;

	// creating the hooks handlers for the onClick events that will change the text and card colour
	function onTextColour(event){
		setTextColour(event.target.value)
	}

	function onCardColour(event){
		setCardColour(event.target.value)
	}

	return (
		<CenteredRow>
			<Label>Text colour:</Label>	
			<input name='text-colour'
				data-testid='text-colour'
				type='color'
				onChange={onTextColour}	
			/>
			<Label>Card colour:</Label>	
			<input name='card-colour'
				data-testid='card-colour'
				type='color'
				onChange={onCardColour}	
			/>
		</CenteredRow>
			
	);
}

export default ColourChoicePanel;
