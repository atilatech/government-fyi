import React from 'react'
import PageBuilder from 'components/page-blocks/aggregators/PageBuilder'
import FrontPageTitleBlock from 'components/page-blocks/blocks/FrontPageTitleBlock'
import PropSection from 'components/page-blocks/sections/PropSection'
import {Link} from 'react-router-dom'
// import CAImg from './images/ca.png'


let Data = {
	pageId:"home-page",
	meta: {
		canonicalUrl:"https://www.ballot.fyi/",
		documentTitle:"California State Propositions 2018 – ballot.fyi",
		socialHeadline:"The quickest nonpartisan voter guide for the midterms",
		socialDescription:"Learn about California's 11 propositions, including daylight saving, cage-free eggs, and rent control",
		socialImage:"general.png",
	},
	blocks: [
		{
			component: FrontPageTitleBlock,
			data: {
				title: "A Nonpartisan guide to California's 2018 election",
				body: <span>This election, California gives us 11 semi-ridiculous, yet very important, ballot initiatives to vote on and make fun of. We'll break them down for you, explain what different sides are saying and why your vote actually matters. <br/><br/>We'll be updating our guide up until Election Day on November 6th, but <Link to="/follow">subscribe</Link> to our newsletter to stay in touch
					<br/><br/>
					P.S. If you live in SF or San Jose, we have you covered on your local ballot – visit <a href="https://www.bythebay.cool/" target="_blank" rel="noreferrer noopener">By The Bay</a>.</span>,
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
