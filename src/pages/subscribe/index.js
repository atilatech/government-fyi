import React from 'react'
import styled from 'styled-components'
import SubscribeBlock from 'components/page-blocks/blocks/SubscribeBlock'
import PageTitleBlock from 'components/page-blocks/blocks/PageTitleBlock'
import SectionTitleBlock from 'components/page-blocks/blocks/SectionTitleBlock'
import FluidColumnsBlock from 'components/page-blocks/blocks/FluidColumnsBlock'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import PageBuilder from 'components/page-blocks/aggregators/PageBuilder'
import btbImg from './images/btb.png'
import btbImg_w from './images/btb.webp'
// import TwitImg from 'pages/home/images/prop-12.png'
// import TwitImg_w from 'pages/home/images/prop-12.webp'
import MultisourceImage from 'components/static/multisource-image'
import IGImg from './images/insta.png'
import IGImg_w from './images/insta.webp'
import IGImg_2x from './images/insta@2x.png'
import IGImg_2x_w from './images/insta@2x.webp'

const CenteredText = styled.div`
  text-align: center;
`
const Image = styled(MultisourceImage)`
  display: block;
  width: 150px;
  margin: 10px auto;
`
const Attrib = styled.h3`
  display: block;
  font-size: 10px;
  color: #999;
  margin-bottom: 20px
`

const Data = {
	pageId:"subscribe-page",
	meta: {
		canonicalUrl:"https://www.ballot.fyi/follow/",
		documentTitle:"Follow us – ballot.fyi",
		socialHeadline:"Receive updates from ballot.fyi",
		socialDescription:"11 CA propositions including daylight savings, cage-free eggs, and housing",
		socialImage:"general.png",
	},
	blocks: [
    {
    	component: PageTitleBlock,
    	data: {
    		title: "Let's make this obligatory sense of civic duty last",
    	}
    },
    {
      component: SectionTitleBlock,
      data: {
        title: "📥 Sign up for updates",
      }
    },
    {
      component: SubscribeBlock,
      data: {
        title: null,
      }
    },
    {
      component: SectionTitleBlock,
      data: {
        title: "🍟 Or get updates via IG",
      }
    },
    {
      component: FluidColumnsBlock,
      data: {
        blocks: [
    			{
            img: {
              _1x: IGImg,
              _1x_webp: IGImg_w,
              _2x: IGImg_2x,
              _2x_webp: IGImg_2x_w,
            },
            alt: "Instagram",
    				title: "Instagram",
            subtitle: "The happiest place on Earth",
            url:"https://www.instagram.com/ballotfyi"
    			},
    		],
      }
    },
    {
      component: TextWithTitleBlock,
      data: {
        nColWidth: 8,
        title:"🌉 And if you live in San Francisco or San Jose",
        text:
        <div>
          <a href="https://www.bythebay.cool" target="_blank" rel="noopener noreferrer"><Image imageHandles={{_1x:btbImg, _1x_webp: btbImg_w}} alt="By The Bay"/></a>
          <CenteredText>
            <Attrib>Art by Stephanie Davidson @asiwillit</Attrib>
            Check out your voter guide on our Bay Area-specific site <a href="https://www.bythebay.cool" target="_blank" rel="noopener noreferrer">By The Bay</a>.
          </CenteredText>
        </div>
      }
    }
  ]
}

export default () => (<PageBuilder data={Data}/>);
