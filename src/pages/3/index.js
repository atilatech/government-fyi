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
		dateCreated: new Date('October 8, 2018 10:00:00'),
		dateModified: new Date('November 7, 2018 14:10:00')
	},
	blocks: [
		{
			component: ResultBlock,
			data: {
				result: PropMetaData(1).result,
				title: "What's the Key Point?",
				text: <span>
					Our climate is getting warmer.
					One of the ways to fix this is by introducing a Carbon tax.
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
							Hey so, apparently oil is
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
						body:<span>But if you don't
							<Citation data={Citations['8']}>[tk add reasons why global warming is bad]</Citation>
						</span>
					},
					{
						from:"me",
						body:<span>Wait, I thought some people said that.
							Carbon taxes won't even make a difference. {' '}
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
		{
			component: SectionTitleBlock,
			data:{
				title: "A typical IM convo",
				nColWidth: 6,
			}
		},
		{
			component: IMessageBlock,
			data: {
				messages: [
					{
						from: "them",
						body:"Drought, wildfires, earthquakes, CA is F'd"
					},
					{
						from: "me",
						body:"Chillll. Did you read about Prop 3?"
					},
					{
						from: "them",
						body:<span>Yea who paid for this one? <span role="img" aria-label="eyes rolling up">🙄</span></span>
					},
					{
						from:"me",
						body:"Lots of agribusinesses (Yes, that's a word)"
					},
					{
						from: "them-no-bg",
						body:<EmojiLg><span role="img" aria-label="nerd glasses emoji">🤓</span></EmojiLg>
							},
					{
						from:"me",
						body:<span>Some are calling it "pay to play", like farmers paying for Prop 3 to get their canal fixed.<Citation data={Citations['9']}>Did you see that it doesn't go through CA's annual budgetary process either.</Citation> Kinda sketch.</span>
					},
					{
						from: "them",
						body:<Citation data={Citations['11']}>Yea, but the prop requires an independent spending audit every three years.</Citation>
					},
					{
						from:"them",
						body:"And doesn't that Friant-Kern canal need fixing? The Oroville dam definitely does."
					},
					{
						from:"me",
						body:<Citation data={Citations['10']}>Why do I have to pay for a canal in central valley?</Citation>
					},
										{
						from:"them",
						body:"People pay for things that don't directly affect them all the time."
					},
					{
						from:"them",
						body:"I mean, clean drinking water is important"
					},
					{
						from:"me",
						body:<Citation data={Citations['10']}>Yea, but usually people who use the resource pay for its repair, not all of CA.</Citation>
					},
					{
						from:"me",
						body:<Citation data={Citations['8']}>Prop 3 authors: “Typically, in polling usually what polls well is safe drinking water, clean water in rivers and streams and water supply that’s resistant to drought".</Citation>
					},
					{
						from: "them",
						body:"You know what else polls well?"
					},
					{
						from:"me",
						body:"Covfefe?"
					},

				]
			}
		},
		{
			component: LinksBlock,
			data: {
				subsections:[
					{
						subsectionTitle: "Yes on Prop 3",
						links: [
							{
								text: "Fresno Bee Editorial Board",
								url: "https://www.fresnobee.com/opinion/editorials/article217097890.html"
							},
							{
								text: "The Press Democrat Editorial Board",
								url: "https://www.pressdemocrat.com/opinion/8803779-181/yes-on-prop-3-protecting"
							},
							{
								text: "Op-ed: Prop 3 will clean drinking water",
								url: "https://www.sfchronicle.com/opinion/openforum/article/California-Prop-3-vote-yes-to-pay-for-13273251.php"
							},
							{
								text: "Op-ed: Prop 3 will provide clean, safe, reliable water",
								url: "https://www.mercurynews.com/2018/09/14/opinion-prop-3-will-provide-clean-safe-reliable-water/"
							},
						]
					},
					{
						subsectionTitle: "No on Prop 3",
						links: [
							{
								text:"SF Chronicle Editorial Board",
								url:"https://www.sfchronicle.com/opinion/editorials/article/Chronicle-recommends-No-on-state-Prop-3-13211167.php"
							},
							{
								text: "San Diego Union-Tribune Editorial Board",
								url: "http://www.sandiegouniontribune.com/opinion/endorsements/sd-proposition-3-water-bond-20180911-story.html",
							},
							{
								text: "Mercury News & East Bay Times Editorial Board",
								url: "https://www.mercurynews.com/2018/09/19/editorial-reject-prop-3-8-9-billion-pay-to-play-water-bond/",
							},
							{
								text: "Santa Cruz Sentinel Editorial Board",
								url: "http://www.santacruzsentinel.com/opinion/20180918/editorial-vote-no-on-water-bond-prop-3-yes-on-prop-4-childrens-hospitals",
							},
							{
								text:"Desert Sun Editorial Board",
								url:"https://www.desertsun.com/story/opinion/editorials/2018/10/09/california-voters-reject-8-9-billion-proposition-3-giveaway-desert-sun-editorial-board-endorsement/1578538002/"
							},
							{
								text:"CA Sierra Club",
								url:"https://www.sierraclub.org/sites/www.sierraclub.org/files/sce/sierra-club-california/PDFs/FactSheet_Proposition3_Opposition-July18.pdf"
							},
						]
					},
					{
						subsectionTitle: "Related coverage",
						links: [
							{
								text:"Officials kick off Prop. 3 campaign",
								url:"https://hanfordsentinel.com/news/local/officials-kick-off-prop-campaign/article_4b04e7e1-89d7-5c2d-ac28-6e0cd60d7798.html"
							},
														{
								text:"Valadao, Costa, other Valley leaders rally in support of California water ballot prop",
								url:"https://www.fresnobee.com/news/politics-government/election/local-election/article218738990.html"
							},
						]
					},
					{
						subsectionTitle: "Impartial analyses",
						links: [
							{
								text: "Legislative Analyst's Office report",
								url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=3&year=2018",
							},
							{
								text: "Official voter guide digest",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/prop3-title-summ-analysis.pdf"
							},
							{
								text: "Legal text of proposition",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/topl.pdf#Prop3"
							},
							{
								text: "Ballotpedia",
								url:"https://ballotpedia.org/California_Proposition_3,_Water_Infrastructure_and_Watershed_Conservation_Bond_Initiative_(2018)"
							},
						]
					}
				]
			}
		}
  ]
};
export default () => (<PropPageBuilder data={Data}/>);
