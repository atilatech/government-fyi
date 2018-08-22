import React from 'react'
import PropTypes from 'prop-types';

/*
Expands an acronym to the full text. Toggleable

Usage:
<Acronym acronym='BoS' expanded='Board of Supervisors' />

Text-decoration style not supported on mobile, so maybe have to switch to border-bottom
*/

const styles = {
	acronym: {
		textDecoration: 'underline',
		textDecorationStyle: 'dotted',
		textDecorationColor: '#999',
		cursor: 'pointer',

	},
	hover: {
		textDecorationStyle: 'solid',
		textDecorationColor: 'black',
	},
	noDecoration: {
		textDecoration: 'none',
		cursor: 'auto',
	}
}

class Acronym extends React.Component {
	constructor(props) {
		super(props)
		const text = props.data ? props.data.acronym : props.acronym;
		this.state = {
			textToDisplay: text,
			style: styles.acronym,
		}
		this.isExpanded = false
		this.didExpand = false
	}

	selectText(element) {
    let text = element;
    let range, selection;
    if (document.body.createTextRange) {
      range = document.body.createTextRange();
      range.moveToElementText(text);
      range.select();
    } else if (window.getSelection) {
      selection = window.getSelection();
      range = document.createRange();
      range.selectNodeContents(text);
      selection.removeAllRanges();
      selection.addRange(range);
    }
	}


	handleMouseEnter = () => {
		if (this.props.singleClick && this.didExpand) {
			this.setState({	style: styles.noDecoration });
		} else {
			this.setState({	style: {...styles.acronym, ...styles.hover} });
		}
	}

	handleMouseLeave = () => {
		if (this.props.singleClick && this.didExpand) {
			this.setState({	style: styles.noDecoration });
		} else {
			this.setState({ style: styles.acronym });
		}
	}

	//-- toggle between expanded and acronym
	handleClick = (e) => {
		const dataSource = this.props.data ? this.props.data : this.props;
		const {expanded, acronym, highlightOnClick, singleClick} = dataSource;
		this.isExpanded = !this.isExpanded
		if((singleClick || this.props.singleClick) && this.didExpand) {
			this.isExpanded = true;
		} //-- force it to stay expanded
		this.isExpanded ?
			this.setState({textToDisplay:expanded}) :
			this.setState({textToDisplay:acronym})
		this.didExpand = true;
		if(highlightOnClick){ this.selectText(e.target) }
	}

	render() {
		return(
			<span
				style={this.state.style}
				onClick={this.handleClick}
	      onMouseEnter = {this.handleMouseEnter}
	     	onMouseLeave = {this.handleMouseLeave}
     	>
				{this.state.textToDisplay}
			</span>

		);
	}
}

Acronym.propTypes = {
	acronym: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	expanded: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	singleClick: PropTypes.bool,
	highlightOnClick: PropTypes.bool,
	data: PropTypes.shape({
		acronym: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		expanded: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		singleClick: PropTypes.bool,
		highlightOnClick: PropTypes.bool,
	})
}

Acronym.defaultProps = {
	singleClick: false,
	highlightOnClick: false,
}
export default Acronym
