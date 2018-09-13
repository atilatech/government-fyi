import React from 'react'
import PropPageBuilder from 'components/page-blocks/aggregators/PropPageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import SectionTitleBlock from 'components/page-blocks/blocks/SectionTitleBlock'
import LinksBlock from 'components/page-blocks/blocks/LinksBlock'
import DonutGraphBlock from 'components/page-blocks/blocks/DonutGraphBlock'
import BondData from './bond-data.json'
import Color from 'layout/colors'

// import Citation from 'components/interactive/citation/citation'
// import Acronym from 'components/interactive/acronym'
// import {Acronyms, Citations} from './expandables'

const Data = {
	pageId:"prop-1",
	propNum: 1,
	meta: {
		dateCreated: new Date('September 15, 2018 10:00:00'),
		dateModified: new Date('September 15, 2018 10:00:00')
	},
	blocks: [
    {
    	component: TextWithTitleBlock,
    	data: {
    		title: "A quickie",
    		text: "Prop 1 would issue $4 billion in general obligation bonds to fund housing programs. Specifically, $1B would go to providing housing loans for veterans, and $1.5B would go towards the state's Multifamily Housing Program.",
    	},
    },
    {
    	component: SectionTitleBlock,
    	data: {
    		title: "Breakdown of funds",
				nColWidth: 6,
    	},
    },
    {
    	component: DonutGraphBlock,
    	data: {
    		src: BondData,
				colorRangeStart: Color('orange1'),
				colorRangeEnd: Color('pink2'),
    	},
    },
    {
    	component: TextWithTitleBlock,
    	data: {
    		title: "Who's against it?",
				text: "The official argument was written by Gary Wesley, a man who for decades has written official ballot arguments when nobody else does. He argues that housing affordability is a much bigger problem in California, and that this is another band-aid to the problem."
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
								text: "",
								url: ""
							},
						]
					},
					{
						subsectionTitle: "Arguments against",
						links: [
							{
								text: "",
								url: "",
							},
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
								url: "http://voterguide.sos.ca.gov/propositions/1/"
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
