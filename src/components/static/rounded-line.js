import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledLine = styled.div`
	display: inline-block;
  box-sizing: border-box;
	height: 0;
	width: 100%;
	border: 2px solid ${props=>props.color?props.color:"#333"};
	border-radius: 2px;
	margin-bottom: 5px;
`;

const Line = (props) => (
	<StyledLine color={props.color} />
)

export default Line;

Line.propTypes = {
	color: PropTypes.string
}
