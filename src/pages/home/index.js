import React from 'react'
import PageBuilder from 'components/page-blocks/aggregators/PageBuilder'
import LandingPage from "../../scenes/LandingPage/LandingPage";

let Data = {
	pageId:"home-page",
	meta: {
		canonicalUrl:"https://ourgovernment.fyi/",
		documentTitle:"Canadian Federal Elections 2019 – a simple nonpartisan guide",
		socialHeadline:"The simples nonpartisan voter guide for the Canadian federal elections",
		socialDescription:"A nonpartisan guide to Canada's Federal elections, including taxes, environment, housing",
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
