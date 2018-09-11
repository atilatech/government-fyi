import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid';
import {Spacer} from 'layout/util'
import FillRestWithLine from 'components/static/TextAndLine'

/*
A block of text
takes a title and body of text

usage in data.js file:
{
	
	component: TextWithTitleBlock,
	data: {
		title: "",
		text: ""
	},
},

*/

const Title = styled.h2`
	display: inline-block;
	color: #333;
	margin: 10px 0;
	text-transform: none;
`;

const Text = styled.div`
	margin-top: 10px;
`;

const TextWithTitleBlock = (props) => {
	const {title, text, nColWidth} = props.data;
	const nWidth = nColWidth || 6; // default hack
	const offset = Math.floor((12-nWidth)/2)

	return(
		<Row>
	    <Col
	    	xsOffset={1} xs={10}
	      smOffset={2} sm={8}
				mdOffset={offset} md={nWidth}
	      lgOffset={offset} lg={nWidth}
	    >
	    	<Spacer height={40}/>
				{title &&
					<FillRestWithLine >
						<Title>{title}</Title>
					</FillRestWithLine>
				}
				<Text>{text}</Text>
			</Col>
		</Row>
	);
}


TextWithTitleBlock.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string,
		text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
		nColWidth: PropTypes.number,
	})
}


export default TextWithTitleBlock
