import React from 'react'
import {Link} from 'react-router-dom'
import PageBuilder from 'components/page-blocks/aggregators/PageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import PageTitleBlock from 'components/page-blocks/blocks/PageTitleBlock'
import ImgAndText2Block from 'components/page-blocks/blocks/ImgAndText2Block'
import conciseImg from './images/concise.svg'
import nonpartisanImg from './images/nonpartisan.svg'
import toolImg from './images/tool.svg'
import {Spacer} from 'layout/util'

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
    	component: PageTitleBlock,
    	data: {
    		title: "We do your election homework for you",
    	}
    },
    {
      component: ImgAndText2Block,
      data: {
        image: nonpartisanImg,
        alt: "Venn diagram of a debate and politifact",
        title: "nonpartisan",
        flipped: true,
        body: <span>We're tired of fliers telling us how to vote. ballot.fyi doesn't tell you what to do, instead we give you the facts and arguments about each proposition so you can come to your own conclusion. We cite all of our sources and try to represent relevant perspectives – that's what we mean by nonpartisan. But, we're human, and we don't know everything, so if you know something we didn't cover, email us at fax@ballot.fyi (include sources please!)</span>
      }
    },
    {
      component: ImgAndText2Block,
      data: {
        image: conciseImg,
        alt: "Venn diagram of CliffsNotes and Wikipedia",
        title: "concise",
        body: <span>We've read the full text of the propositions, the official arguments of both sides, and many, many opinion articles so we can give you concise, but comprehensive digests of what's on the ballot. These are real issues that affect real <Link to="/prop-11/">animals</Link>, and we hope these summaries get you interested in what's happening in CA and make you feel ready to vote.</span>,
      }
    },
    {
      component: ImgAndText2Block,
      data: {
        image: toolImg,
        title: "a tool",
        flipped: true,
        alt: "Venn diagram of The more you know and you'll never believe",
        body: <span>We want to give you the ammo to make your own decisions. We want to empower your friends to vote too. Our only goal is to get more folks to show up for the midterms. Make your friends feel smarter with ballot.fyi.<Spacer height={70}/></span>,
      }
    },
    {
      component: TextWithTitleBlock,
      data: {
        title: "About Amir & Erica",
        text: <span>Amir & Erica was created by Jimmy Chion (a designer and engineer) and Yvonne Leow (a journalist) with the help and balance of many friends, left and right. We first made ballot.fyi in <a target="_blank" rel="noopener noreferrer" href="https://original.ballot.fyi/">2016</a>. It reached a million people in one month, and in 2017, we received a $75K grant from The John S. and James L. Knight Foundation to continue ballot.fyi into 2018. <a href="https://knightfoundation.org/" target="_blank" rel="noopener noreferrer">The Knight Foundation</a> promotes informed and engaged communities through funding in journalism, arts, and technology.
					<br/><br/>
					We believe local politics is more important than national politics. We created <a href="https://www.bythebay.cool/" target="_blank" rel="noopener noreferrer">By The Bay</a> to cover local issues in SF. Check out our artisan hand-coded voter guide for SF and San Jose elections at <a href="https://www.bythebay.cool/" target="_blank" rel="noopener noreferrer">bythebay.cool</a>. </span>,
        nColWidth: 6,
      }
    },
    {
      component: TextWithTitleBlock,
      data: {
        title: "Contact",
        text: <span id="contact">Know something we don't?<br/><br/>Perfect. Email us the goods at fax@ballot.fyi.</span>,
        nColWidth: 6,
      }
    },
  ]
}

export default () => (<PageBuilder data={Data}/>);
