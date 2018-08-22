import React from 'react'
import PageBuilder from 'components/page-blocks/aggregators/PageBuilder'
import WallpaperBannerImg from 'components/page-blocks/blocks/WallpaperBannerImg'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'

import BannerImg from 'pages/home/images/prop-1@2x.png'

const Data = {
	pageId:"ballot-fyi-props",
	meta: {
		canonicalUrl:"https://www.ballot.fyi/prop-#",
		documentTitle:"Prop # | California state | ballot.fyi",
		socialHeadline:"Prop # ",
		socialDescription:"Prop #",
		socialImage:"general.png",
	},
	blocks: [
    {
    	id:"000",
    	component: WallpaperBannerImg,
    	data: {
    		color: "blue",
    		image: BannerImg,
        title: "Prop 1"
    	}
    },
    {
    	id: "020",
    	component: TextWithTitleBlock,
    	data: {
    		title: "",
    		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    	},
    },
  ]
}
export default () => (<PageBuilder data={Data}/>);
