import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components'
import FillRestWithLine from 'components/static/TextAndLine'
import {Spacer} from 'layout/util'

/*
usage

{

	component: SectionTitleBlock,
	data: {
		title:"title about something",
		subtitle: <span>Another subtitle</span>,
		nColWidth: 6,
		img: prevPropImg, //optional
		align: "right", //optional
	}
},
*/

const SectionTitle = styled.h2`
	display: inline;
	text-transform: none;
	margin: 20px 0 3px 0;
`;
const SectionSubtitle = styled.div`
	font-style: italic;
	font-size: 14px;
	text-align: ${props=>props.align};
	@media screen and (max-width: 767px) {
		text-align: center;
	}
`;

const Img = styled.img`
	display: inline;
	width: 32px;
	margin-right: ${props=>props.isReversed?0:10}px;
	margin-left: ${props=>props.isReversed?10:0}px;
	transform: rotate(${props=>props.isReversed?-13:13}deg);
	@media screen and (max-width: 767px) {
		display: block;
		margin: 0 auto;
	}

`;

const TitleBar = (props) => {
	const {img, title, subtitle, align, nColWidth} = props.data;
	const nWidth = nColWidth || 8;
	const offset = Math.floor((12-nWidth)/2)
	const isReversed = (align==="right");
	return(
		<Row>
			<Col
				xsOffset={1} xs={10}
				smOffset={2} sm={8}
				mdOffset={offset} md={nWidth}
	      lgOffset={offset} lg={nWidth}
			>
				<Spacer height={70} xsHeight={35}/>
				<FillRestWithLine align={align}>
					{img && !isReversed && <Img src={img} isReversed={isReversed} alt="title image"/>}
					<SectionTitle>{title}</SectionTitle>
					{img && isReversed && <Img src={img} isReversed={isReversed} alt="title image"/>}
				</FillRestWithLine>
				{subtitle &&
					<SectionSubtitle align={align}>
						{subtitle}
					</SectionSubtitle>
				}
			</Col>
		</Row>
	)
}

TitleBar.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
		subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		nColWidth: PropTypes.number,
		img: PropTypes.string,
		align: PropTypes.string,
	})
}

export default TitleBar;
