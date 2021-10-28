import styled from 'styled-components'

export const Heading = styled.h1 `
	font-family: Arial, Helvetica, sans-serif;
	font-size: 2.5em;
	display: block;
	margin: 0;
	padding: 20px 0;
	text-align: center;
`

export const Label = styled.label `
	font-family: Arial, Helvetica, sans-serif;
	padding: .5em;
`

export const Card = styled.div `
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 1em;
	padding: 30px 25px;
	height: 4em;
	width: 60%;
	border: 1px black solid;
	background-color: ${props => props.bgColour ? props.bgColour : 'white'};
	color: ${props => props.colour ? props.colour : 'black'};
`
export const CenteredRow = styled.div `
	display: flex;
	justify-content: center;
	padding: 10px 0;
	font-size: 14px;
`
export const Button = styled.button `	
	text-align: center;
	padding: 10px 25px;
	background-color: #e9eaa7;
	display: block;
	margin: 0 auto 25px;
	font-size: 14px;
`