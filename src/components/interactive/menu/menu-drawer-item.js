import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Color from 'layout/colors'
import styled from 'styled-components'

const Item = styled.h2`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${Color('black')};
  height: 60px;
  width: 100%;
  padding-left: 20px;
  border-bottom: 1px solid white;
  transition: padding-left 100ms ease-out;

  @media not all and (hover: none) {
    &:hover {
      color: white;
      background-color: ${Color('pink1')};
      padding-left: 30px;

    }
  }
  &:active {
    background-color: ${Color('pink2')};
  }
`;

const DrawerItem = (props) => {
  const {toggleVisibility, to, link, text} = props;
  return(
    to ?
      <Link onClick={()=>{toggleVisibility(false)}} style={{textDecoration:'none'}} to={to}>
        <Item>{text}</Item>
      </Link>
    :
    <a href={link} style={{textDecoration:'none'}} >
      <Item>{text}</Item>
    </a>
  )
}


DrawerItem.propTypes = {
  to: PropTypes.string,
  link: PropTypes.string,
  text: PropTypes.string,
  toggleVisibility: PropTypes.func.isRequired,
}

DrawerItem.defaultProps = {
  to: '/',
  text: 'example',
  toggleVisibility: ()=>{},
}

export default DrawerItem
