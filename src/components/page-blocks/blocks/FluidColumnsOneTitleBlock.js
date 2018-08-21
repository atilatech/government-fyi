import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import {LinkOutIcon, LinkOutStyle} from 'components/static/icons'
import {Spacer} from 'layout/util'

/*
{
	id: "800",
	component: FluidColumnsOneTitleBlock,
	data: {
		columns: [
			{
				title: "About Kwixuan",
				rows: [
					{
						author:"Bar Association of San Francisco",
						quote:"Rating: “Exceptionally Well-Qualified” – meaning that the candidate possesses all the attributes required for a rating of “Well-Qualified” and possesses several or all of those positive attributes to such an extremely high degree to be indicative of exceptional fitness to perform the judicial function for which she or he is being considered.",
						link:"http://www.sfbar.org/newsroom/2018/20180504.aspx",
					},
					{
						author:"Bar Association of San Francisco",
						quote:"Rating: “Exceptionally Well-Qualified” – meaning that the candidate possesses all the attributes required for a rating of “Well-Qualified” and possesses several or all of those positive attributes to such an extremely high degree to be indicative of exceptional fitness to perform the judicial function for which she or he is being considered.",
						link:"http://www.sfbar.org/newsroom/2018/20180504.aspx",
					},
				],
			},
			{
				title: "About Elizabeth",
				rows: [
					{
						author:"Bar Association of San Francisco",
						quote:"Rating: “Qualified” – meaning that the candidate possesses the attributes listed above so as to indicate the ability to satisfactorily perform the judicial function for which she or he is being considered.",
						link:"http://www.sfbar.org/newsroom/2018/20180504.aspx",
					},
				],
			},
			{
				title: "About Ming-young",
				rows: [
					{
						author:"Bar Association of San Francisco",
						quote:"Rating: “Not Qualified” – meaning that the candidate lacks one or more of the attributes required for a rating of “Qualified” to such an extent that the Committee doubts the candidate’s fitness to perform satisfactorily the judicial function for which he or she is being considered.",
						link:"http://www.sfbar.org/newsroom/2018/20180504.aspx",
					},
				],
			}
		]
	}
},
*/

const Section = styled.div`
	margin-top: 20px;
	margin-right: 20px;
	box-sizing: border-box;
	border-radius: 2px;
	font-size: 16px;
`;

const ColContainer = styled.div`
	width: 100%;
`;

const StyledLink = styled.a`
	font-family: ${props=>props.theme.fonts.h4};
	text-align: right;
	font-size: 14px;
	display: block;
	margin-top: 10px;
`;

const LateralContainer = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	@media screen and (max-width: 767px) {
		flex-direction: column;
		align-content: center;
		padding: 0 20px;
	}
`;


const Author = StyledLink.withComponent('div');


const Endorsement = (props) => {
	const {quote, link, author} = props.data;
	const attribute = (!link || link==="") ?
		<Author>{author}</Author>
	:
		<StyledLink href={link}>
			<LinkOutStyle><LinkOutIcon/></LinkOutStyle>
			{author}
		</StyledLink>;

	return(
		<Section>
			{quote}
			{attribute}
		</Section>
	);
}

const FluidColumnsOneTitleBlock = (props) => {
	const endorsementCol = props.data.columns.map ( (col,i) => {
		const columnData = col.rows.map( (data, j)=> {
			return(
				<Endorsement key={j} data={data}/>
			);
		});

		return(
			<ColContainer key={i}>
				<h3>{col.title}</h3>
				{columnData}
			</ColContainer>
		)
	});

	return(
		<Row>
			<Col
				xsOffset={0} xs={12}
				smOffset={1} sm={10}
				mdOffset={1} md={10}
				lgOffset={2} lg={8}
			>
				<Spacer height={35}/>
				<LateralContainer>
					{endorsementCol}
				</LateralContainer>
			</Col>
		</Row>
	)
}

FluidColumnsOneTitleBlock.propTypes = {
	data: PropTypes.shape({
		columns: PropTypes.arrayOf(
			PropTypes.shape({
				title: PropTypes.string,
				rows: PropTypes.arrayOf(
					PropTypes.shape({
						author: PropTypes.string.isRequired,
						quote: PropTypes.string.isRequired,
						link: PropTypes.string.isRequired,
					})
				)
			})
		)
	})
}


export default FluidColumnsOneTitleBlock;
