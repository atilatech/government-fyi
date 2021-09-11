import React from 'react'
import PageBuilder from 'components/page-blocks/aggregators/PageBuilder'
import LandingPage from "../../scenes/LandingPage/LandingPage";
import { ELECTION_YEAR } from '../../data/Constants';

let Data = {
	pageId:"home-page",
	meta: {
		canonicalUrl:"https://ourgovernment.fyi/",
		documentTitle:`Canadian Federal Elections ${ELECTION_YEAR} – The simplest nonpartisan guide`,
		socialHeadline:"The simplest nonpartisan voter guide for the Canadian federal elections",
		socialDescription:"A nonpartisan guide to Canada's Federal elections, taxes, climate, education, and more",
		socialImage:"general-2.png",
	},
	blocks: [
		{
			component: LandingPage,
			data: {}
		}
  ]
};



export default () => (
	<PageBuilder data={Data}/>
);
