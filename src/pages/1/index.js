import React from 'react'
import PropPageBuilder from 'components/page-blocks/aggregators/PropPageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'

const Data = {
	pageId:"prop-1",
	propNum: 1,
	meta: {
		socialHeadline:"Prop 1",
		socialDescription:"Prop 1",
		dateCreated: new Date('September 15, 2018 10:00:00'),
		dateModified: new Date('September 15, 2018 10:00:00')
	},
	blocks: [
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
export default () => (<PropPageBuilder data={Data}/>);
