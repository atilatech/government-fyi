import React from 'react'
import PropPageBuilder from '../../components/page-blocks/aggregators/PropPageBuilder'

import PartyPlatformBlock from "../../components/page-blocks/blocks/PartyPlatformBlock";
import {HOUSING_CONVERSATION, HOUSING_PLATFORMS} from "../../data/PartyPlatformDataHousing";
import SectionTitleBlock from "../../components/page-blocks/blocks/SectionTitleBlock";
import IMessageBlock from "../../components/page-blocks/blocks/IMessageBlock";

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
			component: SectionTitleBlock,
			data:{
				title: "A Casual Conversation about Housing",
				nColWidth: 6,
			}
		},
		{
			component: IMessageBlock,
			data: {
				messages: HOUSING_CONVERSATION,
			}
		},
	...partyPlatforms,
  ]
};
export default () => (<PropPageBuilder data={Data}/>);
