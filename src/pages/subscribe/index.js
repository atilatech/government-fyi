import React from 'react'
import styled from 'styled-components'
import {Spacer} from 'layout/util'

const Title = styled.h1`
  text-align:center;
`

const SubscribePage = () => {
  return(
    <React.Fragment>
      <Spacer height={70}/>
      <Title>Let's make it last</Title>
      <h2>Subscribe form</h2>
      <h2>Don't live in California?</h2>
      <h2>Live in SF?</h2>
    </React.Fragment>
  )
}

export default SubscribePage;
