import React from 'react'
import styled from 'styled-components'
import {Spacer} from 'layout/util'
import MultisourceImage from 'components/static/multisource-image'
import CalImg from './images/california.png'
import CalImg_w from './images/california.webp'
import Line from 'components/static/rounded-line'
import Color from 'layout/colors'

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
      <BigH1>2020 – see you soon enough</BigH1>
      <Spacer height={20}/>
      <RightJustify>
        <ImgWrapper>
          <Img imageHandles={{_1x:CalImg, _1x_webp: CalImg_w}} alt="California election"/>
        </ImgWrapper>
        <Description>
            The Terminator – and former Governator – once fictionally said, "I'll be back." He said that to say he'll save the world, in the future. He proceeds to then drive a truck through a wall, thus returning to his original location. That quote aptly applies to this situation because in 2020, we'll be back to help you break down the tough California ballot propositions.
            <br/><br/>Expect to vote on bonds in the billions, Prop 13, and whether electric scooters are cool or not.
            <Spacer height={30}/>
            <Title>We can let you know when we're back</Title>
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
