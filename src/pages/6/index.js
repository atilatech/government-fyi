import React from 'react'
import PropPageBuilder from 'components/page-blocks/aggregators/PropPageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import LinksBlock from 'components/page-blocks/blocks/LinksBlock'
import SectionTitleBlock from 'components/page-blocks/blocks/SectionTitleBlock'
import SummaryListBlock from 'components/page-blocks/blocks/SummaryListBlock'
import FluidColumnsBlock from 'components/page-blocks/blocks/FluidColumnsBlock'

import Citation from 'components/interactive/citation/citation'
import Acronym from 'components/interactive/acronym'
import {Acronyms, Citations} from './expandables'

const Data = {
	pageId:"prop-6",
	propNum: 6,
	meta: {
		dateCreated: new Date('October 8, 2018 10:00:00'),
		dateModified: new Date('October 8, 2018 10:00:00')
	},
	blocks: [
    {
    	component: TextWithTitleBlock,
    	data: {
    		text: "Prop 6 would repeal the Road Repair and Accountability Act (RRAA), a gas tax and vehicle fee that generates over $5B annually for transportation projects. Prop 6 would also require all future gas tax increases to be approved by voters (via ballot propositions).",
    	},
    },
		{
			component: TextWithTitleBlock,
    	data: {
    		title: "What's the debate?",
    		text: <span>
					Prop 6 is predictably split along party lines. Last year, <Acronym data={Acronyms.RRAA}/> narrowly passed, with two Dems voting no and one Republican voting yes (<Citation data={Citations['1']}>thanks to some side deals</Citation>). Since its passage, Republicans have used the gas tax to <Citation data={Citations['2']}>recall a state senator</Citation> and put Prop 6 on the ballot, <Citation data={Citations['3']}>with a specific goal of increasing Republican voter turnout.</Citation>
					<br/><br/>
					Conservatives argue that the taxes are regressive, and <Citation data={Citations['5']}>CA already has the second-highest gas taxes in the country.</Citation> They also point to the state's $16B surplus (<Citation data={Citations['4']}>which about $14B is for weathering the next recession.</Citation>)
					<br/><br/>
					Democrats point to our lacking transportation infrastructure. <Citation data={Citations['6']}>CA ranks 11th in bridge quality, but 49th in road quality</Citation> They also explain that a gas tax that pays for transportation infrastructure is like a usage fee. Those who pay the most are also the biggest users.
				</span>,
    	},
		},
		{
			component: SectionTitleBlock,
			data:{
				title: "How would it affect me?",
				subtitle: "The taxes brought to you by RRAA.",
				nColWidth: 6,
			}
		},
		{
			component: SummaryListBlock,
			data: {
				listNItems: 2, //optional
				buttonText: "Two more", //optional
				stories: [
					{
						title: "Gasoline tax",
						description: <span><Acronym data={Acronyms.RRAA}/> raised the gas tax from $0.28/gal to $0.30/gal, and will raise it again in 2019 to $0.47/gal to raise $2.4B in revenue.</span>,
					},
					{
						title: "Diesel tax",
						description: <span><Acronym data={Acronyms.RRAA}/> more than doubled the diesel tax from $0.16/gal to $0.36/gal and increases the diesel fuel sales tax to 5.75% to generate $1.1B.</span>,
					},
					{
						title: "Vehicle registration fees",
						description: <span>Depending on the value of your car, a <em>transportation improvement fee</em> of $25 to $175 is added to the cost of your vehicle registration. It rakes in $1.6B.</span>,
					},
					{
						title: "Zero-emission vehicle fee",
						description: <span><Acronym data={Acronyms.RRAA}/> introduced a new $100 fee for <Acronym data={Acronyms.ZEV}/>s, which is expected to raise $20M.</span>,
					},
				],
			}
		},
		{
			component: TextWithTitleBlock,
    	data: {
    		title: "And where does the money go?",
    		text: <span>
					CA’s gas tax would generate about $3.2B a year in revenue. Here’s how it'd be spent:
					<ul>
						<li>$400M for state bridges and culverts</li>
						<li>$200M for counties with local transportation taxes</li>
						<li>$100M to improve biking and walking projects</li>
						<li>$25M for servicing freeways</li>
						<li>$25M for sustainable community grants</li>
						<li>$7M for transportation-related research and education</li>
						<li>$5M for workforce development grants</li>
					</ul>
					With the remaining $2.5B, half would go to Caltrans for highway maintenance and repair. The other half would go to cities with local transportation infrastructure projects.
				</span>,
    	},
		},
		{
			component: SectionTitleBlock,
			data:{
				title: "Just to be uber clear",
			}
		},
		{
			component: FluidColumnsBlock,
			data: {
				blocks: [
					{
						title: "'Yes' means repeal",
						body: <span>
							<br/>A <em>Yes</em> vote on Prop 6 means you'd like to:
							<ul>
								<li>get rid of the <Acronym data={Acronyms.RRAA}/> and its associated gas tax increases and transportation improvements.</li>
								<li>have CA voters decide on future gas tax increases via future ballot propositions.</li>
						</ul></span>,
					},
					{
						title: "'No' means no-peal",
						body: <span><br/>A <em>No</em> vote means that you wanna:<ul>
							<li>continue the tax increases and transportation improvements from <Acronym data={Acronyms.RRAA}/> as planned.</li>
							<li>let future gas tax laws be settled by the state (aka two-thirds of the state assembly, senate, and one whole governor's signature).</li>
						</ul></span>,
					},
				],
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
						subsectionTitle: "Yes on Prop 6",
						links: [
							{
								text: "We could not find any editorial boards that support Prop 6",
							},
						]
					},
					{
						subsectionTitle: "No on Prop 6",
						links: [
							{
								text: "SF Chronicle Editorial Board",
								url: "https://www.sfchronicle.com/opinion/editorials/article/Editorial-No-on-Proposition-6-cynical-13189410.php",
							},
							{
								text: "San Jose Mercury News & East Bay Times Editorial Boards",
								url: "https://www.mercurynews.com/2018/09/04/editorial-no-on-prop-6-to-preserve-state-roads-transit-funds/"
							},
							{
								text: "Press Democrat Editorial Board",
								url: "https://www.pressdemocrat.com/opinion/8645902-181/pd-editorial-no-on-prop?sba=AAS"
							},
						]
					},
					{
						subsectionTitle: "Related coverage",
						links: [
							{
								text: "Breakdown of taxes and revenue from RRAA",
								url: "https://www.sacbee.com/news/politics-government/capitol-alert/article147437054.html",
							},
							{
								text: "Legal text of RRAA",
								url: "http://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=201720180SB1",
							},
						]
					},
					{
						subsectionTitle: "Impartial analyses",
						links: [
							{
								text: "Legislative Analyst's Office analysis",
								url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=6&year=2018",
							},
							{
								text: "Official voter guide digest",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/prop6-title-summ-analysis.pdf"
							},
							{
								text: "Legal text of proposition",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/topl.pdf#Prop6"
							},
							{
								text: "Ballotpedia",
								url:"https://ballotpedia.org/California_Proposition_6,_Voter_Approval_for_Future_Gas_and_Vehicle_Taxes_and_2017_Tax_Repeal_Initiative_(2018)"
							},
						]
					}
				]
			}
		}
  ]
}
export default () => (<PropPageBuilder data={Data}/>);
