import React from 'react'
import PropPageBuilder from 'components/page-blocks/aggregators/PropPageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import LinksBlock from 'components/page-blocks/blocks/LinksBlock'
import SectionTitleBlock from 'components/page-blocks/blocks/SectionTitleBlock'
import DonutGraphBlock from 'components/page-blocks/blocks/DonutGraphBlock'
import IMessageBlock from 'components/page-blocks/blocks/IMessageBlock'

import Citation from 'components/interactive/citation/citation'
// import Acronym from 'components/interactive/acronym'
import {Citations} from './expandables'

const Data = {
	pageId:"prop-3",
	propNum: 3,
	meta: {
		dateCreated: new Date('October 8, 2018 10:00:00'),
		dateModified: new Date('October 8, 2018 10:00:00')
	},
	blocks: [
    {
    	component: TextWithTitleBlock,
    	data: {
				title: "Have we met before?",
				text: "Possibly. In June, we passed Prop 68, a $4.1B bond measure that funds water and environmental projects in CA. Prop 3 is another $8.9B general obligation bond measure that funds water-related improvements across the state. Both measures add up to a grand total of about $13B."
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
				title: "$8.9 billion",
				nColWidth: 6,
			}
		},
		{
			component: IMessageBlock,
			data: {
				messages: [
					{
						from: "them",
						body:"California's water is fucked"
					},
					{
						from: "them",
						body:"When it rains, we get wildfires. When it droughts, avocado prices skyrocket"
					},
					{
						from: "me",
						body:"Do you think Prop 3 would help?"
					},
					{
						from: "them",
						body:<span>Not sure. We just voted on another prop about water in June, but somebody said <Citation data={Citations['3']}>it was placed on the ballot to deter voters from Prop 3.</Citation></span>
					},
					{
						from: "me",
						body:"June's prop was from the legislature. This prop got on the ballot by gathering enough signatures from the public."
					},
					{
						from:"them",
						body:"Perfect. Who paid for this one"
					},
					{
						from:"me",
						body:"Lots in agriculture support it financially"
					},
					{
						from:"me",
						body:<span>Some oppose it because it's "pay to play", like farmers getting their canal fixed, and <Citation data={Citations['9']}>because it doesn't go through the annual budgetary process</Citation>, even though it's $17B in state debt.</span>
					},
					{
						from: "them",
						body:<Citation data={Citations['11']}>The prop does require an independent audit on spending every three years though.</Citation>
					},
					{
						from:"them",
						body:"And doesn't that canal need fixing? The Oroville dam definitely does."
					},
					{
						from:"me",
						body:<Citation data={Citations['10']}>Yea, but usually the users of the resource pay for its repair, not all of California.</Citation>
					},
					{
						from:"them",
						body:"Clean drinking water is important"
					},
					{
						from:"me",
						body:<Citation data={Citations['8']}>Prop 3's author said, “Typically, in polling usually what polls well is safe drinking water, clean water in rivers and streams and water supply that’s resistant to drought".</Citation>
					},
					{
						from: "them",
						body:"You gotta admit though, our water is fucked."
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
								text: "Fresno Bee Editorial Board",
								url: "https://www.fresnobee.com/opinion/editorials/article217097890.html"
							},
							{
								text:"Article: Officials kick off Prop. 3 campaign",
								url:"https://hanfordsentinel.com/news/local/officials-kick-off-prop-campaign/article_4b04e7e1-89d7-5c2d-ac28-6e0cd60d7798.html"
							}
						]
					},
					{
						subsectionTitle: "Arguments against",
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
						]
					},
					{
						subsectionTitle: "Interest groups",
						links: [
							{
								text:"Sierra Club says no",
								url:"https://www.sierraclub.org/sites/www.sierraclub.org/files/sce/sierra-club-california/PDFs/FactSheet_Proposition3_Opposition-July18.pdf"
							},
							{
								text: "Statement from the author of Prop 3",
								url: "https://www.mercurynews.com/2018/09/14/opinion-prop-3-will-provide-clean-safe-reliable-water/"
							},

						]
					},
					{
						subsectionTitle: "Impartial analyses",
						links: [
							{
								text: "Legislative Analyst's Office analysis",
								url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=3&year=2018",
							},
							{
								text: "Official voter guide digest",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/prop3-title-summ-analysis.pdf"
							},
							{
								text: "Ballotpedia",
								url:"https://ballotpedia.org/California_Proposition_3,_Water_Infrastructure_and_Watershed_Conservation_Bond_Initiative_(2018)"
							},
							{
								text: "Legal text of proposition",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/topl.pdf#Prop3"
							}
						]
					}
				]
			}
		}
  ]
}
export default () => (<PropPageBuilder data={Data}/>);
