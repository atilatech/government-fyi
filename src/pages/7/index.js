import React from 'react'
import PropPageBuilder from 'components/page-blocks/aggregators/PropPageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import SectionTitleBlock from 'components/page-blocks/blocks/SectionTitleBlock'
import SubsectionTitleBlock from 'components/page-blocks/blocks/SubsectionTitleBlock'
import LinksBlock from 'components/page-blocks/blocks/LinksBlock'
import DSTTimezoneMapBlock from 'components/page-blocks/blocks/DSTTimezoneMapBlock'
import DSTSunInteractiveBlock from 'components/page-blocks/blocks/DSTSunInteractiveBlock'

import Citation from 'components/interactive/citation/citation'
import Acronym from 'components/interactive/acronym'
import {Acronyms, Citations} from './expandables'

//-- data for visualizations
//-- removed extensions so it imports as static url, not as object
import UsMap from './topojson/states-topojson'
import TzMap from './topojson/timezones-2'
import LASunTimes from './suntimes/la.js'
import SFSunTimes from './suntimes/sf.js'

const Data = {
	pageId:"prop-7",
	propNum: 7,
	meta: {
		dateCreated: new Date('October 8, 2018 10:00:00'),
		dateModified: new Date('October 8, 2018 10:00:00')
	},
	blocks: [
    {
    	component: TextWithTitleBlock,
    	data: {
    		title: "Is this really possible?",
    		text: <span>
					Okay, there are a few caveats. If Prop 7 passes, CA can change Daylight Saving Time (DST), as long as the legislature gives it a two-thirds vote and Congress says, "Fine, whatever." <Citation data={Citations['2']}>Currently, the national Uniform Time Act of 1966 allows states to follow <Acronym data={Acronyms.DST}/> exactly (you know – "Spring forward, November back" – something like that), or to opt-out (like <Acronym data={Acronyms.AZ}/> and <Acronym data={Acronyms.HI}/>). </Citation> If we want to move to <Acronym data={Acronyms.DST}/> <em>year-round</em>, which is what Prop 7 is implicitly asking, <Citation data={Citations['1']}>CA needs Congress to amend federal law.</Citation>
				</span>
    	}
    },
		{
			component: TextWithTitleBlock,
			data: {
				title: "But let's say we were on DST all year",
				text: "Let's pretend Prop 7 passes, the state legislature moves California to DST permanently, and Congress approves it.",
				nColWidth: 8
			}
		},
		{
			component: SubsectionTitleBlock,
			data: {
				title: "California would be sometimes 3 hours from New York, sometimes 2"
			}
		},
		{
			component: DSTTimezoneMapBlock,
			data: {
				stateMap: UsMap,
				timezoneMap: TzMap
			}
		},
		{
			component: TextWithTitleBlock,
			data: {
				text:<span>Even though we wouldn’t have to switch our clocks twice a year, most other states still would. If Congress did allow us to have our own time zone, the time difference between CA and NY would be two hours during winter, but three hours in the summer (when other states observe DST). Coincidentally, CA and AZ would be on the same time, all the time. <Citation data={Citations['3']}>FL just passed legislation to move to permanent DST so we'd always be three hours from Florida Man</Citation></span>
			}
		},
		{
			component: SubsectionTitleBlock,
			data: {
				title: "Sunrise and sunset times in SF (2018)"
			}
		},
		{
			component: DSTSunInteractiveBlock,
			data: {
				// src: LASunTimes,
				src: SFSunTimes
			}
		},
		{
			component: TextWithTitleBlock,
			data: {
				title:"Darker mornings or longer afternoons?",
				text:
				<span>
					Moving to DST year-round would be most noticeable in the winter. On <Acronym data={Acronyms.xmas}/> Day in SF, for instance, the sun would rise at 8:23am, rather than 7:23am. <Citation data={Citations['5']}>Prop 7 critics argue that children would be going to school in the dark and traffic accidents would worsen during rush hour in the winter.</Citation>
					<br/><br/>
					On the bright side, the earliest the sun would set is 5:50pm in SF, rather than the current low of 4:50pm. <Citation data={Citations['6']}>Prop 7 supporters say that later sunsets would result in electricity savings</Citation>, reduced traffic accidents, and less crime. <Citation data={Citations['8']}>Apparently less clock switching also seems to reduce heart attacks the day after.</Citation>
					<br/><br/>
					Some people simply want brighter mornings; others want longer afternoons. Luckily, everyone has an opinion.
				</span>
			}
		},
		{
			component: TextWithTitleBlock,
			data: {
				title:"Not the first time",
				text:
				<span>
					<Citation data={Citations['4']}>The US has moved to permanent Daylight Saving Time thrice in the past, all in an effort to save energy. The first instance was during WWI (Congress repealed it soon after), the second was in WWII, and the third was during the oil embargo from 1973-75.</Citation> <Citation data={Citations['9']}>In the third case, the government studied its effects and found mixed or inconclusive data.</Citation> (Read for yourself)

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
								text: "We could not find any editorial boards in favor of Prop 7",
							},
						]
					},
					{
						subsectionTitle: "Arguments against",
						links: [
							{
								text: "Mercury News & East Bay Times Editorial Boards",
								url: "https://www.mercurynews.com/2018/08/18/editorial-for-kids-safety-vote-no-on-year-around-daylight-saving-time/",
							},
						]
					},
					{
						subsectionTitle: "Other",
						links: [
							{
								text: "Time: When Daylight Saving Time Was Year-Round",
								url: "http://time.com/3695333/daylight-saving-time-wwii/",
							},
							{
								text: "Scientific American: Does Daylight Saving Times save energy?",
								url: "https://www.scientificamerican.com/article/does-daylight-saving-times-save-energy/",
							},
							{
								text: "Reuters: Daylight saving time linked to heart attacks: study",
								url: "https://www.reuters.com/article/us-heart-daylightsaving/daylight-saving-time-linked-to-heart-attacks-study-idUSBREA2S0D420140329",
							},
						]
					},
					{
						subsectionTitle: "Impartial analyses",
						links: [
							{
								text: "Legislative Analyst's Office analysis",
								url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=7&year=2018",
							},
							{
								text: "Official voter guide digest",
								url: "http://voterguide.sos.ca.gov/propositions/7/"
							},
							{
								text: "Ballotpedia",
								url:"https://ballotpedia.org/California_Proposition_7,_Permanent_Daylight_Saving_Time_Measure_(2018)"
							},
							{
								text: "Legal text of proposition",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/topl.pdf#Prop7"
							}
						]
					}
				]
			}
		}
  ]
}
export default () => (<PropPageBuilder data={Data}/>);
