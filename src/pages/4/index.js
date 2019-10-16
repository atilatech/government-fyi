import React from 'react'
import PropPageBuilder from '../../components/page-blocks/aggregators/PropPageBuilder'
import IMessageBlock from '../../components/page-blocks/blocks/IMessageBlock'
import SectionTitleBlock from '../../components/page-blocks/blocks/SectionTitleBlock'

import {EDUCATION_CONVERSATION_MESSAGES, EDUCATION_PLATFORMS} from "../../data/PartyPlatformDataEducation";
import PartyPlatformBlock from "../../components/page-blocks/blocks/PartyPlatformBlock";

const partyPlatforms = EDUCATION_PLATFORMS.map(PLATFORM => (
	{
		component: PartyPlatformBlock,
		data: PLATFORM,
	}
));

const Data = {
	pageId:"education",
	propNum: 4,
	meta: {
		dateCreated: new Date('October 14, 2019 7:00:00'),
		dateModified: new Date('October 14, 2019 7:00:00')
	},
	blocks: [
		{
			component: SectionTitleBlock,
			data:{
				title: "A Casual Conversation About Education",
				nColWidth: 6,
			}
		},
		{
			component: IMessageBlock,
			data: {
				messages: EDUCATION_CONVERSATION_MESSAGES,
			}
		},
		...partyPlatforms,
  ]
};
export default () => (<PropPageBuilder data={Data}/>);
