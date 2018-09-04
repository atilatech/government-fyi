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
const Line = styled.div`
	width: 100%;
	height: 0;
	border: 2px solid ${Color('black')};
	border-radius: 2px;
	margin-top: 10px;
	margin-bottom: 10px;
`

const Container = styled.div`
	display: flex;
	align-items: center;

`

const Image = styled.img`
	display: block;
	margin-right: 30px;
	margin-left: 30px;
	box-sizing: border-box;
`
const TextContainer = styled.div`
`
const Title = styled.h2`
	display: block;
	margin-bottom: 10px;
	text-transform: lowercase;
`
class ImgAndTextBlock extends React.Component {
	constructor(props) {
		super(props);
		this.state={isSm: false};
	}

	componentDidMount() {
		window.addEventListener("resize", this.handleResize);
		this.handleResize();
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.handleResize);
	}

	handleResize = () => {
		const width = (window.innerWidth || document.documentElement.clientWidth)
		this.setState({
			isSm: width < 1023
		})
	}

	render() {
		const { alt, image, nColWidth, title, body, flipped} = this.props.data;
		const nWidth = nColWidth || 8;
		const offset = Math.floor((12-nWidth)/2)
		const TextBlock =
			<TextContainer>
				<Line/>
				<Title>{title}</Title>
				{body}
			</TextContainer>
		return(
			<React.Fragment>
				<Spacer height={70}/>
				<Row>
					<Col
						xsOffset={1} xs={10}
						smOffset={2} sm={8}
						mdOffset={offset} md={nWidth}
						lgOffset={offset} lg={nWidth}
					>
						{flipped || this.state.isSm ? <Image src={image} alt={alt} /> : TextBlock}
					</Col>
					<Col
						xsOffset={1} xs={10}
						smOffset={2} sm={8}
						mdOffset={0} md={nWidth}
						lgOffset={0} lg={nWidth}
					>
						{flipped  || this.state.isSm ? TextBlock: <Image src={image} alt={alt} /> }
					</Col>
				</Row>
			</React.Fragment>
		);
	}
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
