import React from 'react'
import styled from 'styled-components'
import {Spacer} from 'layout/util'

const Title = styled.h1`
  text-align:center;
`

const AboutPage = () => {
  return(
    <React.Fragment>
      <Spacer height={70}/>
      <Title>About Page</Title>
    </React.Fragment>
  )
}

export default AboutPage;
