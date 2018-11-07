import React from 'react'
import PropPageBuilder from 'components/page-blocks/aggregators/PropPageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import LinksBlock from 'components/page-blocks/blocks/LinksBlock'
import SectionTitleBlock from 'components/page-blocks/blocks/SectionTitleBlock'
// import DonutGraphBlock from 'components/page-blocks/blocks/DonutGraphBlock'
import IMessageBlock from 'components/page-blocks/blocks/IMessageBlock'
import {EmojiLg} from 'components/static/iMessageStyles'
import ResultBlock from 'components/page-blocks/blocks/ResultBlock'
import {PropMetaData} from 'pages/prop-attributes'

import KQEDFinanceBlock from 'components/page-blocks/blocks/KQEDFinanceBlock'

import Citation from 'components/interactive/citation/citation'
// import Acronym from 'components/interactive/acronym'
import {Citations} from './expandables'

const Data = {
	pageId:"prop-3",
	propNum: 3,
	meta: {
		dateCreated: new Date('October 8, 2018 10:00:00'),
		dateModified: new Date('October 26, 2018 17:07:00')
	},
	blocks: [
		{
			component: ResultBlock,
			data: {
				result: PropMetaData(3).result,
				title: "This passed",
				text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			},
		},
    {
    	component: TextWithTitleBlock,
    	data: {
				title: "Have we met before?",
				text: "Possibly. This June, we passed Prop 68, a $4.1B bond measure that funds water and environmental projects in CA. Prop 3 is another $8.9B general obligation bond measure that funds water-related improvements across the state. Both measures add up to a grand total of about $13B."
			}
		},
		{
			component: TextWithTitleBlock,
			data: {
				title:"Wow, we really care about our water",
    		text: <span>
					Oh definitely, and especially farmers and agricultural water suppliers. Prop 3 would specifically improve the conditions of watershed lands ($2.5B), drinking water ($2.1B), fish and wildlife habitats ($1.4B), canals and water facilities ($1.2B), groundwater ($1.1B), and flood protection ($500M). The Legislative Analyst’s Office estimates that repaying Prop 3 would cost about $430M a year for the next 40 years, totaling $17.3B with interest, which is about 1/3 of one percent of CA’s General Fund budget.
				</span>
			}
		},
		{
			component: TextWithTitleBlock,
			data: {
				title:"Still sounds like a lot of money",
				text:
				<span>
					Critics of Prop 3 agree. Unlike Prop 68, which was put on the ballot by the state legislature,<Citation data={Citations['3']}> Prop 3 is on the ballot because the authors gathered enough signatures.</Citation> <Citation data={Citations['5']}>Opponents say it's a “pay-to-play” ballot measure that not only lacks administrative oversight, but also funds projects that directly benefit those who backed the campaign.</Citation> Prop 3 has raised about $3.4M from notable donors, including Land O' Lakes and Wonderful Orchards (the producers of POM juice and FIJI water). <Citation data={Citations['2']}>The owners of Wonderful Orchards, for instance, have farmland that sits in Kern County, of which $750M of Prop 3 would go towards fixing a damaged canal that waters the region.</Citation>
					<br/><br/>
					On the other hand, <Citation data={Citations['4']}>supporters argue that Prop 3 is a bipartisan initiative that doesn’t just focus on urban, coastal water problems like Prop 68, but commits significant funding and resources to inland California.</Citation> Local water authorities along with agriculture and conservation groups also support Prop 3 saying it’s a critical step to upgrading CA’s water system.
				</span>,
    	},
    },
		// {
		// 	component: DonutGraphBlock,
		// 	data:{
		// 		src:""
		// 	}
		// },
		{
			component: SectionTitleBlock,
			data:{
				title: "A typical IM convo",
				nColWidth: 6,
			}
		},
		{
			component: IMessageBlock,
			data: {
				messages: [
					{
						from: "them",
						body:"Drought, wildfires, earthquakes, CA is F'd"
					},
					{
						from: "me",
						body:"Chillll. Did you read about Prop 3?"
					},
					{
						from: "them",
						body:<span>Yea who paid for this one? <span role="img" aria-label="eyes rolling up">🙄</span></span>
					},
					{
						from:"me",
						body:"Lots of agribusinesses (Yes, that's a word)"
					},
					{
						from: "them-no-bg",
						body:<EmojiLg><span role="img" aria-label="nerd glasses emoji">🤓</span></EmojiLg>
							},
					{
						from:"me",
						body:<span>Some are calling it "pay to play", like farmers paying for Prop 3 to get their canal fixed.<Citation data={Citations['9']}>Did you see that it doesn't go through CA's annual budgetary process either.</Citation> Kinda sketch.</span>
					},
					{
						from: "them",
						body:<Citation data={Citations['11']}>Yea, but the prop requires an independent spending audit every three years.</Citation>
					},
					{
						from:"them",
						body:"And doesn't that Friant-Kern canal need fixing? The Oroville dam definitely does."
					},
					{
						from:"me",
						body:<Citation data={Citations['10']}>Why do I have to pay for a canal in central valley?</Citation>
					},
										{
						from:"them",
						body:"People pay for things that don't directly affect them all the time."
					},
					{
						from:"them",
						body:"I mean, clean drinking water is important"
					},
					{
						from:"me",
						body:<Citation data={Citations['10']}>Yea, but usually people who use the resource pay for its repair, not all of CA.</Citation>
					},
					{
						from:"me",
						body:<Citation data={Citations['8']}>Prop 3 authors: “Typically, in polling usually what polls well is safe drinking water, clean water in rivers and streams and water supply that’s resistant to drought".</Citation>
					},
					{
						from: "them",
						body:"You know what else polls well?"
					},
					{
						from:"me",
						body:"Covfefe?"
					},

				]
			}
		},
		{
			component: KQEDFinanceBlock,
			data:{
				widgetId:"3249",
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
						subsectionTitle: "Yes on Prop 3",
						links: [
							{
								text: "Fresno Bee Editorial Board",
								url: "https://www.fresnobee.com/opinion/editorials/article217097890.html"
							},
							{
								text: "The Press Democrat Editorial Board",
								url: "https://www.pressdemocrat.com/opinion/8803779-181/yes-on-prop-3-protecting"
							},
							{
								text: "Op-ed: Prop 3 will clean drinking water",
								url: "https://www.sfchronicle.com/opinion/openforum/article/California-Prop-3-vote-yes-to-pay-for-13273251.php"
							},
							{
								text: "Op-ed: Prop 3 will provide clean, safe, reliable water",
								url: "https://www.mercurynews.com/2018/09/14/opinion-prop-3-will-provide-clean-safe-reliable-water/"
							},
						]
					},
					{
						subsectionTitle: "No on Prop 3",
						links: [
							{
								text:"SF Chronicle Editorial Board",
								url:"https://www.sfchronicle.com/opinion/editorials/article/Chronicle-recommends-No-on-state-Prop-3-13211167.php"
							},
							{
								text: "San Diego Union-Tribune Editorial Board",
								url: "http://www.sandiegouniontribune.com/opinion/endorsements/sd-proposition-3-water-bond-20180911-story.html",
							},
							{
								text: "Mercury News & East Bay Times Editorial Board",
								url: "https://www.mercurynews.com/2018/09/19/editorial-reject-prop-3-8-9-billion-pay-to-play-water-bond/",
							},
							{
								text: "Santa Cruz Sentinel Editorial Board",
								url: "http://www.santacruzsentinel.com/opinion/20180918/editorial-vote-no-on-water-bond-prop-3-yes-on-prop-4-childrens-hospitals",
							},
							{
								text:"Desert Sun Editorial Board",
								url:"https://www.desertsun.com/story/opinion/editorials/2018/10/09/california-voters-reject-8-9-billion-proposition-3-giveaway-desert-sun-editorial-board-endorsement/1578538002/"
							},
							{
								text:"CA Sierra Club",
								url:"https://www.sierraclub.org/sites/www.sierraclub.org/files/sce/sierra-club-california/PDFs/FactSheet_Proposition3_Opposition-July18.pdf"
							},
						]
					},
					{
						subsectionTitle: "Related coverage",
						links: [
							{
								text:"Officials kick off Prop. 3 campaign",
								url:"https://hanfordsentinel.com/news/local/officials-kick-off-prop-campaign/article_4b04e7e1-89d7-5c2d-ac28-6e0cd60d7798.html"
							},
														{
								text:"Valadao, Costa, other Valley leaders rally in support of California water ballot prop",
								url:"https://www.fresnobee.com/news/politics-government/election/local-election/article218738990.html"
							},
						]
					},
					{
						subsectionTitle: "Impartial analyses",
						links: [
							{
								text: "Legislative Analyst's Office report",
								url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=3&year=2018",
							},
							{
								text: "Official voter guide digest",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/prop3-title-summ-analysis.pdf"
							},
							{
								text: "Legal text of proposition",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/topl.pdf#Prop3"
							},
							{
								text: "Ballotpedia",
								url:"https://ballotpedia.org/California_Proposition_3,_Water_Infrastructure_and_Watershed_Conservation_Bond_Initiative_(2018)"
							},
						]
					}
				]
			}
		}
  ]
}
export default () => (<PropPageBuilder data={Data}/>);
