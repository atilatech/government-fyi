import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid';
// import {Spacer} from 'layout/util'
import Color from 'layout/colors'
import {mapResultToColor} from 'pages/prop-attributes'

/*

usage in data.js file:
{

	component: ResultBlock,
	data: {
		title: "",
		result:"",
		text: ""
	},
},

*/
const TitlePos = styled.div`
	position: relative;
	top: -38px;
`;

const Title = styled.h2`
	display: block;
	position: absolute;
	color: ${props=>props.color?props.color:Color('black')};
	background: #fff;
	padding: 0 20px;
	text-transform: none;
`;
const Container = styled.div`
	margin-top: 30px;
	box-sizing: border-box;
	padding: 20px 30px 30px 30px;
	border-radius: 8px;
	border: 4px solid ${props=>props.color?props.color:"#323232"};
`;

const Text = styled.div`
	margin-top: 50px;
	margin-left: 20px;
	margin-right: 20px;
`;

const ResultBlock = (props) => {
	const {title, text, nColWidth, result} = props.data;
	const nWidth = nColWidth || 8; // default hack
	const offset = Math.floor((12-nWidth)/2);

	return(
		<Row>
	    <Col
	    	xsOffset={1} xs={10}
	      smOffset={2} sm={8}
				mdOffset={offset} md={nWidth}
	      lgOffset={offset} lg={nWidth}
	    >
				<Container color={mapResultToColor[result]}>
					<TitlePos>
						<Title color={mapResultToColor[result]}>{title}</Title>
					</TitlePos>
					<Text>{text}</Text>
				</Container>
			</Col>
		</Row>
	);
};


ResultBlock.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string,
		result: PropTypes.string,
		text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
		nColWidth: PropTypes.number,
	})
};


export default ResultBlock
