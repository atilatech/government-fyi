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
		dateCreated: new Date('October 8, 2018 10:00:00'),
		dateModified: new Date('October 8, 2018 10:00:00')
	},
	blocks: [
    {
    	component: TextWithTitleBlock,
    	data: {
    		text:
				<span>
					Prop 12 would set minimum space requirements for egg-laying hens, pigs, and baby cows. It would ban the sales of meat and eggs from animals that aren't in compliance, even if they're raised outside California. <Citation data={Citations['12']}>In addition, Prop 12 would require that all egg-laying hens be (literally) cage-free by 2022.</Citation>
					<br/><br/>
					Prop 12 has some surprising opponents, with a dizzying variety of reasons for why they don't want it to pass.
					<br/><br/>
					If you eat anything that contains eggs, or you care about how your meat was farmed, this proposition will affect you.
				</span>
	    }
		},
    {
    	component: TextWithTitleBlock,
    	data: {
    		title: "Prop 12 is the new Prop 2",
    		text:
				<span>
					A decade ago, we passed Prop 2, written by the Humane Society of the US (HSUS), the same authors of this election's Prop 12. <Citation data={Citations['1']}>With its passage, Prop 2 banned the confinement of animals sold for meat and eggs that don't have enough space "to lie down, stand up, fully extend their limbs and turn around."</Citation> Soon afterwards, legislation passed that applied Prop 2 to all eggs sold in CA, regardless of where they were laid.
					<br/><br/>
					We've compiled a list of ways Prop 2 haters have been hating on Prop 2 since 2008.
					<ul>
						<li>It's <b>unconstitutional</b> – because it violates the interstate commerce clause by requiring other states that sell eggs in California to comply. <Citation data={Citations['2']}> 13 states have filed a suit with the US Supreme Court to argue this.</Citation></li>
						<li>It's <b>too vague</b> – and therefore unenforceable. <Citation data={Citations['6']}>A salty judge disagreed</Citation>, and California did eventually land on a number for hens: <Citation data={Citations['5']}>116 square inches.</Citation></li>
						<li>It <b>cost farmers a lot</b> – <Citation data={Citations['7']}>It cost all CA farmers several hundred million to convert out of battery cages</Citation>, but <Citation data={Citations['8']}>it seems they would have done that anyway because of salmonella outbreaks</Citation> and <Citation data={Citations['9']}>shifting public opinion.</Citation></li>
						<li>It <b>raised egg prices, hurt production</b> – <Citation data={Citations['14']}>Some estimates say egg production dropped by 35%</Citation>, and <Citation data={Citations['10']}>prices rose by 33%.</Citation> <Citation data={Citations['11']}>One analyst says it spiked in 2008, and has since gone back down.</Citation> </li>
						<li>It <b>didn't do enough</b> - because the law didn't specify an enforcing authority, it fell on localities. <Citation data={Citations['13']}>The LA Times says two-thirds of hens are still in cages, </Citation> <Citation data={Citations['16']}>perhaps just less crowded than before to comply with Prop 2</Citation>.</li>
					</ul>
					Of course, Prop 2 did have its proponents.
					<br/><br/>
					<Citation data={Citations['15']}>Most companies</Citation>, <Citation data={Citations['3']}>including McDonald’s, Target, Starbuck, Safeway, Costco, and Walmart, have all set policy to transition to sellings cage-free eggs in their products within the next 5-10 years</Citation>
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
				caption: <span>We were curious what Prop 12's floor space requirements actually looked like relative to animals, so we hired some models on the internet for a photoshoot. Left to right: a chicken in 1 ft<sup>2</sup>, an average-sized five-month old calf in 43 ft<sup>2</sup>, and a six-month old breeding pig in 24 ft<sup>2</sup>.</span>,
				attribution:<span>(Art by David Goligorsky)<sup>3</sup></span>
			}
		},
		{
			component: TextWithTitleBlock,
			data: {
				title: "So what does Prop 12 do differently?",
				text: <span>Prop 12 sets specific sizes and <Citation data={Citations['17']}>names the California Department of Food and Agriculture responsible for its enforcement. This additional oversight is estimated to cost the state $10M annually.</Citation>
					<br/><br/>
					Specifically, Prop 12 bans the sales of
					<ul>
						<li>Eggs from hens raised in areas smaller than 1 sq. ft.</li>
						<li>Veal from cows raised in areas smaller than 43 sq. ft.</li>
						<li>Pork from pigs raised in areas smaller than 24 sq. ft.</li>
					</ul>
					By 2022, the state must adopt the United Egg Producers' guidelines for cage-free: <Citation data={Citations['18']}>egg-laying hens must be (actually) cage-free, which includes housing systems that have 1 to 1.5 square feet per hen and allow hens to move around inside a building.</Citation>
					<br/><br/>
					Opponents for Prop 12 criticize it for many of the same reasons Prop 2 was criticized (except for "it's too vague")
				</span>
			}
    },
		{
			component: TextWithTitleBlock,
			data: {
				title: "Why does PETA disagree?",
				text:
				<span>
					<Citation data={Citations['19']}><Acronym data={Acronyms.PETA}/> says that Prop 2 didn’t really lead to cage-free eggs, and Prop 12 allows these harsh conditions to legally continue until 2022.</Citation> In other words, <Acronym data={Acronyms.PETA}/> says it will take too long.
					<br/><br/>
					Other dissenters say it's not enough time for farmers and sellers to transition. <Citation data={Citations['20']}>In a way, <Acronym data={Acronyms.HSUS}/> would be breaking their agreement with the many corporations who have pledged to go cage-free in 5-10 years, forcing them to go cage-free early.</Citation>
					<br/><br/>
					<Citation data={Citations['21']}>We know it's a lot to take in, but to many, it's a tender subject. Now that you're eggstra knowledgeable on this meaty proposition, we hope you might be able to eggsplain it to all your seggsy friends.</Citation>
				</span>
			}
		},
		{
			component: SectionTitleBlock,
			data: {
				title: "More reading",
			},
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
						subsectionTitle:"Arguments against",
						links: [
							{
								text: "SF Chronicle Editorial Board",
								url: "https://www.sfchronicle.com/opinion/editorials/article/Editorial-The-Chronicle-recommends-no-on-13248637.php"
							},
							{
								text: "Press Democrat Editorial Board",
								url: "https://www.pressdemocrat.com/opinion/8735947-181/pd-editorial-no-on-prop?sba=AAS"
							}
						]
					},
					{
						subsectionTitle: "Statements from interest groups",
						links: [
							{
								text: "Peninsula Humane Society & SPCA say no",
								url: "https://peninsulahumanesociety.org/proposition-12/",
							},
							{
								text: "PETA says no",
								url: "https://www.peta.org/blog/why-we-oppose-californias-farmed-animal-initiative-and-you-should-too/",
							},
							{
								text: "Humane Farming Association say no",
								url: "https://www.hfa.org/",
							},
						]
					},
					{
						subsectionTitle: "Impartial analyses",
						links: [
							{
								text: "Legislative Analyst's Office analysis",
								url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=12&year=2018",
							},
							{
								text: "Official voter guide digest",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/prop12-title-summ-analysis.pdf"
							},
							{
								text: "Ballotpedia",
								url:"https://ballotpedia.org/California_Proposition_12,_Farm_Animal_Confinement_Initiative_(2018)"
							},
							{
								text: "Legal text of proposition",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/topl.pdf#Prop12"
							}
						]
					}
				]
			}
		}
  ]
}
export default () => (<PropPageBuilder data={Data}/>);
