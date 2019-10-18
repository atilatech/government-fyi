import React from 'react'
import PropPageBuilder from 'components/page-blocks/aggregators/PropPageBuilder'

import { SENIORS_PLATFORMS} from "../../data/PartyPlatformDataSeniors";
import PartyPlatformBlock from "../../components/page-blocks/blocks/PartyPlatformBlock";

const partyPlatforms = SENIORS_PLATFORMS.map(PLATFORM => (
	{
		component: PartyPlatformBlock,
		data: PLATFORM,
	}
));


const Data = {
	pageId:"seniors",
	propNum: 8,
	meta: {
		dateCreated: new Date('October 14, 2019 7:00:00'),
		dateModified: new Date('October 14, 2019 7:00:00')
	},
	blocks: [
		...partyPlatforms,
  	]
};
export default () => (<PropPageBuilder data={Data}/>);
