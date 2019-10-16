import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid';
import {Spacer} from 'layout/util'

/*

example usage for data.js:
{
	
	component: QuoteBlock,
	data: {
		author: "Bay Guardian – Tim Redmond",
		text: "There are more than 2,400 children on the wait list for affordable child care. Prop. C would clear that list, provide subsidies for families earning up to 200 percent of median income, and raise wages for childcare workers.",
	},
},
*/

const Quote = styled.div`
	color: #aaa;
	font-size: 24px;
	line-height: 36px;
	font-style: italic;
	@media screen and (max-width:767px) {
		font-size: 22px;
		line-height: 30px;
	}
`;

const Attribution = styled.div`
	margin-top: 20px;
	text-align:right;
`;

const QuoteBlock = (props) => {
	const {text, author} = props.data;
	return(
		<Row>
	    <Col
	    	xsOffset={1} xs={10}
	      smOffset={2} sm={8}
	      mdOffset={2} md={8}
	      lgOffset={2} lg={8}
	    >
	    	<Spacer height={70} xsHeight={30} />
				<Quote>&ldquo; {text} &rdquo;</Quote>
				<Attribution>– {author}</Attribution>
			</Col>
		</Row>
	);
};

QuoteBlock.propTypes = {
	data: PropTypes.shape({
		text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
		author: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
	})
};

export default QuoteBlock;
