import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid';
import MultisourceImage from 'components/static/multisource-image'


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
	margin: 20px 0;
	@media screen and (max-width: 767px) {
		display: block;
		margin: 10px 30px;
	}
`
const Image = styled(MultisourceImage)`
	display: block;
	width: 130px;
	margin-right: 30px;
	@media screen and (max-width: 767px) {
		float: left;
		margin-bottom: 5px;
	}
`
const TextBlock = styled.div`
	width: calc(75% - 20px);
	@media screen and (max-width: 767px) {
		width: 100%
	}

`
const InlineBold = styled.h3`
	display: inline;
`
const ImgAndTextBlock = (props) => {
	const { alt, src, nColWidth, title, body} = props.data;
	const nWidth = nColWidth || 6;
	const offset = Math.floor((12-nWidth)/2)
	return(
    <Row>
      <Col
        xsOffset={0} xs={12}
        smOffset={2} sm={8}
        mdOffset={offset} md={nWidth}
        lgOffset={offset} lg={nWidth}
      >
        <Container>
          <Image
            imageHandles={src}
            alt={alt}
          />
          <TextBlock>
            <InlineBold>{title}</InlineBold>
            &nbsp;
            {body}
          </TextBlock>
        </Container>
      </Col>
    </Row>
  );
}

ImgAndTextBlock.propTypes = {
	data: PropTypes.shape({
		src: PropTypes.shape({
			_1x:PropTypes.string.isRequired,
			_2x:PropTypes.string,
			_1x_webp:PropTypes.string,
			_2x_webp:PropTypes.string,
		}),
    alt: PropTypes.string,
		nColWidth: PropTypes.number,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    body: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
	})
}

export default ImgAndTextBlock
