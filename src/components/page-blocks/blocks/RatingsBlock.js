import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Color from 'constants/colors'

/*
usage

{
	id: "000",
	component: RatingsBlock,
	data: {
		ratings: [
			{
				label:"complexity",
				rating: 1,
				explanation: "We get it. Should city board members have to resign when they run for office?",
			},
			{
				label:"funding",
				rating: 3,
				explanation: <div>Prop B was put on the ballot by the There's no direct outside funderand the SF Ethics Commission reports no spending so far.</div>,
			},
			{
				label:"impact",
				rating: 4,
				explanation: "City Hall has already been practicing Prop B's policy, albeit informally. It won't have a big impact.",
			},
			{
				label:"controversy",
				rating: 5,
				explanation: "Four Supes voted against Prop B, but they haven’t publicly opposed it.",
			},
			{
				label:"taxpayer cost",
				rating: 2,
				explanation: "Prop B costs zero dinero to taxpayers.",
			},
		],
	}
},
*/

const Rating = styled.span`
	text-align:left;
	width: 48%;
`;

const Label = styled.h3`
	display: inline-block;
	font-weight: normal;
	margin: 0;
	text-align: right;
	width: 50%
`;

const BlockTitle = styled.h3`
	color: #333;
	text-align: center;
	margin-bottom: 10px;
`;


const mapLabelToEmoji = (label) => {
	switch(label){
		case "complexity":
			return "⚙";
		case "funding":
			return "🤑";
		case "impact":
			return "🥊";
		case "controversy":
			return "🍆";
		case "taxpayer cost":
			return "💰";
		default:
			return "⭐";
	}
}

const Container = styled.div`
	background: ${props=>props.isHighlighted ? (props.isHovered && !props.stayVisible ? Color('purple') : "black"): "white"};
	color: ${props=>props.isHighlighted ? "white": "black"};
	cursor: pointer;
`;

const Position = styled.div`
	position: absolute;
	z-index: 2;
	font-family: ${props=>props.theme.fonts.h2};
	font-size: 14px;
`;
const InfoBox = styled.div`
	position: relative;
	background-color: white;
	padding: 20px 10px;
	max-width: 300px;
	top: -15px;
	right: -250px;
	border: 3px solid black;
	border-radius: 4px;
	box-shadow: 0 0 4px rgba(0,0,0,0.1);
	cursor: pointer;
  @media screen and (max-width: 767px) {
  	top: 10px;
  	left: 0;
  }
`;

// top: ${props=>props.showAnnos? 0 : '320px' };
// transition: top 250ms cubic-bezier(0.165, 0.84, 0.44, 1);
const BlockContainer = styled.div`
	position: relative;
	padding: 10px 0;
	border-radius: 3px;
  @media screen and (max-width: 1023px) {
  	top: 0;
  }
  @media print {
    display: none;
	}
`

class RatingLine extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isHovered: false,
			stayVisible: false,
		}
	}
	handleMouseEnter = () => {
		this.setState({isHovered: true})
	}

	handleMouseLeave = () => {
		// hide explanation
		this.setState({isHovered: false})
	}

	toggleVisibility = (e) => {
		e.preventDefault();
		this.setState({stayVisible: !this.state.stayVisible});
	}

	render() {
		const {explanation} = this.props;
		const {stayVisible, isHovered} = this.state;
		const showInfo = stayVisible ? true : isHovered;
		return(
			<React.Fragment>
				<Container
					isHighlighted={showInfo}
					isHovered={isHovered}
					stayVisible={stayVisible}
					onMouseEnter={this.handleMouseEnter}
					onMouseLeave={this.handleMouseLeave}
					onClick={this.toggleVisibility}
				>
					{this.props.children}
				</Container>
				{showInfo &&
					<Position>
						<InfoBox>
							{explanation}
						</InfoBox>
					</Position>
				}
			</React.Fragment>
		);
	}
}

const RatingsBlock = (props) => {
	if(!props.data) return null;
	const ratingBlock = props.data.ratings.map( (line, i) => {
		const {label, rating, explanation} = line;
		const emojis = mapLabelToEmoji(label).repeat(rating);
		return(
			<RatingLine explanation={explanation} key={i}>
				<Label>{label}</Label>
				:&nbsp;
				<Rating>{emojis}</Rating>
			</RatingLine>
		);
	});

	return(
  	<BlockContainer>
    	<BlockTitle>By The Bay's analysis</BlockTitle>
			{ratingBlock}
  	</BlockContainer>
	);
}

RatingsBlock.propTypes = {
	data: PropTypes.shape({
		ratings: PropTypes.arrayOf(
			PropTypes.shape({
				label: PropTypes.string.isRequired,
				rating: PropTypes.number.isRequired,
				explanation: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
			})
		)
	})
}


export default RatingsBlock;
