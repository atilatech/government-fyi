import React from 'react'
import PageBuilder from 'components/page-blocks/aggregators/PageBuilder'
import FrontPageTitleBlock from 'components/page-blocks/blocks/FrontPageTitleBlock'
import PropCardBlock from 'components/page-blocks/blocks/PropCardBlock'
import {Link} from 'react-router-dom'
// import CAImg from './images/ca.png'
import Prop1Img from './images/prop-1.png'
import Prop1Img_w from './images/prop-1.webp'
import Prop1Img_2x from './images/prop-1@2x.png'
import Prop1Img_2x_w from './images/prop-1@2x.webp'
import Prop2Img from './images/prop-2.png'
import Prop2Img_w from './images/prop-2.webp'
import Prop2Img_2x from './images/prop-2@2x.png'
import Prop2Img_2x_w from './images/prop-2@2x.webp'
import Prop3Img from './images/prop-3.png'
import Prop3Img_w from './images/prop-3.webp'
import Prop3Img_2x from './images/prop-3@2x.png'
import Prop3Img_2x_w from './images/prop-3@2x.webp'
import Prop4Img from './images/prop-4.png'
import Prop4Img_w from './images/prop-4.webp'
import Prop4Img_2x from './images/prop-4@2x.png'
import Prop4Img_2x_w from './images/prop-4@2x.webp'
import Prop5Img from './images/prop-5.png'
import Prop5Img_w from './images/prop-5.webp'
import Prop5Img_2x from './images/prop-5@2x.png'
import Prop5Img_2x_w from './images/prop-5@2x.webp'
import Prop6Img from './images/prop-6.png'
import Prop6Img_w from './images/prop-6.webp'
import Prop6Img_2x from './images/prop-6@2x.png'
import Prop6Img_2x_w from './images/prop-6@2x.webp'
import Prop7Img from './images/prop-7.png'
import Prop7Img_w from './images/prop-7.webp'
import Prop7Img_2x from './images/prop-7@2x.png'
import Prop7Img_2x_w from './images/prop-7@2x.webp'
import Prop8Img from './images/prop-8.png'
import Prop8Img_w from './images/prop-8.webp'
import Prop8Img_2x from './images/prop-8@2x.png'
import Prop8Img_2x_w from './images/prop-8@2x.webp'
import Prop10Img from './images/prop-10.png'
import Prop10Img_w from './images/prop-10.webp'
import Prop10Img_2x from './images/prop-10@2x.png'
import Prop10Img_2x_w from './images/prop-10@2x.webp'
import Prop11Img from './images/prop-11.png'
import Prop11Img_w from './images/prop-11.webp'
import Prop11Img_2x from './images/prop-11@2x.png'
import Prop11Img_2x_w from './images/prop-11@2x.webp'
import Prop12Img from './images/prop-12.png'
import Prop12Img_w from './images/prop-12.webp'
import Prop12Img_2x from './images/prop-12@2x.png'
import Prop12Img_2x_w from './images/prop-12@2x.webp'

