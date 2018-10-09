import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import {Spacer} from 'layout/util'
import {Link} from 'react-router-dom'
import MultisourceImage from 'components/static/multisource-image'
import Color from 'layout/colors'
import {PropMetaData} from 'pages/prop-attributes'

const Img = styled(MultisourceImage)`
	display: block;
  ${'' /* filter: drop-shadow(12px 12px 0 rgba(0,0,0,0.15)) drop-shadow(-20px 16px 2px rgba(0,0,0,0.05)) ; */}
	height: 70px;
	object-fit: contain;
`;

const Banner = styled.div`
  width: 100%;
  height: 70px;
	display: flex;
	justify-content: space-between;
	align-items: center;
  background-color: whitesmoke;
`
const NavItemContainer = styled.div`
	max-width: 100px;
	background-color: ${props=>Color(props.color+'2')};
`

const TopNavBlock = (props) => {
  // const {color, imageSet, shortTitle}
	const navArr = [];
	for (let i = 1; i < 13; i++){
		const {color, imageSet, socialDescription} = PropMetaData(i)
		navArr.push(
			{
				color:color,
				images:imageSet,
				desc:socialDescription
			}
		)
	}
	const navItems = navArr.map( (item, i) => {
		return(
			<Link to={`/prop-${i+1}`} key={i}>
				<NavItemContainer color={item.color}>
					<Img imageHandles={{_1x:item.images._1x, _1x_webp:item.images._1x_webp}} alt={item.desc}/>
				</NavItemContainer>
			</Link>
		)
	})
  return(
    <Banner>
			{navItems}
    </Banner>
  )
}

TopNavBlock.propTypes = {
  currentProp: PropTypes.number
}

export default TopNavBlock;
