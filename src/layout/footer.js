import React from 'react'
import styled from 'styled-components'
import Color from 'layout/colors'
import {Link} from 'react-router-dom'
import {Spacer} from 'layout/util'
// import Acronym from 'components/interactive/acronym'
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
const SocialButtons = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;
  margin-bottom: 10px;
  filter: drop-shadow(4px 4px 0 rgba(0,0,0,0.1)) drop-shadow(-2px 5px 2px rgba(0,0,0,0.05));
`
const TextContainer = styled.div`
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
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
        <div>{navItems}</div>
      </FooterContainer>
      <Spacer height={90}/>
    </div>
  )
}

const nav = [
  { to:"/about/", label:"about"},
  { to:"/about#contact", label:"contact"},
  // { to:"/follow/", label:"subscribe"},
  // { to:"/print/", label:"printed guide"},
  { to:"/terms/", label:"terms of service"},
];

export default Footer;
