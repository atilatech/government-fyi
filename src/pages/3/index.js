import React from 'react'
import PropPageBuilder from '../../components/page-blocks/aggregators/PropPageBuilder'
import LinksBlock from '../../components/page-blocks/blocks/LinksBlock'
import SectionTitleBlock from '../../components/page-blocks/blocks/SectionTitleBlock'
import IMessageBlock from '../../components/page-blocks/blocks/IMessageBlock'
import {EmojiLg} from '../../components/static/iMessageStyles'
import ResultBlock from '../../components/page-blocks/blocks/ResultBlock'
import {PropMetaData} from '../../pages/prop-attributes'


import Citation from '../../components/interactive/citation/citation'
import {Citations} from './expandables'
import PartyPlatformBlock from "../../components/page-blocks/blocks/PartyPlatformBlock";
import {ENERGY_CLIMATE_PLATFORMS} from "../../data/PartyPlatformDataEnergyClimate";

const energyClimatePlatforms = ENERGY_CLIMATE_PLATFORMS.map(PLATFORM => (
	{
		component: PartyPlatformBlock,
		data: PLATFORM,
	}
));

const Data = {
	pageId:"energy-and-climate",
	propNum: 3,
	meta: {
		dateCreated: new Date('October 14, 2019 10:00:00'),
		dateModified: new Date('October 14, 2019 14:10:00')
	},
	blocks: [
		{
			component: ResultBlock,
			data: {
				result: PropMetaData(1).result,
				title: "What's the Key Point?",
				text: <span>
					Some of our energy sources are damaging the environment.
					One perspective is that by pivoting to other sources of energy it will help the environment.
					Another perspective is that the economic damage would be too much. e.g. People would lose jobs,
					Canadian companies will be less competitive.
				</span>
			},
		},
		{
			component: SectionTitleBlock,
			data:{
				title: "A Casual Carbon Tax Conversation",
				nColWidth: 6,
			}
		},
		{
			component: IMessageBlock,
			data: {
				messages: [
					{
						from: "them",
						body:<span>
							Hey so, oil is
								<Citation data={Citations['8']}> really bad for the environment </Citation>
						</span>
					},
					{
						from: "me",
						body:"k."
					},
					{
						from: "me",
						body:"So what do you want me to do about it?"
					},
					{
						from: "them",
						body:<span>How about if you use things that damage the environment you have to pay
						an extra tax?</span>
					},
					{
						from:"me",
						body:<span>woah, relax. That's going to cost me like
							<Citation data={Citations['8']}> $200-$400 </Citation>
						</span>
					},
					{
						from:"me-no-bg",
						body:<EmojiLg><span role="img" aria-label="money fly emoji">💸</span></EmojiLg>
					},
					{
						from:"them",
						body:<span>But this is earth we're talking about. We only get one.
							<Citation data={Citations['8']}>[tk add reasons why global warming is bad]</Citation>
						</span>
					},
					{
						from:"me",
						body:<span>Wait, I heard that carbon taxes won't even make a difference. {' '}
							<Citation data={Citations['8']}>It only reduces emissions by 1%</Citation>.
						</span>
					},
					{
						from:"them",
						body:<span>
							It depends how you look at it. Carbon tax is
							<Citation data={Citations['8']}>the most effective way of lowering emissions.</Citation>.
						</span>
					},

				]
			}
		},
		...energyClimatePlatforms,
  ]
};
export default () => (<PropPageBuilder data={Data}/>);
