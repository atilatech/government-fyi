import React from 'react'
import PropPageBuilder from '../../components/page-blocks/aggregators/PropPageBuilder'

import PartyPlatformBlock from "../../components/page-blocks/blocks/PartyPlatformBlock";
import {HOUSING_CONVERSATION, HOUSING_PLATFORMS} from "../../data/PartyPlatformDataHousing";
import SectionTitleBlock from "../../components/page-blocks/blocks/SectionTitleBlock";
import IMessageBlock from "../../components/page-blocks/blocks/IMessageBlock";
import { CREATION_DATE } from '../../data/Constants';

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
		dateCreated: new Date(CREATION_DATE),
		dateModified: new Date(CREATION_DATE)
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
