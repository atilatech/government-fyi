import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components'
import Color from 'layout/colors'
import {LinkOutIcon, LinkOutStyle} from 'components/static/icons'
import {Spacer} from 'layout/util'

/*
example usage:

{
	id: "000",
	component: LinksBlock,
	data: {
		subsections:[
			{
				subsectionTitle: "Supports Prop 72",
				links: [
					{
						text: "LA Times Editorial Board",
						url: "http://www.latimes.com/opinion/endorsements/la-ed-prop-72-endorsement-20180424-story.html",
					},
					{
						text: "SF Chronicle Editorial Board",
						url: "https://www.sfchronicle.com/opinion/editorials/article/Editorial-Chronicle-recommendations-on-Props-12849416.php",
					},
					{
						text: "Fresno Bee Editorial Board",
						url: "http://www.fresnobee.com/opinion/editorials/article210705274.html"
					},
					{
						text: "Mercury News Editorial Board",
						url: "https://www.mercurynews.com/2018/03/13/editorial-prop-72-rewards-homeowners-who-build-rainwater-capture-systems/"
					},
					{
						text: "The OC Register Editorial Board",
						url: "https://www.ocregister.com/2018/05/08/yes-on-prop-72-for-water-and-tax-relief/"
					},
				]
			},
			{
				subsectionTitle: "More analysis",
				links: [
					{
						text: "Legislative Analyst Office's summary",
						url:"http://voterguide.sos.ca.gov/propositions/72/analysis.htm"
					},
					{
						text: "KQED Science",
						url: "https://www.kqed.org/science/1924022/prop-72-encourages-homeowners-to-capture-rainwater",
					},
					{
						text: "CALMatters",
						url: "https://elections.calmatters.org/2018/california-ballot-measures/proposition-72-rainwater-capture-property-taxes/",
					},
				]
			},
		],
	}
},
*/


const SubsectionTitle = styled.h3`
	display: block;
	color: #666;
	margin-bottom: 10px;
	font-size: 12px;
`;

const LinkWrapper = styled.h4`
	display: flex;
`

const ExternalLink = styled.a`
	margin-top: 4px;
	font-size: 12px;
	@media screen and (max-width: 767px) {
		font-size: 16px;
	}
`;

const SectionWrapper = styled.div`
	margin: 0 auto;
	margin-bottom: 30px;
`;

const HideOnPrint = styled.div`
	@media print {
		display: none;
	}
`;


const LinksChunk = (props) => {
	const links = props.data.links.map( (link, j) => {
		return(
			<LinkWrapper key={j}>
				<LinkOutStyle><LinkOutIcon/></LinkOutStyle>
				<ExternalLink target="_blank" rel="noopener noreferrer" href={link.url}>
					{link.text}
				</ExternalLink>
			</LinkWrapper>
		)
	})
	return(
		<SectionWrapper>
			<SubsectionTitle>{props.data.subsectionTitle}</SubsectionTitle>
			{links}
		</SectionWrapper>
	);
}

const LinksBlock = (props) => {
	const evenSections = props.data.subsections.map( (section, i) => {
		if(i%2===0) {
			return( <LinksChunk key={i} data={section} /> );
		}
		return null;
	})
	//-- to make two columns
	const oddSections = props.data.subsections.map( (section, i) => {
		if(i%2===1) {
			return( <LinksChunk key={i} data={section} /> );
		}
		return null;
	})


	return(
		<HideOnPrint>
			<Spacer height={30}/>
			<Row>
		    <Col
		    	xsOffset={1} xs={10}
		      smOffset={4} sm={4}
		      mdOffset={3} md={3}
		      lgOffset={3} lg={3}
		    >
		    	{evenSections}
				</Col>
		    <Col
		    	xsOffset={1} xs={10}
		      smOffset={4} sm={4}
		      mdOffset={0} md={3}
		      lgOffset={0} lg={3}
		    >
		    	{oddSections}
				</Col>
			</Row>
		</HideOnPrint>
	);
}

LinksBlock.propTypes = {
	data: PropTypes.shape({
		subsections: PropTypes.arrayOf(
			PropTypes.shape({
				subsectionTitle: PropTypes.string,
				links: PropTypes.arrayOf(
					PropTypes.shape({
						text: PropTypes.string.isRequired,
						url: PropTypes.string.isRequired
					}).isRequired
				)
			})
		).isRequired
	}).isRequired
}


export default LinksBlock
