import React from 'react'
import styled from 'styled-components'
import CrossOut from 'pages/home/images/cross-out.svg'
const CrossOutContainer = styled.div.attrs({
  style: props => ({
    opacity: props.isOn?0:1,
  })
})`
	position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
	z-index: 2;
	width: 100%;
	height: 100%;
  overflow: hidden;
  background-color: rgba(255,255,255,0.5);
  transition: opacity 200ms ease-out;
`;

class CrossOutX extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isHovered: false}
  }

  onMouseEnter = () => {
    this.setState({isHovered: true})
  };

  onMouseLeave = () => {
    this.setState({isHovered: false})
  };

  render() {
    return(
      <CrossOutContainer
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        isOn={this.state.isHovered}>
        <img src={CrossOut} alt="prop 9 removed from ballot"/>
      </CrossOutContainer>
    )
  }

}

export default CrossOutX;
