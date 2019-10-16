import React from 'react'
import styled from 'styled-components'
import Color from 'layout/colors'

const Icon = styled.span`
	display: inline-block;
	position: relative;
	top: -4.5px;
	line-height: 0;
	height: 14px;
	width: 14px;
	margin-left: 4px;
	background-color: ${props=>props.isActive?Color('yellow1'):"#eee"};
	border-radius: 7px;
	pointer-events: auto;
	cursor: pointer;

	@media not all and (hover: none) {
		&:hover {
			border-color: transparent;
			background-color: ${Color('yellow1')};
		}
	}
`;

const DotContainer = styled.span`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 100%;
	height: 100%;
`;

const Dot = styled.span`
	display: block;
	width: 2px;
	height: 2px;
	background-color: #323232;
	border-radius: 1px;
`;


class CitationButton extends React.Component {
	handleMouseEnter = () => {
    if(!this.props.isActive) {
    	this.props.onHover();
    }
  };

  handleMouseLeave = () => {
    if(!this.props.isActive) {
    	this.props.onMouseLeave();
    }
  };


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
};

export default CitationButton
