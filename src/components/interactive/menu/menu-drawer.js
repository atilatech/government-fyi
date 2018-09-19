import React from 'react'
import PropTypes from 'prop-types'
import DrawerItem from './menu-drawer-item'
import {CloseIcon} from 'components/static/icons'
import styled from 'styled-components'


const DrawerPosition = styled.div.attrs({
  style: props => ({
    transform: `translateX(${props.activated?0:100}%)`,
    opacity: props.activated?1:0
  })
})`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background:linear-gradient(-45deg, #ddd, #eee);
  background-color: azure;
  z-index: 5;
  transition-property: opacity, transform;
  transition-duration: 150ms;
  transition-timing-function: ease-out;
`

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 100%;
  background-color: #333;
`;

const More = styled.h2`
  font-size: 16px;
  width: 100%;
  color: white;
  padding-left: 20px;
`;

const CloseWrapper = styled.div`
  width: 20px;
  height: 20px;
  padding-right: 20px;
  cursor: pointer;
`;


class MenuDrawer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {activated: false}
  }

  componentDidMount() {
    this.setState({activated:true})
  }

  render() {
    const {toggleVisibility} = this.props;
    const drawerItems = this.props.items.map( (item, i) => (
      <DrawerItem
        key={i}
        toggleVisibility={toggleVisibility}
        text={item.longLabel || item.label}
        to={item.to}
        link={item.link}
      />
    ));
    return(
      <DrawerPosition activated={this.state.activated}>
        <TopBar>
          <More>We must go deeper</More>
          <CloseWrapper onClick={()=>{toggleVisibility(false)}}>
            <CloseIcon color='#fff'/>
          </CloseWrapper>
        </TopBar>
        {drawerItems}
      </DrawerPosition>
    )
  }
}

MenuDrawer.propTypes = {
  items: PropTypes.array.isRequired,
  toggleVisibility: PropTypes.func.isRequired
}

export default MenuDrawer;
