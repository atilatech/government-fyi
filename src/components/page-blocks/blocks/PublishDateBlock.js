import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid';
import {Spacer} from 'layout/util'


const Timestamp = styled.h4`
	text-align: center;
	font-size: 12px;
	color: #666;
	letter-spacing: -0.2px;
	@media screen and (max-width: 767px) {
	}
`

const PublishDateBlock = (props) => {
	const {dateCreated, dateModified} = props.data;
	const dateOptions = {month: "2-digit", day: "2-digit", year: "2-digit", hour: '2-digit', minute:'2-digit'}
	let publishDate = null;
	if(dateCreated) {
		publishDate = (dateCreated.getTime() !== dateModified.getTime()) ?
			`Last updated on ${dateModified.toLocaleString([], dateOptions)}` :
			`Published on ${dateCreated.toLocaleString([], dateOptions)}`;
	}
	return(
		<Row>
	    <Col
	    	xsOffset={1} xs={10}
	      smOffset={2} sm={8}
	      mdOffset={3} md={6}
	      lgOffset={3} lg={6}
	    >
				<Spacer height={20}/>
				<Timestamp>{publishDate}</Timestamp>
			</Col>
		</Row>
	);
}

PublishDateBlock.propTypes = {
	data: PropTypes.shape({
		dateCreated: PropTypes.instanceOf(Date),
		dateModified: PropTypes.instanceOf(Date),
	})
}

export default PublishDateBlock;
