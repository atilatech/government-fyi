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
        body: <span>We're tired of pamphlets telling us how to vote. ballot.fyi does not give any recommendations. We'll give you the facts and arguments about the propositions, concisely, so you can make your own conclusion. We cite all our sources, and try to argue for all perspectives – that's what we mean when we say nonpartisan. But, we're human, and we don't know everything, so if you know something we didn't cover, please email us at fax@ballot.fyi (with sources cited!)</span>
      }
    },
    {
      id:"020",
      component: ImgAndText2Block,
      data: {
        image: conciseImg,
        alt: "Venn diagram of CliffsNotes and Wikipedia",
        title: "concise",
        body: <span>We've read the full text of the propositions, the official arguments of both sides, and opinion articles, so we could give you these brief and comprehensive digests of the propositions. We know you don't have a lot of time. These are real issues that affect real <Link to="/prop-11/">animals</Link>, and we hope that these summaries either get you interested enough to read more, or give you enough information to make you feel like you can make an informed decision.</span>,
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
        body: <span>We want you to feel empowered on Election Day, and we want you to give you ammo to make your own decisions. We also hope that you'll want your friends to feel empowered as well, because this site's only purpose is to get more folks voting. Making your friends smarter is the most important thing you can do this election.<Spacer height={70}/></span>,
      }
    },
    {
      id:"040",
      component: TextWithTitleBlock,
      data: {
        title: "About Amir & Erica",
        text: <span>Amir & Erica was created by Jimmy Chion (a designer and engineer) and Yvonne Leow (a journalist) with the help and balance of many friends, left and right. We first made ballot.fyi in <a target="_blank" rel="noopener noreferrer" href="https://original.ballot.fyi/">2016</a>. It reached a million people in one month, and in 2017, we received a generous grant from The John S. and James L. Knight Foundation to continue ballot.fyi into 2018. <a href="https://knightfoundation.org/" target="_blank" rel="noopener noreferrer">The Knight Foundation</a> promotes informed and engaged communities through funding in journalism, arts, and technology.
					<br/><br/>
					We believe local politics is more important than national politics, so we created <a href="https://www.bythebay.cool/" target="_blank" rel="noopener noreferrer">By The Bay</a> to cover issues in San Francisco, building on what we learned with ballot.fyi in 2016. If you live in San Francisco or San Jose, go to <a href="https://www.bythebay.cool/" target="_blank" rel="noopener noreferrer">bythebay.cool</a> to check out our coverage of SF and SJ's local elections. </span>,
        nColWidth: 6,
      }
    },
    {
      id:"050",
      component: TextWithTitleBlock,
      data: {
        title: "Contact",
        text: <span id="contact">Know something we don't?<br/><br/>Perfect. Email us the goods at fax@ballot.fyi with cited sources.</span>,
        nColWidth: 6,
      }
    },
  ]
}

export default () => (<PageBuilder data={Data}/>);
