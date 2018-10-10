import React from 'react'
import PageBuilder from 'components/page-blocks/aggregators/PageBuilder'
import FrontPageTitleBlock from 'components/page-blocks/blocks/FrontPageTitleBlock'
// import PropCardBlock from 'components/page-blocks/blocks/PropCardBlock'
import PropSection from 'components/page-blocks/sections/PropSection'
import {Link} from 'react-router-dom'
import {PropMetaData} from 'pages/prop-attributes'
// import CAImg from './images/ca.png'


let Data = {
	pageId:"ballot-fyi-props",
	meta: {
		canonicalUrl:"https://www.ballot.fyi/",
		documentTitle:"California State Propositions – ballot.fyi",
		socialHeadline:"The quickest nonpartisan voter guide for the midterms",
		socialDescription:"Learn about 11 CA propositions, including daylight saving, cage-free eggs, and rent control",
		socialImage:"general.png",
	},
	blocks: [
		{
			component: FrontPageTitleBlock,
			data: {
				title: "A Nonpartisan guide to California's 2018 election",
				body: <span> We're tired of the constant news about Trump. Luckily, California gives us 11 semi-ridiculous ballot initiatives to vote on and make fun of. We'll break them down for you, explain what different sides are saying and why your vote actually matters. <br/><br/>We'll be updating our guide up until Election Day on November 6th, but <Link to="/follow">subscribe</Link> to our newsletter to stay in touch. And please, for fuck's sake, make sure you're <a target="_blank" rel="noopener noreferrer" href="https://www.vote.org/">registered to vote</a>.</span>,
			}
		},
		{
			component: PropSection,
			data:{}
		}
  ]
}



export default () => (
	<PageBuilder data={Data}/>
);
