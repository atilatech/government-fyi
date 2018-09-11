import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';

/*
creates a table

usage for data.js file:
{
	
	component: ChartBlock,
	data: {
		title: "Thanks for making this easy, SF!",
		caption: <div>caption as an element</div>,
		isFirstRowHeader: true,
		rowData: [
			[
				"Prop C",
				"Prop D",
				"Final Outcome",
			],
			[
				"> 50%",
				"> 66%",
				"Measure with most votes wins*",
			],
			[
				"< 50%",
				"> 66%",
				"Prop D wins for sure"
			],
			[
				"> 50%",
				"< 66%",
				"Prop C wins (maybe*)",
			],
			[
				"< 50%",
				"< 66%",
				"Neither measure is adopted",
			],
		],
	},
},
*/

const CenterVert = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const TR = styled.tr`
	font-weight: ${props=>props.isFirst?"bold":"normal"};
	background-color: #eee;
`;

const TableDatum = styled.td`
	padding: 5px 8px;
`;

const Table = styled.table`
	font-family: ${props=>props.theme.fonts.h5};
	border: 2px solid black;
	border-radius: 2px;
	box-sizing: border-box;
	@media screen and (max-width: 767px){
		font-size: 14px;
	}
`;

const Caption = styled.div`
	font-size: 14px;
	font-style-italic;
	color: #666;
	margin-top: 80px;
	@media screen and (max-width: 1023px){
		margin-top: 10px;
	}
`;

const Title = styled.h3`
	margin-top: 30px;
	margin-bottom: 20px;
	text-align: center;
`;

const ChartBlock = (props)=> {
	const {rowData, isFirstRowHeader, title, caption} = props.data;
	const rows = rowData.map( (row, i) => {
		const rowElements = row.map( (datum, j) => (
			<TableDatum key={j}>{row[j]}</TableDatum>
			)
		);
		return(
			<TR key={i} isFirst={i===0 && isFirstRowHeader}>
				{rowElements}
			</TR>
		);
	});

	return(
			<Row>
		    <Col
		    	xsOffset={0} xs={12}
		      smOffset={1} sm={10}
		      mdOffset={3} md={6}
		      lgOffset={4} lg={4}
		    >
					<CenterVert>
						{title && <Title>{title}</Title>}
						<Table>
							<tbody>
								{rows}
							</tbody>
						</Table>
					</CenterVert>
				</Col>
		    <Col
		    	xsOffset={1} xs={10}
		      smOffset={1} sm={10}
		      mdOffset={0} md={2}
		      lgOffset={0} lg={3}
		    >
					{caption && <Caption>{caption}</Caption>}
				</Col>
			</Row>
	);
}

ChartBlock.propTypes = {
  data: PropTypes.shape({
    rowData: PropTypes.arrayOf(PropTypes.array).isRequired,
		isFirstRowHeader: PropTypes.bool,
		title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		caption: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  }).isRequired
}

export default ChartBlock;
