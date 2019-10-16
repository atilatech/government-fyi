import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components'
import {Spacer} from 'layout/util'

/*
usage

{
	component: SubsectionTitleBlock,
	data: {
		title:"title about something",
		subtitle: <span>Another subtitle</span>,
		nColWidth: 6,
		img: prevPropImg, //optional
		align: "right", //optional
	}
},
*/

const SectionTitle = styled.h3`
	font-size: 14px;
	font-weight: bold;
	display: block;
	text-align: center;
	@media screen and (max-width: 767px) {
		font-weight: 400;
	}
`;

const SubsectionTitle = (props) => {
	const {title, nColWidth} = props.data;
	const nWidth = nColWidth || 6;
	const offset = Math.floor((12-nWidth)/2);
	return(
		<Row>
			<Col
				xsOffset={1} xs={10}
				smOffset={2} sm={8}
				mdOffset={offset} md={nWidth}
	      lgOffset={offset} lg={nWidth}
			>
				<Spacer height={35}/>
				<SectionTitle>{title}</SectionTitle>
				<Spacer height={10}/>
			</Col>
		</Row>
	)
};

SubsectionTitle.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
		nColWidth: PropTypes.number,

	})
};

export default SubsectionTitle;
