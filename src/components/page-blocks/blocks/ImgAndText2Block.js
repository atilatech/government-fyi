import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid';
import {Spacer} from 'layout/util'
import Color from 'layout/colors'

//-- similar to the about page floating heads

/*
{
	id: "000",
	component: ImgAndTextBlock,
	data: {
		src: {
			_1x: partnerlogos,
			_1x_webp: partnerlogos_w,
		},
		alt: "Image of partner logos"
		nColWidth: 6s,
    title: "This is a title",
    body: "and the rest of the body flows inline to the title."
	}
},
*/

const Container = styled.div`
	display: flex;
	align-items: center;

`

const Image = styled.img`
	display: block;
	margin-right: 30px;
	margin-left: 30px;
	box-sizing: border-box;
	width: 50%;
`
const TextContainer = styled.div`
	width: 50%;
`
const Title = styled.h2`
	display: block;
	border-top: 3px solid ${Color('black')};
	padding-top: 10px;
	margin-bottom: 10px;
	text-transform: lowercase;
`
const ImgAndTextBlock = (props) => {
	const { alt, image, nColWidth, title, body, flipped} = props.data;
	const nWidth = nColWidth || 8;
	const offset = Math.floor((12-nWidth)/2)
	const TextBlock =
		<TextContainer>
			<Title>{title}</Title>
			{body}
		</TextContainer>
	return(
		<React.Fragment>
			<Spacer height={70}/>
			<Row>
				<Col
					xsOffset={0} xs={12}
					smOffset={2} sm={8}
					mdOffset={offset} md={nWidth}
					lgOffset={offset} lg={nWidth}
				>
					<Container>
						{flipped ? <Image src={image} alt={alt} /> : TextBlock}
						{flipped ? TextBlock: <Image src={image} alt={alt} /> }
					</Container>
				</Col>
			</Row>
		</React.Fragment>
	);
}

ImgAndTextBlock.propTypes = {
		data: PropTypes.shape({
		image: PropTypes.string.isRequired,
    alt: PropTypes.string,
		nColWidth: PropTypes.number,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    body: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
	})
}

export default ImgAndTextBlock
