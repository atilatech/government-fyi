import React from 'react'
import PropPageBuilder from 'components/page-blocks/aggregators/PropPageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import IMessageBlock from 'components/page-blocks/blocks/IMessageBlock'
import LinksBlock from 'components/page-blocks/blocks/LinksBlock'
import SectionTitleBlock from 'components/page-blocks/blocks/SectionTitleBlock'

import Citation from 'components/interactive/citation/citation'
import Acronym from 'components/interactive/acronym'
import {Acronyms, Citations} from './expandables'

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
    		title: "A big deal",
    		text:
				<span>
					Prop 5 would let people who are over 55 or severely disabled to get a discounted rate on their new property tax when they move homes. This measure will affect nearly everyone living in California, by potentially increasing the number of houses for sale, and by <Citation data={Citations['1']}>reducing the state's property tax revenue by an estimated $1 billion, most of which goes to education.</Citation>
				</span>
    	},
    },
		{
			component: TextWithTitleBlock,
			data: {
				title: "But first, some complicated history",
				text:<span>
					If you own a home, you pay property taxes every year. In California, a home's property tax is capped at 1% of the <em>purchase</em> price of the home, with the home's value adjusted up to 2% each year for inflation. A typical <Citation data={Citations['2']}>Californian pays 1.1% in property taxes.</Citation> So say your neighbor bought her home in 1980 for $110K, and you just bought the place next door for $1M. Even though you live in very similar houses, she'll pay $2,200 in taxes this year while you pay $11,000. This is Prop 13.
					<br/><br/>
					Put yourself in your neighbor's shoes now. Would you move? Even though Junior has gone to college and you have way too much space, there's a strong financial incentive not to move.
					<br/><br/>
					Enter Prop 60 (passed in 1986). <Citation data={Citations['3']}>Prop 60 lets people over age 55 to move to a home of <em>lesser or equal value</em> and transfer the Prop 13 value of their old home. Two restrictions though: (1) you can only do it once and (2) you have to move within the same county.</Citation>
					<br/><br/>
					Enter Prop 90 (passed in 1988). Prop 90 loosens that last restriction and lets people that invoke Prop 60 to move to another county, as long as the new county of residence allows it. <Citation data={Citations['4']}>As of today, 11 counties allow this inter-county tax assessment transfer.</Citation>
				</span>
			}
		},
		{
			component: TextWithTitleBlock,
			data: {
				title: "I definitely didn't read that last part",
				text: <span><Acronym data={Acronyms.TLDR}/>: Because people who've lived in their home a while have low property taxes, it's difficult for them to move. However, current law does let old folks move to a home of lesser value and transfer their property value assessment exactly as is, with restrictions.</span>
			}
		},
		{
			component: TextWithTitleBlock,
			data: {
				title: "And what's Prop 5 again?",
				text: <span>
					Prop 5 expands Prop 13 to let seniors move with their property value assessment, across county lines, any number of times, and regardless of whether it's a more expensive home or less expensive home.
				</span>
			}
		},
		{
			component: TextWithTitleBlock,
			data: {
				title: "What's the new assessed value?",
				text: <span>Depending on whether it's a more expensive home, or a less expensive home, it's calculated differently. If it's more expensive, the new taxable value is the old taxable value + the difference in market values between the two homes. If it's less expensive, the new taxable value is the old taxable value multiplied by the ratio of the two market values.<br/><br/>In both cases,the mover saves more money than if Prop 5 does not pass.</span>
			}
		},
		{
			component: TextWithTitleBlock,
			data: {
				title: "What's the problem?",
				text: <span>
					<Citation data={Citations['6']}>Basically, local governments and schools would get about $1B less <em>each</em> a year.</Citation>
					<br/><br/>
					Counties use property taxes to pay for schools, fire, and police, but <Citation data={Citations['1']}>the state covers the schools missed out revenue from property taxes. To pay for the decreased revenue from Prop 5, CA would have to pay an estimated $100M a year at first, eventually growing to $1B a year.</Citation>
					<br/><br/>
					<Citation data={Citations['5']}>The nonpartisan Legislative Analyst's Office also estimates that the revenue losses from people who would have moved anyway would be bigger than the gains from higher home values and home building.</Citation>
				</span>
			}
		},
		{
			component: IMessageBlock,
			data: {
				messages: [
					{
						from:"me",
						body:""
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
								text:"San Diego Union-Tribune Editorial Board",
								url:"http://www.sandiegouniontribune.com/opinion/sd-proposition-5-property-taxes-20180912-story.html"
							}
						]
					},
					{
						subsectionTitle: "Arguments against",
						links: [
							{
								text: "SF Chronicle Editorial Board",
								url: "https://www.sfchronicle.com/opinion/editorials/article/Editorial-Proposition-5-would-make-13242640.php"
							},
							{
								text: "Mercury News & East Bay Times Editorial Boards",
								url: "https://www.mercurynews.com/2018/09/08/editorial-prop-5-worsens-already-broken-state-property-tax-system/",
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
							},
							{
								text: "Legal text of proposition",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/topl.pdf#Prop5"
							}
						]
					}
				]
			}
		}
  ]
}
export default () => (<PropPageBuilder data={Data}/>);
