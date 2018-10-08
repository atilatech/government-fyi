import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Spacer} from 'layout/util'
import {Link} from 'react-router-dom'
import MultisourceImage from 'components/static/multisource-image'
import Color from 'layout/colors'
import {PropMetaData} from 'pages/prop-attributes'

const Img = styled(MultisourceImage)`
	object-fit: contain;
	max-height: 200px;
  filter: drop-shadow(12px 12px 0 rgba(0,0,0,0.15)) drop-shadow(-20px 16px 2px rgba(0,0,0,0.05));
`;

const Banner = styled.div`
  width: 100%;
  height: 70px;
  color: whitesmoke;
`

const TopNavBlock = (props) => {
  // const {color, imageSet, shortTitle}
  return(
    <Banner>
    </Banner>
  )
}

TopNavBlock.propTypes = {
  currentProp: PropTypes.number
}

export default TopNavBlock;
