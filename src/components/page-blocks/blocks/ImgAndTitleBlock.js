import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid';
import {Spacer} from 'layout/util'
import MultisourceImage from 'components/static/multisource-image'

/*
{

	component: ImgAndTitle,
	data: {
		title: "June 5, 2018 election guide",
		subtitle: "There's a lot to vote on in SF, but we did the homework for you. We've read through a bunch of legalese, opinions, and articles to give you nonpartisan summaries on what you need to know to cast your vote for this primary election.",
		datePublished: new Date('July 29, 2018 15:20:00'), //must be Date objects
		dateModified: new Date('July 29, 2018 17:20:00')
	}
},
*/


const Title = styled.h1`
	margin-bottom: 0;
	text-rendering: optimizeLegibility;
	letter-spacing: -2.6px;
	@media screen and (max-width: 767px) {
		font-size: 38px;
		line-height: 46px;
		letter-spacing: -1.6px;
	}
`;


const Subheadline = styled.div`
	font-size: 14px;
	line-height: 20px;
	margin-top: 15px;
	@media screen and (max-width: 1023px) {
		width: 100%;
		margin-top: 30px;
	}
`;

// const Timestamp = styled.h4`
// 	text-align: right;
// 	font-size: 12px;
// 	color: #999;
// 	@media screen and (max-width: 767px) {
// 		text-align: left;
// 	}
// `
const Img = styled(MultisourceImage)`
	width: 100%;
	object-fit: contain;
	box-sizing: border-box;
	border-radius: 6px;
  margin-left: 30px;
  box-sizing: border-box;
`;

const Caption = styled.div`
	font-size: 14px;
	line-height: 18px;
	font-style: italic;
	margin-top: 5px;
	color: #666;
	padding-left: 5px;
  margin-left: 30px;
`;


const ImgAndTitle = (props) => {
	const {title, subtitle, src, caption, nColWidth, alt} = props.data;

	return(
		<Row>
	    <Col
	    	xsOffset={1} xs={10}
	      smOffset={2} sm={8}
	      mdOffset={1} md={10-nColWidth}
	      lgOffset={1} lg={10-nColWidth}
     >
				<Title>{title}</Title>
        <Spacer height={30}/>
				{subtitle && <Subheadline>{subtitle}</Subheadline>}
			</Col>
      <Col
	    	xsOffset={0} xs={12}
	      smOffset={1} sm={10}
	      mdOffset={0} md={nColWidth}
	      lgOffset={0} lg={nColWidth}
	    >
				<Img imageHandles={src} alt={alt || ""}/>
				{caption && <Caption>{caption}</Caption>}
				<Spacer height={30}/>
			</Col>
		</Row>
	)
}

ImgAndTitle.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string.isRequired,
		subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		datePublished: PropTypes.instanceOf(Date),
		dateModified: PropTypes.instanceOf(Date),
    nColWidth: PropTypes.number,
    src: PropTypes.shape({
      _1x:PropTypes.string.isRequired,
      _2x:PropTypes.string,
      _1x_webp:PropTypes.string,
      _2x_webp:PropTypes.string,
    }),
    alt: PropTypes.string.isRequired,
    caption: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	}).isRequired
}

export default ImgAndTitle;
