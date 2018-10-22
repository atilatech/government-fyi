import React from 'react'
import PropPageBuilder from 'components/page-blocks/aggregators/PropPageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import SectionTitleBlock from 'components/page-blocks/blocks/SectionTitleBlock'
import SubsectionTitleBlock from 'components/page-blocks/blocks/SubsectionTitleBlock'
import LinksBlock from 'components/page-blocks/blocks/LinksBlock'
import ImgLateralBlock from 'components/page-blocks/blocks/ImgLateralBlock'
// import DSTTimezoneMapBlock from 'components/page-blocks/blocks/DSTTimezoneMapBlock'
import DSTSunInteractiveBlock from 'components/page-blocks/blocks/DSTSunInteractiveBlock'
import {OrderingContext} from 'ordering-context.js'

import Citation from 'components/interactive/citation/citation'
import Acronym from 'components/interactive/acronym'
import {Acronyms, Citations} from './expandables'

// -- import images
import dstOn from './images/dst-on.png'
import dstOn_w from './images/dst-on.webp'
import dstOn_2x from './images/dst-on@2x.png'
import dstOn_2x_w from './images/dst-on@2x.webp'
import dstOff from './images/dst-off.png'
import dstOff_w from './images/dst-off.webp'
import dstOff_2x from './images/dst-off@2x.png'
import dstOff_2x_w from './images/dst-off@2x.webp'

