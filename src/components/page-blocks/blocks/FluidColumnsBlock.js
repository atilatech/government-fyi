import React from 'react';
import PropTypes from 'prop-types'
import MultisourceImage from 'components/static/multisource-image'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid';
import {Spacer} from 'layout/util'

/*
multiple columns of text with a title on each column, fluid

{

	component: FluidColumnsBlock,
	data: {
		blocks: [
			{
				title: "Vision for the court",
				body: "I would like to see our court continue to innovate and figure out ways to reduce the costs of litigating cases. I would like to see us expand our capacity to settle cases through settlement conferences and mediations. I have a great deal of experience in alternative dispute resolution (ADR), and I see it as an excellent alternative to expensive civil trials.",
			},
			{
				title: "Dealing with a Moral Quandary",
				body: "I once had to impose a very long sentence in a rape case. The mandatory minimum was doubled because the defendant had a prior strike. I personally do not believe that prison solves any problems of our society. However, I had to follow the law in this case and balance the rights of the victim (a 16-year-old girl) with the rights of the accused.",
			},
		],
	},
},
*/

const LateralContainer = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	@media screen and (max-width: 767px) {
		flex-direction: column;
		align-content: center;
		padding: 0 20px;
	}
`;

const SummaryContainer = styled.div`
	padding: 10px 20px;
	width: 100%;
	@media screen and (max-width: 767px) {
		padding: 10px 0;
	}
`;

const SummaryTitle = styled.h3`
	text-align: center;
	font-weight: bold;
	margin-bottom: 4px;
`;

const Image = styled(MultisourceImage)`
	display: block;
	margin: 10px auto;
	height: 130px;
	user-select:none;
	-webkit-user-select:none;
	transition: all 180ms ease-out;
	filter: drop-shadow(6px 6px 0 rgba(0,0,0,0.15)) drop-shadow(-10px 8px 2px rgba(0,0,0,0.05));
	@media not all and (hover: none) {
		&:hover {
			transform: translate(0,-5px);
			filter: drop-shadow(14px 15px 0px rgba(0,0,0,0.1)) drop-shadow(-23px 19px 3px rgba(0,0,0,0.03));
		}
	}
`

const FluidColumnsBlock = (props) => {
	const summaries = props.data.blocks.map( (item, i) => {
		return(
			<SummaryContainer key={i}>
				{(item.img && item.url) &&
					<a href={item.url} rel="noopener noreferrer" target="_blank">
						<Image imageHandles={item.img} alt={item.alt}/>
					</a>
				}
				<SummaryTitle>{item.title}</SummaryTitle>
				{item.body}
			</SummaryContainer>
		);
	})

	return(
		<Row>
	    <Col
	    	xsOffset={0} xs={12}
	      smOffset={1} sm={10}
	      mdOffset={1} md={10}
	      lgOffset={2} lg={8}
	    >
	    	<Spacer height={30}/>
				<LateralContainer>
					{summaries}
				</LateralContainer>
			</Col>
		</Row>
	)
}

FluidColumnsBlock.propTypes = {
	data: PropTypes.shape({
		blocks: PropTypes.arrayOf(
			PropTypes.shape({
				title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
				body: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
				img: PropTypes.string,
				alt: PropTypes.string,
				url: PropTypes.string,
			})
		).isRequired
	}).isRequired
}

export default FluidColumnsBlock
