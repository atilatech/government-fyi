import React from 'react'
import PropPageBuilder from 'components/page-blocks/aggregators/PropPageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import SectionTitleBlock from 'components/page-blocks/blocks/SectionTitleBlock'
import LinksBlock from 'components/page-blocks/blocks/LinksBlock'

import Citation from 'components/interactive/citation/citation'
// import Acronym from 'components/interactive/acronym'
import { Citations} from './expandables'

const Data = {
	pageId:"prop-10",
	propNum: 10,
	meta: {
		dateCreated: new Date('October 8, 2018 10:00:00'),
		dateModified: new Date('October 22, 2018 10:00:00')
	},
	blocks: [
    {
    	component: TextWithTitleBlock,
    	data: {
    		title: "Would rent control help the housing crisis?",
    		text:
				<span>
					Prop 10 would repeal the <em>Costa-Hawkins Rental Housing Act</em>, <Citation data={Citations['1']}>a state law passed in 1995 that prohibits cities from regulating rent on housing built after that year.</Citation> In addition, it explicitly said that landlords could reset rents to market rate after a tenant moved out, ending the practice of "vacancy control." <Citation data={Citations['8']}>Fifteen cities, like LA, SF, Oakland, and San Jose, already had local rent control laws in 1995, but Costa-Hawkins prevented them from regulating rents on any buildings after that.</Citation>
					<br/><br/>
					By repealing <em>Costa-Hawkins</em>, Prop 10 would give cities the authority to implement local rent control laws, including vacany control. If and how a city implements rent regulation would be up to each individual city.
				</span>,
    	},
    },
    {
    	component: TextWithTitleBlock,
    	data: {
    		title: "Isn’t rent control a good thing?",
    		text:
				<span>
					Not necessarily. Prop 10 critics say rent control is problematic for CA’s housing shortage because:
					<ul>
						<li>It often isn't "means-tested." Residents who live in rent controlled apartments aren’t always the people who need it the most.</li>
						<li><Citation data={Citations['4']}>It causes displacement and gentrification as some landlords try to convert their units to more profitable real estate.</Citation></li>
						<li><Citation data={Citations['5']}>It discourages real estate developers from building rental units because it affects their profit margins.</Citation></li>
					</ul>
					<Citation data={Citations['6']}>Economists generally agree that any restrictions on rental prices would lead to less available housing.</Citation> The Legislative Analyst's Office estimates that renters would move less often, property values would decrease because landlords would earn less, and <Citation data={Citations['9']}>local governments would receive less money.</Citation>
				</span>
				}
			},
			{
				component: TextWithTitleBlock,
				data: {
					title: "Fine. Rent control is the devil.",
					text:
					<span>
						Not so fast, fella. We all know it's expensive to rent in California. <Citation data={Citations['10']}>Renters typically pay 50% more for housing than renters in other states, and sometimes double.</Citation> Rent control helps stabilize rent for people living in increasingly expensive cities. Prop 10 supporters argue the lack of affordable housing has led to more homelessness across the state
						<br/><br/>
						<Citation data={Citations['7']}>Another argument for Prop 10 is to give the control back to cities. Supports say local governments are the best advocates for their residents, and passing Prop 10 would give cities an additional tool to help address their specific housing needs.</Citation>
					</span>,
    	},
    },
		{
			component: TextWithTitleBlock,
			data: {
				title: "Hasn't somebody researched this by now?",
				text: "Yes. Because Costa-Hawkins is 23 years old, and some cities have had rent control laws for longer than that, we have some good data, but it's a bit nuanced. We've attempted to summarize many of the studies cited by proponents and opponents. We encourage you to dig deeper and read the actual studies. Rent control can get gnarly."
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
						subsectionTitle: "Yes on Prop 10",
						links: [
							{
								text: "LA Times Editorial Board",
								url: "http://www.latimes.com/opinion/editorials/la-ed-endorsement-proposition-10-20180915-story.html"
							},
							{
								text:"Sac Bee Editorial Board",
								url:"https://www.sacbee.com/opinion/election-endorsements/article218278780.html"
							}
						]
					},
					{
						subsectionTitle: "No on Prop 10",
						links: [
							{
								text: "SF Chronicle Editorial Board",
								url: "https://www.sfchronicle.com/opinion/editorials/article/Chronicle-Recommends-No-on-Prop-10-13231228.php"
							},
							{
								text:"San Jose Mercury News & East Bay Times Editorial Boards",
								url:"https://www.mercurynews.com/2018/08/25/editorial-prop-10-would-exacerbate-californias-housing-crisis/?clearUserState=true"
							},
							{
								text:"San Diego Union-Tribune Editorial Board",
								url:"http://www.sandiegouniontribune.com/opinion/editorials/sd-prop-10-rent-control-20180913-story.html"
							},
							{
								text:"Fresno Bee Editorial Board",
								url:"https://www.fresnobee.com/opinion/editorials/article219315885.html"
							},
							{
								text:"LA Daily News Editorial Board",
								url:"https://www.dailynews.com/2018/09/28/no-on-proposition-10-the-wrong-fix-for-californias-housing-crisis/"
							},
						]
					},
					{
						subsectionTitle:"Other coverage",
						links:[
							{
								text:"KQED Forum debate (audio)",
								url:"https://www.kqed.org/forum/2010101867796/election-2018-prop-10-would-repeal-costa-hawkins-allow-rent-control-to-expand"
							}
						]
					},
					{
						subsectionTitle: "Impartial analyses",
						links: [
							{
								text: "Legislative Analyst's Office report",
								url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=10&year=2018",
							},
							{
								text: "Official voter guide digest",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/prop10-title-summ-analysis.pdf"
							},
							{
								text: "Legal text of proposition",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/topl.pdf#Prop10"
							},
							{
								text: "Ballotpedia",
								url:"https://ballotpedia.org/California_Proposition_10,_Local_Rent_Control_Initiative_(2018)"
							},
						]
					},
					{
						subsectionTitle: "Studies about rent control",
						links: [
							{
								text: "Stanford study analyzing SF rent control",
								url: "https://www.gsb.stanford.edu/insights/rent-controls-winners-losers"
							},
							{
								text:"Rent Control in Los Angeles",
								url:"http://luskincenter.history.ucla.edu/wp-content/uploads/sites/66/2018/09/People-Are-Simply-Unable-to-Pay-the-Rent.pdf"
							},
							{
								text:"Impacts of Rent Stabilization",
								url:"https://dornsife.usc.edu/pere/rent-matters"
							}
						]
					}
				]
			}
		}
  ]
}
export default () => (<PropPageBuilder data={Data}/>);
