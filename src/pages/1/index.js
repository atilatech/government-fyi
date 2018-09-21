import React from 'react'
import PropPageBuilder from 'components/page-blocks/aggregators/PropPageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import SectionTitleBlock from 'components/page-blocks/blocks/SectionTitleBlock'
import SummaryListBlock from 'components/page-blocks/blocks/SummaryListBlock'
import LinksBlock from 'components/page-blocks/blocks/LinksBlock'
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
    		title: "This one is cut & dry",
    		text: <span>At least, on what it intends to do. How to vote, not so much. Prop 1 would issue $4 billion in general obligation bonds to fund housing programs.
					<br/><br/>
					General obligation bonds are loans from investors that are repaid by the state over time with interest. $1B of that money is housing loans to veterans, which are of no cost to the state. <Citation data={Citations['1']}>The rest of the money ($3B) will cost the state $5.9B over their lifetime, or $170M annually (roughly 0.1% of the annual budget).</Citation></span>,
    	},
    },
    {
    	component: SectionTitleBlock,
    	data: {
    		title: "Breakdown of fund usage",
				nColWidth: 6,
    	},
    },
    {
    	component: DonutGraphBlock,
    	data: {
    		src: BondData,
				centerLabel: "$4M",
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
						description:"$1B which offers loans to veterans for the purchase of homes, farms, and mobile homes"
					},
					{
						title:"Multifamily Housing Program",
						description:"$1.5B which offers loans to low-income people for the construction and maintenance of rental housing"
					},
					{
						title:"Transit-Oriented Development",
						description:"$150M which offers loans and grants to local governments and developers for housing projects near transit stations"
					},
					{
						title:"Infill Incentive",
						description:"$300M which offers grants for infill infrastructure that supports high-density affordable and mixed-income housing"
					},
					{
						title:"Home Purchase Assistance Program",
						description:"$150M which offers loans low to moderate-income homebuyers"
					},
					{
						title:"Farmworker Housing Grant Fund",
						description:"$150M which offers grants and loans for farmworker housing"
					},
					{
						title:"Local Housing Trust Matching Grant Program",
						description:"$300M which offers matching grants to local housing trust funds for \"pilot programs to demonstrate innovative, cost-saving approaches to creating or preserving affordable housing\""
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
    		title: "No stupid-complicated backstory?",
				text:
				<span>
					Not with this proposition. Prop 1 comes as part of a package of bills that's intended to increase housing production and lower costs for residents. By law, we have to / get to vote on any bonds over $300K.
					<br/><br/>
					<Citation data={Citations['3']}>Opponents argue that with a state budget surprlus of $16B and already-high taxes, legislators should be making structural reforms rather than creating more debt for another band-aid.</Citation> <Citation data={Citations['4']}>They point to <Acronym data={Acronyms.CEQA}/>, rent control, and prevailing wages as examples of regulation that drives up the cost of construction</Citation>, a factor that has lead to a shortage in housing.
					<br/><br/>
					Nearly everyone agrees housing affordability is an issue in California. It's how we get through it that's contentious.

				</span>
    	},
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
						subsectionTitle: "Arguments in favor",
						links: [
							{
								text: "SF Chronicle Editorial Board",
								url: "https://www.sfchronicle.com/opinion/editorials/article/Chronicle-recommends-Yes-on-California-Prop-1-13231141.php"
							},
							{
								text: "Sac Bee Editorial Board",
								url: "https://www.sacbee.com/opinion/election-endorsements/article218406765.html"
							},
						]
					},
					{
						subsectionTitle: "Arguments against",
						links: [
							{
								text: "San Diego Union-Tribune Editorial Board",
								url: "http://www.sandiegouniontribune.com/opinion/sd-proposition-1-california-housing-20180914-story.html"
							},
							{
								text: "Press Enterprise Editorial Board",
								url: "https://www.pe.com/2018/09/18/proposition-1-is-not-the-answer-to-our-housing-crisis-vote-no/",
							},
							{
								text:"Op-ed: Proposition 1 is not the way to address affordable housing problem",
								url: "http://www.sandiegouniontribune.com/opinion/commentary/sd-oe-prop1-housing-coupal-20180801-story.html"
							}
						]
					},
					{
						subsectionTitle: "Impartial analyses",
						links: [
							{
								text: "Legislative Analyst's Office analysis",
								url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=1&year=2018",
							},
							{
								text: "Official voter guide digest",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/prop1-title-summ-analysis.pdf"
							},
							{
								text: "Ballotpedia",
								url:"https://ballotpedia.org/California_Proposition_1,_Housing_Programs_and_Veterans%27_Loans_Bond_(2018)"
							}
						]
					}
				]
			}
		}
  ]
}
export default () => (<PropPageBuilder data={Data}/>);
