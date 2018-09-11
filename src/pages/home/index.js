import React from 'react'
import PageBuilder from 'components/page-blocks/aggregators/PageBuilder'
import FrontPageTitleBlock from 'components/page-blocks/blocks/FrontPageTitleBlock'
import PropCardBlock from 'components/page-blocks/blocks/PropCardBlock'
import {Link} from 'react-router-dom'
import {PropMetaData} from 'pages/prop-attributes'
// import CAImg from './images/ca.png'

let Data = {
	pageId:"ballot-fyi-props",
	meta: {
		canonicalUrl:"https://www.ballot.fyi/",
		documentTitle:"California State Propositions – ballot.fyi",
		socialHeadline:"The quickest nonpartisan voter guide to this November",
		socialDescription:"11 CA propositions including daylight savings, cage-free eggs, and housing",
		socialImage:"general.png",
	},
	blocks: [
		{
			component: FrontPageTitleBlock,
			data: {
				title: "Nonpartisan guide to California's 2018 election",
				body: <span> We're tired of constant news about Trump. Luckily, California gives us 11 semi-ridiculous ballot initiatives to vote on and make fun of. We'll break them down for you, what the different sides are saying, and why your vote is actually important. <br/><br/>This is still a work in progress, but you can stay in touch by <Link to="/follow">subscribing</Link> to our newsletter. And! please, for fuck's sake, make sure you're <a target="_blank" rel="noopener noreferrer" href="https://www.vote.org/">registered to vote</a> for November 6, 2018.</span>,
			}
		}
  ]
}

for (let i = 1; i < 13; i++){
	const {color, imageSet, title, socialDescription} = PropMetaData(i)
	Data.blocks.push({
		component: PropCardBlock,
		data: {
			propNum: i + "",
			header: title,
			color: color,
			description: socialDescription,
			img: imageSet,
			linksTo: `/prop-${i}`,
		}
	});
}


export default () => (<PageBuilder data={Data}/>);
