import React from 'react'
import PropPageBuilder from '../../components/page-blocks/aggregators/PropPageBuilder'
import ResultBlock from '../../components/page-blocks/blocks/ResultBlock'

import PartyPlatformBlock from "../../components/page-blocks/blocks/PartyPlatformBlock";
import {TAXES_CONVERSATION_MESSAGES, TAXES_PLATFORMS} from "../../data/PartyPlatformDataTaxes";
import CustomBlock from "../../components/page-blocks/blocks/CustomBlock";
import {Link} from "react-router-dom";
import SectionTitleBlock from "../../components/page-blocks/blocks/SectionTitleBlock";
import IMessageBlock from "../../components/page-blocks/blocks/IMessageBlock";
import {EDUCATION_CONVERSATION_MESSAGES} from "../../data/PartyPlatformDataEducation";

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
			component: CustomBlock,
			data: {
				body: <small>You're probably wondering why there's a map of California there
					<span role="img" aria-label="point up emoji">
					👆🏿.
					</span>
					See <Link to="/about"> About</Link> page
				</small>
			}
		},
		{
			component: ResultBlock,
			data: {
				result: "Y",
				title: "What's the key Issue?",
				text: "Thousands of people come to Canada every year for a better life." +
					"How many people should be allowed to immigrate to Canada every year?" +
					" What criteria should we use for allowing people to come into the country",
			},
		},
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
