import React from 'react'
import PropTypes from 'prop-types'
import Color from 'layout/colors'
import styled from 'styled-components'
import {Spacer} from 'layout/util'
/*
image with slanted background color, like the ones used
on the proposition pages

usage for file:
{
	id:"000",
	component: WallpaperBannerImg,
	data: {
		color: "pink",
		image: MustBeAPNG,
	}
},
*/

const AbsoluteOverBleed = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
`;

const AbsoluteUnderBleed = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	display:flex;
	align-items: flex-end;
`;

const Relative = styled.div`
	position: relative;
	min-height: 206px;
	width: 100%;
`;

const Title = styled.h1`
	font-size: 36px;
	line-height: 44px;
	position: relative;
	width: 60%;
	margin: 0 auto;
	text-align: center;
`

const Wallpaper = styled.div`
	background-image: url('${props=>props.img}');
	background-repeat: ${props=>props.repeat} no-repeat;
	height: 100px;
	width: 100%;
	background-size: contain;
`;

const WallpaperBannerImg = (props) => {
	const {color, image, repeatType, title} = props.data;
	const repeatX = repeatType || "space";
	return(
		<React.Fragment>
			<Relative>
				<Spacer height={30}/>
				<AbsoluteOverBleed>
					<Banner color={color}/>
				</AbsoluteOverBleed>
				<AbsoluteUnderBleed>
					<Wallpaper img={image} repeat={repeatX}/>
				</AbsoluteUnderBleed>
				<Title>{title}</Title>
			</Relative>
			<Spacer height={35}/>
		</React.Fragment>
	);
}

const Banner = (props) => (
	<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><path d="M0 42.93L1440 .07v160.04L0 205.07z" fill="url(#Gradient1)" fillRule="evenodd"/><defs><linearGradient id="Gradient1"><stop stopColor={Color(props.color+'1')} offset="0%"/><stop stopColor={Color(props.color+'2')} offset="100%"/></linearGradient></defs></svg>
	)

WallpaperBannerImg.propTypes = {
	data: PropTypes.shape({
		color: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		title: PropTypes.string,
		repeatType: PropTypes.oneOf(["space", "repeat", "round"]),
	})
}

export default WallpaperBannerImg;
