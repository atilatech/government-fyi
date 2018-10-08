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
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`
const ImgContainer = styled.div`
  width: calc(100% - 10px);
  padding-left: 5px;
  padding-right: 5px;
`

const Img = styled(MultisourceImage)`
  width: 100%;
	object-fit: contain;
	border-radius: 4px;
  margin: 0;
  @media screen and (max-width: 767px) {
    margin-top: 5px;
  }

`;

const Caption = styled.div`
  width: 70%;
  margin: 10px auto 0 auto;
	font-size: 13px;
	line-height: 20px;
	font-style: italic;
	color: #666;
	padding-left: 5px;
  text-align: center;
  @media screen and (max-width: 767px) {
    width: 95%;
  }
`;
const Attrib = styled.h3`
  display: block;
  font-size: 10px;
  color: #999;
  margin-bottom: 20px
  text-align: right;
`


const ImgBlock = (props) => {
	const {images, caption, nColWidth, attribution} = props.data;
	const nWidth = nColWidth || 10;
	const offset = Math.floor((12-nWidth)/2)
  const imageSet = images.map((img, i)=>{
    return(
      <ImgContainer key={i}>
        <Img imageHandles={img.src} alt={img.alt}/>
      </ImgContainer>
    )
  })

	return(
		<Row>
	    <Col
	    	xsOffset={0} xs={12}
	      smOffset={2} sm={8}
	      mdOffset={offset} md={nWidth}
	      lgOffset={offset} lg={nWidth}
     >
        <Spacer height={20}/>
        <Container>
          {imageSet}
        </Container>
        {attribution && <Attrib>{attribution}</Attrib>}
				{caption && <Caption>{caption}</Caption>}
				<Spacer height={40}/>
			</Col>
		</Row>
	);
}

ImgBlock.propTypes = {
	data: PropTypes.shape({
    images: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.shape({
    			_1x:PropTypes.string.isRequired,
    			_2x:PropTypes.string,
    			_1x_webp:PropTypes.string,
    			_2x_webp:PropTypes.string,
    		}).isRequired,
    		alt: PropTypes.string.isRequired,
      })
    ),
		caption: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		nColWidth: PropTypes.number,
		link: PropTypes.string,
    attribution: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
	})
}


export default ImgBlock;
