import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid';
import Line from 'components/static/rounded-line'
import Color from 'layout/colors'
import {Spacer} from 'layout/util'

/* UPDATE
{

	component: PageTitleBlock,
	data: {
		title: "June 5, 2018 election guide",
		subtitle: "There's a lot to vote on in SF, but we did the homework for you. We've read through a bunch of legalese, opinions, and articles to give you nonpartisan summaries on what you need to know to cast your vote for this primary election.",
	}
},
*/


const Title = styled.h1`
  text-transform: uppercase;
  margin-bottom: 0;
  text-rendering: optimizeLegibility;
  letter-spacing: -2.6px;
  @media screen and (max-width: 767px) {
    font-size: 38px;
    line-height: 46px;
    letter-spacing: -1.6px;
  }
`;

const BodyContainer = styled.div`
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 5px;
  @media screen and (max-width: 767px) {
    padding-left: 0;
  }

`

const BodyText = styled.div`
	font-size: 14px;
  line-height: 20px;
  @media screen and (max-width: 767px) {
		margin-top: 15px;
	}
`;

const Subheadline = styled.div`
  font-style: italic;
  font-size: 14px;
  margin-top: 0;
`


const FrontPageTitle = (props) => {
	const {title, subtitle, body} = props.data;
	return(
    <React.Fragment>
      <Spacer height={35}/>
      <Row>
        <Col
          xsOffset={1} xs={10}
          smOffset={1} sm={10}
          mdOffset={1} md={6}
          lgOffset={1} lg={5}
        >
          <Title>{title}</Title>
          <Subheadline>{subtitle}</Subheadline>
        </Col>
        <Col
          xsOffset={1} xs={10}
          smOffset={1} sm={10}
          mdOffset={0} md={4}
          lgOffset={0} lg={5}
        >
          <BodyContainer>
            <Line color={Color('black')} width="35%"/>
            {body && <BodyText>{body}</BodyText>}
          </BodyContainer>
        </Col>
      </Row>
      <Spacer height={55}/>
    </React.Fragment>
	)
}

FrontPageTitle.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string.isRequired,
		subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		body: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	}).isRequired
}

export default FrontPageTitle;
