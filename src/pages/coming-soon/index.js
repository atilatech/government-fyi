import React from 'react'
import styled from 'styled-components'
import {Spacer} from 'layout/util'
import MultisourceImage from 'components/static/multisource-image'
import CalImg from './images/california.png'
import CalImg_w from './images/california.webp'

const Container = styled.div`
  text-align: left;
  margin: 0 auto;
  width: 70%;
  @media screen and (max-width: 767px) {
    width: 80%;
  }
`
const BigH1 = styled.h1`
  font-weight: bold;
  letter-spacing: -6.3px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 110px;
  line-height: 100px;
  @media screen and (max-width: 767px) {
    font-size: 70px;
    line-height: 65px;
    letter-spacing: -3.1px;
  }
`
const Description = styled.div`
  width: 60%;
  @media screen and (max-width: 767px) {
    width: 100%;
    order: 1;
  }
`
const RightJustify = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`
const ImgWrapper = styled.div`
  @media screen and (max-width: 767px) {
    order: 2;
  }

`

const Img = styled(MultisourceImage)`
  width: 60%;
	object-fit: contain;
	box-sizing: border-box;
  @media screen and (max-width: 767px) {
    width: 100%;
    margin-top: 30px;
    align-self: center;
  }

`

const TempHome = () => {
  return(
    <Container>
      <Spacer height={110}/>
      <BigH1>Coming back <br/>soon.</BigH1>
      <RightJustify>
        <ImgWrapper>
          <Img imageHandles={{_1x:CalImg, _1x_webp: CalImg_w}} alt="California election"/>
        </ImgWrapper>
        <Description>
          We're researching California's 11 ballot measures to give you the quickest nonpartisan voter guide for November 6, 2018. It will be waaay better than the one we made in <a href="https://original.ballot.fyi/">2016</a>. In the meantime, you can preview the <a href="https://www.bythebay.cool/ballot-preview/">California state propositions</a> and races on our sister site, covering San Francisco, <a href="https://www.bythebay.cool/">bythebay.cool</a>.<br/><br/>If you think you might forget about poor old me, <a rel='noopener noreferrer' href="https://tinyletter.com/ballotfyi" target="_blank">we can email you</a> when we're done.
        </Description>

      </RightJustify>
      <Spacer height={70} xsHeight={30}/>
    </Container>
  )
}

export default TempHome
