import React from 'react'
import PropPageBuilder from 'components/page-blocks/aggregators/PropPageBuilder'

import ResultBlock from 'components/page-blocks/blocks/ResultBlock'
import { PropMetaData } from 'pages/prop-attributes'

// import Acronym from 'components/interactive/acronym'
import PartyPlatformBlock from "../../components/page-blocks/blocks/PartyPlatformBlock";
import {JOBS_ECONOMY_PLATFORMS} from "../../data/PartyPlatformDataJobsEconomy";

const partyPlatforms = JOBS_ECONOMY_PLATFORMS.map(PLATFORM => (
	{
		component: PartyPlatformBlock,
		data: PLATFORM,
	}
));

const Data = {
	pageId: "jobs-and-economy",
	propNum: 2,
	meta: {
		dateCreated: new Date('October 14, 2019 7:00:00'),
		dateModified: new Date('November 5, 2018 12:52:00')
	},
	blocks: [
		{
			component: ResultBlock,
			data: {
				result: PropMetaData(2).result,
				title: "What is the key issue with the Economy?",
				text: <span>What role should the government play in creating wealth in our economy?
					Should the government be hands on and play an active role in our economy?
					Should the government be more hands off and allow Canadians to create wealth themselves?
					What's the right balance?
				</span>,
			},
		},
		...partyPlatforms,
	]
}
export default () => (<PropPageBuilder data={Data} />);
