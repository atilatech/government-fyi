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
		documentTitle:"California State Propositions 2018 – a nonpartisan guide",
		socialHeadline:"The quickest nonpartisan voter guide for the midterms",
		socialDescription:"A nonpartisan guide to California's 11 propositions, including daylight saving, cage-free eggs, and rent control",
		socialImage:"general.png",
	},
	blocks: [
		{
			component: FrontPageTitleBlock,
			data: {
				title: "A Nonpartisan guide to California's 2018 election",
				body:
				<span>
					This election, California gives us 11 semi-ridiculous, yet very important, ballot initiatives to vote on and make fun of. We'll break them down for you, explain what different sides are saying and why your vote actually matters.
					<br/><br/>
					<b>Looking for results?</b> KQED provides <a href="https://www.kqed.org/elections/results?ref=ballotfyi" target="_blank" rel="noreferrer noopener">results</a> for everything local live on election night. We'll be updating ballot.fyi as the outcome is determined.<span role="img" aria-label="crossed-fingers">🤞</span> 
				</span>,
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
