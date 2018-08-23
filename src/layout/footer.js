import React from 'react'
import styled from 'styled-components'
import Color from 'layout/colors'
// import {Link} from 'react-router-dom'
import {Spacer} from 'layout/util'


const Base = styled.div`
  height: 100px;
  background-color: ${Color('black')};
`
const Slant = styled.div`
	background-color: white;
  margin-bottom: -10px;
  user-select: none;
`;

const Footer = (props) => {

  return(
    <div>
      <Spacer height={90}/>
      <Slant>
        <svg width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><path d="M0 84L1440 1v127.8H0z" fill="#323232" fillRule="evenodd"/></svg>
      </Slant>
      <Base/>
    </div>
  )
}


export default Footer;
