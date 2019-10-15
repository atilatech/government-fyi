import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid';
import {Spacer} from 'layout/util'
import FillRestWithLine from 'components/static/TextAndLine'
import Color from 'layout/colors'
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
	color: ${Color('black')};
	margin: 20px 0 3px 0;
	text-transform: none;
`;
const Subtitle = styled.div`
	font-style: italic;
	font-size: 14px;
`;

const Text = styled.div`
	margin-top: 10px;
`;

const TextWithTitleBlock = (props) => {
	const {title, subtitle, text, nColWidth} = props.data;
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
					<React.Fragment>
						<FillRestWithLine >
							<Title>{title}</Title>
						</FillRestWithLine>
						{subtitle &&
							<Subtitle>{subtitle}</Subtitle>
						}
					</React.Fragment>
				}
				<Text>{text}</Text>
			</Col>
		</Row>
	);
}


TextWithTitleBlock.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		subtitle: PropTypes.string,
		text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
		nColWidth: PropTypes.number,
	})
}


export default TextWithTitleBlock
