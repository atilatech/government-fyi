import React from 'react'
import PropPageBuilder from 'components/page-blocks/aggregators/PropPageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import SectionTitleBlock from 'components/page-blocks/blocks/SectionTitleBlock'
import SummaryListBlock from 'components/page-blocks/blocks/SummaryListBlock'
import LinksBlock from 'components/page-blocks/blocks/LinksBlock'
import IMessageBlock from 'components/page-blocks/blocks/IMessageBlock'
import DonutGraphBlock from 'components/page-blocks/blocks/DonutGraphBlock'
import BondData from './bond-data.json'
import Color from 'layout/colors'

import Citation from 'components/interactive/citation/citation'
import Acronym from 'components/interactive/acronym'
import {Acronyms, Citations} from './expandables'

const Data = {
	pageId:"prop-1",
	propNum: 1,
	meta: {
		dateCreated: new Date('October 8, 2018 10:00:00'),
		dateModified: new Date('October 8, 2018 10:00:00')
	},
	blocks: [
    {
    	component: TextWithTitleBlock,
    	data: {
    		title: "This seems pretty cut & dry",
    		text: <span>
					Yep, at least on what the proposition intends to do. How you should vote, however, not so much. Essentially, Prop 1 would issue $4B in general obligation bonds to fund housing programs.
					<br/><br/>
					General obligation bonds are loans from investors that are repaid by the state over time with interest. $1B would be housing loans for veterans, which are of no cost to the state, and <Citation data={Citations['1']}>the rest of the money ($3B) would cost the state $5.9B, or $170M annually, to repay. It adds up to roughly 0.1% of our annual budget.</Citation></span>,
    	},
    },
    {
    	component: SectionTitleBlock,
    	data: {
    		title: "How will funds be spent?",
				nColWidth: 6,
    	},
    },
    {
    	component: DonutGraphBlock,
    	data: {
    		src: BondData,
				centerLabel: "$4B",
				colorRangeStart: Color('orange1'),
				colorRangeEnd: Color('pink2'),
    	},
    },
		{
			component: SummaryListBlock,
			data: {
				listNItems: 3,
				buttonText: "View the rest",
				stories: [
					{
						title:"CalVet Home Loan Program",
						description:"$1B to help military veterans buy homes, farms, or mobile homes."
					},
					{
						title:"Multi-family Housing Program",
						description:"$1.5B to build and maintain rental housing for low-income families."
					},
					{
						title:"Transit-Oriented Development",
						description:"$150M to encourage local governments and developers to build more housing near public transit areas."
					},
					{
						title:"Infill Incentive",
						description:"$300M to offer infill grants that support high-density affordable and mixed-income housing."
					},
					{
						title:"Home Purchase Assistance Program",
						description:"$150M to help low- and moderate-income residents buy homes."
					},
					{
						title:"Farmworker Housing Grant Fund",
						description:"$150M to build housing for farmworkers."
					},
					{
						title:"Local Housing Trust Matching Grant Program",
						description:"$300M to offer matching grants for local housing pilot programs that \"demonstrate innovative, cost-saving approaches to creating or preserving affordable housing.\""
					},
					{
						title:"Self-Help Housing Fund",
						description:"$300M which provides forgivable loans for mortgage assistance, the development of multiple home ownership units, and manufactured homes"
					},
				]
			}
		},
		{
    	component: TextWithTitleBlock,
    	data: {
    		title: "Is there a super complicated backstory?",
				text:
				<span>
					Nope! Prop 1 is a part of a package of bills that intends to increase housing production and lower housing costs for residents. By law, every resident has to approve, aka vote, on bonds that cost more than $300K.
					<br/><br/>
					<Citation data={Citations['3']}>Opponents argue that with high taxes and a state budget surplus of $16B, legislators should make structural reforms rather than create more debt. Prop 1 is another band-aid, they claim, not a solution.</Citation> <Citation data={Citations['4']}>Critics point to <Acronym data={Acronyms.CEQA}/>, rent control, and  labor wages as examples of regulation that have driven up construction costs and contributed to CA’s housing shortage.</Citation>
					<br/><br/>
					Almost everyone agrees that housing affordability in CA is a critical issue, but how we resolve it remains contentious.
				</span>
    	},
    },
		{
			component: SectionTitleBlock,
			data: {
				title: "A debate",
				nColWidth: 6
			}
		},
		{
			component: IMessageBlock,
			data: {
				messages: [
					{
						from: "me",
						body: <span>CA doesn't need to add more debt. <Citation data={Citations['5']}>We already pay some of the highest taxes in the country</Citation></span>,
					},
					{
						from: "them",
						body: "Prop 1 doesn't necessarily mean higher taxes. It depends on how much we tax and spend on other stuff"
					},
					{
						from: "me",
						body: "We have a budget surplus so why don't we spend it on building more housing instead of issuing loans?"
					},
					{
						from: "them",
						body: <span><Citation data={Citations['6']}>Recessions are real and we should save our extra $$ for a rainy day.</Citation></span>
					},
					{
						from: "them",
						body: <span>Prop 1 would help 30K families + 7.5K farmworkers afford their homes, and 15.K people and 3K veterans buy new homes every year.</span>
					},
					{
						from: "me",
						body: <span><Citation data={Citations['8']}>But CA needs 180K homes a year and Prop 1 would only build 15K units.</Citation> Voting 'no' tells pols that we need more than a temporary fix.</span>
					},
					{
						from: "them",
						body: "We can debate housing forever. People need homes now. Prop 1 is the quickest way to help."
					}
				]
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
						subsectionTitle: "Yes on Prop 1",
						links: [
							{
								text: "San Francisco Chronicle Editorial Board",
								url: "https://www.sfchronicle.com/opinion/editorials/article/Chronicle-recommends-Yes-on-California-Prop-1-13231141.php"
							},
							{
								text: "The Sacramento Bee Editorial Board",
								url: "https://www.sacbee.com/opinion/election-endorsements/article218406765.html"
							},
						]
					},
					{
						subsectionTitle: "No on Prop 1",
						links: [
							{
								text: "The San Diego Union-Tribune Editorial Board",
								url: "http://www.sandiegouniontribune.com/opinion/sd-proposition-1-california-housing-20180914-story.html"
							},
							{
								text: "The Press-Enterprise Editorial Board",
								url: "https://www.pe.com/2018/09/18/proposition-1-is-not-the-answer-to-our-housing-crisis-vote-no/",
							},
							{
								text:"Op-Ed: Proposition 1 is not the way to address affordable housing problem",
								url: "http://www.sandiegouniontribune.com/opinion/commentary/sd-oe-prop1-housing-coupal-20180801-story.html"
							}
						]
					},
					{
						subsectionTitle: "Impartial analyses",
						links: [
							{
								text: "CA Legislative Analyst's Office report",
								url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=1&year=2018",
							},
							{
								text: "Official voter guide digest",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/prop1-title-summ-analysis.pdf"
							},
							{
								text: "Legal text of proposition",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/topl.pdf#Prop1"
							},
														{
								text: "Ballotpedia",
								url:"https://ballotpedia.org/California_Proposition_1,_Housing_Programs_and_Veterans%27_Loans_Bond_(2018)"
							},
						]
					}
				]
			}
		}
  ]
}
export default () => (<PropPageBuilder data={Data}/>);
