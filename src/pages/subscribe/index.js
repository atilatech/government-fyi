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
      <Title>Subscribe Page</Title>
    </React.Fragment>
  )
}

export default SubscribePage;
