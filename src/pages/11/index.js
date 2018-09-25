import React from 'react'
import PropPageBuilder from 'components/page-blocks/aggregators/PropPageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import LinksBlock from 'components/page-blocks/blocks/LinksBlock'
import SectionTitleBlock from 'components/page-blocks/blocks/SectionTitleBlock'

import Citation from 'components/interactive/citation/citation'
import Acronym from 'components/interactive/acronym'
import {Acronyms, Citations} from './expandables'

const Data = {
	pageId:"prop-11",
	propNum: 11,
	meta: {
		dateCreated: new Date('October 8, 2018 10:00:00'),
		dateModified: new Date('October 8, 2018 10:00:00')
	},
	blocks: [
    {
    	component: TextWithTitleBlock,
    	data: {
				title:"Summary",
    		text: <span>
					Prop 11 would require (or allow, depending on your stance) <Acronym data={Acronyms.EMTs}/> to remain on-call during their breaks, which is the current practice in the industry. <Citation data={Citations['1']}>In a recent ruling by the California Supreme Court (<em>Augustus v. ABM Security</em>) mandated that breaks for security workers must be off-duty and uninterruptible.</Citation> Although the ruling hasn’t been explicitly applied to emergency personnel, it likely will be.
					<br/><br/>
					Should private-sector <Acronym data={Acronyms.EMTs}/> be required to be on-duty during their mandatory meal and rest breaks? This includes activities like listening and responding to their dispatch radio. <Citation data={Citations['4']}>They’d still be paid their normal rate during their breaks.</Citation>
					<br/><br/>
					Prop 11 would also require ambulance companies to provide mental health services to employees and excuse ambulance companies from any liabilities they might have incurred since the court ruling. <span role='img' aria-label="thinking">🤔</span>
				</span>
    	},
    },
		{
			component: TextWithTitleBlock,
			data: {
				title:"Why not just give EMTs real breaks?",
				text: <span>
					In short, it’d be too expensive. <Citation data={Citations['5']}>Even though they formally oppose Prop 11, a union representing 4,000 ambulance workers agrees that applying the state Supreme Court ruling to the ambulance industry would be problematic</Citation>. <Citation data={Citations['9']}>They even tried to resolve this in the state legislature, but the union and companies couldn't reach an agreement.</Citation><br/><br/>
					<Citation data={Citations['3']}>Currently, the industry norm is for EMTs to be on-duty during their entire shift. If EMTs are eating lunch and an emergency call comes in, they'll put down their avocado sandos, respond to the call, and ideally resume nomming while idling later.</Citation>
					<br/><br/>
					If Prop 11 fails, and courts rule that paramedics’ breaks cannot be interrupted, then the ambulance companies will have to hire about 25% more workers to match their current coverage and response times. <Citation data={Citations['2']}>The burden of these increased costs – about $100M – would likely fall on local governments</Citation>
				</span>
			}
		},
		{
			component: TextWithTitleBlock,
			data: {
				title:"And what do workers think?",
				text:
				<span>
					A labor union representing 4,000 EMTs has spoken out against Prop 11, but other than that, <Citation data={Citations['7']}>no other EMTs or orgs have publicly commented. Nobody, not even <Citation data={Citations['8']}>Gary Wesley</Citation>, submitted an official ballot argument against Prop 11.</Citation>
					<br/><br/>
					It's clear that ambulance <em>companies</em> want Prop 11 to pass. <Citation data={Citations['6']}>The main funder of the measure is American Medical Response (AMR), of which a lawsuit has been brought up against</Citation>. Not only would Prop 11 save them much money over the long-term, but it would also absolve them of the liability they've incurred by not paying EMTs during breaks that have been interrupted – <Citation data={Citations['10']}>as the lawsuit accuses them of.</Citation>
				</span>
			}
		},
		{
			component: SectionTitleBlock,
			data: {
				title: "More reading",
			},
		},
		{
			component: LinksBlock,
			data: {
				subsections:[
					{
						subsectionTitle: "Arguments in favor",
						links: [
							{
								text: "Mercury News & East Bay Times Editorial Board",
								url: "https://www.mercurynews.com/2018/08/10/editorial-prop-11/"
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
						subsectionTitle: "Arguments against",
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
						subsectionTitle: "Related cases and policy",
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
								text: "Legislative Analyst's Office analysis",
								url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=11&year=2018",
							},
							{
								text: "Official voter guide digest",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/prop10-title-summ-analysis.pdf"
							},
							{
								text: "Ballotpedia",
								url:"https://ballotpedia.org/California_Proposition_11,_Ambulance_Employees_Paid_On-Call_Breaks,_Training,_and_Mental_Health_Services_Initiative_(2018)#cite_note-11"
							},
							{
								text: "Legal text of proposition",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/topl.pdf#Prop11"
							}
						]
					}
				]
			}
		}
  ]
}
export default () => (<PropPageBuilder data={Data}/>);
