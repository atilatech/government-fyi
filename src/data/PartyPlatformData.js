import PropTypes from "prop-types";


export const PartyPlatformPropTypes = {
    text: PropTypes.string.isRequired,
    source: PropTypes.string,
    question: PropTypes.string,
    demographics: PropTypes.arrayOf(PropTypes.string),
};

export const LIBERALS_HOUSING = {
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