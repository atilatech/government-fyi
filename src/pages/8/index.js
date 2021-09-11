import React from 'react'
import PropPageBuilder from 'components/page-blocks/aggregators/PropPageBuilder'

import { SENIORS_PLATFORMS} from "../../data/PartyPlatformDataSeniors";
import PartyPlatformBlock from "../../components/page-blocks/blocks/PartyPlatformBlock";
import { CREATION_DATE } from '../../data/Constants'

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
		dateCreated: new Date(CREATION_DATE),
		dateModified: new Date(CREATION_DATE)
	},
	blocks: [
		...partyPlatforms,
  	]
};
export default () => (<PropPageBuilder data={Data}/>);
