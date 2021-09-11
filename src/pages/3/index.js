import React from 'react'
import PropPageBuilder from '../../components/page-blocks/aggregators/PropPageBuilder'
import SectionTitleBlock from '../../components/page-blocks/blocks/SectionTitleBlock'
import IMessageBlock from '../../components/page-blocks/blocks/IMessageBlock'
import ResultBlock from '../../components/page-blocks/blocks/ResultBlock'
import {PropMetaData} from '../../pages/prop-attributes'


import PartyPlatformBlock from "../../components/page-blocks/blocks/PartyPlatformBlock";
import {
	ENERGY_CLIMATE_CARBON_TAX_CONVERSATION,
	ENERGY_CLIMATE_PLATFORMS
} from "../../data/PartyPlatformDataEnergyClimate";
import { CREATION_DATE } from '../../data/Constants'

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
		dateCreated: new Date(CREATION_DATE),
		dateModified: new Date(CREATION_DATE)
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
				messages: ENERGY_CLIMATE_CARBON_TAX_CONVERSATION,
			}
		},
		...energyClimatePlatforms,
  ]
};
export default () => (<PropPageBuilder data={Data}/>);
