import React from 'react'
import PropPageBuilder from 'components/page-blocks/aggregators/PropPageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import SectionTitleBlock from 'components/page-blocks/blocks/SectionTitleBlock'
import LinksBlock from 'components/page-blocks/blocks/LinksBlock'

const Data = {
	pageId:"prop-10",
	propNum: 10,
	meta: {
		dateCreated: new Date('October 8, 2018 10:00:00'),
		dateModified: new Date('October 8, 2018 10:00:00')
	},
	blocks: [
    {
    	component: TextWithTitleBlock,
    	data: {
    		title: "Seems gnarly",
    		text:
				<span>
					Prop 10 would repeal the Costa-Hawkins Rental Housing Act, a state law passed in 1995 that prohibits cities from regulating rent on housing built since then.  Some cities, like LA, SF, and San Jose, already had local rent control laws in 1995, but Costa-Hawkins prevented them from regulating rents on any new buildings.
					<br/><br/>
					By repealing Costa-Hawkins, Prop 10 would give cities the <em>power</em> to create rent control laws; it's then up to each local government to determine what regulation of rent, if any, it wants.
				</span>,
    	},
    },
    {
    	component: TextWithTitleBlock,
    	data: {
    		title: "Isn’t rent control a good thing?",
    		text:
				<span>
					Not necessarily. Because <em>how</em> rent control is implemented matters, let's talk about rent control abstractly.
					<br/><br/>Prop 10 critics say rent control is problematic for CA’s housing shortage because:
					<ul>
						<li>It’s not "means-tested", meaning residents who live in rent controlled apartments aren’t necessarily the people who need it most.</li>
						<li>It disincentivizes landlords from maintaining or improving their properties (because they no longer need to attract the higher-paying renters).</li>
						<li>It discourages developers from building apartments because it limits what they can make on each apartment.</li>
					</ul>
					Economists generally agree that any restrictions on rental prices leads to less available housing.
				</span>
				}
			},
			{
				component: TextWithTitleBlock,
				data: {
					title: "Fine. Rent control is the devil",
					text:
					<span>
						Not so fast. Prop 10 supporters say the lack of affordable housing has led to more evictions, displacement, and homelessness across the state. Rent controlled apartments help residents afford to live in increasingly expensive cities. Plus, local governments are the best advocates for their residents. Passing Prop 10 would empower cities and counties to start the conversation to decide how much rent control they need and give them the flexibility to respond to local housing needs.
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
						subsectionTitle: "Arguments against",
						links: [
							{
								text: "SF Chronicle Editorial Board",
								url: "https://www.sfchronicle.com/opinion/editorials/article/Chronicle-Recommends-No-on-Prop-10-13231228.php"
							},
							{
								text:"Mercury News & East Bay Times Editorial Boards",
								url:"https://www.mercurynews.com/2018/08/25/editorial-prop-10-would-exacerbate-californias-housing-crisis/?clearUserState=true"
							},
							{
								text:"San Diego Union-Tribune Editorial Board",
								url:"http://www.sandiegouniontribune.com/opinion/editorials/sd-prop-10-rent-control-20180913-story.html"
							},
						]
					},
					{
						subsectionTitle: "Impartial analyses",
						links: [
							{
								text: "Legislative Analyst's Office analysis",
								url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=10&year=2018",
							},
							{
								text: "Official voter guide digest",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/prop10-title-summ-analysis.pdf"
							},
							{
								text: "Ballotpedia",
								url:"https://ballotpedia.org/California_Proposition_10,_Local_Rent_Control_Initiative_(2018)"
							},
							{
								text: "Legal text of proposition",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/topl.pdf#Prop10"
							}
						]
					},
					{
						subsectionTitle: "Studies about rent control",
						links: [
							{
								text: "Stanford study analyzing SF rent control",
								url: "https://www.gsb.stanford.edu/insights/rent-controls-winners-losers"
							},

						]
					}
				]
			}
		}
  ]
}
export default () => (<PropPageBuilder data={Data}/>);
