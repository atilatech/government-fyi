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
		dateCreated: new Date('September 15, 2018 10:00:00'),
		dateModified: new Date('September 15, 2018 10:00:00')
	},
	blocks: [
    {
    	component: TextWithTitleBlock,
    	data: {
				title:"The quickie",
    		text: <span>Prop 11 would require (or allow, depending on your stance) <Acronym data={Acronyms.EMTs}/> to remain on-call during their breaks, as is the current practice in that industry. <Citation data={Citations['1']}>A recent ruling by the California Supreme Court (<em>Augustus v. ABM Security</em>), regarding security workers, mandated that breaks must be off-duty and uninterruptible</Citation>. Although it hasn't been explicitly applied to emergency personnel, it likely will.
					<br/><br/>
					Prop 11 asks us whether private-sector <Acronym data={Acronyms.EMTs}/> should be required to be on-duty and interruptible during their mandatory meal and rest breaks (<Citation data={Citations['4']}>and be paid their normal rate while doing so</Citation>).
					<br/><br/>
					Prop 11 would also require ambulance companies to provide mental health services to employees. It would also absolve any liability ambulance companies might have incurred since the court ruling. <span role='img' aria-label="thinking">🤔</span>
				</span>
    	},
    },
		{
			component: TextWithTitleBlock,
			data: {
				title:"Why not just give EMTs real breaks?",
				text: <span>
					In short, costs would be too high. A union representing 4,000 ambulance workers agrees that applying the <em>Augustus</em> ruling to the ambulance industry would be problematic. They even tried to resolve this in the state legislature, but the union and companies couldn't reach an agreement.<br/><br/>
					<Citation data={Citations['3']}>Currently, the industry norm is for EMTs to be on-duty during their entire shift. If EMTs are eating lunch and an emergency call comes in, they'll put down their avocado sandos, respond to the call, and resume nomming while idling later (ideally).</Citation>
					<br/><br/>
					If Prop 11 fails, and courts rule that paramedics' breaks can't be interrupted, then private ambulance companies (which make up 74% of ambulance coverage) will have much higher costs to cover the same area with the same response time (which must meet a certain standard set by the Department of Public Health). The LAO estimates they'd need to hire 25% more emergency personnel. Surprisingly, <Citation data={Citations['2']}>the Legislative Analyst Office estimates that the burden of these increased costs (~$100M) will likely fall on local governments</Citation>
				</span>
			}
		},
		{
			component: TextWithTitleBlock,
			data: {
				title:"What do ambulance workers think?",
				text:
				<span>
					It's clear that ambulance <em>companies</em> want Prop 11 to pass. <Citation>The main funder of the measure is American Medical Response (AMR), of which a lawsuit has been brought up against</Citation>. Not only would Prop 11 save them much money over the long-term, but it would also absolve them of the liability they've incurred by not paying EMTs during breaks that have been interrupted – as the lawsuit accuses them of.
					<br/><br/>
					Ambulance workers, of which there are 17,000 of them in the state, have been less vocal.
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
							}
						]
					}
				]
			}
		}
  ]
}
export default () => (<PropPageBuilder data={Data}/>);
