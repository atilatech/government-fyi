import React from 'react'
import PropPageBuilder from 'components/page-blocks/aggregators/PropPageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import LinksBlock from 'components/page-blocks/blocks/LinksBlock'
import SectionTitleBlock from 'components/page-blocks/blocks/SectionTitleBlock'

import Citation from 'components/interactive/citation/citation'
import Acronym from 'components/interactive/acronym'
import {Acronyms, Citations} from './expandables'

const Data = {
	pageId:"prop-4",
	propNum: 4,
	meta: {
		dateCreated: new Date('October 8, 2018 10:00:00'),
		dateModified: new Date('October 8, 2018 10:00:00')
	},
	blocks: [
    {
    	component: TextWithTitleBlock,
    	data: {
    		title: "So quick",
    		text: <span>
					Prop 4 would issue $1.5B in general obligation bonds for construction and renovation of children's hospitals. California has eight private, nonprofit children's hospitals and five in the <Acronym data={Acronyms.UC}/> system. <Citation data={Citations['1']}>All eight private hospitals have donated over $10M total in support of this proposition.</Citation> So far, there has been no major opposition.
					<br/><br/>
					General obligation bonds are loans from investors that are repaid by the state over time with interest. <Citation data={Citations['2']}>The $1.5B will cost the state $2.9B over 35 years, or $80M annually (roughly 0.1% of the annual budget).</Citation>
				</span>,
    	},
    },
		{
    	component: TextWithTitleBlock,
    	data: {
    		title: "Money",
    		text: <span>
					The $1.5B would go be split amongst the hospitals in grants that they would apply for. All eight private hospitals would receive up to $135M each, and the five UC hospitals would receive up to $54M each. The remaining $150M would go to other hospitals, that are not specifically identified as children's hospitals, but treat children in specialized wings.
				</span>,
    	},
    },
		{
    	component: TextWithTitleBlock,
    	data: {
    		title: "Why do private hospitals need public money?",
    		text: <span>
					<Citation data={Citations['4']}>The only opposition we could find argued that these hospitals should be financing infrastructure with private donations or existing state funds.</Citation> <Citation data={Citations['3']}>One columnist explains that since state funding for hospital infrastructure was cut, the hospitals have successfully relied on bond measures and have spent them responsibly.</Citation> <Citation data={Citations['5']}>Children's hospitals also largely rely on reimbursements from Medi-Cal, lowering their profitability.</Citation>
				</span>,
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
								text:"Mercury News & East Bay Times Editorial Board",
								url:"https://www.mercurynews.com/2018/08/15/editorial-prop-4/"
							},
							{
								text: "San Diego Union-Tribune Editorial Board",
								url: "http://www.sandiegouniontribune.com/opinion/editorials/sd-prop-4-california-hospitals-20180919-story.html"
							},
							{
								text: "Santa Cruz Sentinel Editorial Board",
								url: "http://www.santacruzsentinel.com/opinion/20180918/editorial-vote-no-on-water-bond-prop-3-yes-on-prop-4-childrens-hospitals"
							},
						]
					},
					{
						subsectionTitle: "Arguments against",
						links: [
							{
								text: "No editorial boards are against this",
							},
						]
					},
					{
						subsectionTitle: "Impartial analyses",
						links: [
							{
								text: "Legislative Analyst's Office analysis",
								url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=4&year=2018",
							},
							{
								text: "Official voter guide digest",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/prop4-title-summ-analysis.pdf"
							},
							{
								text: "Ballotpedia",
								url:"https://ballotpedia.org/California_Proposition_4,_Children%27s_Hospital_Bonds_Initiative_(2018)"
							},
							{
								text: "Legal text of proposition",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/topl.pdf#Prop4"
							}
						]
					}
				]
			}
		}
  ]
}
export default () => (<PropPageBuilder data={Data}/>);
