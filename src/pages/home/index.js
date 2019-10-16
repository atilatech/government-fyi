import React from 'react'
// import styled from 'styled-components'
import PageBuilder from 'components/page-blocks/aggregators/PageBuilder'
// import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import PropSection from 'components/page-blocks/sections/PropSection'
import LandingPage from "../../scenes/LandingPage/LandingPage";
// import {Link} from 'react-router-dom'
// import CAImg from './images/ca.png'
// import {Button} from 'pages/about'
//
// const Attrib = styled.h3`
//   display: block;
//   font-size: 11px;
//   color: #999;
//   margin-bottom: 20px
//   text-align: center;
// `


let Data = {
	pageId:"home-page",
	meta: {
		canonicalUrl:"https://ourgovernment.fyi/",
		documentTitle:"Canadian Federal Elections 2019 – a simple nonpartisan guide",
		socialHeadline:"The simples nonpartisan voter guide for the Canadian federal elections",
		socialDescription:"A nonpartisan guide to Canada's Federal elections, including taxes, environment, housing",
		socialImage:"general.png",
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
