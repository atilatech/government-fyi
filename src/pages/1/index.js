import React from 'react'
import PropPageBuilder from '../../components/page-blocks/aggregators/PropPageBuilder'
import ResultBlock from '../../components/page-blocks/blocks/ResultBlock'
import {PropMetaData} from '../prop-attributes'

import PartyPlatformBlock from "../../components/page-blocks/blocks/PartyPlatformBlock";
import {HOUSING_PLATFORMS} from "../../data/PartyPlatformDataHousing";

const partyPlatforms = HOUSING_PLATFORMS.map(PLATFORM => (
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
				<li>What easy or hard should for foreigners to buy Canadian homes?</li>
			</ol>
    	},
    },
	...partyPlatforms,
  ]
}
export default () => (<PropPageBuilder data={Data}/>);
