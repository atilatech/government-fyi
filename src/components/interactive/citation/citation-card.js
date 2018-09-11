import React, {Component} from 'react'
import styled from 'styled-components'
import Color from 'layout/colors'
import {LinkOutIcon} from 'components/static/icons'

const Card = styled.span`
	box-sizing: border-box;
	display: block;
	padding: 10px;
	background-color: white;
	color: black;
	border: 4px solid black;
	border-radius: 4px;
	width: 100%;
`;

const CardLabel = styled.span`
	display: block;
	font-family: ${props=>props.theme.fonts.h5};
	font-weight: bold;
	text-align: center;
	font-size: 16px;
	color: black;
`;

const SourcePublication = styled.span`
	font-family: ${props=>props.theme.fonts.h3};
	display: block;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: normal;
	margin-top: 10px;
	line-height: 14px;
	color: #333;
	margin-top: 12px;
	text-align: left;
`;

const SourceHeadline = styled.span`
	display: block;
	font-family: ${props=>props.theme.fonts.h5};
	text-transform: none;
	font-weight: bold;
	font-size: 14px;
	line-height: 16px;
	margin-top: 4px;
	text-align: left;
`;

const SourceBody = styled.span`
	display: block;
	text-transform: none;
	margin-top: 12px;
	font-size: 12px;
	font-weight: normal
	text-align: left;
	line-height: 16px;
`;

const LinkBar = styled.span`
	display: flex;
	justify-content: center;
	margin-top: 12px;
	margin-bottom: 12px;
	height: auto;
	width: 100%;
`;

const Quotes = styled.span`
	position: absolute;
	font-family: Georgia, serif;
	color: black;
	font-size 14pt;
`;

const Button = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	font-family: ${props=>props.theme.fonts.h5};
	font-weight: bold;
	border: 4px solid black;
	font-size: 12px;
	color: black;
	text-align: center;
	padding: 6px 9px 6px 5px;
	border-radius: 4px;
	user-select: none;
	cursor: pointer;

	@media not all and (hover: none) {
		&:hover {
			background-color: ${Color('blue1')};
			text-decoration: underline;
			outline: none;
		}
	}
`;

const LinkOutStyle = styled.div`
	display: inline-block;
	width: 20px;
	transform: translateY(3px);
`;

class CitationCard extends Component {
	render() {
		const dataSource = this.props.data ? this.props.data : this.props; //-- supporting legacy
		const {publication, headline, directQuote, link, noLink} = dataSource;
		return(
			<Card>
				<CardLabel>Source</CardLabel>
				<SourcePublication>{publication}</SourcePublication>
				<SourceHeadline>{headline}</SourceHeadline>
				<SourceBody>
					<Quotes>&ldquo;</Quotes>&nbsp;&nbsp;&nbsp;{directQuote}<Quotes>&rdquo;</Quotes>
				</SourceBody>
				<LinkBar>
					{!noLink &&
						<span>
							<a target='_blank' rel="noopener noreferrer" href={link} style={{textDecoration:'none'}}>
								<Button><LinkOutStyle><LinkOutIcon/></LinkOutStyle>Read more</Button>
							</a>
						</span>
					}
				</LinkBar>
			</Card>
		);
	}
}

export default CitationCard
