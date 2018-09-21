import React from 'react'
import PropPageBuilder from 'components/page-blocks/aggregators/PropPageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import LinksBlock from 'components/page-blocks/blocks/LinksBlock'
import SectionTitleBlock from 'components/page-blocks/blocks/SectionTitleBlock'
import VideoCarouselBlock from 'components/page-blocks/blocks/VideoCarouselBlock'

import Citation from 'components/interactive/citation/citation'
import Acronym from 'components/interactive/acronym'
import {Acronyms, Citations} from './expandables'

const Data = {
	pageId:"prop-8",
	propNum: 8,
	meta: {
		dateCreated: new Date('September 15, 2018 10:00:00'),
		dateModified: new Date('September 15, 2018 10:00:00')
	},
	blocks: [
    {
    	component: TextWithTitleBlock,
    	data: {
    		// title: "",
    		text:
				<span>
					Prop 8 would limit dialysis clinics’ revenue to 115% of the combined “direct patient care service costs” and “health care quality improvement costs”, and require clinics to issue refunds to patients for any amount over that. It’s a roundabout way to try to force these businesses to spend their revenue on these two categories.
					<br/><br/>
					Dialysis clinics provide vital treatments for the 80,000 Californians with kidney disease, by hooking them up to dialysis machines, filtering and cleaning their blood.
				</span>
    	},
    },
		{
			component: SectionTitleBlock,
			data: {
				title:"For more context",
				subtitle:"John Oliver dives deeper into for-profit dialysis clinics."
			}
		},
		{
			component: VideoCarouselBlock,
			data: {
				videos: [
					{
						caption: "John Oliver's Last Week Tonight",
						link:"https://www.youtube-nocookie.com/embed/yw_nqzVfxFQ",
					},
				]
			}
		},
		{
			component: TextWithTitleBlock,
			data: {
				text: "The segment talks about some of the clinics that Prop 8 targets. If you acknowledge the issues Oliver brings up, does Prop 8 help solve them?"
			}
		},
		{
			component: TextWithTitleBlock,
			data: {
				title: "Seems kinda obscure to vote on this",
				text:
				<span>
					The dispute between a labor union and for-profit dialysis clinics runs deep. The union, <Acronym data={Acronyms.SEIU}/> West, has previously used the ballot initiative process as leverage in legislative negotiations, and the union has failed to unionize dialysis healthcare workers. <Acronym data={Acronyms.SEIU}/> West says they want to increase patient care in these highly-profitable clinics, and point to reports of bug infestations, run-down equipment, and unsterile conditions. In John Oliver's segment, one former worker (who was fired for trying to get others to unionize), explained that workers were told to get through as many patients as possible.
					<br/><br/>
					Opponents claim Prop 11 is a way for <Acronym data={Acronyms.SEIU}/> West to add union members, and its passage would put people’s lives at risk by potentially closing clinics.
					<br/><br/>
					Either way, both sides are spending tens of millions of dollars in ads fighting this until November.
				</span>
			}
		},
		{
			component: TextWithTitleBlock,
			data: {
				title: "It may come down to definitions",
				text:
				<span>
					The requirement to issue refunds would incentivize dialysis clinics to “direct patient care services” and “healthcare improvements” which includes “non-managerial” clinic workers salaries, pharmaceuticals, equipment, technology, training, and patient education.
					<br/><br/>
					Opponents argue that because these categories do not include spending on medical directors, clinic coordinators, regulatory compliance, or facility security, it could force clinics to close. It’s also unclear exactly how dialysis clinics would financially deal with Prop 8's constraints.
					<br/><br/>
					What constitutes an allowable cost is also not clear-cut. For example, federal law requires clinics to have certain positions, in order to receive Medicare payments – like a medical director and nurse manager. They perform managerial functions, but they are also involved in direct patient care. Are their wages allowable costs?
				</span>
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
								text: "",
								url: ""
							},
						]
					},
					{
						subsectionTitle: "Arguments against",
						links: [
							{
								text: "LA Times Editorial Board",
								url: "http://www.latimes.com/politics/la-pol-ca-dialysis-initiative-legislation-20170809-story.html",
							},
							{
								text: "SF Chronicle Editorial Board",
								url: "https://www.sfchronicle.com/opinion/editorials/article/A-measure-that-does-not-belong-on-the-state-13216454.php"
							},
							{
								text: "Mercury News Editorial Board",
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
						subsectionTitle: "Opinion",
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
								text: "Legislative Analyst's Office analysis",
								url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=8&year=2018",
							},
							{
								text: "Official voter guide digest",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/prop8-title-summ-analysis.pdf"
							},
							{
								text: "Ballotpedia",
								url:"https://ballotpedia.org/California_Proposition_8,_Limits_on_Dialysis_Clinics%27_Revenue_and_Required_Refunds_Initiative_(2018)"
							}
						]
					}
				]
			}
		}
  ]
}
export default () => (<PropPageBuilder data={Data}/>);
