import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid';
import {Spacer} from 'layout/util'

/*
example usage:
{
	
	component: FundraisingBlock,
	data: {
		sections: [
			{
				amountRaised: "$35.9M",
				subtitle:"Amount raised as of June 4, 2018",
				fundersTitle: "Top direct funders",
				funders: [
					{
						blurb: "$1,116,184 – California Teachers Association - Powerful force in California politics that advocates for teachers in public schools and colleges"
					},
					{
						blurb: "$981,440 – Blue Shield of California – SF-based health insurer. Has also backed anti-Chiang outside group.",
					},
					{
						blurb: "$116,800 – Stewart and Lynda Resnick – Billionaire couple behind Fiji Water and POM Wonderful juice. Have given to both equally Newsom and Villaraigosa.",
					},
					{
						blurb: <span>Notably, Marissa Mayer, Peter Thiel, George Soros, and Laurene Powell Jobs have all donated to Gavin. <a target="_blank" rel="noopener noreferrer" href="http://www.latimes.com/projects/la-pol-ca-california-governor-2018-money/">See more.</a></span>
					},
				],
			},
		]
	}
},
*/

const FunderBlock = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 20px;
`;

const FunderContainer = styled.div`
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 767px) {
		flex-direction: column;
	}
`;

const BigNumberContainer = styled.div`
	text-align: center;
`;

const BigNumber = styled.h1`
	color: #333;
	font-size: 72px;
	margin-bottom: 0;
`;

const BigNumberDesc = styled.h3`
	margin-top: 10px;
	font-size: 14px;
`;

const FundraisingBlock = (props) => {
	const fundingSections = props.data.sections.map( (section,i) => {
		const {amountRaised, subtitle, fundersTitle, funders} = section;

		const funderBlurbs = funders.map ( (funder, j) => (
			<FunderBlock key={j}>
				{funder.blurb}
			</FunderBlock>
			));
		return(
			<Row key={i}>
		    <Col
		    	xsOffset={1} xs={10}
		      smOffset={1} sm={10}
		      mdOffset={3} md={3}
		      lgOffset={3} lg={3}
		    >
			    <BigNumberContainer>
				    <BigNumber>{amountRaised}</BigNumber>
				    <BigNumberDesc>
				    	{subtitle}
				    </BigNumberDesc>
			    </BigNumberContainer>
				</Col>
		    <Col
		    	xsOffset={1} xs={10}
		      smOffset={1} sm={10}
		      mdOffset={0} md={3}
		      lgOffset={0} lg={3}
		    >
		    	<Spacer height={15} />
		    	<h3>{fundersTitle}</h3>
					<FunderContainer>
						{funderBlurbs}
					</FunderContainer>
				</Col>
			</Row>
		);
	});

	return(
		<React.Fragment>
			<Spacer height={30}/>
			{fundingSections}
		</React.Fragment>
	);
};

FundraisingBlock.propTypes = {
	data: PropTypes.shape({
		sections: PropTypes.arrayOf(
			PropTypes.shape({
				amountRaised: PropTypes.string.isRequired,
				fundersTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
				funders: PropTypes.arrayOf(
					PropTypes.shape({
						blurb: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
					})
				)
			})
		)
	})
};

export default FundraisingBlock;
