import React from 'react'
import styled from 'styled-components'
import Color from 'layout/colors'

const Icon = styled.span`
	display: inline-block;
	position: relative;
	top: -5px;
	line-height: 0;
	height: 14px;
	margin-left: 3px;
	background-color: ${props=>props.isActive?Color('pink1'):"#eee"};
	border-radius: 1px;
	pointer-events: auto;
	cursor: pointer;

	@media not all and (hover: none) {
		&:hover {
			border-color: transparent;
			background-color: ${Color('pink1')};
		}
	}
`;

const DotContainer = styled.span`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 14px;
	height: 100%;
`;

const Dot = styled.span`
	display: block;
	width: 2px;
	height: 2px;
	background-color: black;
	border-radius: 1px;
`;


class CitationButton extends React.Component {
	handleMouseEnter = () => {
    if(!this.props.isActive) {
    	this.props.onHover();
    }
  }

  handleMouseLeave = () => {
    if(!this.props.isActive) {
    	this.props.onMouseLeave();
    }
  }


	render(){
		const {onClick, onTouchStart, isActive} = this.props;
		return(
			<Icon
				onClick={onClick}
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
				onTouchEnd={onTouchStart}
				isActive={isActive}
			>
				<DotContainer>
					<Dot/>
					<Dot/>
					<Dot/>
				</DotContainer>
			</Icon>

		);
	}
}

CitationButton.defaultProps = {
	isActive: false,
}

export default CitationButton
