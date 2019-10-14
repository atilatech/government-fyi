import React from 'react'
import styled from 'styled-components'
import PageBuilder from 'components/page-blocks/aggregators/PageBuilder'
import PageTitleBlock from 'components/page-blocks/blocks/PageTitleBlock'
import diversityImage from './images/diversity.png'
import Color from 'layout/colors'
import {ALL_DEMOGRAPHICS} from '../../data/Constants';
import TextWithTitleBlock from "../../components/page-blocks/blocks/TextWithTitleBlock";
import $ from "jquery";
import CustomBlock from "../../components/page-blocks/blocks/CustomBlock";
import {slugify} from "../../components/page-blocks/blocks/PartyPlatformBlock";
import Link from "react-router-dom/Link";
export const Button = styled.a`
	font-family: ${props=>props.theme.fonts.avant};
	font-weight: bold;
	font-size: 14px;
	line-height: 1.5em;
	letter-spacing: 1.4px;
	text-transform: uppercase;
	text-decoration: none;
	text-align:center;
	display: block;
	width: 40%;
	margin: 20px auto;
	padding: 10px 25px;
	color: ${Color('pink2')};
	border: 2px solid ${Color('pink2')};
	-webkit-appearance: none;
	border-radius: 3px;
	cursor: pointer;

	&:focus {
		background-color: ${Color('pink2')};
		color: white;
		outline: none;
	}

	@media not all and (hover: none) {
		&:hover{
			background-color: ${Color('pink2')};
			color: white;
		}
	}
`

export function scrollToElement(selector){

    try {
        $('html, body').animate({scrollTop: $(selector).offset().top}, 1000);
    }
    catch (e) {
        // console.log('scrollToElement catch e',e);

    }
};

const demographicsString = `How will the elections affect ${ALL_DEMOGRAPHICS.slice(0, 7).join(', ')} and more.`;

const demographicsBlocks = ALL_DEMOGRAPHICS.map(demographic => (
    {
        component: TextWithTitleBlock,
        data: {
            title: <div id={slugify(demographic)}>
					    How will this affect {demographic}
			        </div>,
            text: (<ul>
                <li>
                    [tk add code to query all the platform data from PlatformData.js.demographics that affects:
                    {demographic}
                </li>
                <Link to={`/people/${demographic}`}>
                    Read more about... {demographic}
                </Link>
            </ul>)
        }
    }
));

function PeopleNavigator (){

    const demographicsLinks = ALL_DEMOGRAPHICS.map(demographic => (
        <li key={demographic}><a href={`#${slugify(demographic)}`}
                                 onClick={()=>{scrollToElement(`#${slugify(demographic)}`)}}>
            {demographic}
        </a></li>
    ));
    return demographicsLinks;
}
const Data = {
    pageId: "people",
    meta: {
        canonicalUrl:"https://www.ourgovernment.fyi/people/",
        documentTitle:"People | ourgovernment.fyi",
        socialHeadline:"How will the Canadian Federal Elections affect you?",
        socialDescription: demographicsString,
        socialImage:"diversity.png",
    },
    blocks: [
        {
            component: PageTitleBlock,
            data: {
                title: "How Will these Issues Affect Me?",
                subtitle: demographicsString,
                backgroundImage: diversityImage
            }
        },
        {
            component: CustomBlock,
            data: {
                body: <PeopleNavigator/>
            }
        },
        ...demographicsBlocks,
        // {
        //   component: TextWithTitleBlock,
        //   data: {
        //     title: "Support us",
        //     text:
        // 			<span id="contact">
        // 				We've spent months researching and writing the content you see on this site. We're a small team, and we want to make sure we can do this again in 2020. If you like what you see, please consider <a href="https://www.bythebay.cool/contribute/">making a contribution</a>. You can do so through our sister site at By The Bay.
        // 				<Button href="https://www.bythebay.cool/contribute/">
        // 					Make this happen again
        // 				</Button>
        // 			</span>,
        //     nColWidth: 6,
        //   }
        // },
    ]
}

export default () => (<PageBuilder data={Data}/>);
