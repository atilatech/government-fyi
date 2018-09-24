import React from 'react'
import PropPageBuilder from 'components/page-blocks/aggregators/PropPageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import LinksBlock from 'components/page-blocks/blocks/LinksBlock'
import SectionTitleBlock from 'components/page-blocks/blocks/SectionTitleBlock'
import DonutGraphBlock from 'components/page-blocks/blocks/DonutGraphBlock'
import IMessageBlock from 'components/page-blocks/blocks/IMessageBlock'

import Citation from 'components/interactive/citation/citation'
import Acronym from 'components/interactive/acronym'
import {Acronyms, Citations} from './expandables'

const Data = {
	pageId:"prop-3",
	propNum: 3,
	meta: {
		dateCreated: new Date('October 8, 2018 10:00:00'),
		dateModified: new Date('October 8, 2018 10:00:00')
	},
	blocks: [
    {
    	component: TextWithTitleBlock,
    	data: {
    		text: <span>
					Prop 3 would issue $8.9B in general obligation bonds for water projects throughout California. <Citation data={Citations['5']}>Yes, we just passed a water bond in June, but that one was placed on the ballot by the state legislature. Prop 3 is voter-initiated. Its opponents say that this is the main reason to vote no – it funds projects of those who gave money to its campaign.</Citation> <Citation data={Citations['4']}>Supporters of Prop 3 say Prop 68 focused on water problems of the coastal, urban Democrat, whereas Prop 3 focuses on inland California.</Citation>
					<br/><br/>
					Separate from the bond, Prop 3 would also divert part of the revenue from Cap and Trade to four water agencies that have higher electricty bills as a result of Cap and Trade. <Citation data={Citations['7']}>The four agencies would receive an amount equal to the additional electricity costs, but would have to use it on activities such as water conservation programs.</Citation>
				</span>,
    	},
    },
    {
    	component: TextWithTitleBlock,
    	data: {
    		title: "Where the money is coming from",
    		text: <span>
					About $3.4M has been contributed so far to campaigns supporting Prop 3. <Citation data={Citations['1']}>A majority of the donors come from agriculture and conservation.</Citation> Some of the biggest contributors include Ducks Unlimited (a hunter-conservationist organization), California Waterfowl Association, California Wildlife Foundation, and American Pistachio Growers.
					<br/><br/>
					Notable contributors include Land O' Lakes (based in Minnesota) and Wonderful Orchards. <Citation data={Citations['2']}>If you haven't heard of The Wonderful Company, you probably know some of their products: Cuties (Halos, nowadays), FIJI water, POM juice. Wonderful's owners are billionaire farmers of almonds, citrus, and grapes, and whose farm land sits in Kern County</Citation>, of which <Citation data={Citations['6']}>$750M of Prop 3 will go towards fixing a damaged canal that waters the region.</Citation>
				</span>,
    	},
    },
		{
			component: TextWithTitleBlock,
			data:{
				title: "Where the money is going",
				text: <span>Supporters of Prop 3 say that these projects, and water infrastructure in California needs this infusion of money. This includes conservation for forests, cleaning drinking water, protecting fish and wildlife habitats, water infrastructure upgrades, groundwater storage, and flood protection.</span>
			}
		},
		// {
		// 	component: DonutGraphBlock,
		// 	data:{
		// 		src:""
		// 	}
		// },
		{
			component: SectionTitleBlock,
			data:{
				title: "$8.9 billion",
				nColWidth: 6,
			}
		},
		{
			component: IMessageBlock,
			data: {
				messages: [
					{
						from: "them",
						body:"California's water is fucked"
					},
					{
						from: "them",
						body:"When it rains, we get wildfires. When it droughts, avocado prices skyrocket"
					},
					{
						from: "me",
						body:"Do you think Prop 3 would help?"
					},
					{
						from: "them",
						body:<span>Not sure. We just voted on another prop about water in June, but somebody said <Citation data={Citations['3']}>it was placed on the ballot to deter voters from Prop 3.</Citation></span>
					},
					{
						from: "me",
						body:"June's prop was from the legislature. This prop got on the ballot by gathering enough signatures from the public."
					},
					{
						from:"them",
						body:"Perfect. Who paid for this one"
					},
					{
						from:"me",
						body:"Lots in agriculture support it financially"
					},
					{
						from:"me",
						body:<span>Some oppose it because it's "pay to play", like farmers getting their canal fixed, and <Citation data={Citations['9']}>because it doesn't go through the annual budgetary process</Citation>, even though it's $17B in state debt.</span>
					},
					{
						from: "them",
						body:<Citation data={Citations['11']}>The prop does require an independent audit on spending every three years though.</Citation>
					},
					{
						from:"them",
						body:"And doesn't that canal need fixing? The Oroville dam definitely does."
					},
					{
						from:"me",
						body:<Citation data={Citations['10']}>Yea, but usually the users of the resource pay for its repair, not all of California.</Citation>
					},
					{
						from:"them",
						body:"Clean drinking water is important"
					},
					{
						from:"me",
						body:<Citation data={Citations['8']}>Prop 3's author said, “Typically, in polling usually what polls well is safe drinking water, clean water in rivers and streams and water supply that’s resistant to drought".</Citation>
					},
					{
						from: "them",
						body:"You gotta admit though, our water is fucked."
					}

				]
			}
		},
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
						subsectionTitle: "Arguments in favor",
						links: [
							{
								text: "Fresno Bee Editorial Board",
								url: "https://www.fresnobee.com/opinion/editorials/article217097890.html"
							},
							{
								text:"Article: Officials kick off Prop. 3 campaign",
								url:"https://hanfordsentinel.com/news/local/officials-kick-off-prop-campaign/article_4b04e7e1-89d7-5c2d-ac28-6e0cd60d7798.html"
							}
						]
					},
					{
						subsectionTitle: "Arguments against",
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
						]
					},
					{
						subsectionTitle: "Interest groups",
						links: [
							{
								text:"Sierra Club says no",
								url:"https://www.sierraclub.org/sites/www.sierraclub.org/files/sce/sierra-club-california/PDFs/FactSheet_Proposition3_Opposition-July18.pdf"
							},
							{
								text: "Statement from the author of Prop 3",
								url: "https://www.mercurynews.com/2018/09/14/opinion-prop-3-will-provide-clean-safe-reliable-water/"
							},

						]
					},
					{
						subsectionTitle: "Impartial analyses",
						links: [
							{
								text: "Legislative Analyst's Office analysis",
								url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=3&year=2018",
							},
							{
								text: "Official voter guide digest",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/prop3-title-summ-analysis.pdf"
							},
							{
								text: "Ballotpedia",
								url:"https://ballotpedia.org/California_Proposition_3,_Water_Infrastructure_and_Watershed_Conservation_Bond_Initiative_(2018)"
							},
							{
								text: "Legal text of proposition",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/topl.pdf#Prop3"
							}
						]
					}
				]
			}
		}
  ]
}
export default () => (<PropPageBuilder data={Data}/>);
