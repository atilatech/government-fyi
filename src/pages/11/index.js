import React from 'react'
import PropPageBuilder from 'components/page-blocks/aggregators/PropPageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import LinksBlock from 'components/page-blocks/blocks/LinksBlock'

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
    		text: <span>Prop 11 would require (or allow, depending on your stance) <Acronym data={Acronyms.EMTs}/> to remain on-call during their breaks, as is the current practice in that industry. A recent ruling by the California Supreme Court, regarding security workers, mandated that breaks must be off-duty and uninterruptible. Although it hasn't been explicitly applied to emergency personnel, it is likely to be. Some lawsuits have already been filed.
					<br/><br/>
					We get to vote whether private-sector <Acronym data={Acronyms.EMTs}/> should be required to be on-duty and interruptible during their mandatory meal and rest breaks (<Citation data={Citations['4']}>and be paid their normal rate while doing so</Citation>).
					<br/><br/>
					Prop 11 would also require ambulance companies to provide mental health services to employees. It would also absolve any liability ambulance companies might have incurred since the court ruling.
				</span>
    	},
    },
		{
			component: TextWithTitleBlock,
			data: {
				title:"On the ambulance company's side",
				text:
				<span>
					Except for the much smaller cost of providing mental health services and training, it is in ambulance companies' best business interests to make sure Prop 11 passes.
					<br/><br/>
					Cities contract with private ambulances to be able to respond within a certain time in an area. When a 911 call comes in, the nearest ambulance rushes over, becoming occupied. To meet their contractually-obligated response time, the remaining ambulances must redistribute themselves to cover the area.
					<br/><br/>
					Currently, the industry norm is for EMTs to be on-duty during their entire shift. If a call comes in and the EMTs are eating lunch, they'll put down their avocado sandos, respond to the call, and resume nomming while idling later.
					<br/><br/>
					If Prop 11 fails, and courts rule that paramedics' breaks can't be interrupted, then the private ambulance companies (which make up 74% of ambulance coverage) will have much higher costs to meet their contracts. Surprisingly, the Legislative Analyst Office estimates that the burden of these increased costs (~$100M) will likely fall on the county.
				</span>
			}
		},
		{
			component: TextWithTitleBlock,
			data: {
				title:"On the EMT's side",
				text: <span>It's a little harder to understand what EMTs want. Even though it is the industry norm to always be on-duty, lawsuits have already been filed  </span>
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
								text: "",
								url: "",
							},
						]
					}
				]
			}
		}
  ]
}
export default () => (<PropPageBuilder data={Data}/>);
