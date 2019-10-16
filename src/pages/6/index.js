import React from 'react'
import PropPageBuilder from '../../components/page-blocks/aggregators/PropPageBuilder'
import ResultBlock from '../../components/page-blocks/blocks/ResultBlock'

import PartyPlatformBlock from "../../components/page-blocks/blocks/PartyPlatformBlock";
import {IMMIGRATION_PLATFORMS} from "../../data/PartyPlatformDataImmigration";

const partyPlatforms = IMMIGRATION_PLATFORMS.map(PLATFORM => (
	{
		component: PartyPlatformBlock,
		data: PLATFORM,
	}
));

const Data = {
	pageId:"immigration",
	propNum: 6,
	meta: {
		dateCreated: new Date('October 14, 2019 7:00:00'),
		dateModified: new Date('October 14, 2019 7:00:00')
	},
	blocks: [
		{
			component: ResultBlock,
			data: {
				result: "Y",
				title: "What's the key Issue?",
				text: "Thousands of people want to come to Canda every year for a better life." +
					"How many people should be allowed to immigrate to Canada every year?" +
					" What criteria should we use for allowing people to come into the country",
			},
		},
		...partyPlatforms,
	]
}
export default () => (<PropPageBuilder data={Data}/>);
