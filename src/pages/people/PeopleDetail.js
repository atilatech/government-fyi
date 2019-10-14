import React from 'react'
import PageBuilder from '../../components/page-blocks/aggregators/PageBuilder'
import PageTitleBlock from '../../components/page-blocks/blocks/PageTitleBlock'
import diversityImage from './images/diversity.png'
import {ALL_DEMOGRAPHICS} from '../../data/Constants';
import TextWithTitleBlock from "../../components/page-blocks/blocks/TextWithTitleBlock";
import CustomBlock from "../../components/page-blocks/blocks/CustomBlock";
import {slugify} from "../../components/page-blocks/blocks/PartyPlatformBlock";
import Link from "react-router-dom/Link";

const demographicsBlocks = ALL_DEMOGRAPHICS.slice(0,1).map(demographic => (
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
            </ul>)
        }
    }
));

function PeopleNavigator (){

    const demographicsLinks = ALL_DEMOGRAPHICS.map(demographic => (
        <li key={demographic}><Link to={`/people/${demographic}`}>
            {demographic}
        </Link></li>
    ));
    return demographicsLinks;
}
const Data = {
    pageId: "people",
    meta: {
        canonicalUrl:"https://www.ourgovernment.fyi/people/",
        documentTitle:"People | ourgovernment.fyi",
        socialHeadline:"How will the Canadian Federal Elections affect you?",
        socialDescription: "Read about issues affecting me",
        socialImage:"diversity.png",
    },
    blocks: [
        {
            component: PageTitleBlock,
            data: {
                title: "How Will these Issues Affect Me?",
                subtitle: "Issues affecting...",
                backgroundImage: diversityImage
            }
        },
        {
            component: CustomBlock,
            data: {
                body: <PeopleNavigator/>
            }
        },
        ...demographicsBlocks
    ]
};


function PeopleDetail(props) {
    console.log({props});
    return (<PageBuilder data={Data}/>)
}
export default PeopleDetail;
