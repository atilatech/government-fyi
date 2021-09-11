import {Citations} from "../pages/1/expandables";
import React from "react";
import Citation from "../components/interactive/citation/citation";
import {CLIMATE_CONSCIOUS, ENERGY_AND_CLIMATE, OIL_WORKERS} from "./Constants";
import { ALL_CITATIONS } from "./Citations";
import {EmojiLg} from "../components/static/iMessageStyles";

export const CONSERVATIVES_ENERGY_CLIMATE = {
    party: "Conservative",
    topic: ENERGY_AND_CLIMATE,
    partyPlatforms: [
        {
            text: "Introduce a zero emissions vehicle rule based on the one in British Columbia: 30% of light duty vehicles sold must be zero emissions by 2030.",
            sources_details: [
                {
                    url: "https://cpcassets.conservative.ca/wp-content/uploads/2021/04/15104504/24068610becf2561.pdf#page=5",
                    title: "Secure the Environment"
                }
            ]
        },
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
                <Citation data={ALL_CITATIONS.BillC69}>
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
            text: "Eliminate fossil fuel subsidies from 2025 to 2023 and phase-out government funding of the fossil fuel industr, including from Crown corporations (companies owned by the government). This is part of the Liberals' plans to reach net-zero emissions by 2050",
            sources_details: [
                {
                    url: "https://liberal.ca/our-platform/eliminating-subsidies-and-public-financing-for-fossil-fuel/",
                    title: "Eliminating Subsidies and Public Financing for Fossil Fuel"
                }
            ]
        },
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
            text: "Replace all fuel cars with electric vehicles by 2040",
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

export const ENERGY_CLIMATE_CARBON_TAX_CONVERSATION = [
    {
        from: "them",
        body:<span>
							Hey, so oil is
								<Citation data={ALL_CITATIONS.OilAndEnvironment}> really bad for the environment </Citation>
						</span>
    },
    {
        from: "me",
        body:"k."
    },
    {
        from: "me",
        body:"So what do you want me to do about it?"
    },
    {
        from: "them",
        body:<span>How about if you use things that damage the environment you have to pay
						an extra tax?</span>
    },
    {
        from:"me",
        body:<span>woah, relax. That's going to cost me like
							<Citation data={ALL_CITATIONS.CarbonTaxCost}> $200-$400 </Citation>
						</span>
    },
    {
        from:"me-no-bg",
        body:<EmojiLg><span role="img" aria-label="money fly emoji">💸</span></EmojiLg>
    },
    {
        from:"them",
        body:<span>But this our planet we're talking about.
						</span>
    },
    {
        from:"them",
        body:<span>$200 is a small price to pay if it means saving our planet
						</span>
    },
    {
        from:"me",
        body:<span>Wait, How do you even know it's going to save our planet?
						</span>
    },
    {
        from:"me",
        body:<span>Apparently{' '}
            <Citation data={ALL_CITATIONS.CarbonTaxNotEffective}>carbon tax only reduces emissions by 2%</Citation>.
						</span>
    },
    {
        from: "them",
        body:"It depends how you look at it."
    },
    {
        from:"them",
        body:<span>
							I mean
							<Citation data={ALL_CITATIONS.CarbonTaxIsEffective}>
								27 Nobel Laureate economists released a statement saying that a Carbon tax
								is the most effective way of lowering emissions
							</Citation>.
						</span>
    },
    {
        from: "me",
        body:"Wait isn't that just an appeal to authority? That's a logical fallacy!"
    },
    {
        from: "them",
        body:"I see what you mean but I think, it's an indication that very smart people have studied this."
    },
    {
        from: "them",
        body:"And realized that this is one of the best options we have to save the Earth."
    },
    {
        from:"them-no-bg",
        body:<span>Earth has entered the conversation</span>
    },
    {
        from:"them-no-bg",
        body:<EmojiLg><span role="img" aria-label="earth emoji">🌏</span></EmojiLg>
    },

]