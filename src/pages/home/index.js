import React from 'react'
import PageBuilder from 'components/page-blocks/aggregators/PageBuilder'
import FrontPageTitleBlock from 'components/page-blocks/blocks/FrontPageTitleBlock'
import PropCardBlock from 'components/page-blocks/blocks/PropCardBlock'
import {Link} from 'react-router-dom'
import {PropBgColor, PropImageSet, PropShortTitles} from 'pages/prop-attributes'
// import CAImg from './images/ca.png'

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
				body: <span> We're tired of constant news about Trump. Luckily, California gives us 11 semi-ridiculous ballot initiatives to vote on and make fun of. We'll break them down for you, what the different sides are saying, and why your vote is actually important. <br/><br/>This is still a work in progress, but you can stay in touch by <Link to="/subscribe">subscribing</Link> to our newsletter. And! please, for fuck's sake, make sure you're <a target="_blank" rel="noopener noreferrer" href="https://www.vote.org/">registered to vote</a> for November 6, 2018.</span>,
			}
		},
		{
			id: "030",
			component: PropCardBlock,
      data: {
    		propNum: "1",
    		color: PropBgColor(1),
        header: PropShortTitles(1),
    		description: "...",
    		linksTo: "/prop-1/",
    		img: PropImageSet(1),
      }
		},
		{
			id: "040",
			component: PropCardBlock,
      data: {
    		propNum: "2",
    		color: PropBgColor(2),
    		header: PropShortTitles(2),
    		description: "The revenue is supposed to go to helping the mentally ill, but lawsuits have stopped it from using it on housing",
    		linksTo: "/prop-2/",
    		img: PropImageSet(2),
      }
		},
		{
			id: "050",
			component: PropCardBlock,
      data: {
    		propNum: "3",
    		color: PropBgColor(3),
    		header: PropShortTitles(3),
    		description: "It comes down to fish, really",
    		linksTo: "/prop-3/",
    		img: PropImageSet(3),
      }
		},
		{
			id: "060",
			component: PropCardBlock,
      data: {
    		propNum: "4",
    		color: PropBgColor(4),
    		header: PropShortTitles(4),
    		description: "Renovations and new construction",
    		linksTo: "/prop-4/",
    		img: PropImageSet(4),
      }
		},
		{
			id: "070",
			component: PropCardBlock,
      data: {
    		propNum: "5",
    		color: PropBgColor(5),
    		header: PropShortTitles(5),
    		description: "Some argue this would free up houses; others say it further limits California's revenue from property taxes",
    		linksTo: "/prop-5/",
    		img: PropImageSet(5),
      }
		},
		{
			id: "080",
			component: PropCardBlock,
      data: {
    		propNum: "6",
    		color: PropBgColor(6),
    		header: PropShortTitles(6),
    		description: "And! it requires that future gas tax increases be approved by voters",
    		linksTo: "/prop-6/",
    		img: PropImageSet(6),
      }
		},
		{
			id: "090",
			component: PropCardBlock,
      data: {
    		propNum: "7",
    		color: PropBgColor(7),
    		header: PropShortTitles(7),
				description:"If passed, we'd need Congressional approval to make it so",
    		linksTo: "/prop-7/",
    		img: PropImageSet(7),
      }
		},
		{
			id: "100",
			component: PropCardBlock,
      data: {
    		propNum: "8",
    		color: PropBgColor(8),
    		header: PropShortTitles(8),
    		description: "A complicated way of trying to raise wages for clinic workers",
    		linksTo: "/prop-8/",
    		img: PropImageSet(8),
      }
		},
		{
			id: "110",
			component: PropCardBlock,
      data: {
    		propNum: "10",
    		color: PropBgColor(10),
    		header: PropShortTitles(10),
    		description: "Would repeal Costa-Hawkins, allowing cities to regulate what landlords can charge renters",
    		linksTo: "/prop-10/",
    		img: PropImageSet(10),
      }
		},
		{
			id: "120",
			component: PropCardBlock,
      data: {
    		propNum: "11",
    		color: PropBgColor(11),
    		header: PropShortTitles(11),
				description: "An attempt to exempt EMTs from a recent California ruling",
    		linksTo: "/prop-11/",
    		img: PropImageSet(11),
      }
		},
		{
			id: "130",
			component: PropCardBlock,
      data: {
    		propNum: "12",
    		color: PropBgColor(12),
    		header: PropShortTitles(12),
    		description: "Guess what 1 square foot looks like relative to a chicken",
    		linksTo: "/prop-12/",
    		img: PropImageSet(12),
      }
		},
  ]
}

export default () => (<PageBuilder data={Data}/>);
