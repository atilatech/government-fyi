import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  text-align: left;
  margin: 70px auto;
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
  }
`
const RightJustify = styled.div`
  display: flex;
  justify-content: flex-end;
`

const TempHome = () => {
  return(
    <Container>
      <BigH1>Coming back <br/>soon.</BigH1>
      <RightJustify>
        <Description>
          We're researching California's ballot measures to give you the quickest nonpartisan voter guide for November 6, 2018. It will be waaay better than the one we made in <a href="https://original.ballot.fyi/">2016</a>. In the meantime, you can preview the <a href="https://www.bythebay.cool/ballot-preview/">California state propositions</a> and races on our sister site, covering San Francisco, <a href="https://www.bythebay.cool/">bythebay.cool</a>.<br/><br/>If you think you might forget about poor old me, <a rel='noopener noreferrer' href="https://tinyletter.com/ballotfyi" target="_blank">we can email you</a> when we're done.
        </Description>

      </RightJustify>
    </Container>
  )
}

export default TempHome
