import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import {Container, TitleContainer} from 'pages/june-5/races/components/SummaryList'
import {Spacer} from 'layout/util'

/*
creates a psuedo-table that compares two lists of things
like in Prop H from the June 5 election

{
	id:"000",
	component: CompareBlock,
	data: {
		title: "Comparison between the existing Police Commission's policy and SFPOA's Prop H",
		caption: "",
		firstColTitle: <span><Acronym SFPOA's policy (a YES vote) <a href="https://sfgov.org/elections/sites/default/files/Documents/candidates/Legal_Text_Safer_Policing.pdf" rel="noopener noreferrer">(Link)</a></span>,
		secondColTitle: <span>The PC's policy (a NO vote) <a href="https://sanfranciscopolice.org/sites/default/files/Documents/PoliceCommission/SFPD%20draft%20ECW%20policy%20031418%20FINAL%20(clean%20copy).pdf" rel="noopener noreferrer">(Link)</a></span>,
		beforeText1: "SFPOA policy (YES vote): ",
		beforeText2: "PC policy (NO vote): ",
		rowData: [
			[
				"This is the heading for the row",
				<span>Another point</span>,
				"Approval from the Police Commission, like most police policies",
			],
			[
				"When Tasers can be used",
				"Another point",
				"A third point",
			],
			[
				"Prohibited use of Taser",
				"None specified.",
				"three",
			],
		],
	},
},

*/

const TitleContainerFiller = styled.div`
	min-width: 20%;
	@media screen and (max-width: 767px) {
		width: 90%;
		border: none;
		margin: 0 auto;
		text-align: center;
	}
`;

const Title = styled.h3`
	margin-top: 30px;
	margin-bottom: 20px;
	text-align: center;
`;

const Datum = styled.div`
	width: calc(70% - 40px);
	padding-right: 20px;
	box-sizing: border-box;
	@media screen and (max-width: 767px) {
		width: 90%;
		margin: 10px auto;
		&::before {
			content: "${props=>props.beforeText}";
		}
	}
`;

const BodyCenter = Datum.extend`
	text-align: center;
`;

const CompareBlock = (props)=> {
	const {rowData, firstColTitle, secondColTitle, title, beforeText1, beforeText2} = props.data;
	const rows = rowData.map( (row, i) => {
		const rowElements = row.map( (datum, j) => {
			if (j === 1) {
				return <Datum beforeText={beforeText1} key={j}>{row[j]}</Datum>
			}
			else if (j === 2) {
				return <Datum beforeText={beforeText2} key={j}>{row[j]}</Datum>
			}
			return null;
		});
		return(
			<Container key={i}>
				<TitleContainer>
					<h3>{row[0]}</h3>
				</TitleContainer>
				{rowElements}
			</Container>
		);
	});

	return(
			<Row>
		    <Col
		    	xsOffset={0} xs={12}
		      smOffset={1} sm={10}
		      mdOffset={2} md={8}
		      lgOffset={2} lg={8}
		    >
					<Spacer height={30}/>
					<Title>{title}</Title>
					<Container>
						<TitleContainerFiller/>
						<BodyCenter><h4>{firstColTitle}</h4></BodyCenter>
						<BodyCenter><h4>{secondColTitle}</h4></BodyCenter>
					</Container>
					{rows}
				</Col>
			</Row>
	);
}

CompareBlock.propTypes = {
  data: PropTypes.shape({
    rowData: PropTypes.arrayOf(PropTypes.array).isRequired,
		title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		firstColTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		secondColTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		beforeText1: PropTypes.string, // to prepend to columns when on mobile screens
		beforeText2: PropTypes.string,
  }).isRequired
}

export default CompareBlock;
