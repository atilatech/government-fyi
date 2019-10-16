import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Spacer} from 'layout/util'
import {NavArrow} from 'components/static/icons'

/*
usage:
{

	component: VideoCarouselBlock,
	data: {
		videos: [
			{
				caption: "CalMatters interview (May 2018)",
				link:"https://www.youtube-nocookie.com/embed/dbf5zOEvvUo",
			},
			{
				caption: "SF Chronicle interview (May 2018)",
				link:"https://www.youtube-nocookie.com/embed/GvQkvaokJcA?start=90",
			},
			{
				caption: "Allen v Cox on who's conservative (April 2018)",
				link:"https://www.youtube-nocookie.com/embed/8OT0w3pE0vc",
			},
		],
	},
},
*/

const VideoBlock = styled.div`
	display: inline-block;
	position: relative;
`;

const Caption = styled.h4`
	margin-top: 5px;
	text-align: center;
	color: white;
`;

const CarouselContainer = styled.div`
	background-color: #222;
	padding: 30px 0 20px 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	@media screen and (max-width: 767px) {
		flex-direction: column;
	}
`;

const Window = styled.div`
	width: 560px;
	@media screen and (max-width: 767px) {
		width: 330px;
		overflow: hidden;
	}
`;

const NavButton =styled.div`
	display: flex;
	background-color: rgba(0,0,0,0.6);
	height: 315px;
	width: 70px;
	align-items: center;
	z-index: 1;
	@media not all and (hover: none) {
		&:hover {
			cursor: pointer;
			background-color: rgba(145,97,255,0.6);
		}
	}
	@media screen and (max-width: 767px) {
		display: none;
	}
`;

const OuterWindow = styled.div`
	width: 700px;
	display: flex;
	justify-content: center;
	overflow: hidden;
`;

const InnerReel = styled.div`
	display: flex;
	flex-direction: row;
	transform: translateX(-${props=>props.carouselIndex*(props.isXs?330:560)}px);
	transition: transform 200ms cubic-bezier(0.165, 0.84, 0.44, 1);
`;

const NavBar = styled.div`
	margin-top: 10px;
	width: 100%;
	display: flex;
	justify-content: space-evenly;
`;

const MobileNavButton = styled.div`
	font-family: ${props=>props.theme.fonts.h4};
	text-transform: uppercase;
	font-weight: bold;
	width: 100%;
	border: 3px solid black;
	box-sizing: border-box;
	margin: 0 10px;
	border-radius: 4px;
	text-align: center;
	padding: 10px;
`;


class VideoCarouselBlock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isXsScreen: false,
			width: 565,
			carouselIndex: 0
		};
	}

	componentDidMount() {
		window.addEventListener("resize", this.handleResize);
		this.handleResize();
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.handleResize);
	}

	handleResize =() => {
		const width = (window.innerWidth || document.documentElement.clientWidth);
		const isXs = width < 767;
		this.setState({
			isXsScreen: isXs,
			width: width,
		});
	};

	navVideos = (delta=1) => {
		const totalVids = this.props.data.videos.length;
		const newIndex = ((((this.state.carouselIndex+delta) % totalVids) + totalVids) % totalVids); // nthCard+delta % total
		this.setState({carouselIndex:newIndex});
	};

	render() {
		const iFrameWidth = this.state.isXsScreen ? "330" : "560";
		const iFrameHeight = this.state.isXsScreen ? "185" : "315";
		const {videos} = this.props.data;
		const showNav = videos.length > 1;
		const videoBlocks = videos.map ( (video, i) => (
			<VideoBlock key={i}>
				<iframe
					title={`carousel-vid-${i}`}
					width={iFrameWidth}
					height={iFrameHeight}
					src={video.link}
					frameBorder="0"
					allow="autoplay; encrypted-media"
					allowFullScreen>
				</iframe>
				<Caption>{video.caption}</Caption>
			</VideoBlock>

		));



		return(
			<div id={this.props.id}>
				<Spacer height={30}/>
				<CarouselContainer>
					<OuterWindow>
						{showNav &&
							<NavButton onClick={()=>this.navVideos(-1)} style={{transform:'rotate(180deg)'}}><NavArrow color="#fff"/></NavButton>
						}
						<Window>
							<InnerReel isXs={this.state.isXsScreen} carouselIndex={this.state.carouselIndex}>
								{videoBlocks}
							</InnerReel>
						</Window>
						{showNav &&
							<NavButton onClick={()=>this.navVideos(1)}><NavArrow color="#fff"/></NavButton>
						}
					</OuterWindow>
				</CarouselContainer>
				{(this.state.isXsScreen && showNav) &&
					<NavBar>
						<MobileNavButton onClick={()=>this.navVideos(-1)}>Prev</MobileNavButton>
						<MobileNavButton onClick={()=>this.navVideos(1)}>Next</MobileNavButton>
					</NavBar>
				}
			</div>
		);
	}
}

VideoCarouselBlock.propTypes = {
	data: PropTypes.shape({
		videos: PropTypes.arrayOf(
			PropTypes.shape({
				link: PropTypes.string.isRequired,
				caption: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
			})
		).isRequired
	}).isRequired
};

export default VideoCarouselBlock;
