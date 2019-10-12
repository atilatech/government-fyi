import React from 'react'
import styled from 'styled-components'
import {Spacer} from 'layout/util'
import MultisourceImage from 'components/static/multisource-image'
import CalImg from './images/california.png'
import CalImg_w from './images/california.webp'
// import Line from 'components/static/rounded-line'
// import Color from 'layout/colors'

import SubscribeForm from 'components/interactive/forms/subscribe-form'
import {FormContainer, Title} from 'components/interactive/forms/form-styles'

// const LineContainer = styled.div`
//   max-width: 320px;
//   margin: 0 auto;
// `

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
  letter-spacing: -4.3px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 92px;
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
      <BigH1>See you in 2020</BigH1>
      <Spacer height={20}/>
      <RightJustify>
        <ImgWrapper>
          <Img imageHandles={{_1x:CalImg, _1x_webp: CalImg_w}} alt="California election"/>
        </ImgWrapper>
        <Description>
          Arnold Schwarzenegger, California's former governor and Earth's cybernetic savior, used to fictionally say, "I'll be back." (Go ahead, say it in your best male model German accent.) In one instance, he says this catchphrase, leaves the premises, and then drives a truck through the wall, thus returning. This quote aptly sums up ourgovernment.fyi because in 2020, we'll be back, to help you break down the walls of text that are the California ballot propositions.
          <br/><br/>
          Sorry we can't help this November, but in a year, expect to vote on what to do with billions of dollars, Prop 13 <a href="https://www.fresnobee.com/news/politics-government/politics-columns-blogs/political-notebook/article216680685.html" rel="noopener noreferrer" target="_blank">reform</a>, and inevitably much more. <span role="img" aria-label="grimmacing">😬</span>
          <Spacer height={30}/>
          <Title>We can let you know when we're back.</Title>
          <FormContainer>
          <SubscribeForm/>
          </FormContainer>
        </Description>
      </RightJustify>

      <Spacer height={20}/>
      <Spacer height={70} xsHeight={30}/>
    </Container>
  )
}

export default TempHome
