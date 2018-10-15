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
	height: 60px;
	width: 60px;
	object-fit: contain;
	filter: grayscale(100%);
`;

const Banner = styled.div`
  width: 100%;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	align-items: center;
  background-color: whitesmoke;
	padding: 10px 0;
`
const NavItemContainer = styled.div`
	transition: background-color 150ms ease-out;
	background-color: ${props=>props.isActive?Color(props.color+'1'):'transparent'};
	border-radius: 35px;
	@media not all and (hover: none) {
		&:hover{
			background-color: ${props=>Color(props.color+'2')};
		}
	}
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
				<NavItemContainer color={item.color} isActive={props.currentProp===i+1}>
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
