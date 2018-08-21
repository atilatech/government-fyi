import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Color from 'constants/colors'
import MultisourceImg from 'components/static/multisource-image'

/*
usage:

{
	id: "000",
	component: RaceCardBlock,
	data: {
		title:"Governor of California",
		body:<span>Bye-bye Jerry Brown <span role="img" aria-label="hand wave">👋</span> There are a lot of overachievers gunning for CA's top job in this year's primary race. Here are the top six candidates leading the polls. You vote for one person; the top two move on to November's election.</span>,
		img: {
			_1x_webp: govbg_w,
			_1x: govbg,
		},
		button: {
			to:"/election/sf-race-mayor",
			text:'Press'
		},
		sideTitle: <span>Jump to a candidate<br/>(ranked by <a target="_blank" rel="noopener noreferrer" href="https://www.realclearpolitics.com/epolls/2018/governor/ca/california_governor_open_primary-6299.html">poll results</a>)</span>,
		sideLinks: [
			{
				to: "/election/state-race-cand-gavin-newsom",
				text: <span>Gavin Newsom (D)</span>,
			},
			{
				to: "/election/state-race-cand-john-cox",
				text: <span>John Cox (R)</span>,
			},
			{
				to: "/election/state-race-cand-antonio-villaraigosa",
				text: "Antonio Villaraigosa (D)",
			},
			{
				to: "/election/state-race-cand-travis-allen",
				text: "Travis Allen (R)",
			},
			{
				to: "/election/state-race-cand-john-chiang",
				text: "John Chiang (D)",
			},
			{
				to: "/election/state-race-cand-delaine-eastin",
				text: "Delaine Eastin (D)",
			},
		],
	}
},
*/
const Box = styled.div`
	position:relative;
	padding: 50px 20px 20px 20px;
	background-color: white;
	border: 6px solid black;
	border-radius: 6px;
`;

const BoxTitle = styled.h2`
	margin-bottom: 20px;
	margin-top: 0;
`;

const BoxBody = styled.div`
	font-size: 14px;
	line-height: 20px;
	@media screen and (max-width: 767px) {
		font-size: 16px;
		line-height: 24px;
	}
`;

const BoxButton = styled.div`
	border: 3px solid ${Color('purple')};
	border-radius: 3px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5px 10px;
	margin-top: 20px;
	font-family: ${props=>props.theme.fonts.h5};
	font-weight: bold;
	@media not all and (hover: none) {
		&:hover {
			background-color: ${Color('purple')};
			color: #fff;
		}
	}
`;

const ButtonPosition = styled(Link)`
	display: flex;
	justify-content: flex-end;
	text-decoration: none;
	color: ${Color('purple')};
`;

const ImgContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	width: 100%;
	height: auto;
`;

const Img = styled(MultisourceImg)`
	padding-right: 40px;
	object-fit: contain;
	width: calc(100% - 40px);
	max-width: 1440px;
`;

const Positioning = styled.div`
	width: 100%;
	position: relative;

`;

const MoveToTop = styled.div`
	width: 100%;
	position: absolute;
	top: 0;
	@media screen and (max-width: 767px) {
		position: relative;
	}
`;

const GranularLinksContainer = styled.div`
	margin-top: 70px;
	text-align: right;
	font-family: ${props => props.theme.fonts.h2};
	font-size: 14px;
	@media screen and (max-width: 767px) {
		text-align: center;
		margin-top: 0;
		line-height: 20px;
		margin-bottom: 30px;
	}

`;

const SideTitle = styled.h5`
	margin-bottom: 10px;
	line-height: 16px;
`;


const RaceCardBlock = (props) => {

	const {title, body, button, img, sideLinks, sideTitle} = props.data;

	const buttonInBox = button ?
  	<ButtonPosition to={button.to}>
    	<BoxButton>{button.text}</BoxButton>
  	</ButtonPosition>
  	:
  	null;

	let granularLinks = sideLinks.map( (link, i) => {
		if (link.to) {
			return(
		    <React.Fragment key={i}><Link to={link.to}>{link.text}</Link><br/></React.Fragment>
			)
		} else {
		  return (
		  	<div key={i}>{link.text}</div>
			)
		}
	}	);
	return(
		<React.Fragment>
	  	<Positioning>
		  	<ImgContainer>
		  		<Img imageHandles={img} alt="race section background"/>
	    	</ImgContainer>
				<MoveToTop>
					<Row>
				    <Col
				    	xsOffset={1} xs={10}
				      smOffset={1} sm={7}
				      mdOffset={1} md={4}
				      lgOffset={1} lg={4}
				    >
				      <Box>
				      	<BoxTitle>{title}</BoxTitle>
				      	<BoxBody>{body}</BoxBody>
				      	{buttonInBox}
				      </Box>
				    </Col>
				    <Col
				    	xsOffset={1} xs={10}
				      smOffset={1} sm={2}
				      mdOffset={3} md={3}
				      lgOffset={3} lg={3}
				    >
				    	<GranularLinksContainer>
						    <SideTitle>{sideTitle}</SideTitle>
						    {granularLinks}
				    	</GranularLinksContainer>
				    </Col>
					</Row>
				</MoveToTop>
    	</Positioning>
		</React.Fragment>
	)
}

RaceCardBlock.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string.isRequired,
		body: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		button: PropTypes.object,
		img: PropTypes.object,
	})
}

export default RaceCardBlock;
