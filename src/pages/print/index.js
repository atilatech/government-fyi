import React from 'react'
import styled from 'styled-components'
import PageBuilder from 'components/page-blocks/aggregators/PageBuilder'
import PageTitleBlock from 'components/page-blocks/blocks/PageTitleBlock'
import ImgBlock from 'components/page-blocks/blocks/ImgBlock'
import CustomBlock from 'components/page-blocks/blocks/CustomBlock'
import SectionTitleBlock from 'components/page-blocks/blocks/SectionTitleBlock'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import BookletImg from './images/printguide.jpg'
import Acronym from 'components/interactive/acronym'
import MultisourceImg from 'components/static/multisource-image'

import CA_front from './images/ca-cover.png'
import CA_front_w from './images/ca-cover.webp'
import CA_front_2x from './images/ca-cover@2x.png'
import CA_front_2x_w from './images/ca-cover@2x.webp'
import CA_back from './images/ca-back.png'
import CA_back_w from './images/ca-back.webp'
import CA_back_2x from './images/ca-back@2x.png'
import CA_back_2x_w from './images/ca-back@2x.webp'

import SF_back from './images/sf-back.png'
import SF_back_w from './images/sf-back.webp'
import SF_back_2x from './images/sf-back@2x.png'
import SF_back_2x_w from './images/sf-back@2x.webp'
import SF_front from './images/sf-cover.png'
import SF_front_w from './images/sf-cover.webp'
import SF_front_2x from './images/sf-cover@2x.png'
import SF_front_2x_w from './images/sf-cover@2x.webp'

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

const DownloadLink = styled.div`
  background-color: #eee;
  width: 200px;
  border: 1px solid #ccc;
  margin: 0 30px;
  filter: drop-shadow(12px 12px 0 rgba(0,0,0,0.10)) drop-shadow(-20px 16px 2px rgba(0,0,0,0.05));
`
const Image = styled(MultisourceImg)`
  display: block;
  width: 100%;
  object-fit: contain;
`

const Data = {
	pageId:"subscribe-page",
	meta: {
		canonicalUrl:"https://www.ballot.fyi/print/",
		documentTitle:"Printed guide – ballot.fyi",
		socialHeadline:"Prefer a physical voter guide?",
		socialDescription:"Here's a beautiful guide you can print out.",
		socialImage:"general.png",
	},
	blocks: [
  {
    	component: PageTitleBlock,
    data: {
    		title: "Download our print guide",
    }
  },
  {
      component: ImgBlock,
    data: {
      src: {
          _1x: BookletImg,
          // _1x_webp: partnerlogos_w,
      },
        alt: "Image of printed voter guide",
        caption: "We blurred the background to make this image look cooler.",
        nColWidth: 6,
    }
  },
  {
      component: TextWithTitleBlock,
    data:{
        title:"Who designed this beautiful thing?",
        text:
      <span>
        With the content from our site, our friends at <a target="_blank" rel="noopener noreferrer" href="http://www.work-work-work.com/">Working Hard</a> designed us a beautiful print voter guide. We have two books available for download as <Acronym expanded="Portable Document Format" acronym="PDF"/>s: the California and San Francisco elections. They're designed to be printed on standard 8.5" x 11" letter paper, but you do you.

        <br/><br/>Please keep in mind that the information in the books were last updated in early October, because printing. Please refer to this very website 👇 and <a href="https://www.bythebay.cool">By The Bay</a> for the most up-to-date information.
      </span>
    }
  },
  {
      component: SectionTitleBlock,
    data: {
        nColWidth: 6,
        title:"Download",
        subtitle:"By clicking the images"
    }
  },
  {
      component: CustomBlock,
    data:{
        nColWidth: 6,
        body:
      <Container>
        <DownloadLink>
          <Image
            imageHandles={{
                _1x: CA_back,
                _1x_webp: CA_back_w,
                _2x: CA_back_2x,
                _2x_webp: CA_back_2x_w
            }}
          alt="Click to download our print guide"/>
        </DownloadLink>
        <DownloadLink>
          <Image
            imageHandles={{
                _1x: SF_front,
                _1x_webp: SF_front_w,
                _2x: SF_front_2x,
                _2x_webp: SF_front_2x_w
              }}
            alt="Click to download our print guide"/>
          </DownloadLink>
        </Container>
      }
    },
  ]
}

export default () => (<PageBuilder data={Data}/>);
