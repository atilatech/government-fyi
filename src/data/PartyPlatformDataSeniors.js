import React from "react";

import { HOMEOWNERS, SENIORS } from "./Constants";

export const CONSERVATIVE_SENIORS = {
    party: "Conservative",
    topic: "Seniors",
    partyPlatforms: [
        {
            
            text: "Promises to increase the Age Tax Credit by $1,000, available to seniors making less than $87,750"
        },
        {
            text: "Promises to keep old age security at 65",
        },
        {
            text: "Make federally regulated companies disclose the solvency of their pension funds and allow for transfers from pension plans",
        },
    ],
};

export const LIBERAL_SENIORS = {
    party: "Liberal",
    topic: "Seniors",
    partyPlatforms: [
        {
            text: "Boost Old Age Security at age 75 by 10%",
        },
        {
            text: "Increase the Canada Pension Plan by 25% for widows and widowers",
        },
        {
            text: "Want to adjust the Criminal Code with new penalties for elder abuse and to collect better data on how widespread it is",
        },
    ],
};
export const NDP_SENIORS = {
    party: "NDP",
    topic: "Seniors",
    partyPlatforms: [
        {
            text: "Create a national seniors strategy, which would include a strategy for dementia and a prevention plan for elder abuse",
        },
        {
            text: "Make the Caregiver Tax Credit refundable, to help those who look after seniors",
            
        },
        {
            text: "Make automatic enrollment in the Old Age Security and the Guaranteed Income Supplement retroactive",
        },
    ],
};
export const GREEN_SENIORS = {
    party: "Green",
    topic: "Seniors",
    partyPlatforms: [
        {
            text: "Develop a national seniors strategy that includes a national dementia strategy",
        },
        {
            text: "Wants more long-term care beds in neighbourhood facilities"
        },
        {
            text: "Boost the CPP’s target income replacement rate from 25 to 50% of income made"
        },
    ],
};
export const BLOC_QUEBECOIS_SENIORS = {
    party: "Bloc Quebecois",
    topic: "Seniors",
    partyPlatforms: [
        {
            text: "Make the Caregiver Tax Credit refundable",
        },
        {
            text: "Wants anyone 65 and older automatically enrolled in the guaranteed income supplement and increase the supplement",
        },
    ],
};
export const PEOPLES_SENIORS = {
    party: "People's",
    topic: "SENIORS",
    partyPlatforms: [
        {
            text: "No specific proposals to date. ",
        },
        {
            text: <span>If you know some you can{' '}
                <a href="https://github.com/atilatech/government-fyi/wiki/Contributing-to-Government-FYI"
                    target="_blank"
                    rel="noopener noreferrer">
                    contribute them here
                </a>.
            </span>,
        },
    ],
};

export const SENIORS_PLATFORMS = [CONSERVATIVE_SENIORS, LIBERAL_SENIORS, NDP_SENIORS,
    GREEN_SENIORS, BLOC_QUEBECOIS_SENIORS, PEOPLES_SENIORS];

SENIORS_PLATFORMS
    .filter(platform => platform.party !== "People's")
    .forEach(platform => {

        platform.partyPlatforms.forEach(idea => {

            if (!idea.demographics) {
                idea.demographics = []
            }
            idea.demographics.push(SENIORS)
        })
    });

