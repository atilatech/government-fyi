import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Color from 'layout/colors'

/*
usage

{
	
	component: SummaryListBlock,
	data: {
		listNItems: 3, //optional
		buttonText: "View more", //optional
		stories: [
			{
				title: "Defied state law and issued same-sex marriage licenses (2004)",
				description: <span>While it was still illegal in California in 2004, Gavin, as Mayor of SF, ordered his County Clerk to issue 4K same-sex marriage licenses.</span>,
			},
			{
				title: <span>Passed universal health care in SF (2007)</span>,
				description: "As mayor, Gavin implemented Healthy SF, a program that provided health care to all residents including undocumented immigrants",
			},
			{
				title: "Was one of the first politicians to support legalizing marijuana",
				description: "Gavin supported Prop 47, in 2014, and then was the main politician arguing for Prop 64, which passed in Nov 2016.",
			},
			{
				title: "Was one of the first politicians to support legalizing marijuana",
				description: "Gavin supported Prop 47, in 2014, and then was the main politician arguing for Prop 64, which passed in Nov 2016.",
			},
			{
				title: "Was one of the first politicians to support legalizing marijuana",
				description: "Gavin supported Prop 47, in 2014, and then was the main politician arguing for Prop 64, which passed in Nov 2016.",
			},
		],
	}
},
*/

const Container = styled.div`
	margin-top: 40px;
	display: flex;
	@media screen and (max-width: 767px) {
		flex-direction: column;
	}
`;

const TitleContainer = styled.div`
	border-top: ${props=>props.noBorder ?"2px solid black":"none"};
	padding-top: ${props=>props.noBorder ?10:0}px;
	margin-top: ${props=>props.noBorder ?6:3}px;
	margin-right: 30px;
	text-align: right;
	min-width: 130px;
	@media screen and (max-width: 767px) {
		width: 100%;
		border: none;
		margin: 0;
		text-align: center;
	}
`;

export const Body = styled.div`
`;

export const ExpandButton = styled.div`
	margin: 40px auto 0 auto;
	padding: 10px 20px;
	display: flex;
	max-width: 200px;
	align-items: center;
	justify-content: center;
	background-color: black;
	border-radius: 4px;
	@media not all and (hover: none) {
    &:hover{
      background-color: ${Color('purple')};
      cursor: pointer;
    }
  }
`;

const StyledH3 = styled.h3`
	font-size: 16px;
`


export const ExpandButtonLabel = styled.h4`
	text-align: center;
	color: white;
`;

const Snippet = (props) => (
	<Container>
		<TitleContainer noBorder={props.noBorder}>
			<StyledH3>{props.title}</StyledH3>
		</TitleContainer>
		<Body>{props.description}</Body>
	</Container>
)


class SummaryListBlock extends React.Component  {
	constructor(props) {
		super(props);
		this.state = {
			expanded: false,
		}
	}

	expandContainer = () => {
		this.setState({expanded: true})
	}

	render() {
		const { stories, listNItems, buttonText, noBorder } = this.props.data;
		const nItems = listNItems || 3;
		const snippets = stories.map( (story, i) => {
			if(i < nItems) {
				return(
					<Snippet key={i} title={story.title} description={story.description} noBorder={noBorder}/>
				);
			} else {
				return null
			}
		});
		//-- most readable, but stylistically inelegant way to do this
		let restOfSnippets = stories.map( (story, i) => {
			if(i >= nItems) {
				return(
					<Snippet key={i} title={story.title} description={story.description}/>
				);
			} else {
				return null;
			}
		})

		if (restOfSnippets[restOfSnippets.length-1] === null) {
			restOfSnippets = null;
		}
		return(
			<div>
				<Row>
			    <Col
			    	xsOffset={1} xs={10}
			      smOffset={2} sm={8}
			      mdOffset={3} md={6}
			      lgOffset={3} lg={6}
			    >
						{snippets}
						{(!this.state.expanded && restOfSnippets) &&
							<ExpandButton onClick={this.expandContainer}>
								<ExpandButtonLabel>{buttonText}</ExpandButtonLabel>
							</ExpandButton>
						}
						{this.state.expanded && restOfSnippets}

					</Col>
				</Row>
			</div>
		);
	}
}

SummaryListBlock.propTypes = {
	data: PropTypes.shape({
		listNItems: PropTypes.number,
		buttonText: PropTypes.string,
		noBorder: PropTypes.bool,
		stories: PropTypes.arrayOf(
			PropTypes.shape({
				title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
				description: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
			})
		),
	})
}

export default SummaryListBlock;
