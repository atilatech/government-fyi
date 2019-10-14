import React from 'react'
import PageBuilder from '../../components/page-blocks/aggregators/PageBuilder'
import PageTitleBlock from '../../components/page-blocks/blocks/PageTitleBlock'
import diversityImage from './images/diversity.png'
import CustomBlock from "../../components/page-blocks/blocks/CustomBlock";
import {slugify, unSlugify} from "../../services/Utils";
import {withRouter} from "react-router-dom";

function DemographicDetail ({demographic}){

    return (
        <div id={slugify(demographic)}>
            <ol>
                {[1,2,3].map(item => (
                    <ol key={item}>Issues affecting {demographic} {item}</ol>
                ))}
            </ol>
        </div>
    );
}


function PeopleDetail(props) {

    const { match : { params : { demographic : demographicSlug }} } = props;
    const demographic = unSlugify(demographicSlug);

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
                    body: <DemographicDetail demographic={demographic}/>
                }
            },
        ]
    };

    return (<PageBuilder data={Data}/>)
}
export default withRouter(PeopleDetail);
