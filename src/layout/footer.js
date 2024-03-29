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
`;

const FooterContainer = styled.div`
  text-align: center;
  font-size: 13px;
  padding-right: 20px;
  padding-left: 20px;
`;
const NavLink = styled(Link)`
  text-decoration: none;
  color: ${Color('black')};
`;
const NavLabel = styled.span`
  @media not all and (hover: none) {
    &:hover {
      color: ${Color('red')};
    }
  }
`;



const Footer = () => {
  const navItems = nav.map((item,i) => {
      if (item.externalLink) {
          return (
              <a href={item.to}
                 key={i}
                 target="_blank"
                 rel="noreferrer noopener">
                  <NavLabel style={{color: '#1890ff'}}>{item.label}</NavLabel>
              </a>
          )
      }
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
};

const nav = [
  { to:"/about/", label:"about"},
  { to:"/home", label:"topics"},
  { to:"/people", label:"people"},
  // { to:"/follow/", label:"subscribe"},
  // { to:"/print/", label:"printed guide"},

    {
        to:"https://paypal.me/TomiwaAdemidun",
        label:"Donate",
        externalLink: true
    },
];

export default Footer;
