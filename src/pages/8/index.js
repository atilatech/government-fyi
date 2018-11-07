import React from 'react'
import PropPageBuilder from 'components/page-blocks/aggregators/PropPageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import LinksBlock from 'components/page-blocks/blocks/LinksBlock'
import SectionTitleBlock from 'components/page-blocks/blocks/SectionTitleBlock'
import VideoCarouselBlock from 'components/page-blocks/blocks/VideoCarouselBlock'
import KQEDFinanceBlock from 'components/page-blocks/blocks/KQEDFinanceBlock'
import ResultBlock from 'components/page-blocks/blocks/ResultBlock'
import {PropMetaData} from 'pages/prop-attributes'

import Citation from 'components/interactive/citation/citation'
import Acronym from 'components/interactive/acronym'
import {Acronyms, Citations} from './expandables'

const Data = {
	pageId:"prop-8",
	propNum: 8,
	meta: {
		dateCreated: new Date('October 8, 2018 10:00:00'),
		dateModified: new Date('October 28, 2018 21:42:00')
	},
	blocks: [
		{
			component: ResultBlock,
			data: {
				result: PropMetaData(8).result,
				title: "This passed",
				text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			},
		},
    {
    	component: TextWithTitleBlock,
    	data: {
    		title: "Wait. What's dialysis?",
    		text:
				<span>
					<Citation data={Citations['1']}>About 80K Californians living with kidney disease go to a dialysis clinic for treatment.</Citation> Dialysis performs what a healthy kidney would do, and for three times a week, patients sit in a chair for four-hour sessions while a machine filters their blood.
				</span>
    	},
    },
    {
    	component: TextWithTitleBlock,
    	data: {
    		title: "Got it. What's Prop 8?",
    		text:
				<span>
					<Citation data={Citations['2']}>Prop 8 would limit dialysis clinics’ revenue to 115% of “direct patient care service costs” and “health care quality improvement costs,” and require clinics to issue refunds for anything exceeding that amount.</Citation> Really, Prop 8 is a roundabout way to legislatively compel these businesses to invest in staff wages, benefits, training and development, and other costs that fall within these two categories.
				</span>
    	},
    },
		{
			component: TextWithTitleBlock,
			data: {
				title: "Seems kinda obscure to vote on this",
				text:
				<span>
					No kidding. Prop 8 is the result of ongoing disputes between a labor organization, <Acronym data={Acronyms.SEIU}/> West, and CA’s two largest dialysis businesses, <em>DaVita</em> and <em>Fresenius Medical Care</em>. <Acronym data={Acronyms.SEIU}/> <Citation data={Citations['7']}>West has been trying to unionize dialysis healthcare workers since 2016, but have so far been unsuccessful.</Citation> <Citation data={Citations['8']}>They’ve used the ballot initiative process to leverage negotiations in the past</Citation>, and Prop 8 is their latest effort.
					<br/><br/>
					<Citation data={Citations['5']}><Acronym data={Acronyms.SEIU}/> West say they want to improve the quality of patient care in these highly-profitable clinics, while opponents claim they’re simply trying to recruit more union members.</Citation> <Citation data={Citations['3']}>The aforementioned dialysis companies have raised $66M to fight the initiative and the labor union has spent more than $20M campaigning for Prop 8.</Citation>
				</span>
			}
		},
		{
			component: TextWithTitleBlock,
			data: {
				title: "What’s the impact on the clinics?",
				text:
				<span>
					It’s unclear. Prop 8’s revenue cap could cause clinics to increase spending on “direct patient care services” and “healthcare improvements,” but <Citation data={Citations['6']}>critics argue that these categories don’t include spending on medical directors, clinic coordinators, regulatory compliance, or other costs.</Citation> 115% of a smaller cost total = less profit = some clinics could shutdown, endangering patients’ lives.
					<br/><br/>
					<Citation data={Citations['4']}>The Legislative Analyst's Office, however, reports that the financial impact on dialysis clinics is generally unknown because they can't predict what clinics will do.</Citation>
				</span>
			}
		},
		{
			component: SectionTitleBlock,
			data: {
				title:"Additional context",
				subtitle:<span>We know John Oliver can be divisive, but he dedicated an entire episode explaining dialysis and DaVita, one of the largest for-profit dialysis companies in the US. After you watch the clip, you might ask yourself if Prop 8 would help solve any of the issues John Oliver brought up.</span>
			}
		},
		{
			component: VideoCarouselBlock,
			data: {
				videos: [
					{
						caption: <span>John Oliver's <em>Last Week Tonight</em> dialysis episode. Aired on May 14, 2017.</span>,
						link:"https://www.youtube-nocookie.com/embed/yw_nqzVfxFQ",
					},
				]
			}
		},
		{
			component: KQEDFinanceBlock,
			data:{
				widgetId:"3254",
			}
		},
		{
			component: SectionTitleBlock,
			data:{
				title: "The more you know"
			}
		},
		{
			component: LinksBlock,
			data: {
				subsections:[
					{
						subsectionTitle: "Yes on Prop 8",
						links: [
							{
								text: "We couldn't find any editorial boards that support Prop 8",
							},
						]
					},
					{
						subsectionTitle: "No on Prop 8",
						links: [
							{
								text:"LA Times Editorial Board",
								url:"http://www.latimes.com/opinion/editorials/la-ed-endorsements-proposition-8-20180926-story.html"
							},
							{
								text: "SF Chronicle Editorial Board",
								url: "https://www.sfchronicle.com/opinion/editorials/article/A-measure-that-does-not-belong-on-the-state-13216454.php"
							},
							{
								text: "San Jose Mercury News Editorial Board",
								url: "https://www.mercurynews.com/2018/08/23/editorial-reject-prop-8-capping-kidney-dialysis-firms-profits/",
							},
							{
								text: "San Diego Union-Tribune Editorial Board",
								url: "http://www.sandiegouniontribune.com/opinion/editorials/sd-kidney-dialysis-proposition-8-story.html",
							},
							{
								text: "Modesto Bee Editorial Board",
								url: "https://www.modbee.com/opinion/editorials/article218292860.html",
							},
							{
								text: "Press Democrat Editorial Board",
								url: "https://www.pressdemocrat.com/opinion/8728657-181/pd-editorial-an-abuse-of?ref=menu&sba=AAS",
							},
							{
								text: "Sac Bee Editorial Board",
								url: "https://www.sacbee.com/opinion/election-endorsements/article218268990.html",
							},
						]
					},
					{
						subsectionTitle: "Opinionated stuff",
						links: [
							{
								text: "John Oliver's Last Week Tonight",
								url: "https://www.youtube.com/watch?v=yw_nqzVfxFQ",
							},
							{
								text: "Op-ed: The dialysis industry needs reform in California",
								url: "https://www.dailynews.com/2018/04/07/the-dialysis-industry-needs-reform-in-california/",
							},
							{
								text: "Op-ed: Dialysis Clinic's bugs and blood",
								url: "https://www.sacbee.com/opinion/op-ed/soapbox/article207146074.html"
							},
						]
					},
					{
						subsectionTitle: "Impartial analyses",
						links: [
							{
								text:"KQED Forum debate (audio)",
								url:"https://www.kqed.org/forum/2010101867951/election-2018-californias-proposition-8-put-spotlight-on-dialysis-clinics"
							},
							{
								text:"ProPublica on dialysis conditions",
								url:"https://www.propublica.org/article/in-dialysis-life-saving-care-at-great-risk-and-cost"
							},
						]
					},
					{
						subsectionTitle: "Impartial analyses",
						links: [
							{
								text: "LA Times: background on labor dispute",
								url: "http://www.latimes.com/politics/la-pol-ca-dialysis-initiative-legislation-20170809-story.html",
							},
							{
								text: "Legislative Analyst's Office report",
								url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=8&year=2018",
							},
							{
								text: "Official voter guide digest",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/prop8-title-summ-analysis.pdf"
							},
							{
								text: "Legal text of proposition",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/topl.pdf#Prop8"
							},
							{
								text: "Ballotpedia",
								url:"https://ballotpedia.org/California_Proposition_8,_Limits_on_Dialysis_Clinics%27_Revenue_and_Required_Refunds_Initiative_(2018)"
							},
						]
					}
				]
			}
		}
  ]
}
export default () => (<PropPageBuilder data={Data}/>);
