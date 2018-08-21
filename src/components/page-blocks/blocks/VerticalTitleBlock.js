import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components'

/*
usage

{
	id:"000",
	component: VerticalTitleBlock,
	data: {
		title:"title about something",
		align: "right", //optional
	}
},
*/


const Position = styled.div`
  display: flex;
  justify-content: center;
  transform: rotate(90deg) translateX(70%);
  @media screen and (max-width: 1023px) {
    transform: none;
  }
`

const Title = styled.h2`
  font-weight: bold;
  color: #eee;
  font-size: 70px;
  height: 0;
  @media screen and (max-width: 1023px) {
    margin-top: 20px;
  }
`
const StyledCol = styled(Col)`
  width: 100%;
`

const VerticalTitle = (props) => {
	const {title} = props.data;
	return(
    <Row>
      <StyledCol
        xsOffset={1} xs={10}
        smOffset={2} sm={8}
        mdOffset={0} md={3}
        lgOffset={0} lg={3}
      >
        <Position>
          <Title>
            {title}
          </Title>
        </Position>
      </StyledCol>
    </Row>
  )
}

VerticalTitle.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
	})
}

export default VerticalTitle;
