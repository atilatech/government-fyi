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
    		title: "What is Our Government FYI",
    	}
    },
    {
      component: ImgAndText2Block,
      data: {
        image: nonpartisanImg,
        alt: "Venn diagram of a debate and politifact",
        title: "nonpartisan",
        flipped: true,
        body: <span>We don't take sides. We don't try to to tell you which party is right or wrong.
            We simply present the facts and let you decide what you think is best for you and our Country.</span>
      }
    },
    {
      component: ImgAndText2Block,
      data: {
        image: conciseImg,
        alt: "Venn diagram of CliffsNotes and Wikipedia",
        title: "concise",
        body: <span>There's a lot of information out there
            and a lot of complicated, big words being used.
            We get to the point, use simple english
            that everyone can understand and answer the most important question, "why should I care?".
        </span>,
      }
    },
    {
      component: ImgAndText2Block,
      data: {
        image: toolImg,
        title: "a tool",
        flipped: true,
        alt: "Venn diagram of The more you know and you'll never believe",
        body: <span>Government affects us all but sometimes we feel like we don't understand what's happening.
        We want you to feel good knowing that you understand how government works and how you can affect government.
        </span>,
      }
    },
    {
      component: TextWithTitleBlock,
      data: {
        title: "About ourgovernment.fyi",
        text: <span>ourgovernment.fyi is designed, coded, and written by
            <a href="https://tomiwa.ca"
               target="_blank"
               rel="noopener noreferrer">
            Tomiwa Ademidun
            </a>,
            with the help of many friends, left and right.
            <br />
            The site was inspired by <a href="https://ballot.fyi"
                                        target="_blank"
                                        rel="noopener noreferrer">
                      ballot.fyi
                  </a>, a website
            built by <a href="https://jimmychion.com"
                        target="_blank"
                        rel="noopener noreferrer"
            >
                      Jimmy Chion
                  </a> and
            used to explain California's state propositions.
            <br />
            (They're site played a big part in making this site possible so you should check them out
            and donate)
        </span>,
        nColWidth: 6,
      }
    },
    {
      component: TextWithTitleBlock,
      data: {
        title: "How Can I Help?",
          text: (<span>Great! There's a couple things you can do
          <ol>
              <li>
                  <strong>Like to Code?</strong> Our website is completely
                  <a href="https://github.com/atilatech/government-fyi/"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                      open-sourced
                  </a>!
                  Visit our Github page and you can help write the code to build this content.
              </li>
              <li>
                  <strong>Something missing?</strong> the content for this site is also crowd-sourced.
                  Fill this form (it asks for your name and email, that's it!) and you can help edit the information
                  we have on existing issues and add new ones.
              </li>
              <li>
                  <strong>Donate <span role="img" aria-label="money face emoji">🤑</span>!
                  </strong> If you would like to support the website financially.
                  You can visit our <Link to="/donate">donation page</Link>.
                  Any amount is appreciated <span role="img" aria-label="smile emoji">🙂</span>.
              </li>
          </ol>

          </span>),
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
