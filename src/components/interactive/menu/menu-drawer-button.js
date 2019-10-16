import React from 'react'
import PropTypes from 'prop-types'
import MenuPortal from './menu-portal'
import MenuDrawer from './menu-drawer'
import Overlay from 'components/static/overlay'
import styled from 'styled-components'
import Color from 'layout/colors'

const Button = styled.h3`
  padding: 6px 10px;
  text-align: center;
  cursor: pointer;
  border-radius: 2px;

  @media not all and (hover: none) {
    &:hover {
      color: white;
      background-color: ${Color('pink1')};
      transition: background-color 150ms ease-out;
    }
  }
  &:active {
    background-color: ${Color('pink2')};
	}
`;

class MenuDrawerButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDrawer: false,
    }
  }

  toggleVisibility = (forceVisible) => {
    let visibility = !this.state.showDrawer;
    if(forceVisible !== undefined) visibility = forceVisible;
    this.setState({ showDrawer: visibility})
  };

  render() {
    return(
      <React.Fragment>
        <Button
          onClick={()=>{this.toggleVisibility()}}>
          {this.props.text}
        </Button>
        {this.state.showDrawer &&
          <MenuPortal>
            <Overlay toggleVisibility={this.toggleVisibility}/>
            <MenuDrawer items={this.props.items} toggleVisibility={this.toggleVisibility}/>
          </MenuPortal>
        }
      </React.Fragment>
    );
  }
}

MenuDrawerButton.propTypes = {
  text: PropTypes.string,
  items: PropTypes.array.isRequired,
};

MenuDrawerButton.defaultProps = {
  text: 'More...'
};

export default MenuDrawerButton
