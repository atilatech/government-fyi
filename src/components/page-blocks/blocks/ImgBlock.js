import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid';
import {Spacer} from 'layout/util'
// import AnnotationsList from 'components/interactive/annotation/AnnotationsList';
import MultisourceImage from 'components/static/multisource-image'

/*
creates a centered image of an even number of columns

{
	
	component: ImgBlock,
	data: {
		src: {
			_1x: partnerlogos,
			_1x_webp: partnerlogos_w,
		},
		alt: "Image of partner logos",
		nColWidth: 8,
	}
},

*/

const Img = styled(MultisourceImage)`
	width: 100%;
	object-fit: contain;
	box-sizing: border-box;
	border-radius: 6px;
	@media not all and (hover: none) {
		&:hover {
			cursor: ${props=>props.isLink?"pointer":"auto"};
		}
	}
`;

const Caption = styled.div`
	font-size: 14px;
	line-height: 18px;
	font-style: italic;
	color: #666;
	padding-left: 5px;
`;

const StyledRow = styled(Row)`
	@media print {
		display: none;
	}
`;

const ImgBlock = (props) => {
	const {src, caption, nColWidth, link, noBorder, alt} = props.data;
	const nWidth = nColWidth || 8;
	const offset = Math.floor((12-nWidth)/2)
	return(
		<StyledRow>
	    <Col
	    	xsOffset={0} xs={12}
	      smOffset={2} sm={8}
	      mdOffset={offset} md={nWidth}
	      lgOffset={offset} lg={nWidth}
	    >
				<Spacer height={20}/>
				{link ?
					<a target="_blank" rel="noopener noreferrer" href={link}>
						<Img isLink imageHandles={src} alt={alt || caption || ""}/>
					</a>
				:
				<Img imageHandles={src} alt=""/>
				}
				{caption && <Caption>{caption}</Caption>}
				<Spacer height={40}/>
			</Col>
		</StyledRow>
	);
}

ImgBlock.propTypes = {
	data: PropTypes.shape({
		src: PropTypes.shape({
			_1x:PropTypes.string.isRequired,
			_2x:PropTypes.string,
			_1x_webp:PropTypes.string,
			_2x_webp:PropTypes.string,
		}),
		alt: PropTypes.string.isRequired,
		caption: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		nColWidth: PropTypes.number,
		link: PropTypes.string,
	})
}


export default ImgBlock;
