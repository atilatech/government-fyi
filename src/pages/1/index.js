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
    		title: "Is there a super complicated backstory?",
				text:
				<span>
					Nope! Prop 1 is part of a package of bills that intends to increase housing production and lower housing costs for residents. By law, every resident has to approve, aka vote, on bonds that cost more than $300K.
					<br/><br/>
					<Citation data={Citations['3']}>Opponents argue that with high taxes and a state budget surplus of $16B, legislators should make structural reforms rather than create more debt. Prop 1 is another band-aid, they claim, not a solution.</Citation> <Citation data={Citations['4']}>Critics point to <Acronym data={Acronyms.CEQA}/>, rent control, and  labor wages as examples of regulation that have driven up construction costs and contributed to CA’s housing shortage</Citation>
					<br/><br/>
					Almost everyone agrees that housing affordability in CA is a critical issue. How we decide to resolve it is contentious.
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
						body: "Oh right, CA is gonna spend less. 😒"
					},
					{
						from: "me",
						body: "We have a surplus so why don't we spend it? Housing is crazy expensive here so why don’t we build more?"
					},
					{
						from: "them",
						body: <span><Citation data={Citations['6']}>Or we can save it for our rainy day fund. Recessions are real.</Citation></span>
					},
					{
						from: "them",
						body: <span>If we want to build more housing, we should reform CEQA. <Citation data={Citations['7']}>It’ll make it easier to approve housing projects</Citation></span>
					},
					{
						from: "me",
						body: <span>If you want to save time, reform CEQA. <Citation data={Citations['7']}>It could add 18 months in construction delays.</Citation></span>
					},
					{
						from: "me",
						body: <span><Citation data={Citations['9']}>It might not be CEQA,</Citation> but point taken. <Citation data={Citations['8']}>Prop 1 would only build us 15K units</Citation>. We need 180K a year. Voting no tells pols that we need more than a temporary fix.</span>
					},
					{
						from: "them",
						body: "We can debate housing forever. People need homes now. Prop 1 is the fastest way to help them."
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
							},
							{
								text: "Legal text of proposition",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/topl.pdf#Prop1"
							}
						]
					}
				]
			}
		}
  ]
}
export default () => (<PropPageBuilder data={Data}/>);
