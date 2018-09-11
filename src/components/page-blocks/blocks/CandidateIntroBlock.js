import React from 'react'
import {Row, Col} from 'react-flexbox-grid'
import styled from 'styled-components'
import Color from 'constants/colors'
import SideNav from '../components/CandidateSideNav'
import {LinkOutIcon, LinkOutStyle} from 'components/static/icons'
import MultisourceImg from 'components/static/multisource-image'
import {Spacer} from 'layout/util'

/*
{
	
	component: CandidateIntroBlock,
	data: {
		candidateName: "Gavin Newsom",
		img: {
			_1x_webp: ProfileImg_w,
			_1x: ProfileImg,
		},
		color: "mint",
		summary: [
			{
				label: "Running for",
				value: "Governor of California",
			},
			{
				label: "Party",
				value: "Democrat",
			},
			{
				label: "Current Role",
				value: "Lieutenant Governor of California, two terms (2011-Present)",
			},
			{
				label: "Past roles",
				value: "Mayor of San Francisco (2003-11)",
			},
			{
				label: "Fundraised",
				value: <span role="img" aria-label="amount fundraised">
					💸 💸 💸 💸 💸 <Citation data={Citations["1"]}>($35.9M as of 6/4/18)</Citation>
				</span>,
			},
			{
				label: "Did you know",
				value: "Grew up in the Bay Area. Prior to politics, he sold orthotics and founded a profitable wine business. Had an affair with a top aide's wife",
			},
		],
		highlightSection: {
			title: "The latest",
			body: "Newsom, as expected, landed on top in the June 5 primary. He moves on to the General Election in November against Republican John Cox.",
			link: "https://www.nytimes.com/2018/06/06/us/politics/california-primary.html",
		},
		raceInfo: {
			position: "California Governor",
			link: "/election/state-race-governor",
			opponents: [
				{
					name: "John Cox (R)",
					link: "/election/state-race-cand-john-cox",
				},
				{
					name: "Antonio Villaraigosa (D)",
					link: "/election/state-race-cand-antonio-villaraigosa",
				},
				{
					name: "Travis Allen (R)",
					link: "/election/state-race-cand-travis-allen",
				},
				{
					name: "John Chiang (D)",
					link: "/election/state-race-cand-john-chiang",
				},
				{
					name: "Delaine Eastin (D)",
					link: "/election/state-race-cand-delaine-eastin",
				},
			]
		}
	}
},
*/
const CandidateIntroBlock = (props) => {
	if (!props.data) return null;
	const {candidateName, img, color, summary, highlightSection, raceInfo} = props.data;
	const {title, body, link} = highlightSection;
	const quickInfo = summary.map( (field, i) => (
		<LineContainer key={i}>
			<SummaryLabel>{field.label}</SummaryLabel>:&nbsp;
			<SummaryValue>{field.value}</SummaryValue>
		</LineContainer>
	));

	return(
		<div>
			<Row>
		    <Col
		    	xsOffset={1} xs={10}
		      smOffset={2} sm={8}
		      mdOffset={6} md={5}
		      lgOffset={6} lg={5}
		    >
					<Name>{candidateName}</Name>
		    </Col>
			</Row>

			<Row>
				<Col
		    	xsOffset={1} xs={10}
		      smOffset={2} sm={8}
		      mdOffset={0} md={2}
		      lgOffset={0} lg={2}
		    >
		    	<Relative>
			    	<ColorBlock color={color}/>
		    	</Relative>
		    </Col>

		    <Col
		    	xsOffset={1} xs={10}
		      smOffset={2} sm={8}
		      mdOffset={0} md={4}
		      lgOffset={0} lg={4}
		    >
		    <Relative>
		    	<ColorBlock color={color}/>
					<Img imageHandles={img} alt={candidateName}/>
		    </Relative>
		    <Spacer height={25}/>
				</Col>

		    <Col
		    	xsOffset={0} xs={12}
		      smOffset={2} sm={8}
		      mdOffset={0} md={5}
		      lgOffset={0} lg={5}
		    >
					<SummaryContainer>
						{quickInfo}
					</SummaryContainer>
				</Col>
			</Row>

			<Row>
		    <Col
		    	xsOffset={0} xs={12}
		      smOffset={2} sm={8}
		      mdOffset={1} md={2}
		      lgOffset={1} lg={2}
		    >
		    	<SideNav data={raceInfo}/>
		    </Col>
		    <Col
		    	xsOffset={1} xs={10}
		      smOffset={2} sm={8}
		      mdOffset={1} md={4}
		      lgOffset={1} lg={4}
		    >
					<HighlightSection>
						<Title>{title}</Title>
						{body}
						<StyledLink href={link}><LinkOutStyle><LinkOutIcon/></LinkOutStyle>Read more</StyledLink>
					</HighlightSection>
		    </Col>
			</Row>
		</div>

	);
}

const SummaryContainer = styled.div`
	box-sizing: border-box;
	padding: 0;
	width: 100%;
`;

const LineContainer = styled.div`
	display: flex;
	align-items: flex-start;
	margin-top: 3px;
`;

const SummaryLabel = styled.h3`
	font-weight: bold;
	display: inline-block;
	margin: 0;
	font-size: 14px;
	text-align: right;
	width: 40%
`;

const SummaryValue = styled.span`
	font-family: ${props=>props.theme.fonts.h4};
	margin-top: 3px;
	font-size: 13px;
	line-height: 19px;
	width: 58%;
	@media screen and (max-width: 767px) {
		font-size: 14px;
	}
`;

const Name = styled.h1`
	text-align: center;
`;

const Img = styled(MultisourceImg)`
	position: absolute;
	height: 250px;
	bottom:0;
	left: 0;
`;
	// filter: drop-shadow(-8px -2px 0 rgba(200,0,255,0.8)) drop-shadow(-12px 0 0 rgba(0,255,200,0.8));

const Relative = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: flex-end;
`;

const ColorBlock = styled.div`
	background-color: ${props=>Color(props.color)};
	width: 100%;
	height: 300px;
	overflow: visible;
	transform: scaleX(1.1);
	border-radius: 8px;
	@media screen and (max-width: 1023px) {
		border-radius: 0;
		height: 180px;
	}
`;

const Title = styled.h3`
	margin-bottom: 2px;
`;

const HighlightSection = styled.div`
	box-sizing: border-box;
	border-radius: 2px;
`;

const StyledLink = styled.a`
	font-family: ${props=>props.theme.fonts.h4};
	text-align: right;
	font-size: 12px;
	display: block;
	margin-top: 0;
	@media screen and (max-width: 767px) {
		font-size: 16px;
	}
`;



export default CandidateIntroBlock;