const Data = {
	pageId:"ballot-fyi-props",
	meta: {
		canonicalUrl:"https://www.ballot.fyi/",
		documentTitle:"California State Propositions – ballot.fyi",
		socialHeadline:"The quickest nonpartisan voter guide to this November",
		socialDescription:"11 CA propositions including daylight savings, cage-free eggs, and housing",
		socialImage:"general.png",
	},
	blocks: [
		{
			id: "010",
			component: FrontPageTitleBlock,
			data: {
				title: "Nonpartisan guide to the 2018 election",
				subtitle: "(Just for California's stuff, though.)",
				body: <span> We're tired of constant news about Trump. Luckily, California gives us 11 semi-ridiculous ballot initiatives to vote and make fun of. We'll break them down for you, what the different sides are saying, and why your vote is actually important. <br/><br/>This is still a work in progress, but you can stay in touch by <Link to="/subscribe">subscribing</Link> to our newsletter. And! please, for fuck's sake, make sure you're <a target="_blank" rel="noopener noreferrer" href="https://www.vote.org/">registered to vote</a> for November 6, 2018.</span>,
			}
		},
		{
			id: "030",
			component: PropCardBlock,
      data: {
    		propNum: "1",
    		color: 'blue',
        header: "Prop 1 bans the sales of flavored tobacco in SF.",
    		description: "Seems like a good idea, so why are many against it?",
    		linksTo: "/prop-1/",
    		img: {
    			_1x: Prop1Img,
    			_1x_webp: Prop1Img_w,
    			_2x: Prop1Img_2x,
    			_2x_webp: Prop1Img_2x_w,
    		}
      }
		},
		{
			id: "040",
			component: PropCardBlock,
      data: {
    		propNum: "2",
    		color: 'pink',
    		header: "Prop 2 bans the sales of flavored tobacco in SF.",
    		description: "Seems like a good idea, so why are many against it?",
    		linksTo: "/prop-2/",
    		img: {
    			_1x: Prop2Img,
    			_1x_webp: Prop2Img_w,
    			_2x: Prop2Img_2x,
    			_2x_webp: Prop2Img_2x_w,
    		}
      }
		},
		{
			id: "050",
			component: PropCardBlock,
      data: {
    		propNum: "3",
    		color: 'purple',
    		header: "Prop 3 bans the sales of flavored tobacco in SF.",
    		description: "Seems like a good idea, so why are many against it?",
    		linksTo: "/prop-3/",
    		img: {
    			_1x: Prop3Img,
    			_1x_webp: Prop3Img_w,
    			_2x: Prop3Img_2x,
    			_2x_webp: Prop3Img_2x_w,
    		}
      }
		},
		{
			id: "060",
			component: PropCardBlock,
      data: {
    		propNum: "4",
    		color: 'orange',
    		header: "Prop 4 bans the sales of flavored tobacco in SF.",
    		description: "Seems like a good idea, so why are many against it?",
    		linksTo: "/prop-4/",
    		img: {
    			_1x: Prop4Img,
    			_1x_webp: Prop4Img_w,
    			_2x: Prop4Img_2x,
    			_2x_webp: Prop4Img_2x_w,
    		}
      }
		},
		{
			id: "070",
			component: PropCardBlock,
      data: {
    		propNum: "5",
    		color: 'blue',
    		header: "Prop 5 bans the sales of flavored tobacco in SF.",
    		description: "Seems like a good idea, so why are many against it?",
    		linksTo: "/prop-5/",
    		img: {
    			_1x: Prop5Img,
    			_1x_webp: Prop5Img_w,
    			_2x: Prop5Img_2x,
    			_2x_webp: Prop5Img_2x_w,
    		}
      }
		},
		{
			id: "080",
			component: PropCardBlock,
      data: {
    		propNum: "6",
    		color: 'pink',
    		header: "Prop 6 bans the sales of flavored tobacco in SF.",
    		description: "Seems like a good idea, so why are many against it?",
    		linksTo: "/prop-6/",
    		img: {
    			_1x: Prop6Img,
    			_1x_webp: Prop6Img_w,
    			_2x: Prop6Img_2x,
    			_2x_webp: Prop6Img_2x_w,
    		}
      }
		},
		{
			id: "090",
			component: PropCardBlock,
      data: {
    		propNum: "7",
    		color: 'yellow',
    		header: "Prop 7 bans the sales of flavored tobacco in SF.",
    		description: "Seems like a good idea, so why are many against it?",
    		linksTo: "/prop-7/",
    		img: {
    			_1x: Prop7Img,
    			_1x_webp: Prop7Img_w,
    			_2x: Prop7Img_2x,
    			_2x_webp: Prop7Img_2x_w,
    		}
      }
		},
		{
			id: "100",
			component: PropCardBlock,
      data: {
    		propNum: "8",
    		color: 'orange',
    		header: "Prop 8 bans the sales of flavored tobacco in SF.",
    		description: "Seems like a good idea, so why are many against it?",
    		linksTo: "/prop-8/",
    		img: {
    			_1x: Prop8Img,
    			_1x_webp: Prop8Img_w,
    			_2x: Prop8Img_2x,
    			_2x_webp: Prop8Img_2x_w,
    		}
      }
		},
		{
			id: "110",
			component: PropCardBlock,
      data: {
    		propNum: "10",
    		color: 'blue',
    		header: "Prop 10 bans the sales of flavored tobacco in SF.",
    		description: "Seems like a good idea, so why are many against it?",
    		linksTo: "/prop-10/",
    		img: {
    			_1x: Prop10Img,
    			_1x_webp: Prop10Img_w,
    			_2x: Prop10Img_2x,
    			_2x_webp: Prop10Img_2x_w,
    		}
      }
		},
		{
			id: "120",
			component: PropCardBlock,
      data: {
    		propNum: "11",
    		color: 'orange',
    		header: "Prop 11 bans the sales of flavored tobacco in SF.",
    		description: "Seems like a good idea, so why are many against it?",
    		linksTo: "/prop-11/",
    		img: {
    			_1x: Prop11Img,
    			_1x_webp: Prop11Img_w,
    			_2x: Prop11Img_2x,
    			_2x_webp: Prop11Img_2x_w,
    		}
      }
		},
		{
			id: "130",
			component: PropCardBlock,
      data: {
    		propNum: "12",
    		color: 'yellow',
    		header: "Prop 12 bans the sales of flavored tobacco in SF.",
    		description: "Seems like a good idea, so why are many against it?",
    		linksTo: "/prop-12/",
    		img: {
    			_1x: Prop12Img,
    			_1x_webp: Prop12Img_w,
    			_2x: Prop12Img_2x,
    			_2x_webp: Prop12Img_2x_w,
    		}
      }
		},
  ]
}

export default () => (<PageBuilder data={Data}/>);
