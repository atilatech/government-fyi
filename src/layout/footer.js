import React from 'react'
import styled from 'styled-components'
import Color from 'layout/colors'
import {Link} from 'react-router-dom'
import {Spacer} from 'layout/util'

const FooterContainer = styled.div`
  text-align: center;
  font-size: 13px;
  padding-right: 20px;
  padding-left: 20px;
`
const NavLink = styled(Link)`
  text-decoration: none;
  color: ${Color('black')};
`
const NavLabel = styled.span`
  @media not all and (hover: none) {
    &:hover {
      color: ${Color('red')};
    }
  }
`

const Footer = (props) => {
  const navItems = nav.map((item,i) => {
    return(
      <NavLink key={i} to={item.to}>
        <NavLabel>{item.label}</NavLabel>
        {i!==nav.length-1 && " • "}
      </NavLink>
    );
  });
  return(
    <div>
      <Spacer height={70}/>
      <FooterContainer>
        <div>
          Site designed, built, and written by Amir & Erica © 2018 <span role="img" aria-label="US flag">🇺🇸</span>
        </div>
        <div>{navItems}</div>
      </FooterContainer>
      <Spacer height={70}/>
    </div>
  )
}

const nav = [
  { to:"/races/", label:"races"},
  { to:"/about/", label:"about"},
  { to:"/instagram/", label:"instagram"},
  { to:"/terms/", label:"terms of service"},
];

export default Footer;
