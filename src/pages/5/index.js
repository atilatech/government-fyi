import React from 'react'
import PropPageBuilder from 'components/page-blocks/aggregators/PropPageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import LinksBlock from 'components/page-blocks/blocks/LinksBlock'
import SectionTitleBlock from 'components/page-blocks/blocks/SectionTitleBlock'
import ResultBlock from 'components/page-blocks/blocks/ResultBlock'
import {PropMetaData} from 'pages/prop-attributes'

import Citation from 'components/interactive/citation/citation'
// import Acronym from 'components/interactive/acronym'
import {Citations} from './expandables'
import {EDUCATION_PLATFORMS} from "../../data/PartyPlatformDataEducation";
import PartyPlatformBlock from "../../components/page-blocks/blocks/PartyPlatformBlock";
import {HEALTHCARE_PLATFORMS} from "../../data/PartyPlatformDataHealthcare";

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
		dateCreated: new Date('October 8, 2018 10:00:00'),
		dateModified: new Date('November 7, 2018 14:10:00')
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
}
export default () => (<PropPageBuilder data={Data}/>);
