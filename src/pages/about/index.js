import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import PageBuilder from 'components/page-blocks/aggregators/PageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import PageTitleBlock from 'components/page-blocks/blocks/PageTitleBlock'
import ImgAndText2Block from 'components/page-blocks/blocks/ImgAndText2Block'
import conciseImg from './images/concise.svg'
import nonpartisanImg from './images/nonpartisan.svg'
import toolImg from './images/tool.svg'
import {Spacer} from 'layout/util'
import Citation from 'components/interactive/citation/citation'
import Color from 'layout/colors'

export const Button = styled.a`
	font-family: ${props=>props.theme.fonts.avant};
	font-weight: bold;
	font-size: 14px;
	line-height: 1.5em;
	letter-spacing: 1.4px;
	text-transform: uppercase;
	text-decoration: none;
	text-align:center;
	display: block;
	width: 40%;
	margin: 20px auto;
	padding: 10px 25px;
	color: ${Color('pink2')};
	border: 2px solid ${Color('pink2')};
	-webkit-appearance: none;
	border-radius: 3px;
	cursor: pointer;

	&:focus {
		background-color: ${Color('pink2')};
		color: white;
		outline: none;
	}

	@media not all and (hover: none) {
		&:hover{
			background-color: ${Color('pink2')};
			color: white;
		}
	}
`

const Data = {
	pageId: "about-page",
	meta: {
		canonicalUrl:"https://www.ourgovernment.fyi/about/",
		documentTitle:"About | ourgovernment.fyi",
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
        body: <span>We're tired of fliers telling us how to vote. ourgovernment.fyi doesn't tell you what to do, instead we give you the facts and arguments about each proposition so you can come to your own conclusion. <Citation publication="The trusted source" headline="that we fact-checked" directQuote="And we'll include an excerpt from the link so you can get just a little more context.">We cite all of our sources (try clicking this little circle </Citation>) and try to represent all relevant perspectives – that's what we mean by nonpartisan. But, we're human, and we don't know everything, so if you know something we didn't cover, email us at fax@ourgovernment.fyi (with sources cited)</span>
      }
    },
    {
      component: ImgAndText2Block,
      data: {
        image: conciseImg,
        alt: "Venn diagram of CliffsNotes and Wikipedia",
        title: "concise",
        body: <span>We've read the full text of the propositions, the official arguments of both sides, and many, many opinion articles so we can give you concise but comprehensive digests of what's on the ballot. These are real issues that affect real <Link to="/prop-12/">animals</Link>, and we hope these summaries get you interested in what's happening in CA and make you feel ready to vote.</span>,
      }
    },
    {
      component: ImgAndText2Block,
      data: {
        image: toolImg,
        title: "a tool",
        flipped: true,
        alt: "Venn diagram of The more you know and you'll never believe",
        body: <span>We want you to feel good – amazing even – on Election Day, and we also hope that you'll want your friends to feel fantastic, because this site's only purpose is to get more folks voting. So do us a solid and tell your friends they get to vote on Daylight Saving Time this November.
					<Spacer height={70}/></span>,
      }
    },
    {
      component: TextWithTitleBlock,
      data: {
        title: "About Citizen & Citizens",
        text: <span>ourgovernment.fyi is designed, coded, and written by Jimmy Chion, with the help of many friends, left and right. The first ourgovernment.fyi, <a target="_blank" rel="noopener noreferrer" href="https://original.ourgovernment.fyi/">2016 edition</a>, reached a million people in one month. Soon afterwards, we received a $75K grant to write ourgovernment.fyi for 2018. The grant came from <a href="https://knightfoundation.org/" target="_blank" rel="noopener noreferrer">The John S. and James L. Knight Foundation</a> – a nonpartisan org that promotes informed communities through funding in journalism, technology, and the arts.
				<br/><br/>
				In addition to ourgovernment.fyi, Jimmy Chion and Yvonne Leow started <em>By The Bay</em> in early 2018, a local media site for the Bay Area, covering local issues and elections. By The Bay was shut down in early 2019, but ourgovernment.fyi – which will only cover state-wide ballot initiatives – will continue as a volunteer-led project for as long as California propositions need explaining.
					</span>,
        nColWidth: 6,
      }
    },
    {
      component: TextWithTitleBlock,
      data: {
        title: "Contact",
        text: <span id="contact">Know something we don't?<br/><br/>Perfect. Email us the goods at fax@ourgovernment.fyi.</span>,
        nColWidth: 6,
      }
    },
    // {
    //   component: TextWithTitleBlock,
    //   data: {
    //     title: "Support us",
    //     text:
		// 			<span id="contact">
		// 				We've spent months researching and writing the content you see on this site. We're a small team, and we want to make sure we can do this again in 2020. If you like what you see, please consider <a href="https://www.bythebay.cool/contribute/">making a contribution</a>. You can do so through our sister site at By The Bay.
		// 				<Button href="https://www.bythebay.cool/contribute/">
		// 					Make this happen again
		// 				</Button>
		// 			</span>,
    //     nColWidth: 6,
    //   }
    // },
  ]
}

export default () => (<PageBuilder data={Data}/>);
