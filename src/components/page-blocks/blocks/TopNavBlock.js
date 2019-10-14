import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import {Spacer} from 'layout/util'
import {Link} from 'react-router-dom'
import MultisourceImage from 'components/static/multisource-image'
import Color from 'layout/colors'
import {PropMetaData} from 'pages/prop-attributes'
import PassedIcon from 'components/static/approved.svg'
import FailedIcon from 'components/static/failed.svg'
import UndeterminedIcon from 'components/static/undetermined.svg'

const Img = styled(MultisourceImage).attrs({
  style: props => ({
    filter: props.isActive?'none':'grayscale(100%)',
		opacity: props.isActive||props.isHovered?1:0.5
  })
})`
	display: block;
	height: 60px;
	width: 60px;
	object-fit: contain;
	@media screen and (max-width: 1023px) {
		width: 50px;
		height: 50px;
	}
	@media screen and (max-width: 767px) {
		height: 40px;
		width: 40px;
	}
`;

const Banner = styled.div`
  width: 100%;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	align-items: flex-start;
	padding: 10px 100px 0 100px;
	box-sizing: border-box;
	background-color: whitesmoke;
	@media screen and (max-width: 767px) {
		padding-left: 30px;
		padding-right: 30px
	}
`
const ImgContainer = styled.div.attrs({
  style: props => ({
    backgroundColor: props.isActive?Color(props.color+'1'):'transparent'
  })
})`
	transition: background-color 150ms ease-out;
	border-radius: 30px;
  display: flex;
	@media not all and (hover: none) {
		&:hover{
			background-color: ${props=>Color(props.color+'2')};
		}
	}
`
const NavItemContainer = styled.div`
	max-width: 1000px;
	min-height: 65px;
`
const HoverTitle = styled.h4`
	font-size: 10px;
	display: block
	text-align: center;
	max-width: 60px;
	line-height: 14px;
	margin-top: 3px;
	font-weight: bold;
	position: absolute;
	@media screen and (max-width: 1023px) {
		max-width: 50px;
	}
	@media screen and (max-width: 767px) {
		max-width: 40px;
	}
`

const ResultIconContainer = styled.div`
  align-self: flex-start;
  position: absolute;
  background-color: #fff;
  line-height: 0;
  border-radius: 7.5px;
  height: 15px;
  width: 15px;
`


const TopNavBlock = (props) => {
	const navArr = [];
	for (let i = 1; i < 13; i++){
		const {color, imageSet, socialDescription, shortTitle, thumbSet, result} = PropMetaData(i)
		navArr.push(
			{
				color:color,
				images:imageSet,
				desc:socialDescription,
				title: shortTitle,
				imageSet: thumbSet,
        		result: result
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

// TODO: Use actual links instead of propnums, suggest creating a dict in prop-attributes.js
class NavItem extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			isHovered: false,
			pageLinks: ['/housing', '/jobs-and-economy'],
		}
	}
	handleMouseEnter = () => {
		this.setState({isHovered: true})
	}
	handleMouseLeave = () => {
		this.setState({isHovered: false})
	}
	render() {
		const {color, title, desc, imageSet, result} = this.props.data;
    	let resultIcon = null;
    if (result === "Y"){
      resultIcon = PassedIcon;
    } else if (result === "N") {
      resultIcon = FailedIcon;
    } else {
      resultIcon = UndeterminedIcon;
	}
	


		return(
			<NavItemContainer>
				<Link to={this.props.propNum <= 1? this.state.pageLinks[this.props.propNum]: `/prop-${this.props.propNum+1}`}>
					<ImgContainer
						onMouseEnter={this.handleMouseEnter}
						onMouseLeave={this.handleMouseLeave}
						color={color}
						isActive={this.props.isActive}
     >
						<Img
							isHovered={this.state.isHovered}
							isActive={this.props.isActive}
							imageHandles={imageSet}
							alt={desc}
      />
            {(resultIcon && this.props.propNum+1 !== 9) &&
              <ResultIconContainer>
                <img src={resultIcon} alt={result}/>
              </ResultIconContainer>}
					</ImgContainer>
				</Link>
				{(this.state.isHovered || this.props.isActive) && <HoverTitle>{title}</HoverTitle>}
			</NavItemContainer>
		)
	}
}
