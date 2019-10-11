import React from 'react'
import styled from 'styled-components'

const BottomSticky = styled.div`
  position: fixed;
  font-family: ${props=>props.theme.fonts.avant};
  font-size: 14px;
  bottom: 0;
  background-color: #333;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  z-index: 999;
`;

const BottomWarning = () => {
  return(
    <BottomSticky>
      You're viewing the 2018 guide. Here's how to&nbsp;<a href="https://www.ballot.fyi/">return to 2020</a>, when you're ready.

    </BottomSticky>
  )
}

export default BottomWarning;
