import React from 'react'
import PropPageBuilder from 'components/page-blocks/aggregators/PropPageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import LinksBlock from 'components/page-blocks/blocks/LinksBlock'

const Data = {
	pageId:"prop-9",
	propNum: 9,
	meta: {
		dateCreated: new Date('September 15, 2018 10:00:00'),
		dateModified: new Date('September 15, 2018 10:00:00')
	},
	blocks: [
    {
    	id: "010",
    	component: TextWithTitleBlock,
    	data: {
    		// title: "",
    		text: "",
    	},
    },
		{
			id: "020",
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
