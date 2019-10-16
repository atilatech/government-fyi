import React from 'react'
import PageBuilder from '../../components/page-blocks/aggregators/PageBuilder'
import PageTitleBlock from "../../components/page-blocks/blocks/PageTitleBlock";
import CustomBlock from "../../components/page-blocks/blocks/CustomBlock";
import {Button} from "antd";
import SectionTitleBlock from "../../components/page-blocks/blocks/SectionTitleBlock";
import TextWithTitleBlock from "../../components/page-blocks/blocks/TextWithTitleBlock";

import { Col } from 'react-flexbox-grid';
const Data = {
    pageId:"print-guide-page",
    meta: {
        canonicalUrl:"https://www.ourgovernment.fyi/print/",
        documentTitle:"Printed guide – ourgovernment.fyi",
        socialHeadline:"Prefer a physical voter guide?",
        socialDescription:"Here's a beautiful guide you can print out.",
        socialImage:"printguide.png",
    },
    blocks: [
        {
            component: PageTitleBlock,
            data: {
                title: "Donate to OurGovernment.FYI",
                subtitle:
                    <span>
            Thank you for Supporting a good cause ❤️
          </span>,
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
}

export default () => (<PageBuilder data={Data}/>);
