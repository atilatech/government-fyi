import React from 'react'
import PropTypes from 'prop-types';
import enhanceWithClickOutside from 'react-click-outside'

import Color from 'layout/colors'
import CitationButton from './citation-button'
import PopupContainer from './popup-container'

/*
When a Citation is clicked, a popover (CitatationPopup) appears near
the highlighted text. It will show the direct quote
from which By The Bay's text is derived from.
The article is then directly linked.

this component handles the highlighting and has a button
what happens after that is handled by popup-container

PROPS:
------------------------
	link: string.isRequired,
	publication: string.isRequired,
	headline: string.isRequired,
	directQuote: string.isRequired,

USAGE:
------------------------
<Citation
	noLink
	noComment
	link='https://nytimes.com/some-article/'
	publication='ny times'
	headline='X-men fight for their lives'
	directQuote='Professor X said all xmen are created equal.'
>
	Xavier said it directly himself. This part will be highlighted.
</Citation>

here's a blank to copy:

<Citation link="" publication="" headline="" directQuote="">
</Citation>

*/

const styles = {
	selectText: {
		backgroundColor: Color('pink1'),
		transition: 'background-color 150ms ease-in',
		borderRadius: 5,
	},
	deselectText: {
		backgroundColor: 'transparent',
	},
	hoverText: {
		backgroundColor: Color('pink1',0,20,0.7),
	},
}
class Citation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isPopupVisible: false,
			taggedTextStyle: styles.deselectText,
			isActive: false,
		}
	  this.clickLocationY=0;
	  this.marker=null;
	}

	componentDidMount() {
    window.addEventListener("resize", this.handleResize);
	}
	componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
	}

	handleTouch = (event) =>  {
		event.preventDefault();
		event.stopPropagation(); //-- because will propagate to click outside
		this.clickLocationY = event.touches[0].pageY;
		this.toggleVisibility()
	}

	handleIconClick = (event) => {
		// event.preventDefault();
		this.clickLocationY = event.pageY
		this.toggleVisibility()
		// sendGAEvent({
		// 	category:"Citation",
		// 	action:"Clicked to view citation",
		// })
	}

	selectText = () => {
		this.setState({
			taggedTextStyle: styles.hoverText,
		})
	}
	deselectText = () => {
		this.setState({
			taggedTextStyle: styles.deselectText,
		})
	}

	toggleVisibility = (forceVisible) => {
		let visibility = !this.state.isPopupVisible
		if(forceVisible !== undefined) visibility = forceVisible
		this.setState({
			isPopupVisible: visibility,
			taggedTextStyle: (visibility ? styles.selectText : styles.deselectText),
			isActive: visibility,
		})
	}

	handleClickOutside() {
		this.toggleVisibility(false)
	}


	render() {
		const {isActive, taggedTextStyle, isPopupVisible} = this.state;

		return(
			<span>
					<span style={taggedTextStyle}>
						{this.props.children}
						<CitationButton
							onTouchEnd={this.handleTouch}
							isActive={isActive}
							onHover={this.selectText}
							onMouseLeave={this.deselectText}
							onClick={this.handleIconClick}
						/>
					</span>


		    {isPopupVisible &&
		      <React.Fragment>
						<PopupContainer
							toggleVisibility={this.toggleVisibility}
							clickPos={this.clickLocationY}
							{...this.props}
						>
							{this.props.children}
						</PopupContainer>
		      </React.Fragment>
		    }
			</span>
		);
	}
}

Citation.propTypes = {
	link: PropTypes.string,
	publication: PropTypes.string,
	headline: PropTypes.string,
	directQuote: PropTypes.string,
	data: PropTypes.shape({
		link: PropTypes.string,
		publication: PropTypes.string.isRequired,
		headline: PropTypes.string.isRequired,
		directQuote: PropTypes.string.isRequired,
	}),
}

Citation = enhanceWithClickOutside(Citation) //-- easy hack to dismiss other dialogs when another button is clicked
export default Citation
