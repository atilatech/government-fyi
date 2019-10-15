import PropTypes from "prop-types";
import {Citations} from "../pages/1/expandables";
import React from "react";
import Citation from "../components/interactive/citation/citation";
import {
    FOREIGNERS,
    HOMEOWNERS,
    LOW_INCOME,
    OIL_WORKERS,
    RECENT_GRADS,
    STUDENTS,
    VISIBLE_MINORITY,
    WOMEN,
    YOUNG_PEOPLE
} from "./Constants";


export const PartyPlatformPropTypes = {
    text: PropTypes.PropTypes.oneOfType(
        [PropTypes.string, PropTypes.object])
        .isRequired,
    source: PropTypes.string,
    question: PropTypes.string,
    demographics: PropTypes.arrayOf(PropTypes.string),
};

export const JOBS_AND_ECONOMY = "Jobs and Economy";
export const ENERGY_AND_CLIMATE = "Energy and Climate";

export const ELECTION_TOPICS = [
    "Housing",
    JOBS_AND_ECONOMY,
    ENERGY_AND_CLIMATE,
    "Healthcare",
    "Immigration",
    "Taxes",
    "Seniors",
    "Education",
];

export const LIBERAL_HOUSING = {
    party: "Liberal",
    topic: "Housing",
    partyPlatforms: [
        {
            question: "How easy should it be for builders to build new homes?",
            text: "Make it harder for foreigners to speculate on Canadian real estate market through a speculation tax. [tk what is speculation tax?]",
            source: "https://www.bnnbloomberg.ca/trudeau-promises-new-speculation-tax-on-foreign-buyers-if-re-elected-1.1315217",
            demographics: [
                FOREIGNERS,
                HOMEOWNERS,
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
    topic: "Housing",
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

export const CONSERVATIVE_JOBS_AND_ECONOMY = {
    party: "Conservative",
    topic: "Jobs and Economy",
    partyPlatforms: [
        {
            text: "Improve “credential recognition” to make it easier for immigrants to get jobs, if they have equivalent skills.",
            demographics: ['immigrants', 'unemployed'],
        },
        {
            text: "End foreign oil imports and get pipelines built, including the Trans Mountain, which they claim will create “tens of thousands” of jobs.",
            demographics: [OIL_WORKERS],
        },
        {
            text: "Tax credit for young graduates who move to Quebec, matching an existing provincial credit",
            demographics: [RECENT_GRADS, STUDENTS, YOUNG_PEOPLE],
        }
    ],
};

export const LIBERAL_JOBS_AND_ECONOMY = {
    party: "Liberal",
    topic: "Jobs and Economy",
    partyPlatforms: [
        {
            text: "Raise the federal minimum wage to $15 per hour.",
            demographics: [LOW_INCOME,],
        },
        {
            text: "Add an additional $9 million over three years to help more visible minority newcomer women find work",
            demographics: [WOMEN, VISIBLE_MINORITY]
        },
        {
            text: (<span>Create a new federal <Citation data={Citations['1']}> Family Day holiday</Citation></span>),
        },
    ],
};


export const HOUSING_PLATFORMS = [CONSERVATIVE_HOUSING, LIBERAL_HOUSING, NDP_HOUSING];
export const JOBS_ECONOMY_PLATFORMS = [LIBERAL_JOBS_AND_ECONOMY, CONSERVATIVE_JOBS_AND_ECONOMY];

