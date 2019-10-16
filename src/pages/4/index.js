import React from 'react'
import PropPageBuilder from '../../components/page-blocks/aggregators/PropPageBuilder'
import TextWithTitleBlock from '../../components/page-blocks/blocks/TextWithTitleBlock'
import LinksBlock from '../../components/page-blocks/blocks/LinksBlock'
import IMessageBlock from '../../components/page-blocks/blocks/IMessageBlock'
import SectionTitleBlock from '../../components/page-blocks/blocks/SectionTitleBlock'
import ResultBlock from '../../components/page-blocks/blocks/ResultBlock'
import {PropMetaData} from '../../pages/prop-attributes'

import Citation from '../../components/interactive/citation/citation'
import Acronym from '../../components/interactive/acronym'
import {Acronyms, Citations} from './expandables'
import {EmojiLg} from "../../components/static/iMessageStyles";

const Data = {
	pageId:"education",
	propNum: 4,
	meta: {
		dateCreated: new Date('October 14, 2019 10:00:00'),
		dateModified: new Date('October 14, 2019 10:00:00')
	},
	blocks: [
		{
			component: SectionTitleBlock,
			data:{
				title: "A Casual Conversation About Education",
				nColWidth: 6,
			}
		},
		{
			component: IMessageBlock,
			data: {
				messages: [
					{
						from: "me",
						body: <span>I'm graduating soon </span>,
					},
					{
						from:"me-no-bg",
						body:<EmojiLg><span role="img" aria-label="crying emoji">😭</span></EmojiLg>
					},
					{
						from: "them",
						body: "You should be celebrating. Why the crying face?",
					},
					{
						from: "me",
						body: "I realized that I'm graduating with over $20,000 in student loans"
					},
					{
						from: "me",
						body: "And I have to start paying it back 6 months after I graduate."
					},
					{
						from: "me",
						body: "Also, I don't have a job lined up for when I leave school."
					},
					{
						from: "them",
						body: "Well it could be worse"
					},
					{
						from: "them",
						body: <span>
							Most people graduate with about
							<Citation data={Citations['7']}>$28,00 in student loans</Citation>.
						</span>
					},
					{
						from: "me",
						body: "Not helping 🙄"
					},
					{
						from: "them",
						body: "Look on the bright side, I heard that some parties were talking about forgiving student loans"
					},
					{
						from: "me",
						body: "Forgiving student loans? "
					},
					{
						from: "me",
						body: "I like the sound of that 😁"
					},
					{
						from:"me-no-bg",
						body:<EmojiLg><span role="img" aria-label="thinking emoji">🤔</span></EmojiLg>
					},
					{
						from: "me",
						body: "But Wait, what about the people that worked hard to pay their student loans"
					},
					{
						from: "them",
						body: "Unfortunately, we can't change the past."
					},
					{
						from: "them",
						body: "The most important thing now is making sure future students " +
							"aren't crushed with debt when they graduate."
					},
					{
						from: "me",
						body: "hmm, I see what you mean"
					},
					{
						from: "me",
						body: "But what happens the next year. Back to square one?"
					},
					{
						from: "me",
						body: "Why not just make university tuition free?"
					},
					{
						from: "them",
						body: <span>chill, that would be way too expensive.

							You have the <Citation data={Citations['7']}>$10.6 billion</Citation> to pay for that?
						</span>
					},
					{
						from: "them",
						body: "You can't even afford your $20,000 student loan . 😂"
					},
					{
						from:"me-no-bg",
						body:<EmojiLg><span role="img" aria-label="angry emoji">😡</span></EmojiLg>
					},
					{
						from: "them",
						body: "Sorry, I got carried away 😂"
					},
					{
						from: "them",
						body: <span>
							You have a point though. I mean <Citation data={Citations['7']}>Germany has free tuition.</Citation>
							Even for international students.
						</span>
					},
					{
						from: "me",
						body: "btw...One more thing..."
					},
					{
						from: "me",
						body: "Can I have a job? 😁"
					},
				]
			}
		},
    {
    	component: TextWithTitleBlock,
    	data: {
    		title: "Think of the children!",
    		text: <span>
					<Citation data={Citations['5']}>California's children’s hospitals receive a majority of their funding from Medi-Cal, the state’s insurance program for low-income residents, which means they often lack the funds to keep up with their infrastructure costs.</Citation>
					<br/><br/>
					Prop 4 would issue $1.5B in general obligation bonds to renovate and upgrade CA’s children's hospitals, specifically eight private, nonprofit hospitals ($135M each), five <Acronym data={Acronyms.UC}/> medical centers ($54M each), and other hospitals that treat children in specialized wings ($150M). The bond measure would be repaid from CA's General Fund.
					<br/><br/>
					General obligation bonds are loans from investors that are repaid by the state over time with interest. <Citation data={Citations['2']}>The $1.5B would cost us $2.9B over 35 years, or $80M annually (roughly 0.1% of our annual budget).</Citation>
				</span>,
    	},
    },
		{
    	component: TextWithTitleBlock,
    	data: {
    		title: "Do we always fund private hospitals?",
    		text: <span>
					Critics say we shouldn’t. <Citation data={Citations['4']}>They argue private hospitals should be primarily funded by private donations or pre-existing state funds, not new debt.</Citation> <Citation data={Citations['3']}>Since state funding for hospital infrastructure has been cut, hospitals have successfully relied on bond measures to fund their operations.</Citation> <Citation data={Citations['1']}>So far, the state’s eight private hospitals have contributed a total of more than $10M in support Prop 4.</Citation>
				</span>,
    	},
	  },
		{
			component: SectionTitleBlock,
			data:{
				title: "Making fun and making points"
			}
		},
		{
			component: SectionTitleBlock,
			data:{
				title: "More reading"
			}
		},
		{
			component: LinksBlock,
			data: {
				subsections:[
					{
						subsectionTitle: "Yes on Prop 4",
						links: [
							{
								text:"Mercury News & East Bay Times Editorial Board",
								url:"https://www.mercurynews.com/2018/08/15/editorial-prop-4/"
							},
							{
								text:"LA Times Editorial Board",
								url:"http://www.latimes.com/opinion/editorials/la-ed-yes-on-proposition-4-20180925-story.html"
							},
							{
								text: "San Diego Union-Tribune Editorial Board",
								url: "http://www.sandiegouniontribune.com/opinion/editorials/sd-prop-4-california-hospitals-20180919-story.html"
							},
							{
								text: "Santa Cruz Sentinel Editorial Board",
								url: "http://www.santacruzsentinel.com/opinion/20180918/editorial-vote-no-on-water-bond-prop-3-yes-on-prop-4-childrens-hospitals"
							},
							{
								text:"SF Chronicle Editorial Board",
								url:"https://www.sfchronicle.com/opinion/editorials/article/Editorial-Chronicle-recommends-Yes-on-Prop-4-13257968.php"
							},
							{
								text:"Sac Bee Editorial Board",
								url:"https://www.sacbee.com/opinion/election-endorsements/article218967200.html",
							},
													{
								text:"Official Yes on Prop 4 website",
								url:"http://www.yesonproposition4.org/?utm_source=BeeMedia&utm_medium=Search&gclid=Cj0KCQjw6fvdBRCbARIsABGZ-vTOA3WOCgKq_aPNpMvT8MR4Ku8Y5cXo7L9mwJ9cc9tzlyvM7PIiQfYaAgtuEALw_wcB"
							},
						]
					},
					{
						subsectionTitle: "No on Prop 4",
						links: [
						{
								text:"LA Daily News Editorial Board",
								url:"https://www.dailynews.com/2018/09/27/no-on-proposition-4-and-its-bond-debt/"
							},
						]
					},
										{
						subsectionTitle: "Impartial analyses",
						links: [
							{
								text: "Legislative Analyst's Office report",
								url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=4&year=2018",
							},
							{
								text: "Official voter guide digest",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/prop4-title-summ-analysis.pdf"
							},
							{
								text: "Legal text of proposition",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/topl.pdf#Prop4"
							},
							{
								text: "Ballotpedia",
								url:"https://ballotpedia.org/California_Proposition_4,_Children%27s_Hospital_Bonds_Initiative_(2018)"
							},
						]
					},
				]
			}
		}
  ]
}
export default () => (<PropPageBuilder data={Data}/>);
