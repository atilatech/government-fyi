import React from 'react'
import styled from 'styled-components'

const CrossOutContainer = styled.div.attrs({
  style: props => ({
    backgroundColor: props.isOn?"rgba(255,255,255,0)":"rgba(255,255,255,0.5)",
  })
})`
	position: absolute;
	z-index: 2;
	width: 100%;
	height: 100%;
`

class CrossOutX extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isHovered: false}
  }
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    const width = (window.innerWidth || document.documentElement.clientWidth)
    document.getElementById('cross-out').setAttribute('width',width)
  }

  onMouseEnter = (e) => {
    e.target.setAttribute("opacity", 0)
    this.setState({isHovered: true})
  }

  onMouseLeave = (e) => {
    e.target.setAttribute("opacity", 0.6)
    this.setState({isHovered: false})
  }

  render() {
    return(
      <CrossOutContainer isOn={this.state.isHovered}>
        <svg id="cross-out" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} opacity="0.6" height="100%" viewBox="0 0 400 100" strokeWidth="10" stroke="#fff" strokeLinecap="round" xmlns="http://www.w3.org/2000/svg">
          <g><path d="M0,0 L400,100"></path><path d="M0,100 L400,0"></path></g>
        </svg>
      </CrossOutContainer>
    )
  }

}

export default CrossOutX;
