import {Citations} from "../pages/1/expandables";
import React from "react";
import Citation from "../components/interactive/citation/citation";
import {CLIMATE_CONSCIOUS, OIL_WORKERS} from "./Constants";
import {ENERGY_AND_CLIMATE, HOUSING_PLATFORMS, JOBS_ECONOMY_PLATFORMS} from "./PartyPlatformData";

export const CONSERVATIVES_ENERGY_CLIMATE = {
    party: "Conservative",
    topic: ENERGY_AND_CLIMATE,
    partyPlatforms: [
        {
            text: "Cancel the carbon tax",
            source: "https://www.conservative.ca/cpc/build-the-pipe/",
            demographics: [
                OIL_WORKERS,
                CLIMATE_CONSCIOUS,
            ],
        },
        {
            text: "End the shipping ban in British Columbia",
            source: "https://www.conservative.ca/cpc/build-the-pipe/",
            demographics: [
                OIL_WORKERS,
            ],
        },
        {
            text: <span>
                Cancel
                <Citation data={Citations['1']}>
						Bill C-69
                </Citation>
            </span>,
            demographics: [
                OIL_WORKERS,
                CLIMATE_CONSCIOUS,
            ]
        }
    ],
};

export const LIBERALS_ENERGY_CLIMATE = {
    party: "Liberal",
    topic: ENERGY_AND_CLIMATE,
    partyPlatforms: [
        {
            text: "phase out coal power by 2030 to help exceed the Paris climate change agreement",
            source: "https://www.liberal.ca/liberals-move-forward-to-legislate-net-zero-emissions-by-2050/",
            demographics: [
                OIL_WORKERS,
                CLIMATE_CONSCIOUS,
            ],
        },
        {
            text: "Ban single use plastics",
            source: "https://www.liberal.ca/liberals-move-forward-to-legislate-net-zero-emissions-by-2050/",
        },
        {
            text: "Plant two billion trees over ten years",
            source: "https://www.liberal.ca/liberals-move-forward-to-plant-two-billion-trees/",
            demographics: [
                CLIMATE_CONSCIOUS,
            ]
        }
    ],
};

export const NDP_ENERGY_CLIMATE = {
    party: "NDP",
    topic: ENERGY_AND_CLIMATE,
    partyPlatforms: [
        {
            text: "Electrify transit fleets by 2030",
            source: "https://action.ndp.ca/page/-/2019/Q2/Power-to-change-full-announcement.pdf",
            demographics: [
                CLIMATE_CONSCIOUS,
            ],
        },
        {
            text: "Eliminate fossil fuel subsidies immediately and get Canada powered by net carbon-free electricity by 2030",
            demographics: [
                OIL_WORKERS,
            ],
        },
        {
            text: "Reducing Canada’s greenhouse gas emissions to 450 Mt by 2030",
            demographics: [
                CLIMATE_CONSCIOUS,
                OIL_WORKERS,
            ]
        },
        {
            text: "Ban all single-use plastics by 2022",
            source: "https://www.ndp.ca/news/ndp-lets-ban-single-use-plastics-2022",
            demographics: [
                CLIMATE_CONSCIOUS,
            ]
        }
    ],
};

export const GREEN_ENERGY_CLIMATE = {
    party: "Green",
    topic: ENERGY_AND_CLIMATE,
    partyPlatforms: [
        {
            text: "Reduce greenhouse gas emissions by 60 percent by 2030, zero emissions by 2050",
            source: "https://www.greenparty.ca/en/mission-possible",
            demographics: [
                OIL_WORKERS,
                CLIMATE_CONSCIOUS,
            ],
        },
        {
            text: "Ban fracking",
            demographics: [
                OIL_WORKERS,
                CLIMATE_CONSCIOUS,
            ],
        },
        {
            text: "Remove all fossil fuel generation from electrical grid by 3030",
            demographics: [
                OIL_WORKERS,
                CLIMATE_CONSCIOUS,
            ],
        },
        {
            text: "Replace all fuel cars with electric vehicles by 204",
            demographics: [
                OIL_WORKERS,
                CLIMATE_CONSCIOUS,
            ],
        },
        {
            text: "Build a cross-country electric vehicle charging system ",
            demographics: [
                OIL_WORKERS,
                CLIMATE_CONSCIOUS,
            ],
        },
    ],
};

export const BLOC_QUEBECOIS_ENERGY_CLIMATE = {
    party: "Bloc Quebecois",
    topic: ENERGY_AND_CLIMATE,
    partyPlatforms: [
        {
            text: "Reject the Energy East pipeline that would run through Quebec",
            source: "https://www.bnnbloomberg.ca/2019-federal-election-platform-tracker-where-the-major-parties-stand-so-far-1.1308714#ENERGY%20&%20ENVIRONMENT",
        },
        {
            text: "Give Quebec veto over any pipeline that runs through the province",
            source: "https://newsinteractives.cbc.ca/elections/federal/2019/party-platforms/",
        },
        {
            text: "End fossil fuel subsidies",
            source: "http://www.blocquebecois.org/wp-content/uploads/2019/10/Plateforme_Bloc2019_web-1.pdf",
        }
    ],
};

export const PEOPLES_ENERGY_CLIMATE = {
    party: "People's",
    topic: ENERGY_AND_CLIMATE,
    partyPlatforms: [
        {
            text: "Cancel Bill C-69",
            source: "https://www.bnnbloomberg.ca/2019-federal-election-platform-tracker-where-the-major-parties-stand-so-far-1.1308714#ENERGY%20&%20ENVIRONMENT",
        },
        {
            text: "Give Quebec veto over any pipeline that runs through the province",
            source: "https://newsinteractives.cbc.ca/elections/federal/2019/party-platforms/",
        },
        {
            text: <span>
                Privatize Trans Mountain.
                <Citation data={Citations['1']}>
						Why privatize Trans Mountain?
                </Citation>
            </span>,
            source: "https://www.peoplespartyofcanada.ca/pipelines_allowing_our_oil_and_gas_industry_to_grow",
        }
    ],
};


export const ENERGY_CLIMATE_PLATFORMS = [
    CONSERVATIVES_ENERGY_CLIMATE, LIBERALS_ENERGY_CLIMATE, NDP_ENERGY_CLIMATE,
    GREEN_ENERGY_CLIMATE, BLOC_QUEBECOIS_ENERGY_CLIMATE,PEOPLES_ENERGY_CLIMATE

];
export const ALL_PLATFORMS = [...HOUSING_PLATFORMS, ...JOBS_ECONOMY_PLATFORMS, ...ENERGY_CLIMATE_PLATFORMS];