import React from 'react'
import PropPageBuilder from 'components/page-blocks/aggregators/PropPageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import SectionTitleBlock from 'components/page-blocks/blocks/SectionTitleBlock'
import SubsectionTitleBlock from 'components/page-blocks/blocks/SubsectionTitleBlock'
import LinksBlock from 'components/page-blocks/blocks/LinksBlock'
import DSTTimezoneMapBlock from 'components/page-blocks/blocks/DSTTimezoneMapBlock'

import Citation from 'components/interactive/citation/citation'
import Acronym from 'components/interactive/acronym'
import {Acronyms, Citations} from './expandables'

import UsMap from './topojson/states-topo'
import TzMap from './topojson/timezones-topo'

const Data = {
	pageId:"prop-7",
	propNum: 7,
	meta: {
		dateCreated: new Date('September 15, 2018 10:00:00'),
		dateModified: new Date('September 15, 2018 10:00:00')
	},
	blocks: [
    {
    	component: TextWithTitleBlock,
    	data: {
    		title: "Some caveats",
    		text: <span>
					If Prop 7 passes, it gives the California state legislature the power to change Daylight Savings Time, with two-thirds vote, as long as it's in accordance with federal law. <Citation data={Citations['1']}>Currently, federal law only allows states to follow <Acronym data={Acronyms.DST}/> exactly (you know – spring forward, fall back), or not at all (as <Acronym data={Acronyms.AZ}/> and <Acronym data={Acronyms.HI}/> do) </Citation>. If we wanted to move to <Acronym data={Acronyms.DST}/> year-round, which is what's being argued about, we'd need Congress to amend the Time Act of 1951.
					<br/><br/>
					<em>Again, passing Prop 7 does not immediately change anything regarding <Acronym data={Acronyms.DST}/></em>. It merely points us down the path of year-round DST.
				</span>
    	}
    },
		{
			component: TextWithTitleBlock,
			data: {
				title: "But say we were on DST all year",
				text: "Assuming Prop 7 passes, the state legislature moves California to DST permanently, and Congress approves it. Here's what it'd look like.",
				nColWidth: 8
			}
		},
		{
			component: SubsectionTitleBlock,
			data: {
				title: "Some of the time, California would be one hour off from Pacific Time"
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
								text: "",
								url: "",
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
