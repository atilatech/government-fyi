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
		img: MustBeAPNG,
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
`;

const Relative = styled.div`
	position: relative;
	min-height: 206px;
`;

const Wallpaper = styled.div`
	background-image: url('${props=>props.img}');
	background-repeat: ${props=>props.repeat} no-repeat;
	height: 206px;
	width: 100%;
	background-size: contain;
`;

const WallpaperBannerImg = (props) => {
	const {color, image, repeatType} = props.data;
	const repeatX = repeatType || "space";
	return(
		<React.Fragment>
			<Relative>
				<Spacer height={30}/>
				<AbsoluteOverBleed>
					<Banner color={`${Color(color)}`}/>
				</AbsoluteOverBleed>
				<AbsoluteUnderBleed>
					<Wallpaper img={image} repeat={repeatX}/>
				</AbsoluteUnderBleed>
			</Relative>
			<Spacer height={35}/>
		</React.Fragment>
	);
}

const Banner = (props) => (
	<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><path d="M0 42.93L1440 .07v160.04L0 205.07z" fill={props.color} fillRule="evenodd"/></svg>
)

WallpaperBannerImg.propTypes = {
	data: PropTypes.shape({
		color: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		repeatType: PropTypes.oneOf(["space", "repeat", "round"]),
	})
}

export default WallpaperBannerImg;
