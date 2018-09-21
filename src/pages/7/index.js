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
    		title: "Some caveats",
    		text: <span>
					If Prop 7 passes, it gives the California state legislature the power to change Daylight Saving Time, with two-thirds vote, as long as it's cool with federal law. <Citation data={Citations['2']}>Currently, the Uniform Time Act of 1966 only allows states to follow <Acronym data={Acronyms.DST}/> exactly (you know – "Spring forward, November back" – or something), or opt-out (like <Acronym data={Acronyms.AZ}/> and <Acronym data={Acronyms.HI}/>). </Citation> If we wanted to move to <Acronym data={Acronyms.DST}/> <em>year-round</em>, which is what's being argued for, <Citation data={Citations['1']}>California needs Congress to amend federal law.</Citation>
					<br/><br/>
					<em>Again, passing Prop 7 does not immediately change anything regarding <Acronym data={Acronyms.DST}/></em>. It gives them the power to change things, voices our public opinion to our  legislators, and points us down the path of year-round DST.
				</span>
    	}
    },
		{
			component: TextWithTitleBlock,
			data: {
				title: "Let's suppose we were on DST all year",
				text: "Let's pretend Prop 7 passes, the state legislature moves California to DST permanently, and Congress approves it. Here's what it'd look like.",
				nColWidth: 6
			}
		},
		{
			component: SubsectionTitleBlock,
			data: {
				title: "California would be 3 hours from New York, sometimes"
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
				text:<span>Even though we wouldn’t have to switch our clocks twice a year, most other states still would. If Congress allowed us to have our own time zone, the time difference between CA and NY would be two hours in the winter, but three hours in the summer. Coincidentally, California and Arizona would be on the same time, all the time. <Citation data={Citations['3']}>Florida just passed legislation to move to permanent DST, so we'd always be three hours from Florida Man.</Citation></span>
			}
		},
		{
			component: TextWithTitleBlock,
			data: {
				title:"Darker mornings or longer afternoons?",
				text:
				<span>
					Moving to DST year-round would be most noticeable in winter, when on <Acronym data={Acronyms.xmas}/> in <Acronym data={Acronyms.LA}/>, the sun would rise at 7:56am. In SF, 8:23am. <Citation data={Citations['5']}>Opponents of Prop 7 argue that children would go to school in the dark during winter, and traffic accidents during rush hour would worsen.</Citation>
					<br/><br/>
					On the bright side, the earliest the sun would set is 5:43pm in LA, rather than the current low of 4:43pm. <Citation data={Citations['6']}>Proponents argue that later sunsets would result in electricity savings</Citation>, reduced traffic accidents, and less crime. <Citation data={Citations['8']}>And, crazily, less clock switching reduces heart attacks the following day.</Citation>
					<br/><br/>
					Some simply want brighter mornings, and others want longer afternoons. Luckily, everyone has an opinion.
				</span>
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
				title:"Not the first time",
				text:
				<span>
					<Citation data={Citations['4']}>The US has moved to permanent Daylight Saving thrice in the past, all in efforts to save energy. The first was in WWI (where Congress repealed it soon after), the second in WWII, and the third during the oil embargo, from 1973-75.</Citation>
					<br/><br/>
					<Citation data={Citations['9']}>In the case of 1973-75, the act was hotly debated, with many of the same arguments used today. After the nation-wide experiment was finished, DoT and NIST conducted a study and found no significant differences in traffic fatalities or energy savings. But when the data was sliced in a certain way, they found a significant difference in fatalities among school-aged children in the mornings during Jan - April 1974, compared to the year earlier (non-DST).</Citation>
					<br/><br/>
					But as others have shown with electricity savings, differences found nationally may not apply locally, though.
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
							}
						]
					}
				]
			}
		}
  ]
}
export default () => (<PropPageBuilder data={Data}/>);
