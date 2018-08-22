import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


/*
Usage
<Overlay toggleVisibility={this.toggleVisibility} />

puts down an overlay on the screen and prevents scrolling
clicking on the overlay calls the prop function toggleVisibility
*/

const OverlayDiv = styled.div`
  position:fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
`;

class Overlay extends React.Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
    document.body.classList.add("stopscroll")
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
    document.body.classList.remove("stopscroll");
  }
  handleKeyDown = (event) => {
    if(event.key === 'Escape') {
      this.props.toggleVisibility(false)
    }
  }
  render() {  
    return(
      <OverlayDiv onClick={()=>{this.props.toggleVisibility(false)}} />
    )
  }
}

Overlay.propTypes = {
  toggleVisibility: PropTypes.func.isRequired
}

export default Overlay