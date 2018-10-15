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
	height: 70px;
	width: 70px;
	object-fit: contain;
	filter: grayscale(100%);
	@media screen and (max-width: 1023px) {
		width: 60px;
		height: 76px;
	}
	@media screen and (max-width: 767px) {
		height: 50px;
		width: 50px;
	}
`;

const Banner = styled.div`
  width: 100%;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	align-items: flex-start;
	padding: 10px 20px 0 20px;
	box-sizing: border-box;
`
const ImgContainer = styled.div`
	transition: background-color 150ms ease-out;
	background-color: ${props=>props.isActive?Color(props.color+'1'):'transparent'};
	border-radius: 35px;
	@media not all and (hover: none) {
		&:hover{
			background-color: ${props=>Color(props.color+'2')};
		}
	}
`
const NavItemContainer = styled.div`
	min-height: 95px;
`
const HoverTitle = styled.h4`
	display: block
	text-align: center;
	max-width: 70px;
	line-height: 14px;
	margin-top: 3px;
	font-weight: bold;
	@media screen and (max-width: 1023px) {
		max-width: 60px;
	}
	@media screen and (max-width: 767px) {
		max-width: 50px;
	}
`


const TopNavBlock = (props) => {
  // const {color, imageSet, shortTitle}
	const navArr = [];
	for (let i = 1; i < 13; i++){
		const {color, imageSet, socialDescription, shortTitle, thumbSet} = PropMetaData(i)
		navArr.push(
			{
				color:color,
				images:imageSet,
				desc:socialDescription,
				title: shortTitle,
				imageSet: thumbSet
			}
		)
	}
	const navItems = navArr.map( (item, i) => {
		return(
			<NavItem key={i} isActive={props.currentProp === i+1} propNum={i} data={item}/>
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

class NavItem extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			isHovered: false
		}
	}
	handleMouseEnter = () => {
		this.setState({isHovered: true})
	}
	handleMouseLeave = () => {
		this.setState({isHovered: false})
	}
	render() {
		const {color, images, title, desc, imageSet} = this.props.data
		return(
			<NavItemContainer>
				<Link to={`/prop-${this.props.propNum+1}`}>
					<ImgContainer
						onMouseEnter={this.handleMouseEnter}
						onMouseLeave={this.handleMouseLeave}
						color={color}
						isActive={this.props.isActive}
					>
						<Img
							imageHandles={imageSet}
							alt={desc}/>
					</ImgContainer>
				</Link>
				{(this.state.isHovered || this.props.isActive) && <HoverTitle>{title}</HoverTitle>}
			</NavItemContainer>
		)
	}
}
