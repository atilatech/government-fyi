import React from 'react'
import styled from 'styled-components'
import Color from 'layout/colors'
// import {Link} from 'react-router-dom'
import {Spacer} from 'layout/util'


const Base = styled.div`
  height: 100px;
  background-color: ${Color('black')};
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

  return(
    <div>
      <Spacer height={40}/>
      <LineContainer>
        <Line color={Color('blue2')}/>
      </LineContainer>
      <Spacer height={30}/>
      <FooterContainer>
        <SocialButtons>
          <div className="fb-like" data-href="https://www.ballot.fyi/" data-layout="button_count" data-action="like" data-size="large" data-show-faces="true" data-share="true"></div>
          <a className="twitter-share-button" href="https://twitter.com/intent/tweet?text=A%20nonpartisan%20voter%20guide%20to%20California%27s%20propositions%20this%20election" data-size="large">Tweet</a>
        </SocialButtons>
        <TextContainer>
          Site designed, built, and written by Amir & Erica © 2018 <span role="img" aria-label="US flag">🇺🇸</span>
          <br/>Until Nov. 7, 2018, we will continually update the site. Please e-send us suggestions and correctións with supporting sources.
        </TextContainer>
        <div>{navItems}</div>
      </FooterContainer>
      <Spacer height={90}/>
      <Slant>
        <svg width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><path d="M0 84L1440 1v127.8H0z" fill="#323232" fillRule="evenodd"/></svg>
      </Slant>
      <Base/>
    </div>
  )
}


export default Footer;
