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
  @media screen and (max-width: 767px) {
    justify-content: space-around;
  }
`;
const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DownloadLink = styled.a`
  display: block;
  background-color: #eee;
  height: 300px;
  border: 1px solid #ccc;
  margin: 0 30px;
  filter: drop-shadow(12px 12px 0 rgba(0,0,0,0.10)) drop-shadow(-20px 16px 2px rgba(0,0,0,0.05));
  @media screen and (max-width: 767px) {
    margin: 0;
  }
`;
const Image = styled(MultisourceImg)`
  display: block;
  height: 100%;
  object-fit: contain;
`;
const ImgLabel = styled.h3`
  margin-top: 20px;
`;

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
  ));
  return (
    <Container>
      {links}
    </Container>
  )
};

const Data = {
	pageId:"print-guide-page",
	meta: {
		canonicalUrl:"https://www.ourgovernment.fyi/print/",
		documentTitle:"Printed guide – ourgovernment.fyi",
		socialHeadline:"Prefer a physical voter guide?",
		socialDescription:"Here's a beautiful guide you can print out.",
		socialImage:"printguide.png",
	},
	blocks: [
  {
    component: ImgAndTitleBlock,
    data: {
      title: "Download our print guide",
      subtitle:
      <span>
        Our friends at <a target="_blank" rel="noopener noreferrer" href="http://www.work-work-work.com/">Working Hard</a> designed two beautiful print voter guides for office ballot parties, <Acronym expanded="Get Out The Vote" acronym="GOTV"/> events, and midterm election hangs. We have a California and San Francisco version available as <Acronym expanded="Portable Document Format" acronym="PDF"/>s. They're meant to be printed on standard 8.5" x 11" paper, but you do you.

        <br/><br/>Keep in mind that our paper guides were last updated in early October, because, printing. So, refer to this very website <span role="img" aria-label="finger pointing down">👇</span> for the most up-to-date information.
      </span>,
      src: {
          _1x: BookletImg,
          _1x_webp: BookletImg_w,
          _2x: BookletImg_2x,
          _2x_webp: BookletImg_2x_w,
      },
        alt: "Image of printed voter guide",
        caption: "Don't you just want to rub these pretty things against your face? (Photo provided by Working Hard)",
        nColWidth: 7,
    }
  },
  {
    component: SectionTitleBlock,
    data: {
      nColWidth: 6,
      title:"Click to download",
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
              alt:"Click to download a CA print guide",
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
              alt:"Click to download an SF print guide",
              label:"San Francisco"
            },
          ]}
        />
      }
    },
  ]
};

export default () => (<PageBuilder data={Data}/>);
