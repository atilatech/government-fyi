import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

//-- margin-left: -1px to make visually aligned
const StyledLine = styled.div`
	display: inline-block;
  box-sizing: border-box;
	height: 0;
	width: ${props=>props.width?props.width:"100%"};
	border: 2px solid ${props=>props.color?props.color:"#333"};
	border-radius: 2px;
	margin-bottom: 5px;
	margin-left: -1px;
`;

const Line = (props) => (
	<StyledLine color={props.color} width={props.width} />
)

export default Line;

Line.propTypes = {
	color: PropTypes.string,
	width: PropTypes.string,
}
