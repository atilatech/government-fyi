import React from 'react'
import PropPageBuilder from '../../components/page-blocks/aggregators/PropPageBuilder'
import ResultBlock from '../../components/page-blocks/blocks/ResultBlock'

import PartyPlatformBlock from "../../components/page-blocks/blocks/PartyPlatformBlock";
import {HEALTHCARE_PLATFORMS} from "../../data/PartyPlatformDataHealthcare";
import { CREATION_DATE } from '../../data/Constants'

const partyPlatforms = HEALTHCARE_PLATFORMS.map(PLATFORM => (
	{
		component: PartyPlatformBlock,
		data: PLATFORM,
	}
));

const Data = {
	pageId:"healthcare",
	propNum: 5,
	meta: {
		dateCreated: new Date(CREATION_DATE),
		dateModified: new Date(CREATION_DATE)
	},
	blocks: [
		{
			component: ResultBlock,
			data: {
				result: "Y",
				title: "What's the key Issue?",
				text: "Health is the most important thing we have in life." +
					" How much of a role should the government play in providing people with healthcare?",
			},
		},
		...partyPlatforms,
  ]
};
export default () => (<PropPageBuilder data={Data}/>);
