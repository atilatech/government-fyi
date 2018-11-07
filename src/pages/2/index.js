import React from 'react'
import PropPageBuilder from 'components/page-blocks/aggregators/PropPageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import LinksBlock from 'components/page-blocks/blocks/LinksBlock'
import SectionTitleBlock from 'components/page-blocks/blocks/SectionTitleBlock'
import IMessageBlock from 'components/page-blocks/blocks/IMessageBlock'
import KQEDFinanceBlock from 'components/page-blocks/blocks/KQEDFinanceBlock'
import ResultBlock from 'components/page-blocks/blocks/ResultBlock'
import {PropMetaData} from 'pages/prop-attributes'

import Citation from 'components/interactive/citation/citation'
// import Acronym from 'components/interactive/acronym'
import {Citations} from './expandables'

const Data = {
	pageId:"prop-2",
	propNum: 2,
	meta: {
		dateCreated: new Date('October 8, 2018 10:00:00'),
		dateModified: new Date('November 5, 2018 12:52:00')
	},
	blocks: [
		{
			component: ResultBlock,
			data: {
				result: PropMetaData(2).result,
				title: "This passed",
				text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			},
		},
    {
    	component: TextWithTitleBlock,
    	data: {
    		title: "A Millionaire’s tax, eh? 🤑",
    		text:"Yep, it was new to us too. Prop 2 would allow the state to use revenue from the \"Millionaire's tax\" – a 1% income tax for residents earning $1M or more a year – to pay for housing for homeless people who are mentally ill."
			}
		},
		{
    	component: TextWithTitleBlock,
    	data: {
					title:"What’s the backstory?",
					text:
					<span>
						<Citation data={Citations['1']}>The Millionaire’s tax was originally passed as Prop 63 in 2004, and it was intended to help counties create and expand mental health services with a "treatment-first" approach.</Citation> <Citation data={Citations['2']}>In 2016, however, the state legislature took a “housing-first” approach and passed a program called <em>No Place Like Home</em> to build permanent supportive housing for homeless people suffering from mental illness. The one-time $2B program would have re-purposed funds from Prop 63</Citation>, <Citation data={Citations['3']}> but a lawsuit claimed Prop 63 was a voter-approved measure that didn’t specify housing costs. The legislature couldn't modify Prop 63.</Citation>
						<br/><br/>
						So it's thrown back to the voters. If Prop 2 passes, the <em>No Place Like Home</em> program would receive $120M a year from the $2B generated annually by the Millionaire's tax. If Prop 2 fails, we'd leave it up to the courts to decide whether <em>No Place Like Home</em> could use Prop 63's funds.
				</span>,
    	},
    },
		{
			component: SectionTitleBlock,
			data: {
				title: "Housing-first or treatment-first?",
				nColWidth: 6
			}
		},
		{
			component: IMessageBlock,
			data: {
				messages: [
					{
						from: "them",
						body: "Homelessness and mental illness aren’t separate issues. We need to tackle both."
					},
					{
						from: "me",
						body: "Agreed, but everyone already cares about housing. This would be stealing $$ from treating the mentally ill."
					},
					{
						from: "them",
						body: "We need to build as much housing as possible"
					},
					{
						from: "them",
						body: <span><Citation data={Citations['5']}>Plus, counties have hardly been been spending their money on treatment. They've been stashing it.</Citation></span>
					},
					{
						from: "me",
						body: "They can't spend it all. They're providing a social service that's paid for as long as the economy is good. That might not last."
					},
					{
						from:"me",
						body:<Citation data={Citations['7']}>Also, they're allowed to hold the funds to give counties flexibility.</Citation>
					},
					{
						from: "me",
						body: <Citation data={Citations['6']}>Don’t forget that cities are often reluctant to approve housing for the homeless. We might end up with fewer new homes than you think.</Citation>
					},
					{
						from: "them",
						body: "But you agree we need more housing? Prop 2 does that without adding debt"
					},
					{
						from: "me",
						body: "The $120M a year will go to a lot of administrative fees and interest from the housing bonds. There are better ways to solve housing if that's your goal."
					}
				]
			}
		},
		{
			component: KQEDFinanceBlock,
			data:{
				widgetId:"3248",
			}
		},
		{
			component: SectionTitleBlock,
			data:{
				title: "More articles"
			}
		},
		{
			component: LinksBlock,
			data: {
				subsections:[
					{
						subsectionTitle: "Yes on Prop 2",
						links: [
							{
								text: "SF Chronicle Editorial Board",
								url: "https://www.sfchronicle.com/opinion/editorials/article/Editorial-Chronicle-recommends-Yes-on-California-13242085.php"
							},
							{
								text: "LA Times Editorial Board",
								url: "http://www.latimes.com/opinion/endorsements/la-ed-proposition-2-mentally-ill-housing-20181002-story.html",
							},
							{
								text: "San Diego Union-Tribune Editorial Board",
								url: "http://www.sandiegouniontribune.com/opinion/editorials/sd-proposition-two-help-homeless-menatl-health-utak-20180917-story.html"
							},
							{
								text: "San Jose Mercury News & East Bay Times Editorial Board",
								url:"https://www.mercurynews.com/2018/09/22/editorial-prop-2/"
							},
							{
								text: "Sac Bee Editorial Board",
								url: "https://www.sacbee.com/opinion/election-endorsements/article218406765.html"
							},
							{
								text: "Press Democrat Editorial Board",
								url:"https://www.pressdemocrat.com/opinion/8665876-181/pd-editorial-yes-on-prop?sba=AAS"
							},
							{
								text:"Fresno Bee Editorial Board",
								url:"https://www.fresnobee.com/opinion/editorials/article218551355.html"
							},
							{
								text: "CA Chamber of Commerce",
								url:"https://advocacy.calchamber.com/2018/09/12/calchamber-takes-positions-on-propositions-1-2-and-4-recaps-positions-on-all-ballot-measures/"
							}
						]
					},
					{
						subsectionTitle: "No on Prop 2",
						links: [
							{
								text: "Op-ed: Invest in people first",
								url:"http://www.sandiegouniontribune.com/opinion/commentary/sd-proposition-2-20180830-story.html"
							},
						]
					},
					{
						subsectionTitle: "Related coverage",
						links: [
							{
								text:"KQED Forum debate",
								url:"https://www.kqed.org/forum/2010101867764/election-2018-proposition-2-would-use-revenue-from-millionaires-tax-to-fund-homeless-housing"
							},
							{
								text:"$2 billion to help house California's homeless isn't being spent — and no one knows when it will be",
								url:"http://www.latimes.com/politics/la-pol-ca-homeless-housing-bond-stalled-20180301-story.html"
							},
							{
								text: "CA counties slow to spend mental health tax",
								url:"https://www.sacbee.com/news/politics-government/capitol-alert/article202396749.html"
							}
						]
					},
					{
						subsectionTitle: "Impartial analyses",
						links: [
							{
								text: "Legislative Analyst's Office report",
								url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=2&year=2018",
							},
							{
								text: "Official voter guide digest",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/prop2-title-summ-analysis.pdf"
							},
							{
								text: "Legal text of proposition",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/topl.pdf#Prop2"
							},
														{
								text: "Ballotpedia",
								url:"https://ballotpedia.org/California_Proposition_2,_Use_Millionaire%27s_Tax_Revenue_for_Homelessness_Prevention_Housing_Bonds_Measure_(2018)"
							},
						]
					}
				]
			}
		}
  ]
}
export default () => (<PropPageBuilder data={Data}/>);
