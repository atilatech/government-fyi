import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid';
import {Spacer} from 'layout/util'
import MultisourceImage from 'components/static/multisource-image'
import {OrderingContext} from 'ordering-context.js'


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
	border-radius: 4px;
  margin-left: 30px;
  box-sizing: border-box;
  @media screen and (max-width: 767px) {
    margin-left: 0;
    border-radius: 0;
  }
`;

const Caption = styled.div`
	font-size: 14px;
	line-height: 18px;
	font-style: italic;
	margin-top: 5px;
	color: #666;
	padding-left: 5px;
  margin-left: 30px;
  @media screen and (max-width: 767px) {
    margin-left: 0;
  }
`;


const ImgAndTitle = (props) => {
	const {title, subtitle, src, caption, nColWidth, alt} = props.data;
 	const textCol =
		<Col
			xsOffset={1} xs={10}
			smOffset={2} sm={8}
			mdOffset={1} md={10-nColWidth}
			lgOffset={1} lg={10-nColWidth}
		>
			<Title>{title}</Title>
			<Spacer height={30} xsHeight={10}/>
			{subtitle && <Subheadline>{subtitle}</Subheadline>}
		</Col>

	const imgCol =
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
	return(
		<Row>
			<OrderingContext.Consumer>
				{({isXs}) => (
					<React.Fragment>
						{isXs?
							<React.Fragment>
								{imgCol}
								{textCol}
							</React.Fragment>
						:
						<React.Fragment>
							{textCol}
							{imgCol}
						</React.Fragment>
						}
					</React.Fragment>
				)}
			</OrderingContext.Consumer>
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
