import React from 'react'
import PropPageBuilder from '../../components/page-blocks/aggregators/PropPageBuilder'
import ResultBlock from '../../components/page-blocks/blocks/ResultBlock'

import CustomBlock from "../../components/page-blocks/blocks/CustomBlock";
import {Link} from "react-router-dom";
import { CONTRIBUTION_INSTRUCTIONS_LINK, CREATION_DATE } from '../../data/Constants'

const Data = {
	pageId:"immigration",
	propNum: 6,
	meta: {
		dateCreated: new Date(CREATION_DATE),
		dateModified: new Date(CREATION_DATE)
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
			component: CustomBlock,
			data: {
				body: <div>
						<h1>Party Platform information has not been added yet
						</h1>
					<h2>
						If you know some you can <a href={CONTRIBUTION_INSTRUCTIONS_LINK} target="_blank" rel="noopener noreferrer">
							contribute policy information here</a>.
					</h2>
				</div>
			}
		},
		// TODO add 2021 immigration plattforms or include 
		// ...partyPlatforms,
	]
};
export default () => (<PropPageBuilder data={Data}/>);
