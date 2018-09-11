import React from 'react'
import PropPageBuilder from 'components/page-blocks/aggregators/PropPageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import LinksBlock from 'components/page-blocks/blocks/LinksBlock'
import ImgBlock from 'components/page-blocks/blocks/ImgBlock'

import HenImg from './images/hen.jpg'
import HenImg_w from './images/hen.webp'
import HenImg_2x from './images/hen@2x.jpg'
import HenImg_2x_w from './images/hen@2x.webp'
import CalfImg from './images/calf.jpg'
import CalfImg_w from './images/calf.webp'
import CalfImg_2x from './images/calf@2x.jpg'
import CalfImg_2x_w from './images/calf@2x.webp'
import PigImg from './images/pig.jpg'
import PigImg_w from './images/pig.webp'
import PigImg_2x from './images/pig@2x.jpg'
import PigImg_2x_w from './images/pig@2x.webp'

const Data = {
	pageId:"prop-12",
	propNum: 12,
	meta: {
		dateCreated: new Date('September 15, 2018 10:00:00'),
		dateModified: new Date('September 15, 2018 10:00:00')
	},
	blocks: [
    {
    	component: TextWithTitleBlock,
    	data: {
    		// title: "",
    		text: "",
    	},
    },
    {
    	component: ImgBlock,
			data: {
				src: {
					_1x: HenImg,
					_1x_webp: HenImg_w,
					_2x: HenImg_2x,
					_2x_webp: HenImg_2x_w
				},
				alt: "Art by David Goligorsky",
				nColWidth: 6,
			}
    },
    {
    	component: ImgBlock,
			data: {
				src: {
					_1x: CalfImg,
					_1x_webp: CalfImg_w,
					_2x: CalfImg_2x,
					_2x_webp: CalfImg_2x_w
				},
				alt: "Art by David Goligorsky",
				nColWidth: 6,
			}
    },
    {
    	component: ImgBlock,
			data: {
				src: {
					_1x: PigImg,
					_1x_webp: PigImg_w,
					_2x: PigImg_2x,
					_2x_webp: PigImg_2x_w
				},
				alt: "Art by David Goligorsky",
				nColWidth: 6,
			}
    },
		{
			component: LinksBlock,
			data: {
				subsections:[
					{
						subsectionTitle: "Arguments in favor",
						links: [
							{
								text: "",
								url: ""
							},
						]
					},
					{
						subsectionTitle: "Arguments against",
						links: [
							{
								text: "",
								url: "",
							},
						]
					}
				]
			}
		}
  ]
}
export default () => (<PropPageBuilder data={Data}/>);
