import React from 'react'
import PageBuilder from 'components/page-blocks/aggregators/PageBuilder'
import LandingPage from "../../scenes/LandingPage/LandingPage";
import { SEO_META } from '../../data/Constants';


let Data = {
	pageId:"home-page",
	meta: {
        canonicalUrl:`${SEO_META.url}`,
        documentTitle: SEO_META.description,
        socialHeadline: SEO_META.headline,
        socialDescription: SEO_META.description,
        socialImage: SEO_META.image,
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
