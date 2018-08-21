import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid';
import { Spacer } from 'layout/util'

/*
example usage in data files
{
	id: "000",
	component: PhotoCarouselBlock,
	data: {
		images: [
			{
				src: "https://scontent-sjc3-1.cdninstagram.com/vp/352ad86964da01ff4445cb78d718b8ff/5B90AE19/t51.2885-15/e35/26073831_1889519484672012_6292087330127740928_n.jpg",
				caption: "Picking an apple",
				link:"https://www.instagram.com/p/Bd1Qk7AAEXc/?taken-by=johnchiangca",
			},
			{
				src: "https://pbs.twimg.com/media/DL08WL0VQAAKhpd.jpg:large",
				caption: "Playing with kids",
				link:"https://twitter.com/JohnChiangCA/status/917956261479460865",
			},
			{
				src: "https://scontent-sjc3-1.cdninstagram.com/vp/46e4fb279192a7c0f3e41b0f97c95697/5B8A4DDB/t51.2885-15/s640x640/sh0.08/e35/21985439_709797352544932_7767190631008436224_n.jpg",
				caption: "Eating a burger",
				link:"https://www.instagram.com/p/BZpbzP1A52V/?taken-by=johnchiangca",
			},
		],
	},
},
*/

const ImageBlock = styled.div`
	position: relative;
	padding: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Img = styled.img`
	border: 3px solid black;
	border-radius: 3px;
	object-fit: cover;
	object-position: 50% 0;
	height: 200px;
	width: 200px;
`;

const Caption = styled.h3`
	text-align: center;
`;

const CarouselContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	@media screen and (max-width: 767px) {
		flex-direction: column;
	}
`;

const PhotoCarouselBlock = (props) => {
	const {images} = props.data;
	const imageBlocks = images.map ( (image, i) => (
		<ImageBlock key={i}>
			<a href={image.link}>
				<Img src={image.src} />
			</a>
			<Caption>{image.caption}</Caption>
		</ImageBlock>
		));

	return(
		<Row>
	    <Col
	    	xsOffset={0} xs={12}
	      smOffset={0} sm={12}
	      mdOffset={1} md={10}
	      lgOffset={1} lg={10}
			>
				<Spacer height={30}/>
				<CarouselContainer>
					{imageBlocks}
				</CarouselContainer>
			</Col>
		</Row>
	);
}

PhotoCarouselBlock.propTypes = {
	data: PropTypes.shape({
		images: PropTypes.arrayOf(
			PropTypes.shape({
				src: PropTypes.string.isRequired,
				caption: PropTypes.string,
				link: PropTypes.string.isRequired,
			})
		).isRequired
	}).isRequired
}

export default PhotoCarouselBlock;
