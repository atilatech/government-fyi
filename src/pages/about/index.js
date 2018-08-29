import React from 'react'
import styled from 'styled-components'
import PageBuilder from 'components/page-blocks/aggregators/PageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import PageTitleBlock from 'components/page-blocks/blocks/PageTitleBlock'
import ImgAndText2Block from 'components/page-blocks/blocks/ImgAndText2Block'

import conciseImg from './images/concise.svg'
import nonpartisanImg from './images/nonpartisan.svg'
import toolImg from './images/tool.svg'

const Data = {
	pageId: "about-page",
	meta: {
		canonicalUrl:"https://www.ballot.fyi/about/",
		documentTitle:"About | ballot.fyi",
		socialHeadline:"We make you smart, at least for voting",
		socialDescription:"By breaking down all the state propositions for this November",
		socialImage:"general.png",
	},
	blocks: [
    {
    	id: "000",
    	component: PageTitleBlock,
    	data: {
    		title: "We're three things",
    	}
    },
    {
      id:"010",
      component: ImgAndText2Block,
      data: {
        image: nonpartisanImg,
        alt: "Venn diagram of a debate and politifact",
        title: "nonpartisan",
        flipped: true,
        body: <span>BALLOT.FYI is a side project of a few folks who are tired of last-minute voting the way a pamphlet tells us to, godamnnit. We will not give you a recommendation. We will give you facts about the propositions, concisely, so you can make your own conclusion. We are 100% organic, independent of any organization or group. We have not and will not accept any money or favors. The only thing that may sway us is facts. Please send electronically: fax@ballot.fyi and include your sources.</span>
      }
    },
    {
      id:"020",
      component: ImgAndText2Block,
      data: {
        image: conciseImg,
        alt: "Venn diagram of CliffsNotes and Wikipedia",
        title: "concise",
        body: <span>We've read the full text of the propositions, the official arguments of both sides, opinion articles, and most "non-partisan" sources, so we could give you these brief and comprehensive digests of the propositions. We know you don't have a lot of time. These are real issues that affect real people (except Prop 59), and we hope that these summaries either get you interested enough to read more, or give you enough information to make you feel like you can make an informed decision.</span>,
      }
    },
    {
      id:"030",
      component: ImgAndText2Block,
      data: {
        image: toolImg,
        title: "a tool",
        flipped: true,
        alt: "Venn diagram of The more you know and you'll never guess what",
        body: "We want you to feel empowered on Election Day, and we want you to give you ammo to make your own decisions. We also hope that you'll want your friends to feel empowered as well, because this site has no other purpose than to provide useful information, and giving your friends more information is the most important thing you can do this election.",
      }
    },
    {
      id:"040",
      component: TextWithTitleBlock,
      data: {
        title: "About Amir & Erica",
        text: <span>Citizen & Citizens was created by Jimmy Chion, an artist and engineer, with the help and balance of many friends. We were tired of only seeing dry, dense information about the issues, or highly partisan voter guides. We strive for presenting a middle view. But because we're all human, and despite our best efforts, BALLOT.FYI is not without bias. I mean, most of us live in San Francisco for God's sake. What makes this site different from the rest (because it's hard to do!) is its concise, nonpartisan presentation of the facts. So please check us and send suggestions, corrections, facts to fax@ballot.fyi</span>,
        nColWidth: 8,
      }
    },
  ]
}

export default () => (<PageBuilder data={Data}/>);
