import {CitationsMaster, FOREIGNERS, HOMEOWNERS} from "./Constants";
import Citation from "../components/interactive/citation/citation";
import {Citations} from "../pages/4/expandables";
import React from "react";

export const LIBERAL_HOUSING = {
    party: "Liberal",
    topic: "Housing",
    partyPlatforms: [
        {
            text: "Make it harder for foreigners to speculate on Canadian real estate market through a speculation tax. [tk what is speculation tax?]",
            source: "https://www.bnnbloomberg.ca/trudeau-promises-new-speculation-tax-on-foreign-buyers-if-re-elected-1.1315217",
            demographics: [
                FOREIGNERS,
                HOMEOWNERS,
            ]
        },
        {
            text: "Build 100,000 affordable homes over a decade and offer first-time home-buyer subsidies of 10 per cent on new home purchases and 5 per cent on resales — with restrictions.",
            source: "https://www.bnnbloomberg.ca/trudeau-promises-new-speculation-tax-on-foreign-buyers-if-re-elected-1.1315217",
        }
    ],
};
export const CONSERVATIVE_HOUSING = {
    party: "Conservative",
    topic: "Housing",
    partyPlatforms: [
        {
            text: <span>Increase <Citation data={CitationsMaster.RESP}>mortgage term length</Citation> to 30 years for first-time homebuyers</span>,
            source: "https://www.conservative.ca/andrew-scheer-announces-four-point-plan-to-make-home-ownership-more-affordable/",
        }
    ],
};
export const NDP_HOUSING = {
    party: "NDP",
    topic: "Housing",
    partyPlatforms: [
        {
            text: "New Democrats want to build 500,000 affordable housing units over 10 years;" +
                " before then, they propose a rental subsidy.",
        },
        {
            text: "NDP proposes a 15% extra tax on foreign buyers.",
            demographics: [FOREIGNERS]
        }
    ],
};
export const HOUSING_PLATFORMS = [CONSERVATIVE_HOUSING, LIBERAL_HOUSING, NDP_HOUSING];