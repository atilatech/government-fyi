import React from 'react'
import PageBuilder from '../../components/page-blocks/aggregators/PageBuilder'
import PageTitleBlock from '../../components/page-blocks/blocks/PageTitleBlock'
import diversityImage from './images/diversity.png'
import CustomBlock from "../../components/page-blocks/blocks/CustomBlock";
import {shuffle, slugify, unSlugify} from "../../services/Utils";
import {withRouter} from "react-router-dom";
import Link from "react-router-dom/Link";
import {ALL_PLATFORMS} from "../../data/PartyPlatformData";

export function DemographicDetail ({demographicIssues}){

    return (
        <div>
            <ol>
                {demographicIssues.map(item => (
                    <li key={`${item.party}-${JSON.stringify(item.text)}`}
                        style={{fontSize: '20px', lineHeight: '36px'}}
                        className="mb-5">
                        <Link to={`/${slugify(item.topic)}`}>
                            <span className={slugify(item.party)}>
                                {item.party} on {item.topic} <br />
                            </span>
                        </Link>
                        {item.text}
                        {item.source &&
                        <React.Fragment>
                        {' '}<a href={item.source}
                                target="_blank"
                                rel="noopener noreferrer">
                        (source)
                        </a>
                        </React.Fragment>
                        }
                    </li>
                ))}
            </ol>
        </div>
    );
}

export function demographicsToIssueQuery(demographic, randomize=false) {

    const demographicIssues = [];

    ALL_PLATFORMS.forEach(platform => {

        platform.partyPlatforms
            .filter(item=> item.demographics)
            .forEach(item => {
                const { party, topic } = platform;
                const { text, source } = item;
                if (item.demographics.includes(demographic.toLowerCase())) {
                    demographicIssues.push({
                        party, topic, text, source
                    })
                }
            });

    });

    if (randomize) {
        shuffle(demographicIssues)
    }
    return demographicIssues;
}


function PeopleDetail(props) {

    const { match : { params : { demographic : demographicSlug }} } = props;
    const demographic = unSlugify(demographicSlug);

    const demographicIssues = demographicsToIssueQuery(demographic);

    const Data = {
        pageId: `people/${demographic}`,
        meta: {
            canonicalUrl:`https://www.ourgovernment.fyi/people/${demographic}`,
            documentTitle:`Issues affecting ${demographic} | ourgovernment.fyi`,
            socialHeadline:`How will the Canadian Federal Elections affect ${demographic}?`,
            socialDescription: `Read about issues affecting ${demographic}`,
            socialImage:"diversity.png",
        },
        blocks: [
            {
                component: PageTitleBlock,
                data: {
                    title: `How Will these Issues Affect ${demographic}?`,
                    backgroundImage: diversityImage
                }
            },
            {
                component: CustomBlock,
                data: {
                    body: <DemographicDetail demographicIssues={demographicIssues}/>
                }
            },
        ]
    };

    return (<PageBuilder data={Data}/>)
}
export default withRouter(PeopleDetail);
