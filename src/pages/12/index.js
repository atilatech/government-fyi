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
					Prop  12 would set minimum space requirements for egg-laying hens, pigs, and baby cows, and ban the sales of meat and eggs from farmers that aren’t in compliance, even if they’re based outside of CA. <Citation data={Citations['12']}>Prop 12 would also require all egg-laying hens to be literally cage-free by 2022. </Citation> <br/>
					<br/>It’s a lot to take in, but we want to make sure you’re eggstra knowledgeable on this meaty proposition so you’ll be able to eggsplain it to all of your seggsy friends.
				</span>
	    }
		},
    {
    	component: TextWithTitleBlock,
    	data: {
    		title: "How did we get here?",
    		text:
				<span>
					The origins of Prop 12 actually began a decade ago with Prop 2. <Citation data={Citations['1']}>In 2008, we passed Prop 2 which said animals sold for meat and eggs must be able "to lie down, stand up, fully extend their limbs and turn around."</Citation> The policy was later expanded to include all eggs sold in CA, regardless of where they were laid.
					<br/><br/>
					Farmers were pissed. Some of the reasons they've been fighting Prop 2 are relevant to Prop 12 today. They claimed Prop 2 was:
					<ul>
						<li><b>unconstitutional</b> – It required out-of-state farmers selling eggs in CA to comply with its policies. Just last year, 13 states filed a lawsuit to repeal Prop 2 with the US Supreme Court. <Citation data={Citations['2']}> Last year, 13 states filed a suit with the US Supreme Court to repeal it.</Citation></li>
						<li><b>too vague</b> – and therefore unenforceable. <Citation data={Citations['6']}>A salty judge disagreed</Citation>, and California did eventually land on a number for hens: <Citation data={Citations['5']}>116 square inches.</Citation></li>
						<li><b>expensive</b> – <Citation data={Citations['7']}>It cost CA farmers several hundred million to convert their hen housing systems</Citation>, but <Citation data={Citations['8']}>it seems they would have done that anyway because of salmonella outbreaks</Citation> and <Citation data={Citations['9']}>shifting public opinion.</Citation></li>
						<li><b>hurtful to production</b> – <Citation data={Citations['14']}>By 2016, academics estimated say egg production dropped by 35%</Citation>, and <Citation data={Citations['10']}>prices rose by 33%.</Citation></li>
						<li><b>ineffective</b> - Because the law didn't specify an enforcing authority, it fell on localities to enforce the law, and surprise <span role="img" aria-label="surprise">🎉</span>, it didn’t happen. <Citation data={Citations['13']}>The LA Times says two-thirds of hens are still in cages, </Citation> <Citation data={Citations['16']}>perhaps just less cramped than before.</Citation></li>
					</ul>
					Despite these grievances, advocates say Prop 2 followed the tide of public opinion, and it resulted in cleaner and more humanely-raised food. Supporters also say it spurred <Citation data={Citations['3']}>many corporations like McDonald’s, Costco, and Walmart to pledge to sell cage-free eggs for the next 5-10 years.</Citation>
				</span>
			}
		},
		{
			component: TextWithTitleBlock,
			data: {
				title: "So how's Prop 12 different?",
				text:
				<span>
					For starters, Prop 12 sets specific space requirements and actually <Citation data={Citations['17']}>deems the CA Department of Food and Agriculture responsible for enforcing the law. This additional oversight is estimated to cost the state $10M annually.</Citation>
					<br/><br/>
					<Citation data={Citations['18']}>Prop 12 also outlines that egg-laying hens must be legitimately cage-free by 2022. This means farmers have to allocate 1 to 1.5 sq. feet per hen, and allow hens to freely move around inside a building.</Citation>
					<br/><br/>
					{/* <Acronym data={Acronyms.HSUS}/>, the authors of both Prop 2 <em>and</em> 12, say they want to... */}
				</span>
			}
		},
		{
			component: SectionTitleBlock,
			data: {
				title: "How much space do farm animals have?",
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
				caption: <span>We were curious what Prop 12's floor space requirements actually looked like relative to animals, so we hired some models on the internet for a photoshoot. From left to right, Prop 12 would ban the sale of: eggs from chickens living in less than 1 ft<sup>2</sup>, veal from cows raised in areas smaller than 43 ft<sup>2</sup>, and pork from pigs raised in areas smaller than 24 ft<sup>2</sup>.</span>,
				attribution:<span>(Art by David Goligorsky)<sup>3</sup></span>
			}
		},
		{
			component: TextWithTitleBlock,
			data: {
				title: "What are haters saying?",
				text:
				<span>
					Prop 12 opponents criticize Prop 12 for all the same reasons (except "too vague") they criticized Prop 2.
					<br/><br/>
					<Citation data={Citations['19']}> <Acronym data={Acronyms.PETA}/> (of all people!) argue Prop 2 never led to cage-free hens, and criticize Prop 12 for allowing these poor conditions to continue until 2022.</Citation> <Citation data={Citations['20']}>Ironically, other Prop 12 critics say it's not enough time for farmers and sellers to transition to the requirements, which will only increase retail costs for consumers.</Citation>
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
						subsectionTitle: "Yes on Prop 12",
						links: [
							{
								text: "Monterey Herald Editorial Board",
								url: "http://www.montereyherald.com/opinion/20180908/editorial-california-voters-should-approve-props-11-and-12"
							},
							{
								text: "San Jose Mercury News & East Bay Times Editorial Boards",
								url: "https://www.mercurynews.com/2018/09/01/editorial-prop-12/?clearUserState=true"
							},
						]
					},
					{
						subsectionTitle:"No on Prop 12",
						links: [
							{
								text: "SF Chronicle Editorial Board",
								url: "https://www.sfchronicle.com/opinion/editorials/article/Editorial-The-Chronicle-recommends-no-on-13248637.php"
							},
							{
								text: "Press Democrat Editorial Board",
								url: "https://www.pressdemocrat.com/opinion/8735947-181/pd-editorial-no-on-prop?sba=AAS"
							},
							{
								text: "Peninsula Humane Society & SPCA",
								url: "https://peninsulahumanesociety.org/proposition-12/",
							},
							{
								text: "PETA",
								url: "https://www.peta.org/blog/why-we-oppose-californias-farmed-animal-initiative-and-you-should-too/",
							},
							{
								text: "Humane Farming Association",
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
								text: "Legal text of proposition",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/topl.pdf#Prop12"
							},
							{
								text: "Ballotpedia",
								url:"https://ballotpedia.org/California_Proposition_12,_Farm_Animal_Confinement_Initiative_(2018)"
							},
						]
					}
				]
			}
		}
  ]
}
export default () => (<PropPageBuilder data={Data}/>);
