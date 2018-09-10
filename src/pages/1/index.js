import React from 'react'
import PropPageBuilder from 'components/page-blocks/aggregators/PropPageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import SectionTitleBlock from 'components/page-blocks/blocks/SectionTitleBlock'
import LinksBlock from 'components/page-blocks/blocks/LinksBlock'

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
    	id: "010",
    	component: TextWithTitleBlock,
    	data: {
    		title: "A quickie",
    		text: "Prop 1 would issue $4 billion in general obligation bonds to fund housing programs. Specifically, $1B would go to providing housing loans for veterans, and $1.5B would go towards the state's Multifamily Housing Program.",
    	},
    },
    {
    	id: "020",
    	component: SectionTitleBlock,
    	data: {
    		title: "Breakdown of funds",
				nColWidth: 6,
    	},
    },
    {
    	id: "030",
    	component: TextWithTitleBlock,
    	data: {
    		title: "Who's against it?",
				text: "The official argument was written by Gary Wesley, a man who for decades has written official ballot arguments when nobody else does. He argues that housing affordability is a much bigger problem in California, and that this is another band-aid to the problem."
    	},
    },
		{
			id: "040",
			component: SectionTitleBlock,
			data: {
				title: "More reading",
			},
		},
		{
			id: "050",
			component: LinksBlock,
			data: {
				subsections:[
					{
						subsectionTitle: "Arguments in favor",
						links: [
							{
								text: "Prop 1 is a waste to society",
								url: "https://www.a.com/"
							},
							{
								text: "Prop 1 is a waste to society",
								url: "https://www.a.com/"
							},
						]
					},
					{
						subsectionTitle: "Arguments against",
						links: [
							{
								text: "Prop 1 would favor the rich in the best case",
								url: "/",
							},
							{
								text: "Prop 1 is no bueno yo",
								url: "/",
							},
						]
					}
				]
			}
		}
  ]
}
export default () => (<PropPageBuilder data={Data}/>);
