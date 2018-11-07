import React from 'react'
import PropPageBuilder from 'components/page-blocks/aggregators/PropPageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import LinksBlock from 'components/page-blocks/blocks/LinksBlock'
import IMessageBlock from 'components/page-blocks/blocks/IMessageBlock'
import SectionTitleBlock from 'components/page-blocks/blocks/SectionTitleBlock'
import KQEDFinanceBlock from 'components/page-blocks/blocks/KQEDFinanceBlock'
import ResultBlock from 'components/page-blocks/blocks/ResultBlock'
import {PropMetaData} from 'pages/prop-attributes'

import Citation from 'components/interactive/citation/citation'
import Acronym from 'components/interactive/acronym'
import {Acronyms, Citations} from './expandables'

const Data = {
	pageId:"prop-4",
	propNum: 4,
	meta: {
		dateCreated: new Date('October 8, 2018 10:00:00'),
		dateModified: new Date('October 23, 2018 8:30:00')
	},
	blocks: [
		// {
		// 	component: ResultBlock,
		// 	data: {
		// 		result: PropMetaData(4).result,
		// 		title: "This passed",
		// 		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		// 	},
		// },
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
			component: IMessageBlock,
			data: {
				messages: [
					{
						from: "me",
						body: "Pretty much everybody is for this. I'm voting \"duh yes.\"",
					},
					{
						from: "them",
						body: "Put your Libertarian hat on – what would they say?",
					},
					{
						from: "me",
						body: "That we shouldn't add more debt?"
					},
					{
						from: "me",
						body: "Do Libertarians wear hats?"
					},
					{
						from: "them",
						body: "As long as the government isn't subsidizing those hats, yes."
					},
					{
						from: "them",
						body: "Seriously, why are we adding debt for something everybody seemingly agrees we ought to do?"
					},
					{
						from: "them",
						body: <span>If that's the case, we should just squeeze it into our budget, or <Citation data={Citations['6']}>have the hospitals pay for it.</Citation></span>
					},
					{
						from: "me",
						body: "Easier said than done."
					},
					{
						from: "me",
						body: <span>Increasing spending pisses off taxpayers. <Citation data={Citations['7']}>And we cut children's hospital infrastructure programs back in the 90s.</Citation></span>
					},
					{
						from: "them",
						body: "The point is to avoid more debt. Kids are important, but the debate is good for us."
					},
					{
						from: "me",
						body: "Sorry I couldn't hear you through my hat."
					},
				]
			}
		},
		{
			component: KQEDFinanceBlock,
			data:{
				widgetId:"3250",
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
