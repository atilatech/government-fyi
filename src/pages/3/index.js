import React from 'react'
import PropPageBuilder from '../../components/page-blocks/aggregators/PropPageBuilder'
import SectionTitleBlock from '../../components/page-blocks/blocks/SectionTitleBlock'
import IMessageBlock from '../../components/page-blocks/blocks/IMessageBlock'
import {EmojiLg} from '../../components/static/iMessageStyles'
import ResultBlock from '../../components/page-blocks/blocks/ResultBlock'
import {PropMetaData} from '../../pages/prop-attributes'


import Citation from '../../components/interactive/citation/citation'
import PartyPlatformBlock from "../../components/page-blocks/blocks/PartyPlatformBlock";
import {ENERGY_CLIMATE_PLATFORMS} from "../../data/PartyPlatformDataEnergyClimate";
import {CitationsMaster} from "../../data/Constants";

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
		dateCreated: new Date('October 14, 2019 7:00:00'),
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
				title: "A Casual Conversation about the Carbon Tax ",
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
							Hey, so oil is
								<Citation data={CitationsMaster.OilAndEnvironment}> really bad for the environment </Citation>
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
							<Citation data={CitationsMaster.CarbonTaxCost}> $200-$400 </Citation>
						</span>
					},
					{
						from:"me-no-bg",
						body:<EmojiLg><span role="img" aria-label="money fly emoji">💸</span></EmojiLg>
					},
					{
						from:"them",
						body:<span>But this our planet we're talking about.
						</span>
					},
					{
						from:"them",
						body:<span>$200 is a small price to pay if it means saving our planet
						</span>
					},
					{
						from:"me",
						body:<span>Wait, How do you even know it's going to save our planet?
						</span>
					},
					{
						from:"me",
						body:<span>Apparently{' '}
							<Citation data={CitationsMaster.CarbonTaxNotEffective}>carbon tax only reduces emissions by 2%</Citation>.
						</span>
					},
					{
						from: "them",
						body:"It depends how you look at it."
					},
					{
						from:"them",
						body:<span>
							I mean
							<Citation data={CitationsMaster.CarbonTaxIsEffective}>
								27 Nobel Laureate economists released a statement saying that a Carbon tax
								is the most effective way of lowering emissions
							</Citation>.
						</span>
					},
					{
						from: "me",
						body:"Wait isn't that just an appeal to authority? That's a logical fallacy!"
					},
					{
						from: "them",
						body:"I see what you mean but I think, it's an indication that very smart people have studied this."
					},
					{
						from: "them",
						body:"And realized that this is one of the best options we have to save the Earth."
					},
					{
						from:"them-no-bg",
						body:<span>Earth has entered the conversation</span>
					},
					{
						from:"them-no-bg",
						body:<EmojiLg><span role="img" aria-label="earth emoji">🌏</span></EmojiLg>
					},

				]
			}
		},
		...energyClimatePlatforms,
  ]
};
export default () => (<PropPageBuilder data={Data}/>);
