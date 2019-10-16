import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import CitationCard from './citation-card'
/*
When a PopupContainer is clicked, a popover appears over
the highlighted text. It will show the direct quote
from which By The Bay's text is derived from.
The article is then directly linked.

PROPS:
------------------------
	toggleVisibility: function.isRequired
	clickPos: number, //--used to scroll into position


USAGE:
will likely be used inside a parent component
------------------------
<PopupContainer
	toggleVisibility={this.toggleVisibility}
	{...this.props}
*/



const popupDimensions = {
	height: 220,
	width: 245,
};

const PopupPosition = styled.span`
	position: absolute;
	left: 20px;
	z-index: 3;
	transform: translateY(-${popupDimensions.height-100}px);
	@media screen and (max-width: 767px) {
		position: static;
		width: 100%;
	}
`;

const Container = styled.span`
  font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
	position: absolute;
	display: inline-block;
	width: ${popupDimensions.width}px;
	overflow: hidden;
	box-shadow: 12px 12px 2px rgba(0,0,0,0.1), -20px 16px 2px rgba(0,0,0,0.04);
	color: white;
	border-radius: 4px;
	@media screen and (max-width: 767px) {
		border-radius: 0;
		max-height: 270;
		position: fixed;
		width: 100%;
		left: 0;
		bottom: 0;
		z-index: 3;
	}

`;



///------------------------------------------------

class PopupContainer extends React.Component {
	constructor(props) {
		super(props);
    let width = (window.innerWidth || document.documentElement.clientWidth);
		this.state = {
			windowWidth: width,
			isXsScreen: (width < 1024),
			initialScrollY: 0,
			doneScrolling: false,
		}
	}

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("resize", this.handleResize);
    window.addEventListener('scroll', this.handleScroll);

  	//-- scroll to center the highlighted text
   	if( this.state.isXsScreen ) {
	  	window.scroll({
			  top: this.props.clickPos-(window.innerHeight || document.documentElement.clientHeight)/4,
			  behavior: 'smooth'
			});
  	} else {
  		window.scroll({
			  top: this.props.clickPos-(window.innerHeight || document.documentElement.clientHeight)/2,
			  behavior: 'smooth'
			});
  	}
   	//-- delay start of recording bc otherwise our scroll-into-focus will autocancel it
    setTimeout(() =>
			{this.setState({
				initialScrollY: (window.pageYOffset || document.documentElement.scrollTop),
				doneScrolling: true
			})
    }, 600)
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener('scroll', this.handleScroll);
  }

  removeScrollListener = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleKeyDown = (event) => {
    if(event.key === 'Escape') {
      this.props.toggleVisibility(false)
    }
  };

	handleResize = () => {
    let w = (window.innerWidth || document.documentElement.clientWidth);
    this.setState({ windowWidth: w });
    (w < 1024) ?	this.setState({ isXsScreen: true, }) : this.setState({ isXsScreen: false, });
    this.props.toggleVisibility(false)
	};

  handleDismiss = () => {
  	this.props.toggleVisibility(false);
  };
  handleScroll = () => {
  	let currentY = (window.pageYOffset || document.documentElement.scrollTop);
		//-- dismiss after user scrolls 20% of the screen height in either direction
		let height = (window.innerHeight || document.documentElement.clientHeight);
		if(this.state.doneScrolling && Math.abs(currentY - this.state.initialScrollY) > height/6) {this.props.toggleVisibility(false)}
  };


	render() {
		return(
			<PopupPosition>
				<Container>
					<CitationCard {...this.props}/>
				</Container>
			</PopupPosition>
		);
			//-- TODO add close button to bottom if it exceeds the maxHeight
	}
}
PopupContainer.propTypes = {
	toggleVisibility: PropTypes.func.isRequired, //-- to give access to the the visibility function
	clickPos: PropTypes.number.isRequired, //-- used to focus the text in the right place
	noComment: PropTypes.bool, //-- in case you don't want the comment card
};

export default PopupContainer
