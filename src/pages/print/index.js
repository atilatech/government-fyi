import React from 'react'
import styled from 'styled-components'
import PageBuilder from 'components/page-blocks/aggregators/PageBuilder'
// import PageTitleBlock from 'components/page-blocks/blocks/PageTitleBlock'
import ImgAndTitleBlock from 'components/page-blocks/blocks/ImgAndTitleBlock'
import CustomBlock from 'components/page-blocks/blocks/CustomBlock'
import SectionTitleBlock from 'components/page-blocks/blocks/SectionTitleBlock'
// import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import BookletImg from './images/printguide.jpg'
import BookletImg_2x from './images/printguide@2x.jpg'
import BookletImg_w from './images/printguide.webp'
import BookletImg_2x_w from './images/printguide@2x.webp'
import Acronym from 'components/interactive/acronym'
import MultisourceImg from 'components/static/multisource-image'

import CA_front from './images/ca-cover.png'
import CA_front_w from './images/ca-cover.webp'
import CA_front_2x from './images/ca-cover@2x.png'
import CA_front_2x_w from './images/ca-cover@2x.webp'

import SF_front from './images/sf-cover.png'
import SF_front_w from './images/sf-cover.webp'
import SF_front_2x from './images/sf-cover@2x.png'
import SF_front_2x_w from './images/sf-cover@2x.webp'

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`
const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const DownloadLink = styled.a`
  display: block;
  background-color: #eee;
  height: 300px;
  border: 1px solid #ccc;
  margin: 0 30px;
  filter: drop-shadow(12px 12px 0 rgba(0,0,0,0.10)) drop-shadow(-20px 16px 2px rgba(0,0,0,0.05));
`
const Image = styled(MultisourceImg)`
  display: block;
  width: 100%;
  object-fit: contain;
`
const ImgLabel = styled.h3`
  margin-top: 20px;
`

const DownloadBox = (props) => {
  const links = props.links.map( (link, i) => (
    <LinkContainer key={i}>
      <DownloadLink href={link.slug} download>
        <Image
          imageHandles={link.imageHandles}
          alt={link.alt}/>
      </DownloadLink>
      <ImgLabel>{link.label}</ImgLabel>
    </LinkContainer>
  ))
  return (
    <Container>
      {links}
    </Container>
  )
}

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
    component: ImgAndTitleBlock,
    data: {
      title: "Download the print guide",
      subtitle:
      <span>
        With content from our site, our friends at <a target="_blank" rel="noopener noreferrer" href="http://www.work-work-work.com/">Working Hard</a> designed us a beautiful print voter guide. We have two books available for your download as <Acronym expanded="Portable Document Format" acronym="PDF"/>s: the California and San Francisco elections. They're designed to be printed on standard 8.5" x 11" letter paper, but you do you.

        <br/><br/>Please keep in mind that the information in the books were last updated in early October, because printing. Please refer to this very website 👇 and <a href="https://www.bythebay.cool">By The Bay</a> for the most up-to-date information.
      </span>,
      src: {
          _1x: BookletImg,
          _1x_webp: BookletImg_w,
          _2x: BookletImg_2x,
          _2x_webp: BookletImg_2x_w,
      },
        alt: "Image of printed voter guide",
        caption: "Don't you just want to rub these against your face, lovingly? (Photo provided by Working Hard)",
        nColWidth: 7,
    }
  },
  {
    component: SectionTitleBlock,
    data: {
      nColWidth: 6,
      title:"Click to download them",
      paddingTop: 20,
    }
  },
  {
    component: CustomBlock,
    data:{
        nColWidth: 8,
        body:
        <DownloadBox
          links={[
            {
              slug:"/downloads/ballotfyi-CA-voter-guide.pdf",
              imageHandles:{
                _1x: CA_front,
                _1x_webp: CA_front_w,
                _2x: CA_front_2x,
                _2x_webp: CA_front_2x_w
              },
              alt:"Click to download CA print guide",
              label:"California"
            },
            {
              slug:"/downloads/ballotfyi-SF-voter-guide.pdf",
              imageHandles:{
                _1x: SF_front,
                _1x_webp: SF_front_w,
                _2x: SF_front_2x,
                _2x_webp: SF_front_2x_w
              },
              alt:"Click to download SF print guide",
              label:"San Francisco"
            },
          ]}
        />
      }
    },
  ]
}

export default () => (<PageBuilder data={Data}/>);
