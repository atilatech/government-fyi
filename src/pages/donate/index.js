import React from 'react'
import PageBuilder from '../../components/page-blocks/aggregators/PageBuilder'
import PageTitleBlock from "../../components/page-blocks/blocks/PageTitleBlock";
import {Button} from "antd";
import TextWithTitleBlock from "../../components/page-blocks/blocks/TextWithTitleBlock";

import { Col } from 'react-flexbox-grid';
const Data = {
    pageId:"print-guide-page",
    meta: {
        canonicalUrl:"https://www.ourgovernment.fyi/print/",
        documentTitle:"Donate – Thank you for Supporting a good cause  ❤️ - ourgovernment.fyi",
        socialHeadline:"Donate – Thank you for Supporting a good cause  ❤️ - ourgovernment.fyi",
        socialDescription:"Donate – Thank you for Supporting a good cause  ❤️ - ourgovernment.fyi",
        socialImage:"printguide.png",
    },
    blocks: [
        {
            component: PageTitleBlock,
            data: {
                title: "Donate to OurGovernment.FYI",
                subtitle: "Thank you for Supporting a good cause ❤️",
            }
        },
        {
            component: TextWithTitleBlock,
            data:{
                title: "Paypal",
                text:
                    <Col lgOffset={6}>
                        <Button
                            type="primary"
                            href="https://paypal.me/TomiwaAdemidun"
                            target="_blank"
                            rel="noopener noreferrer" >
                            Donate with Paypal
                        </Button>
                    </Col>
            }
        },
    ]
};

export default () => (<PageBuilder data={Data}/>);
