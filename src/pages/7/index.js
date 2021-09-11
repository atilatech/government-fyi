import React from 'react'
import PropPageBuilder from '../../components/page-blocks/aggregators/PropPageBuilder'

import PartyPlatformBlock from "../../components/page-blocks/blocks/PartyPlatformBlock";
import {TAXES_CONVERSATION_MESSAGES, TAXES_PLATFORMS} from "../../data/PartyPlatformDataTaxes";
import SectionTitleBlock from "../../components/page-blocks/blocks/SectionTitleBlock";
import IMessageBlock from "../../components/page-blocks/blocks/IMessageBlock";
import { CREATION_DATE } from '../../data/Constants'

const partyPlatforms = TAXES_PLATFORMS.map(PLATFORM => (
	{
		component: PartyPlatformBlock,
		data: PLATFORM,
	}
));

const Data = {
	pageId:"taxes",
	propNum: 7,
	meta: {
		dateCreated: new Date(CREATION_DATE),
		dateModified: new Date(CREATION_DATE)
	},
	blocks: [
		{
			component: SectionTitleBlock,
			data:{
				title: "A Casual Conversation About Taxes",
				nColWidth: 6,
			}
		},
		{
			component: IMessageBlock,
			data: {
				messages: TAXES_CONVERSATION_MESSAGES,
			}
		},
		...partyPlatforms,
	]
};
export default () => (<PropPageBuilder data={Data}/>);