//-- data for visualizations
//-- removed extensions so it imports as static url, not as object
// import UsMap from './topojson/states-topojson'
// import TzMap from './topojson/timezones-2'
// import LASunTimes from './suntimes/la.js'
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
					Okay, there are a few caveats. If Prop 7 passes, CA can change Daylight Saving Time (DST), as long as the legislature gives it a two-thirds vote and Congress says "Fine, whatever." <Citation data={Citations['2']}>Currently, the national Uniform Time Act of 1966 allows states to follow <Acronym data={Acronyms.DST}/> exactly (you know – "Spring forward, November back" – something like that), or opt-out (like <Acronym data={Acronyms.AZ}/> and <Acronym data={Acronyms.HI}/>). </Citation> If we want to move to <Acronym data={Acronyms.DST}/> <em>year-round</em>, which is what Prop 7 is implicitly asking, <Citation data={Citations['1']}>CA needs Congress to amend federal law.</Citation>
				</span>
    	}
    },
		{
			component: TextWithTitleBlock,
			data: {
				title: "Imagine if we were on DST all year",
				text: <span>Let's pretend Prop 7 passes, the state legislature moves California to <Acronym data={Acronyms.DST}/> permanently, and Congress approves it. Here's what would happen:</span>,
				nColWidth: 8
			}
		},
		{
			component: SubsectionTitleBlock,
			data: {
				title: "California would be 2 or 3 hours off from New York"
			}
		},
		{
			component: ImgLateralBlock,
			data: {
				caption:
				<span>
					<OrderingContext.Consumer>
						{({isXs}) => (
							<Citation data={Citations['11']}>
								{isXs?'Top':'Left'}: During the months when other states <b>don't</b> observe DST (November – March), CA would be one hour ahead of Pacific time.
								{isXs?' Bottom':' Right'}: When other states do observe DST (March – November), CA would be in line with Pacific time.
							</Citation>
						)}
					</OrderingContext.Consumer>
				</span>,
				images: [
					{
						src: {
							_1x: dstOff,
							_1x_webp: dstOff_w,
							_2x: dstOff_2x,
							_2x_webp: dstOff_2x_w
						},
						alt: "When DST is not observed in other states (Nov-Mar)",
					},
					{
						src: {
							_1x: dstOn,
							_1x_webp: dstOn_w,
							_2x: dstOn_2x,
							_2x_webp: dstOn_2x_w
						},
						alt: "When DST is observed in other states (Mar-Nov)",
					}
				]
			}
		},
		// {
		// 	component: DSTTimezoneMapBlock,
		// 	data: {
		// 		stateMap: UsMap,
		// 		timezoneMap: TzMap
		// 	}
		// },
		{
			component: TextWithTitleBlock,
			data: {
				text:<span>Even though we wouldn’t have to switch our clocks twice a year, most other states still would. Coincidentally, if Congress allowed us to make <Acronym data={Acronyms.DST}/> permanent, CA would be on the same time as AZ, all the time. <Citation data={Citations['3']}>FL actually passed legislation to move to permanent <Acronym data={Acronyms.DST}/>, which means we'd always be three hours from Florida Man</Citation></span>
			}
		},
		{
			component: SubsectionTitleBlock,
			data: {
				title: "Sunrise and sunset times in San Francisco"
			}
		},
		{
			component: DSTSunInteractiveBlock,
			data: {
				// src: LASunTimes,
				src: SFSunTimes,
				caption:
				<span>
					<Citation data={Citations['12']}>Explore how Daylight Saving Time affects sunrise and sunset time throughout the year, and what it would look like if we switched to year-round Daylight Saving.</Citation>
				</span>
			}
		},
		{
			component: TextWithTitleBlock,
			data: {
				title:"Brighter mornings or longer afternoons?",
				text:
				<span>
					If we moved to DST year-round, the difference would be most noticeable during the winter. On <Acronym data={Acronyms.xmas}/> Day in SF, for instance, the sun would rise at 8:23am rather than 7:23am. <Citation data={Citations['5']}>Prop 7 critics argue that children would be going to school in the dark and traffic accidents during morning rush hour would worsen in the winter.</Citation>
					<br/><br/>
					On the bright side, the earliest the sun would set is 5:50pm rather than 4:50pm. <Citation data={Citations['6']}>Prop 7 supporters say later sunsets would result in electricity savings</Citation>, reduced traffic accidents, and less crime. <Citation data={Citations['8']}>Apparently, less clock switching also reduces heart attacks the day after.</Citation>
					<br/><br/>
					Some people simply want brighter mornings; others want longer afternoons. Luckily, everyone has an opinion.
				</span>
			}
		},
		{
			component: TextWithTitleBlock,
			data: {
				title:"Would this be a first?",
				text:
				<span>
					Naw, <Citation data={Citations['4']}>the US moved to permanent Daylight Saving Time thrice in the past, all in an effort to save energy. The first instance was during <Acronym data={Acronyms.WWI}/> (Congress repealed it soon after), the second was in <Acronym data={Acronyms.WWII}/>, and the third was during the oil embargo from 1973-75.</Citation> <Citation data={Citations['9']}>In the third case, the government studied its effects and found mixed or inconclusive data.</Citation>
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
						subsectionTitle: "Yes on Prop 7",
						links: [
							{
								text: "LA Times Editorial Board",
								url:"http://www.latimes.com/opinion/editorials/la-ed-proposition-7-endorsement-20180929-story.html",
							},
						]
					},
					{
						subsectionTitle: "No on Prop 7",
						links: [
							{
								text: "San Jose Mercury News & East Bay Times Editorial Boards",
								url: "https://www.mercurynews.com/2018/08/18/editorial-for-kids-safety-vote-no-on-year-around-daylight-saving-time/",
							},
							{
								text:"Sac Bee Editorial Board",
								url:"https://www.sacbee.com/opinion/election-endorsements/article218732660.html"
							},
							{
								text:"SF Chronicle Editorial Board",
								url:"https://www.sfchronicle.com/opinion/editorials/article/Chronicle-Recommends-No-on-Prop-7-13242628.php"
							},
							{
								text:"Hold on says San Diego Union Tribune Editorial Board",
								url:"http://www.sandiegouniontribune.com/opinion/editorials/sdut-daylight-saving-sleep-public-health-2016jun14-story.html"
							},
						]
					},
					{
						subsectionTitle: "Related coverage",
						links: [
							{
								text: "KQED Forum: hear from the Assemblyman who put this on the ballot",
								url:"https://www.kqed.org/forum/2010101867860/election-2018-californias-proposition-7-could-make-daylight-saving-time-permanent"
							},
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
							{
								text:"SF Chronicle",
								url:"https://www.sfchronicle.com/bayarea/article/Prop-7-California-considers-full-time-daylight-13282662.php"
							},

						]
					},
					{
						subsectionTitle: "Impartial analyses",
						links: [
							{
								text: "Legislative Analyst's Office report",
								url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=7&year=2018",
							},
							{
								text: "Official voter guide digest",
								url: "http://voterguide.sos.ca.gov/propositions/7/"
							},
							{
								text: "Legal text of proposition",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/topl.pdf#Prop7"
							},
							{
								text: "Ballotpedia",
								url:"https://ballotpedia.org/California_Proposition_7,_Permanent_Daylight_Saving_Time_Measure_(2018)"
							},
						]
					}
				]
			}
		},
  ]
}
export default () => (<PropPageBuilder data={Data}/>);
