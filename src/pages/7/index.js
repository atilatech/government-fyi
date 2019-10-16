import React from 'react'
import PropPageBuilder from '../../components/page-blocks/aggregators/PropPageBuilder'

import PartyPlatformBlock from "../../components/page-blocks/blocks/PartyPlatformBlock";
import {TAXES_CONVERSATION_MESSAGES, TAXES_PLATFORMS} from "../../data/PartyPlatformDataTaxes";
import SectionTitleBlock from "../../components/page-blocks/blocks/SectionTitleBlock";
import IMessageBlock from "../../components/page-blocks/blocks/IMessageBlock";

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
		dateCreated: new Date('October 14, 2019 7:00:00'),
		dateModified: new Date('October 14, 2019 7:00:00')
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
}
export default () => (<PropPageBuilder data={Data}/>);
