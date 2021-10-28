import React from 'react';
import {CenteredRow, Card} from './Styled'

const MessageCard = (props) => {
	const {message, textColour, cardColour} = props;

	return (
		<CenteredRow>
			<Card data-testid='message-card' bgColour={cardColour} colour={textColour}>
				{message}
			</Card>	
		</CenteredRow>
	);
}

export default MessageCard;
