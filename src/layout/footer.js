import React from 'react'
import styled from 'styled-components'
import Color from 'layout/colors'
import {Link} from 'react-router-dom'
import {Spacer} from 'layout/util'
import Line from 'components/static/rounded-line'

const LineContainer = styled.div`
  max-width: 320px;
  margin: 0 auto;
`

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
      <Spacer height={40}/>
      <LineContainer>
        <Line color={Color('blue2')}/>
      </LineContainer>
      <Spacer height={30}/>
      <FooterContainer>
        <div>
          Site designed, built, and written by Amir & Erica © 2018 <span role="img" aria-label="US flag">🇺🇸</span>
          <br/>Until Nov. 7, 2018, we will continually update the site. Please e-send us corrections.
        </div>
        <div>{navItems}</div>
      </FooterContainer>
      <Spacer height={90}/>
    </div>
  )
}

const nav = [
  { to:"/about/", label:"about"},
  { to:"/about#contact", label:"contact"},
  { to:"/terms/", label:"terms of service"},
];

export default Footer;
