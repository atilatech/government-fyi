import React from 'react'
import PropPageBuilder from 'components/page-blocks/aggregators/PropPageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import LinksBlock from 'components/page-blocks/blocks/LinksBlock'
import SectionTitleBlock from 'components/page-blocks/blocks/SectionTitleBlock'

import Citation from 'components/interactive/citation/citation'
// import Acronym from 'components/interactive/acronym'
import {Citations} from './expandables'

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
    		title: "Another perk for seniors?",
    		text:
				<span>
					Yes, but it doesn't just impact the elderly. Prop 5 would give homeowners who are over 55 or severely disabled a discounted property tax rate when they decide to move to a new home. The measure matters because it incentivizes homeowners to move, potentially increasing the number of houses available for sale, but <Citation data={Citations['1']}>it also potentially reduces the state's property tax revenue by eventually an estimated $1B a year, which is mostly used to fund public schools.</Citation>
				</span>
    	},
    },
		{
			component: TextWithTitleBlock,
			data: {
				title: "Why are we doing this?",
				text:<span>
					CA's Association of Realtors authored Prop 5 as an amendment to Prop 13. As a homeowner, you pay property taxes every year, but under Prop 13, your property tax is capped at 1% of the home’s <em>purchase</em> price, with the home value adjusted up to 2% each year for inflation. (This is in contrast to other states where property tax is based on the home's current market value.) It’s nice for you, yes, but since Prop 13 was passed in 1978, CA has lost many billions of dollars in potential tax revenue.
				</span>
			}
		},
		{
			component: TextWithTitleBlock,
			data: {
				title: "Explain that part to me",
				text:<span>
					Say your 56-year-old neighbor bought her home in 1980 for $110K, and you just bought the place next door for $1M (aka a steal in SF). Even though you live in very similar homes, she'll pay $2,200 in taxes this year while you pay $11,000. <Citation data={Citations['3']}>Also under Prop 60 and 90 (passed years after Prop 13), your neighbor is allowed to transfer her old property tax assessment if she moves to a less expensive home, but, restrictions apply.</Citation> She can only do it once in her lifetime and has to move within the same county. If she moves across county lines, <Citation data={Citations['4']}>there are only 11 counties that recognize her former property tax assessment.</Citation>
					<br/><br/>
					Now, put yourself in your neighbor's shoes. Would you move? Even though everyone’s gone to college and you have way too much space, you have a strong financial incentive to stay put, pay less on property taxes, and save money.
				</span>
			}
		},
		{
			component: TextWithTitleBlock,
			data: {
				title: "Okay, take me back to Prop 5",
				text:
				<span>
					Prop 5 basically gets rid of the previous restrictions and lets Californians over 55 pay a discounted property tax regardless of where they move to in California, how many times they move, or whether it’s into a more or less expensive home. <Citation data={Citations['']}>Supporters argue the measure would incentivize long-time homeowners to move and free up CA’s limited housing supply.</Citation>
					<br/><br/>
					<Citation data={Citations['']}>But critics claim CA’s housing shortage won’t be solved by simply making more homes available. Plus, elderly property owners already benefit from a tax break when they want to move to a less expensive home. Prop 5 would be another property tax discount that would burden local governments.</Citation>
					<br/><br/>
					If Prop 5 passes, <Citation data={Citations['6']}>the nonpartisan Legislative Analyst’s Office estimates that CA schools and local governments would lose a total of over $100M a year in property taxes for the first few years and eventually lose about a $1B a year.</Citation> <Citation data={Citations['5']}>This even takes into account potentially <em>new</em> homeowners paying market-price property taxes.</Citation>

				</span>
			}
		},
		// {
		// 	component: IMessageBlock,
		// 	data: {
		// 		messages: [
		// 			{
		// 				from:"me",
		// 				body:""
		// 			}
		// 		]
		// 	}
		// },
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
						subsectionTitle: "Yes on Prop 5",
						links: [
							{
								text:"San Diego Union-Tribune Editorial Board",
								url:"http://www.sandiegouniontribune.com/opinion/sd-proposition-5-property-taxes-20180912-story.html"
							}
						]
					},
					{
						subsectionTitle: "No on Prop 5",
						links: [
							{
								text: "SF Chronicle Editorial Board",
								url: "https://www.sfchronicle.com/opinion/editorials/article/Editorial-Proposition-5-would-make-13242640.php"
							},
							{
								text: "Mercury News & East Bay Times Editorial Boards",
								url: "https://www.mercurynews.com/2018/09/08/editorial-prop-5-worsens-already-broken-state-property-tax-system/",
							},
							{
								text:"Sac Bee Editorial Board",
								url:"https://www.sacbee.com/opinion/election-endorsements/article218546600.html"
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
								text: "Legislative Analyst's Office report",
								url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=5&year=2018",
							},
							{
								text: "Official voter guide digest",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/prop5-title-summ-analysis.pdf"
							},
							{
								text: "Legal text of proposition",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/topl.pdf#Prop5"
							},
														{
								text: "Ballotpedia",
								url:"https://ballotpedia.org/California_Proposition_5,_Property_Tax_Transfer_Initiative_(2018)",
							},
						]
					}
				]
			}
		}
  ]
}
export default () => (<PropPageBuilder data={Data}/>);
