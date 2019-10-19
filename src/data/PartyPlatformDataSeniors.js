import React from "react";

import { SENIORS } from "./Constants";

export const CONSERVATIVE_SENIORS = {
    party: "Conservative",
    topic: "Seniors",
    partyPlatforms: [
        {
            
            text: "Promises to increase the Age Tax Credit by $1,000, available to seniors making less than $87,750",
            source: "https://www.conservative.ca/andrew-scheer-will-give-more-support-to-seniors/",
        },
        {
            text: "Make federally regulated companies disclose the solvency of their pension funds and allow for transfers from pension plans",
            source: "https://www.theglobeandmail.com/business/article-conservatives-target-executive-payouts-in-bankrupt-companies-with/",
        },
    ],
};

export const LIBERAL_SENIORS = {
    party: "Liberal",
    topic: "Seniors",
    partyPlatforms: [
        {
            text: "Boost Old Age Security at age 75 by 10%",
            source: "https://globalnews.ca/news/5917725/liberals-old-age-security-cpp-trdueau/",
        },
        {
            text: "Increase the Canada Pension Plan by 25% for widows and widowers",
            source: "https://globalnews.ca/news/5917725/liberals-old-age-security-cpp-trdueau/",
        },
        {
            text: "Want to adjust the Criminal Code with new penalties for elder abuse and to collect better data on how widespread it is",
            source: "https://2019.liberal.ca/our-platform/elder-abuse/",
        },
    ],
};
export const NDP_SENIORS = {
    party: "NDP",
    topic: "Seniors",
    partyPlatforms: [
        {
            text: "Create a national seniors strategy, which would include a strategy for dementia and a prevention plan for elder abuse",
            source: "https://www.ndp.ca/news/ndp-statement-national-seniors-day-0",
        },
        {
            text: "Make the Caregiver Tax Credit refundable, to help those who look after seniors",
            source: "https://business.financialpost.com/personal-finance/taxes/these-are-the-tax-proposals-that-could-affect-your-bottom-line-this-election",
            
        },
    ],
};
export const GREEN_SENIORS = {
    party: "Green",
    topic: "Seniors",
    partyPlatforms: [
        {
            text: "Develop a national seniors strategy that includes a national dementia strategy",
            source: "https://www.greenparty.ca/en/statement/2019-10-01/green-party-statement-seniors-day",
        },
        {
            text: "Wants more long-term care beds in neighbourhood facilities",
            source: "https://www.greenparty.ca/en/platform/renew-social-contract#respecting-and-supporting-seniors",
        },
        {
            text: "Boost the CPP’s target income replacement rate from 25 to 50% of income made",
            source: "https://www.greenparty.ca/en/platform/renew-social-contract#respecting-and-supporting-seniors",
        },
    ],
};
export const BLOC_QUEBECOIS_SENIORS = {
    party: "Bloc Quebecois",
    topic: "Seniors",
    partyPlatforms: [
        {
            text: "Make the Caregiver Tax Credit refundable",
            source: "https://election.ctvnews.ca/security-housing-pharmacare-this-is-what-each-party-is-promising-seniors-1.4618897",
        },
        {
            text: "Wants anyone 65 and older automatically enrolled in the guaranteed income supplement and increase the supplement",
            source: "https://election.ctvnews.ca/security-housing-pharmacare-this-is-what-each-party-is-promising-seniors-1.4618897",
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

