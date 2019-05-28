import React from 'react'
import PropPageBuilder from 'components/page-blocks/aggregators/PropPageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import LinksBlock from 'components/page-blocks/blocks/LinksBlock'
import SectionTitleBlock from 'components/page-blocks/blocks/SectionTitleBlock'
import IMessageBlock from 'components/page-blocks/blocks/IMessageBlock'
import ResultBlock from 'components/page-blocks/blocks/ResultBlock'
import {PropMetaData} from 'pages/prop-attributes'

import Citation from 'components/interactive/citation/citation'
import Acronym from 'components/interactive/acronym'
import {Acronyms, Citations} from './expandables'

const Data = {
	pageId:"prop-11",
	propNum: 11,
	meta: {
		dateCreated: new Date('October 8, 2018 10:00:00'),
		dateModified: new Date('November 7, 2018 14:10:00')
	},
	blocks: [
		{
			component: ResultBlock,
			data: {
				result: PropMetaData(11).result,
				title: "Passed",
				text: "Voters made it legal for private ambulance companies to require paramedics to have on call breaks. In addition, all liability for private ambulance companies for unpaid breaks is absolved."
			},
		},
    {
    	component: TextWithTitleBlock,
    	data: {
				title:"What’s up with EMTs?",
    		text: <span>
					<Citation data={Citations['3']}>Today, if emergency medical technicians (EMTs) are eating lunch and a 911 call comes in, they have to put down their avocado sandos and respond to the call.</Citation> For private ambulance companies, it’s become common practice for their workers to be on duty during their unpaid meals and breaks. Prop 11 would make it totally legal to interrupt <Acronym data={Acronyms.EMTs}/> on their breaks, <Citation data={Citations['4']}>and pay them for doing so.</Citation>
					</span>
			}
		},
		{
			component: TextWithTitleBlock,
			data: {
				title:"Seriously though. Why are we voting on this?",
				text: <span>
					Okay, here’s the predictably political backstory:
					<br/><br/>
					<Citation data={Citations['1']}>In 2016, the CA Supreme Court ruled that <em>security workers</em> were no longer required to keep their radios on during their scheduled breaks.</Citation> Suddenly, on-call breaks became illegal (but not explicitly for ambulances) and it <Citation data={Citations['10']}>prompted EMTs to file similar lawsuits against ambulance companies.</Citation> <Citation data={Citations['12']}>These suits are still ongoing.</Citation>
					<br/><br/>
					The following year, <Citation data={Citations['13']}>labor unions and private ambulance companies tried to work it out in the state legislature</Citation> <Citation data={Citations['9']}>, but the two sides couldn't reach an agreement.</Citation> <Citation data={Citations['6']}>In an attempt to stave off more lawsuits and labor union policies, American Medical Response, the country’s largest ambulance company, spent $7.8M to put Prop 11 on the ballot.</Citation>
					<br/><br/>
					Prop 11 would also absolve private ambulance companies from any liability they might have incurred since that CA Supreme Court ruling, such as not paying workers during their previously interrupted breaks.
				</span>
			}
		},
		{
			component: TextWithTitleBlock,
			data: {
				title:"Why not just give EMTs real breaks?",
				text:
				<span>
					It’d be too expensive. <Citation data={Citations['11']}>The US Department of Health mandates that ambulance service reach 75% of life-threatening calls within eight minutes.</Citation> To match their current coverage and response times, ambulance companies would have to hire significantly more EMTs. <Citation data={Citations['2']}>The Legislative Analyst’s Office estimates that these increased costs – about $100M – would likely fall to local governments.</Citation>
				</span>
			}
		},
		{
			component: TextWithTitleBlock,
			data: {
				title: "What do EMTs think?",
				text:
				<span>
					The EMT labor union spoke out against Prop 11, but other than that, <Citation data={Citations['7']}>it’s been kind of quiet.</Citation> No one even submitted an official ballot argument against Prop 11.
				</span>
			},
		},
		{
			component: SectionTitleBlock,
			data: {
				title:"An abridged KQED debate",
				nColWidth: 6,
			}
		},
		{
			component: IMessageBlock,
			data: {
				messages: [
					{
						from: "me",
						body: "Our beef is that Prop 11 absolves private ambulance companies from ongoing lawsuits and liability.",
					},
					{
						from: "them",
						body: "It's a public health issue though. If EMTs have paid, on-call breaks, it ensures that the nearest ambulance can respond to emergencies. It's been this way for 50 years. Firefighters and po-po's work this way too.",
					},
					{
						from: "them",
						body: "Prop 11 just codifies it into law.",
					},
					{
						from: "me",
						body: "Well, just because it's been that way for 50 years doesn't mean it's legal.",
					},
					{
						from: "me",
						body: "This retroactive immunity clause still isn't fair.",
					},
					{
						from: "me",
						body: "We've been trying to amend it in the state legislature since 2016, but AMR wanted full immunity, so here we are.",
					},
				]
			}
		},
		{
			component: SectionTitleBlock,
			data: {
				title: "Reading for your next break",
			},
		},
		{
			component: LinksBlock,
			data: {
				subsections:[
					{
						subsectionTitle: "Yes on Prop 11",
						links: [
							{
								text: "San Jose Mercury News & East Bay Times Editorial Board",
								url: "https://www.mercurynews.com/2018/08/10/editorial-prop-11/"
							},
							{
								text:"LA Times Editorial Board",
								url:"http://www.latimes.com/opinion/editorials/la-ed-proposition-ll-endorsement-20180921-story.html"
							},
							{
								text: "Sac Bee Editorial Board",
								url: "https://www.sacbee.com/opinion/election-endorsements/article218268990.html"
							},
							{
								text: "Press Enterprise Editorial Board",
								url: "https://www.pe.com/2018/09/13/yes-on-proposition-11-for-more-sensible-911-services/"
							},
							{
								text: "San Diego Union Tribune Editorial Board",
								url: "http://www.sandiegouniontribune.com/opinion/editorials/sd-proposition-11-paramedics-emts-breaks-20180921-story.html"
							},
							{
								text: "Press Democrat Editorial Board",
								url: "https://www.pressdemocrat.com/opinion/8713606-181/pd-editorial-yes-on-prop?sba=AAS"
							},

						]
					},
					{
						subsectionTitle: "No on Prop 11",
						links: [
							{
								text: "SF Chronicle Editorial Board",
								url: "https://www.sfchronicle.com/opinion/editorials/article/Chronicle-recommends-No-on-California-Prop-11-13216457.php",
							},
							{
								text: "Op-ed: Director of EMT labor union",
								url: "http://www.sandiegouniontribune.com/opinion/commentary/sd-utbg-prop11-ambulance-workers-20180822-story.html",
							},
						]
					},
					{
						subsectionTitle:"Other coverage",
						links:[
							{
								text:"KQED Forum debate (audio)",
								url:"https://www.kqed.org/forum/2010101867787/election-2018-proposition-11-would-require-emts-and-parmedics-to-be-on-call-during-breaks"
							}
						]
					},
					{
						subsectionTitle: "Related legal cases and policies",
						links: [
							{
								text: "State Supreme Court ruling (Augustus vs. ABM Security Services)",
								url: "https://www.laboremploymentlawblog.com/2017/01/articles/california-employment-legislation/supreme-court-holds-that-rest-periods-must-be-free-from-duties-and-employer-control/",
							},
							{
								text: "Bartoni vs AMR West – lawsuit against ambulance company",
								url: "https://law.justia.com/cases/california/court-of-appeal/2017/a143784.html"
							},
							{
								text: "Assembly Bill 263 – failed bill similar to Prop 12",
								url: "https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=201720180AB263"
							}
						]
					},
					{
						subsectionTitle: "Impartial analyses",
						links: [

							{
								text: "Legislative Analyst's Office report",
								url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=11&year=2018",
							},
							{
								text: "Official voter guide digest",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/prop11-title-summ-analysis.pdf"
							},
							{
								text: "Legal text of proposition",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/topl.pdf#Prop11"
							},
							{
								text: "Ballotpedia",
								url:"https://ballotpedia.org/California_Proposition_11,_Ambulance_Employees_Paid_On-Call_Breaks,_Training,_and_Mental_Health_Services_Initiative_(2018)#cite_note-11"
							},
						]
					}
				]
			}
		}
  ]
}
export default () => (<PropPageBuilder data={Data}/>);
