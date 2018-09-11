import React from 'react'
import PropPageBuilder from 'components/page-blocks/aggregators/PropPageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import SectionTitleBlock from 'components/page-blocks/blocks/SectionTitleBlock'
import LinksBlock from 'components/page-blocks/blocks/LinksBlock'
import ImgLateralBlock from 'components/page-blocks/blocks/ImgLateralBlock'

import Citation from 'components/interactive/citation/citation'
import Acronym from 'components/interactive/acronym'
import {Acronyms, Citations} from './expandables'

import HenImg from './images/hen.jpg'
import HenImg_w from './images/hen.webp'
import HenImg_2x from './images/hen@2x.jpg'
import HenImg_2x_w from './images/hen@2x.webp'
import CalfImg from './images/calf.jpg'
import CalfImg_w from './images/calf.webp'
import CalfImg_2x from './images/calf@2x.jpg'
import CalfImg_2x_w from './images/calf@2x.webp'
import PigImg from './images/pig.jpg'
import PigImg_w from './images/pig.webp'
import PigImg_2x from './images/pig@2x.jpg'
import PigImg_2x_w from './images/pig@2x.webp'

const Data = {
	pageId:"prop-12",
	propNum: 12,
	meta: {
		dateCreated: new Date('September 15, 2018 10:00:00'),
		dateModified: new Date('September 15, 2018 10:00:00')
	},
	blocks: [
    {
    	component: TextWithTitleBlock,
    	data: {
    		// title: "",
    		text: "Prop 12 would set minimum space requirements for farm-raised animals intended for food. It would ban the sales of meat and eggs from animals in square footages less than these requirements, even if they're raised outside California. In addition, Prop 12 would require that all egg-laying hens be cage-free by 2022. Opponents of Prop 12 say this will increase prices for consumers."
	    }
		},
    {
    	component: TextWithTitleBlock,
    	data: {
    		title: "But first, some history",
    		text: <span>A decade ago, we passed Prop 2, written by the same authors of Prop 12, the Human Society of US (HSUS). Prop 2 said that animals raised for meat must have enough space to "allow these animals to lie down, stand up, fully extend their limbs and turn around freely."
					<br/><br/>
					After it passed, cage-free eggs (which <Acronym data={Acronyms.btw}/> doesn't necessarily mean sans cage) became more readily available, and major food sellers like McDonalds, Safeway, Taco Bell, Starbucks, and Walmart committed to only buying cage-free eggs, starting a trend.
				</span>
			}
    },
    {
    	component: TextWithTitleBlock,
    	data: {
    		title: "If that passed, then why Prop 12?",
    		text: <span>Because of the vague requirements and because it was left to local law enforcement, Prop 2 has been difficult to enforce. As a result, the <Acronym data={Acronyms.HSUS}/> gathered enough signatures to put Prop 12 on this year's ballot, setting specific sizes and changing the enforcing department to the CA Dept of Public Health.
					<br/><br/>
					Specifically, Prop 12 bans the sales of
					<ul>
						<li>Eggs from hens raised in areas smaller than 144 square inches (currently 116in2)</li>
						<li>Veal from cows raised in areas smaller than 43 square feet</li>
						<li>Pork from pigs raised in areas smaller than 24 square feet</li>
					</ul>
					By 2022, egg-laying hens must be cage-free, which includes housing systems 1.0-1.5 square feet per hen and allow hens to move around inside a building.
				</span>
			}
    },
		{
			component: SectionTitleBlock,
			data: {
				title: "How big is a calf anyways?",
				nColWidth: 6
			}
		},
    {
    	component: ImgLateralBlock,
			data: {
				images: [
					{
						src: {
							_1x: HenImg,
							_1x_webp: HenImg_w,
							_2x: HenImg_2x,
							_2x_webp: HenImg_2x_w
						},
						alt: "A hen in 1 square foot. Art by David Goligorsky",
					},
					{
						src: {
							_1x: CalfImg,
							_1x_webp: CalfImg_w,
							_2x: CalfImg_2x,
							_2x_webp: CalfImg_2x_w
						},
						alt: "A calf in 43 sq. ft. Art by David Goligorsky",
					},
					{
						src: {
							_1x: PigImg,
							_1x_webp: PigImg_w,
							_2x: PigImg_2x,
							_2x_webp: PigImg_2x_w
						},
						alt: "A pig in 24 sq. ft. Art by David Goligorsky",
					},
				],
				caption: <span>We wanted to know what Prop 12's specific areas looked like relative to animals. Left to right: a chicken in 1 ft<sup>2</sup>, an average-sized five-month old veal calf in 43 ft<sup>2</sup>, and a six-month old breeding pig in 24 ft<sup>2</sup>. <br/>(Art by David Goligorsky)<sup>3</sup>.</span>
			}
    },
		{
			component: TextWithTitleBlock,
			data: {
				title: "Why does PETA disagree?",
				text: <span>Perhaps the most confusing part is who the proponents and opponents are.
				</span>
			}
		},
		{
			component: LinksBlock,
			data: {
				subsections:[
					{
						subsectionTitle: "Arguments in favor",
						links: [
							{
								text: "Monterey Herald Editorial Board",
								url: "http://www.montereyherald.com/opinion/20180908/editorial-california-voters-should-approve-props-11-and-12"
							},
							{
								text: "Mercury News & East Bay Times Editorial Boards",
								url: "https://www.mercurynews.com/2018/09/01/editorial-prop-12/?clearUserState=true"
							},
						]
					},
					{
						subsectionTitle: "Statements from interest groups",
						links: [
							{
								text: "Peninsula Humane Society & SPCA",
								url: "https://peninsulahumanesociety.org/proposition-12/",
							},
							{
								text: "Humane Farming Association",
								url: "https://www.hfa.org/",
							},
						]
					}
				]
			}
		}
  ]
}
export default () => (<PropPageBuilder data={Data}/>);
