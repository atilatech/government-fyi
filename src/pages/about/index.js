import React from 'react'
import styled from 'styled-components'
import PageBuilder from '../../components/page-blocks/aggregators/PageBuilder'
import TextWithTitleBlock from '../../components/page-blocks/blocks/TextWithTitleBlock'
import PageTitleBlock from '../../components/page-blocks/blocks/PageTitleBlock'
import ImgAndText2Block from '../../components/page-blocks/blocks/ImgAndText2Block'
import conciseImg from './images/concise.svg'
import nonpartisanImg from './images/nonpartisan.svg'
import toolImg from './images/tool.svg'
import Color from '../../layout/colors'
import { SEO_META } from '../../data/Constants'

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
`;

const Data = {
	pageId: "about-page",
	meta: {
        canonicalUrl:`${SEO_META.url}about"`,
        documentTitle: SEO_META.description,
        socialHeadline: SEO_META.headline,
        socialDescription: SEO_META.description,
        socialImage: SEO_META.image,
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
        body: <span>We don't try to tell you what to think and we don't take sides.
            We simply present the facts
            and let you decide what you think is best for you and our Country.</span>
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
        We want you to feel good knowing that you understand how government works and
            we want you to feel empowered to make a difference.
        </span>,
      }
    },
    {
      component: TextWithTitleBlock,
      data: {
        title: "About ourgovernment.fyi",
        text: <span>ourgovernment.fyi is designed, coded, and written by
            {' '}
            <a href="https://tomiwa.ca"
               target="_blank"
               rel="noopener noreferrer">
            Tomiwa Ademidun
            </a> and {' '}
            <a href="https://ca.linkedin.com/in/mding5692"
               target="_blank"
               rel="noopener noreferrer">
            Michael Ding
            </a>.
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
            (Their site played a big part in making this site possible, so you should check them out
            and show them some love ❤️.)
        </span>,
        nColWidth: 6,
      }
    },
    {
      component: TextWithTitleBlock,
      data: {
        title: "Team",
        text: <React.Fragment>
            <div>
                <img className="rounded-circle img-fluid d-block mx-auto team-image"
                     src="https://tomiwa.ca/img/tomiwa-ivey-profile-picture.jpg"
                     alt="Tomiwa Ademidun's Website Personal" />
                <h3>
                    <a href="https://tomiwa.ca"
                       target="_blank"
                       rel="noopener noreferrer">
                        Tomiwa Ademidun
                    </a>
                    </h3>
                <p style={{fontSize: 'larger'}}>

                    I'm the founder of <a href="https://atila.ca" target="_blank"
                                              rel="noopener noreferrer">Atila</a>,
                    an ed-tech startup that helps students easily find and apply to scholarships.
                    <br /><br />

                    I'm also a Software engineering and business student currently studying at Ivey
                    Business School, Western University.
                </p>
            </div>
            <div>
                <img className="rounded-circle img-fluid d-block mx-auto  team-image"
                     src="https://media.licdn.com/dms/image/C4D03AQHydk9zj6SQjw/profile-displayphoto-shrink_800_800/0?e=1576713600&v=beta&t=yGHaPILXol-3HrPQlpbfjmBqsSeHLemUlidBfi1WA68"
                     alt="Tomiwa Ademidun's Website Personal" />
                <h3>
                    <a href="https://ca.linkedin.com/in/mding5692"
                       target="_blank"
                       rel="noopener noreferrer">
                        Michael Ding
                    </a>
                </h3>
                <p style={{fontSize: 'larger'}}>

                    I'm the co-founder of <a href="https://firstdate.co" target="_blank"
                                                  rel="noopener noreferrer">firstdate.co</a>,
                    a dating application for young people.
                    <br /><br />
                    I'm also a recent graduate in Computer Science and business from Ivey
                    Business School, Western University.
                </p>
            </div>
        </React.Fragment>,
        nColWidth: 6,
      }
    },
    {
      component: TextWithTitleBlock,
      data: {
        title: "How Can I Help?",
          text: (<span>Great! There's a couple things you can do
          <ol>
              {/*<li>*/}
              {/*    <strong>Donate:</strong>*/}
              {/*    If you would like to support the website financially,*/}
              {/*    You can visit our <Link to="/donate">donation page</Link>.*/}
              {/*    Any amount is appreciated <span role="img" aria-label="smile emoji">🙂</span>.*/}
              {/*</li>*/}
              <li>
                  <strong>Love coding?</strong> Our website is completely{' '}
                  <a href="https://github.com/atilatech/government-fyi/"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                      open-sourced
                  </a>!
                  Visit our Github page and you can help write the code to build this content.
              </li>
              <li>
                  <strong>Love politics?</strong> the content for this site is also crowd-sourced.
                  You can add content to the site at this{' '}
                  <a href="https://github.com/atilatech/government-fyi/wiki/Contributing-to-Government-FYI"
                       target="_blank"
                       rel="noopener noreferrer"
                  >
                  wiki
                  </a>
              </li>
              <li>
                  <strong>Love other stuff?</strong> tweet us{' '}
                  <a href="https://twitter.com/atilatech"
                       target="_blank"
                       rel="noopener noreferrer"
                  >
                  @atilatech
                  </a> to let us know how you want to help
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
        text: <span id="contact">
            If you think this site is great or it's literally the worst thing ever.
            Of anything inbetween and feedback on how to improve.
            Please let us know!
            <br/><br/>

            Tweet us{' '}
            <a href="https://twitter.com/atilatech"
               target="_blank"
               rel="noopener noreferrer"
            >
                      @atilatech
                  </a>
        </span>,
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
};

export default () => (<PageBuilder data={Data}/>);
