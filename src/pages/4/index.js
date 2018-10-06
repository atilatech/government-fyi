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
    		title: "What's going on?",
    		text: <span>
					<Citation data={Citations['5']}>California's children’s hospitals receive a majority of their funding from Medi-Cal, the state’s insurance program for low-income residents, which means they often lack the funds to keep up with their infrastructure costs.</Citation>
					<br/><br/>
					Prop 4 would issue $1.5B in general obligation bonds to renovate and upgrade CA’s children's hospitals, specifically eight private, nonprofit hospitals ($135M each), five <Acronym data={Acronyms.UC}/> medical centers ($54M each), and other hospitals that treat children in specialized wings ($150M).
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
						subsectionTitle: "No on Prop 4",
						links: [
							{
								text: "No editorial boards have written against Prop 4",
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
