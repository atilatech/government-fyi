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
				title:"What’s up with EMTs?",
    		text: <span>
					<Citation data={Citations['3']}>Today, if emergency medical technicians (EMTs) are eating lunch and a 911 call comes in, they have to put down their avocado sandos and respond to the call.</Citation> For private ambulance companies, it’s become common practice for their workers to be on duty during their unpaid meals and breaks. Prop 11 would make it totally legal to interrupt <Acronym data={Acronyms.EMTs}/> on their breaks, <Citation data={Citations['4']}>and pay them for doing so.</Citation>
					</span>
			}
		},

		// 			Prop 11 would require (or allow, depending on your stance) <Acronym data={Acronyms.EMTs}/> to remain on-call during their breaks, which is the current practice in the industry. <Citation data={Citations['1']}>In a recent ruling by the California Supreme Court (<em>Augustus v. ABM Security</em>) mandated that breaks for security workers must be off-duty and uninterruptible.</Citation> Although the ruling hasn’t been explicitly applied to emergency personnel, it likely will be.
		// 			<br/><br/>
		// 			Should private-sector <Acronym data={Acronyms.EMTs}/> be required to be on-duty during their mandatory meal and rest breaks? This includes activities like listening and responding to their dispatch radio. <Citation data={Citations['4']}>They’d still be paid their normal rate during their breaks.</Citation>
		// 			<br/><br/>
		// 			Prop 11 would also require ambulance companies to provide mental health services to employees and excuse ambulance companies from any liabilities they might have incurred since the court ruling. <span role='img' aria-label="thinking">🤔</span>
		// 		</span>
    // 	},
    // },
		{
			component: TextWithTitleBlock,
			data: {
				title:"Seriously though. Why are we voting on this?",
				text: <span>
					Okay, here’s the predictably political backstory:
					<br/><br/>
					<Citation data={Citations['1']}>In 2016, the CA Supreme Court ruled that <em>security workers</em> were no longer required to keep their radios on during their scheduled breaks.</Citation> Suddenly, on-call breaks became illegal (but not explicitly for ambulances) and it <Citation data={Citations['10']}>prompted EMTs to file similar lawsuits against ambulance companies.</Citation> <Citation data={Citations['']}>These suits are still ongoing.</Citation>
					<br/><br/>
					The following year, <Citation>labor unions started promoting legislation requiring employers to provide uninterruptible breaks or pay employees for their breaks that are interrupted.</Citation> <Citation data={Citations['9']}>The legislation didn’t pan out</Citation>, and ambulance companies started to freak out. <Citation data={Citations['6']}>In an attempt to stave off more lawsuits and labor union policies, American Medical Response, the country’s largest ambulance company, spent $7.8M to put Prop 11 on the ballot.</Citation>
					<br/><br/>
					Prop 11 happens to also absolve private ambulance companies from any liability they might have incurred since that CA Supreme Court ruling, such as not paying workers during their previously interrupted breaks.
					<br/><br/>
					If Prop 11 fails, and courts rule that paramedics’ breaks cannot be interrupted, then the ambulance companies will have to hire about 25% more workers to match their current coverage and response times. <Citation data={Citations['2']}>The burden of these increased costs – about $100M – would likely fall on local governments</Citation>
				</span>
			}
		},
		{
			component: TextWithTitleBlock,
			data: {
				title:"Why not just give EMTs real breaks?",
				text:
				<span>
					It’d be too expensive. <Citation>The US Department of Health mandates that ambulance service reach 75% of life-threatening calls within eight minutes.</Citation> <Citation>Ambulance companies would have to hire about 25% more EMTs to match their current coverage and response times.</Citation> <Citation data={Citations['11']}>The Legislative Analyst’s Office estimates that these increased costs – about $100M – would likely fall to local governments.</Citation>
				</span>
			}
		},
		{
			component: TextWithTitleBlock,
			data: {
				title: "What do EMTs think?",
				text:
				<span>
					The EMT labor union spoke out against Prop 11, but other than that, <Citation data={Citations['7']}>it’s been kind of quiet.</Citation> No one even submitted an official ballot argument against Prop 11."
				</span>
			},
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
						subsectionTitle: "Yes on Prop 10",
						links: [
							{
								text: "San Jose Mercury News & East Bay Times Editorial Board",
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
						subsectionTitle: "No on Prop 10",
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
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/prop10-title-summ-analysis.pdf"
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
