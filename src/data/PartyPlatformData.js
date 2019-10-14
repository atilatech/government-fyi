import PropTypes from "prop-types";
import {Citations} from "../pages/1/expandables";
import React from "react";
import Citation from "../components/interactive/citation/citation";


export const PartyPlatformPropTypes = {
    text: PropTypes.string.isRequired,
    source: PropTypes.string,
    question: PropTypes.string,
    demographics: PropTypes.arrayOf(PropTypes.string),
};

export const LIBERAL_HOUSING = {
    party: "Liberal",
    issue: "housing",
    partyPlatforms: [
        {
            question: "How easy should it be for builders to build new homes?",
            text: "Make it harder for foreigners to speculate on Canadian real estate market through a speculation tax. [tk what is speculation tax?]",
            source: "https://www.bnnbloomberg.ca/trudeau-promises-new-speculation-tax-on-foreign-buyers-if-re-elected-1.1315217",
            demographics: [
                'foreigners',
                'investors',
                'homeowners'
            ]
        },
        {
            question: "How much of a role should the government play in helping people afford a home?",
            text: "Build 100,000 affordable homes over a decade and offer first-time home-buyer subsidies of 10 per cent on new home purchases and 5 per cent on resales — with restrictions.",
            source: "https://www.bnnbloomberg.ca/trudeau-promises-new-speculation-tax-on-foreign-buyers-if-re-elected-1.1315217",
        }
    ],
};
export const CONSERVATIVE_HOUSING = {
    party: "Conservative",
    partyPlatforms: [
        {
            question: "How easy should it be for builders to build new homes?",
            text: (<span><Citation data={Citations['1']}>
						Make it easier</Citation> to build new homes.
			[tk how specifically will they do that?]</span>),
        }
    ],
};
export const NDP_HOUSING = {
    party: "NDP",
    partyPlatforms: [
        {
            text: "New Democrats want to build 500,000 affordable housing units over 10 years;" +
                " before then, they propose a rental subsidy.",
        },
        {
            text: "NDP proposes a 15% extra tax on foreign buyers.",
        }
    ],
};