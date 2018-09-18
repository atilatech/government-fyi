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
import ZuckImg from './images/zuck.png'
import ZuckImg_w from './images/zuck.webp'
import ZuckImg_2x from './images/zuck@2x.png'
import ZuckImg_2x_w from './images/zuck@2x.webp'
import MockImg from 'pages/home/images/prop-7.png'
import MockImg_w from 'pages/home/images/prop-7.webp'
import MultisourceImage from 'components/static/multisource-image'

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
        title: "🍟 Or follow us on these electronic media",
      }
    },
    {
      component: FluidColumnsBlock,
      data: {
        blocks: [
    			{
            img: {
              _1x: ZuckImg,
              _1x_webp: ZuckImg_w,
              _2x: ZuckImg_2x,
              _2x_webp:ZuckImg_2x_w
            },
            alt: "Facebook",
    				title: "Mark's Big F",
            url:"https://www.faceboook.com/bythebaydotcool"
    			},
    			{
            img: {
              _1x: MockImg,
              _1x_webp: MockImg_w,
            },
            alt: "Twitter",
    				title: "US Press Secretary",
            url:"https://www.twitter.com/bythebaydotcool"
    			},
    			{
            img: {
              _1x: MockImg,
              _1x_webp: MockImg_w,
            },
            alt: "Instagram",
    				title: "Instagram",
            url:"https://www.instagram.com/bythebaydotcool"
    			},
    		],
      }
    },
    {
      component: TextWithTitleBlock,
      data: {
        nColWidth: 8,
        title:"🌉 And if you live in SF or SJ",
        text:
        <div>
          <a href="https://www.bythebay.cool" target="_blank" rel="noopener noreferrer"><Image imageHandles={{_1x:btbImg, _1x_webp: btbImg_w}} alt="By The Bay"/></a>
          <CenteredText>
            <Attrib>Art by Stephanie Davidson @asiwillit</Attrib>
            Read more about your ballot on our Bay-specific site: <a href="https://www.bythebay.cool" target="_blank" rel="noopener noreferrer">By The Bay</a>.
          </CenteredText>
        </div>
      }
    }
  ]
}

export default () => (<PageBuilder data={Data}/>);
