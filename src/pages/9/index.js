import React from 'react'
import PropPageBuilder from 'components/page-blocks/aggregators/PropPageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import LinksBlock from 'components/page-blocks/blocks/LinksBlock'
import SectionTitleBlock from 'components/page-blocks/blocks/SectionTitleBlock'
// import IMessageBlock from 'components/page-blocks/blocks/IMessageBlock'
import ImgBlock from 'components/page-blocks/blocks/ImgBlock'

import Citation from 'components/interactive/citation/citation'
// import Acronym from 'components/interactive/acronym'
import { Citations} from './expandables'
import Cal3Img from './images/ca.png'
import Cal3Img_w from './images/ca.webp'
import Cal3Img_2x from './images/ca@2x.png'
import Cal3Img_2x_w from './images/ca@2x.webp'

const Data = {
	pageId:"prop-9",
	propNum: 9,
	meta: {
		dateCreated: new Date('October 8, 2018 10:00:00'),
		dateModified: new Date('October 8, 2018 10:00:00')
	},
	blocks: [
    {
    	component: TextWithTitleBlock,
    	data: {
    		title: "You can't vote on this",
    		text: <span><b>You can't vote on Prop 9</b>, for now. <Citation data={Citations['1']}>The CA Supreme Court removed it from the 2018 ballot due to a lawsuit that questioned its validity.</Citation> Depending on the outcome, you may be able to vote on it in 2020 though. <span role="img" aria-label="grinning with sweat emoji">😅</span></span>,
    	},
    },
    {
    	component: TextWithTitleBlock,
    	data: {
    		title: "Do tell",
    		text: <span>We won't get into it too deeply, but if Prop 9 passed it would have directed the Governor to ask Congress to split CA into three states. If Congress approved, the CA legislature would then have to go about splitting up the state.</span>,
    	},
    },
		{
			component: ImgBlock,
			data: {
				src: {
					_1x: Cal3Img,
					_1x_webp: Cal3Img_w,
					_2x: Cal3Img_2x,
					_2x_webp: Cal3Img_2x_w
				},
				nColWidth: 4,
				alt: "Map of Cal3's proposed split of California",
				caption:"The ballot initiative would have allowed each new state to choose their own name."
			}
		},
		{
			component: TextWithTitleBlock,
			data: {
			title: "WHYYYYY?",
				text: <span>
					Billionaire Tim Draper, the main force behind this initiative, <Citation data={Citations['2']}>says that California is too large to govern. It has high costs but poorly implemented social services.
					</Citation>
					<br/><br/>
					<Citation data={Citations['3']}>Others suspect Prop 9 was a political move. If we had divvied up CA, the US would have 52 states, which would four new US senators to Congress. Northern California and California, which house SF and LA, would most likely swing left, giving Democrats an advantage in national politics.</Citation>
				</span>,
			},
		},
		// {
		// 	component: IMessageBlock,
		// 	data:{
		// 		messages: [
		// 			{
		// 				from: 'me',
		// 				body: "Be there in 5"
		// 			},
		// 			{
		// 				from: 'them',
		// 				body: "Almost ready. Did you remember your Vive?"
		// 			},
		// 			{
		// 				from: 'me',
		// 				body: "Of course. And I've brought "
		// 			},
		// 			{
		// 				from: 'them',
		// 				body: "Great question, Jimmy! You can learn more at gavinnewsom.com."
		// 			},
		// 		]
		// 	}
		// },
		{
			component: SectionTitleBlock,
			data:{
				title: "More reading"
			}
		},
		{
			component: LinksBlock,
			data: {
				subsections:[
					{
						subsectionTitle: "News coverage",
						links: [
							{
								text:"LA Times: Radical plan to split California into three states earns spot on November ballot",
								url:"http://www.latimes.com/politics/la-pol-ca-california-split-three-states-20180612-story.html"
							},
							{
								text:"A poll in April showed low support for Cal-3",
								url:"http://www.surveyusa.com/client/PollReport.aspx?g=e60651f4-03ad-4a80-9b0d-09bc68bbdc74"
							},
							{
								text: "Ballotpedia",
								url:"https://ballotpedia.org/California_Proposition_9,_Three_States_Initiative_(2018)"
							}
						]
					},
					{
						subsectionTitle: "Opinions, in case you wanted some",
						links: [
							{
								text:"Don't believe the naysayers. California isn't too big, too depopulated or too ungovernable",
								url:"http://www.latimes.com/opinion/op-ed/la-oe-rarick-california-is-governable-20180816-story.html"
							},
							{
								text: "Gambling on a California split has its allure, but it's too much hassle — and a 'real threat'",
								url:"http://www.latimes.com/politics/la-pol-ca-skelton-california-three-states-proposal-20180618-story.html"
							},
							{
								text: "Tim Draper's Cal 3 initiative is so awful, it gives direct democracy a bad name",
								url:"http://www.latimes.com/opinion/op-ed/la-oe-ulin-cal-3-initiative-20180704-story.html"
							}
						]
					}
				]
			}
		}
  ]
}
export default () => (<PropPageBuilder data={Data}/>);
