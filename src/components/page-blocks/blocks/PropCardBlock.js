import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import Color from "../../../layout/colors";
import MultisourceImage from "../../static/multisource-image";
import {Spacer} from "../../../layout/util";
import {withRouter} from 'react-router-dom'
import CrossOutX from "../../static/cross-out-x";
import {PROP_NUM_TO_CATEGORY_DICT} from "../../../data/Constants";

const BannerLink = styled(Link)`
	min-width: 100%;
	text-decoration: none;
`;
const Overflow = styled(Row)`
	overflow: hidden;
	margin-left: 0;
	margin-right: 0;
	z-index: 1;
`;
const Background = styled.div`
	background: linear-gradient(90deg, ${props=>props.color1}, ${props=>props.color2});
	background-color: ${props=>props.color1};
	margin-bottom: 2px;
	min-height: 250px;
	box-sizing: border-box;
	position:relative;
`;
const PropNumber = styled.div`
	font-family: ${props=>props.theme.fonts.helvetica};
	align-self: flex-end;
	color: rgba(0,0,0,0.4);
	font-size: 42px;
	margin-bottom: 45px;
	font-weight: bold;
`;
const ImgContainer = styled.div`
	min-width: 400px;
	display: flex;
	justify-content: center;
	@media screen and (max-width: 767px) {
		justify-content: left;
		min-width:90%;
	}
`;

const Img = styled(MultisourceImage)`
	height: 250px;
	width: auto;
	padding-top: 25px;
	padding-bottom: 25px;
	user-select:none;
	-webkit-user-select:none;
  transition: all 180ms ease-out;
  filter: drop-shadow(3px 3px 0 white) drop-shadow(12px 12px 0 rgba(0,0,0,0.15)) drop-shadow(-20px 16px 2px rgba(0,0,0,0.05));
	@media not all and (hover: none) {
		&:hover {
			transform: translate(0,-5px);
			filter: drop-shadow(3px 3px 0 white) drop-shadow(14px 15px 0px rgba(0,0,0,0.1)) drop-shadow(-23px 19px 3px rgba(0,0,0,0.03));
		}
		&:active {
			transition-duration: 100ms;
			transform: translate(0,2px);
			filter: drop-shadow(3px 3px 0 white) drop-shadow(8px 3px 0px rgba(0,0,0,0.2)) drop-shadow(-4px 6px 0 rgba(0,0,0,0.1));
		}
	}

	}
	@media screen and (max-width: 1023px) {
		width: 70%;
		height: auto;
	}
	@media screen and (max-width: 767px) {
		height: auto;
		width: 100%;
		padding-top: 50px;
		padding-bottom: 50px;
	}
`;

const Container = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	padding-right: 20px;
	box-sizing: border-box;
	@media screen and (max-width: 1023px) {
		min-width: 50%;
	}
	@media screen and (max-width: 767px) {
		min-width: 60%;
		padding-left: 20px;
		padding-right: 20px;
	}
`;

const Header = styled.h2`
	color: #fff;
	font-size: 20px;
	margin-top: 20px;
`;

const Description = styled.h2`
	color: white;
	font-size: 14px;
	line-height: 20px;
	margin-bottom: 45px;
	margin-top: 10px;
	color: ${Color('black')};
`;

const PropCardBlock = (props) => {
	const {propNum, color, header, description, linksTo, img} = props.data;
	return (
		<React.Fragment>
			<Spacer height={2}/>
			<Background id={PROP_NUM_TO_CATEGORY_DICT[propNum]} color1={Color(color+'1')} color2={Color(color+'2')}>
				<Overflow>
					{propNum === "9" && <CrossOutX />}

					<BannerLink to={linksTo}>
						<Col
							xsOffset={0} xs={12}
							smOffset={1} sm={10}
							mdOffset={2} md={8}
							lgOffset={2} lg={8}
						>
							<Container>
								<TextContainer>
									<Header>{header}</Header>
									<Description>{description}</Description>
								</TextContainer>
								<ImgContainer>
									<Img imageHandles={img} alt={"Proposition" + propNum}	/>
								</ImgContainer>
								<PropNumber>{propNum}</PropNumber>
							</Container>
						</Col>
					</BannerLink>
					<Col
						xsOffset={0} xs={12}
						smOffset={1} sm={10}
						mdOffset={2} md={8}
						lgOffset={2} lg={8}
					>
						{
							propNum === "6" &&
							<div style={{color: 'black'}}>
								You're probably wondering why there's a map of California there
								<span role="img" aria-label="point up emoji">
										👆🏿.
									</span>
								See <Link to="/about"
										  style={{color: 'black',
											  fontWeight: 'bold',}}>
								About</Link>{' '}
								page
							</div>
						}
					</Col>
				</Overflow>
			</Background>
		</React.Fragment>
	);
};


PropCardBlock.propTypes = {
	data: PropTypes.shape({
		propNum: PropTypes.string,
		color1: PropTypes.string,
		color2: PropTypes.string,
		header: PropTypes.string,
		description: PropTypes.string,
		result: PropTypes.oneOf(["Y","N","U","NA"]),
		linksTo: PropTypes.string,
		img: PropTypes.shape({
			_1x: PropTypes.string.isRequired,
			_1x_webp: PropTypes.string,
			_2x: PropTypes.string,
			_2x_webp: PropTypes.string,
		}),
		// result: PropTypes.shape({
		// 	status: PropTypes.oneOf(['passed', 'failed', 'undecided']),
		// 	text: PropTypes.string,
		// 	emoji: PropTypes.string,
		// })
	})
};

export default withRouter(PropCardBlock);
