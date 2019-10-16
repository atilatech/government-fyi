import React from 'react'
import PropPageBuilder from '../../components/page-blocks/aggregators/PropPageBuilder'
import TextWithTitleBlock from '../../components/page-blocks/blocks/TextWithTitleBlock'
import SectionTitleBlock from '../../components/page-blocks/blocks/SectionTitleBlock'
import SummaryListBlock from '../../components/page-blocks/blocks/SummaryListBlock'
import LinksBlock from '../../components/page-blocks/blocks/LinksBlock'
import IMessageBlock from '../../components/page-blocks/blocks/IMessageBlock'
import DonutGraphBlock from '../../components/page-blocks/blocks/DonutGraphBlock'
import BondData from './bond-data.json'
import Color from '../../layout/colors'
import ResultBlock from '../../components/page-blocks/blocks/ResultBlock'
import {PropMetaData} from '../prop-attributes'

import Citation from '../../components/interactive/citation/citation'
import Acronym from '../../components/interactive/acronym'
import {Acronyms, Citations} from './expandables'
import PartyPlatformBlock from "../../components/page-blocks/blocks/PartyPlatformBlock";
import {HOUSING_PLATFORMS} from "../../data/PartyPlatformData";

const housingPlatforms = HOUSING_PLATFORMS.map(PLATFORM => (
	{
		component: PartyPlatformBlock,
		data: PLATFORM,
	}
));

const Data = {
	pageId:"housing",
	propNum: 1,
	meta: {
		dateCreated: new Date('October 14, 2019 7:00:00'),
		dateModified: new Date('October 14, 2019 7:00:00')
	},
	blocks: [
    {
    	component: ResultBlock,
    	data: {
				result: PropMetaData(1).result,
    		title: "What's the Key Point?",
    		text: `
    		It's getting more expensive to own a home in certain parts of Canada.
    		People who already own a home benefit because their houses are worth more.
    		People who don't already own a home are disadvantaged because it's harder for them to afford a house.
    		`
    	},
    },
    {
    	component: ResultBlock,
    	data: {
				result: PropMetaData(1).result,
    		title: "What are the Key Questions?",
			text: <ol>
				<li>How much of a role should the government play in helping people afford a home?</li>
				<li>How easy should it be to get a mortage for a home?</li>
				<li>How easy should it be for builders to build new homes?</li>
				<li>What do they think about foreigners buying Canadian homes?</li>
			</ol>
    	},
    },
	...housingPlatforms,
  ]
}
export default () => (<PropPageBuilder data={Data}/>);
