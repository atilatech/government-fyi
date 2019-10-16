import {CitationsMaster, CLIMATE_CONSCIOUS, FOREIGNERS, HOMEOWNERS} from "./Constants";
import Citation from "../components/interactive/citation/citation";
import React from "react";

export const CONSERVATIVE_HOUSING = {
    party: "Conservative",
    topic: "Housing",
    partyPlatforms: [
        {
            text: <span>Increase <Citation data={CitationsMaster.MortgageTermCalculator}>mortgage term length</Citation> to 30 years for first-time homebuyers</span>,
            source: "https://www.conservative.ca/andrew-scheer-announces-four-point-plan-to-make-home-ownership-more-affordable/",
        },
        {
            text: "Reduce the number of criteria you have to qualify to buy a home. Remove the criteria for mortgage renewals",
        },
        {
            text: "Make extra federal land available for building more houses",
        },
        {
            text: "implement a 20 per cent green homes tax credit for up to $20,000 spent" +
                " over two years to pay for energy-saving renovations",
            demographics: [
                CLIMATE_CONSCIOUS,
            ]
        }
    ],
};

export const LIBERAL_HOUSING = {
    party: "Liberal",
    topic: "Housing",
    partyPlatforms: [
        {
            text: <span>Make it harder for foreigners to speculate on Canadian real estate market through a{' '}
                <Citation data={CitationsMaster.SpeculationTax}>
                speculation tax.
                </Citation>
            </span>,
            source: "https://www.bnnbloomberg.ca/trudeau-promises-new-speculation-tax-on-foreign-buyers-if-re-elected-1.1315217",
            demographics: [
                FOREIGNERS,
            ]
        },
        {
            text: "Build 100,000 affordable homes over a decade and offer first-time home-buyer subsidies of 10 per cent on new home purchases and 5 per cent on resales — with restrictions.",
            source: "https://2019.liberal.ca/wp-content/uploads/sites/292/2019/09/cutting-home-energy-bills-and-pollution.pdf",
            demographics: [
                HOMEOWNERS,
            ]
        },
        {
            text: "offer interest-free loans up to $40,000 to homeowners and landlords to make houses weather-resilient",
            source: "https://2019.liberal.ca/wp-content/uploads/sites/292/2019/09/cutting-home-energy-bills-and-pollution.pdf"
        },
        {
            text: "retrofit 1.5 million homes for energy efficiency over 5 years",
            source: "https://2019.liberal.ca/wp-content/uploads/sites/292/2019/09/cutting-home-energy-bills-and-pollution.pdf",
            demographics: [
                CLIMATE_CONSCIOUS,
            ]
        },
        {
            text: "Make Energy Star certification mandatory for new appliances in homes by 2022",
            demographics: [
                CLIMATE_CONSCIOUS,
            ]
        },
        {
            text: "Provide 5-10% down payment for first-time home buyers in Victoria," +
                " Vancouver and Toronto to buy a new home. The maximum value for a qualifying home will increase from" +
                " $500,000 to about $800,000",
            source: "https://globalnews.ca/video/5893882/liberal-leader-trudeau-makes-campaign-announcement-on-housing-affordability"
        }
    ],
};
export const NDP_HOUSING = {
    party: "NDP",
    topic: "Housing",
    partyPlatforms: [
        {
            text: "Build 500,000 affordable housing units over 10 years",
            source: "https://action.ndp.ca/page/-/2019/Q4/PDF%20assets/NDP-TheFiscalPlan-EN-PRINT.pdf#page=3",
        },
        {
            text: "Removing GST from New Rental Buildings",
            source: "https://www.ndp.ca/news/jagmeet-singh-lets-build-half-million-affordable-housing-units",
        },
        {
            text: "NDP proposes a 15% extra tax on foreign buyers.",
            source: "https://vancouversun.com/news/local-news/ndp-leader-jagmeet-singh-in-vancouver-and-port-moody",
            demographics: [FOREIGNERS]
        },
        {
            text: "Increase mortgage term length to 30 years for first-time homebuyers",
            source: "https://globalnews.ca/news/4981158/ndp-leader-jagmeet-singh-proposes-new-housing-measures/",
        }
    ],
};
export const GREEN_HOUSING = {
    party: "Green",
    topic: "Housing",
    partyPlatforms: [
        {
            text: "$750 million for rent assistance for 125,000 households",
            souce: "https://www.greenparty.ca/en/platform/renew-social-contract",
        },
        {
            text: "Provide support to the co-operative housing sector at a total cost of $950 million"
        },
        {
            text: "Provide incentives of $250 million to convert existing properties to rentals by 2025"
        },
        {
            text: "Legislate housing as a legally protected fundamental human right for all Canadians and permanent residents"
        }
    ],
};
export const BLOC_QUEBECOIS_HOUSING = {
    party: "Bloc Quebecois",
    topic: "Housing",
    partyPlatforms: [
        {
            text: "Invest $400 million in social housing",
            souce: "https://www.blocquebecois.org/familles-et-citoyens/",
        },
    ],
};
export const PEOPLES_HOUSING = {
    party: "People's",
    topic: "Housing",
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

export const HOUSING_PLATFORMS = [CONSERVATIVE_HOUSING, LIBERAL_HOUSING, NDP_HOUSING,
    GREEN_HOUSING, BLOC_QUEBECOIS_HOUSING, PEOPLES_HOUSING];
HOUSING_PLATFORMS
    .filter(platform =>platform.party!=="People's")
    .forEach(platform => {

    platform.partyPlatforms.forEach( idea => {

        if (!idea.demographics) {
            idea.demographics = []
        }
        idea.demographics.push(HOMEOWNERS)
    })
});
