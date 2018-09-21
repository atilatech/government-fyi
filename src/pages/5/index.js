import React from 'react'
import PropPageBuilder from 'components/page-blocks/aggregators/PropPageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import LinksBlock from 'components/page-blocks/blocks/LinksBlock'
import SectionTitleBlock from 'components/page-blocks/blocks/SectionTitleBlock'

// import Citation from 'components/interactive/citation/citation'
// import Acronym from 'components/interactive/acronym'
// import {Acronyms, Citations} from './expandables'

const Data = {
	pageId:"prop-5",
	propNum: 5,
	meta: {
		dateCreated: new Date('October 8, 2018 10:00:00'),
		dateModified: new Date('October 8, 2018 10:00:00')
	},
	blocks: [
    {

    	component: TextWithTitleBlock,
    	data: {
    		// title: "",
    		text: "Prop 5 ",
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
								text: "KQED Forum debate",
								url: "https://www.kqed.org/forum/2010101867263/election-2018-proposition-5-property-tax-break"
							},
							{
								text: "Legislative Analyst's Office analysis",
								url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=5&year=2018",
							},
							{
								text: "Official voter guide digest",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/prop5-title-summ-analysis.pdf"
							},
							{
								text: "Ballotpedia",
								url:"https://ballotpedia.org/California_Proposition_5,_Property_Tax_Transfer_Initiative_(2018)",
							}
						]
					}
				]
			}
		}
  ]
}
export default () => (<PropPageBuilder data={Data}/>);
