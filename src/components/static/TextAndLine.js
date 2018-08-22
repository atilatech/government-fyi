import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
	width: 100%;
	box-sizing: border-box;
`;

const Line = styled.div`
	display: inline-block;
	box-sizing: border-box;
	height: 0;
	width: ${props => props.lineWidth < 0 ? '100%' : props.lineWidth + 'px'};
	border: 3px solid black;
	border-radius: 3px;
	margin-left: ${props=> props.isReversed ? 0 : (props.lineWidth < 0 || props.isEmpty ? 0 : 20)}px;
	margin-right: ${props=> props.isReversed ? (props.lineWidth < 0 || props.isEmpty ? 0 : 20) : 0}px;
	margin-bottom: 5px;
`;


class TextAndLine extends React.Component {
	constructor(props) {
		super(props);
		this.state={lineWidth: 100};
	}
	componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
	}

	componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
	}

	//-- to be able to trigger an update from a parent component
	componentDidUpdate(prevProps) {
		if (prevProps.trigger !== this.props.trigger) {
			this.handleResize();
		}
	}

	handleResize = () => {
	  const w = this.innerContents.getBoundingClientRect().width;
	  const totalW = this.container.getBoundingClientRect().width;
	  let lineW = (w === 0) ? totalW-w : totalW-w-26; //-- totalWidth - textWidth - borderRadius*2 - marginLeft
	  this.setState({
			isEmpty: (w===0),
	  	lineWidth: lineW
	  })
	}
	render() {
		const { borderRadius, lineWidth, isEmpty} = this.state;
		const isReversed = (this.props.align === "right");
		return(
			<span ref={el=>this.container=el}>
				<Container>
					{isReversed && <Line br={borderRadius} isReversed={isReversed} lineWidth={lineWidth} isEmpty={isEmpty}/>}
					<span ref={el=>this.innerContents=el}>{this.props.children}</span>
					{!isReversed && <Line br={borderRadius} isReversed={isReversed} lineWidth={lineWidth} isEmpty={isEmpty}/>}
				</Container>
			</span>
		);
	}
}

TextAndLine.propTypes = {
	align: PropTypes.string,
}

TextAndLine.defaultProps = {
	align: "left",
}


export default TextAndLine;
