import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Spacer} from 'layout/util'
import {Link} from 'react-router-dom'
import Color from 'constants/colors'
import {NavArrow} from 'components/static/icons'

/*
Bottom navigation buttons
usually two tiles with images and text that point to the next and prev posts

example usage for data.js:
{
  id: "000",
  component: BottomNavBlock,
  data: {
    color:
    tiles: [
      {
        img: prevPropImg,
        to: "/election/sf-prop-i",
        text: "SF Prop I is for proclaiming \"Injustice!\"",
      },
      {
        img: nextPropImg,
        to: "/election/state-prop-68",
        text: "Prop 68",
      }
    ],
  }
},
*/

const BlockWrapper = styled.div`
  @media print {
    display: none;
  }
`;

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	box-sizing: border-box;
	background-color: ${props=>props.color?Color(props.color):Color('pink')};
  @media screen and (max-width: 767px) {
  	flex-direction: column;
  	align-items: center;
  }
`;

const TileInteraction = styled.div`
	padding-top: 20px;
	padding-bottom: ${props=>props.bottomOut?0:20}px;
	max-height: 200px;
	max-width: 380px;
	border-radius: 1px;
	cursor: pointer;
  @media not all and (hover: none) {
    &:hover {
      background-color: rgba(255,255,255,0.4);
      transition: background-color 150ms ease-out;
    }
  }
`;

const Tile = styled(Link)`
	display: flex;
	flex-direction: row;
	align-items: center;
	text-decoration: none;
	color: black;
`;

const Img = styled.img`
	width: ${props=>props.bottomOut?"":"40%"};
	object-fit: contain;
	max-height: 200px;
`;

const Text = styled.h3`
	padding: 0 10px;
	display: block;
	box-sizing: border-box;
	width: 70%;
	order: ${props=>props.evenOdd%2===0?1:0};
	text-align: ${props=>props.evenOdd%2===0?"left":"right"};
`;

const ArrowStyle = styled.div`
	width: 50px;
	order: ${props=>props.evenOdd%2===0?0:3};
	transform: ${props=>props.evenOdd%2===0?"rotate(180deg)":"none"};
`;

const BottomNav = (props) => {
	const nav = props.data.tiles.map( (tile, i) => {
		const {img, text, to} = tile;
		return (
			<TileInteraction bottomOut={props.bottomOut} key={i} >
				<Tile to={to}>
					<ArrowStyle evenOdd={i}><NavArrow color="#333"/></ArrowStyle>
					<Text evenOdd={i}>{text}</Text>
					<Img bottomOut={props.bottomOut} src={img} alt={`Navigate to ${text}`}/>
				</Tile>
			</TileInteraction>

		)
	})

	return(
		<BlockWrapper>
			<Spacer height={30}/>
			<Container color={props.data.color}>
				{nav}
			</Container>
		</BlockWrapper>
	);
}

BottomNav.propTypes = {
  data: PropTypes.shape({
    color: PropTypes.string,
    tiles: PropTypes.arrayOf(
      PropTypes.shape({
        img: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
      })
    ).isRequired
  }).isRequired
}

export default BottomNav;
