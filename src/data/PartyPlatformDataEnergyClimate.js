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
            ],
            demographics: [
                OIL_WORKERS,
                CLIMATE_CONSCIOUS,
            ],
        },
        {
            text: "Make sure the oil and gas sector reduces emissions at a rate needed to achieve net-zero by 2050, with 5-year targets to stay on track to achieving this shared goal", //TODO add Citation explaining what net-zero means
            source: "https://liberal.ca/our-platform/cap-and-cut-emissions-from-oil-and-gas/#:~:text=Make%20sure%20the%20oil%20and%20gas%20sector%20reduces%20emissions%20at%20a%20pace%20and%20scale%20needed%20to%20achieve%20net-zero%20by%202050%2C%20with%205-year%20targets%20to%20stay%20on%20track%20to%20achieving%20this%20shared%20goal",
            demographics: [
                OIL_WORKERS,
                CLIMATE_CONSCIOUS,
            ],
        },
        {
            text: "Require that all plastic packaging in Canada contain at least 50% recycled content by 2030.",
            source: "https://liberal.ca/our-platform/zero-plastic-waste-by-2030/",
        },
        {
            text: "Plant two billion trees over ten years",
            source: "https://liberal.ca/our-platform/natural-climate-solutions/#:~:text=planting%202%20billion%20trees%20across%20the%20country",
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
            text: "Ban the sale of all passenger cars powered by gas by 2030.",
            source: "https://www.greenparty.ca/en/platform/green-future#:~:text=Ban%20the%20sale%20of%20all%20internal%20combustion%20engine%20passenger%20vehicles%20by%202030%2C%20and%20expand%20charging%20stations%20for%20electric%20vehicles%2C%20including%20charging%20stations%20in%20smaller%20communities%20and%20rural%20areas.%C2%A0",
        },
        {
            text: "Expand charging stations for electric vehicles, including charging stations in smaller communities and rural areas.",
            source: "https://www.greenparty.ca/en/platform/green-future#:~:text=Ban%20the%20sale%20of%20all%20internal%20combustion%20engine%20passenger%20vehicles%20by%202030%2C%20and%20expand%20charging%20stations%20for%20electric%20vehicles%2C%20including%20charging%20stations%20in%20smaller%20communities%20and%20rural%20areas.%C2%A0",
        },
        {
            text: "No construction of new oil and gas pipelines and exploration projects, including in the offshore. End the expansion of the federally owned Trans Mountain pipeline.",
            source: "https://www.macleans.ca/rankings/2021-federal-election-platform-guide/#:~:text=No%20construction%20of%20new%20oil%20and%20gas%20pipelines%2C%20including%20an%20end%20to%20the%20federally%20owned%20Trans%20Mountain%20pipeline%20expansion.",
            sources_details: [
                {
                    title: "Green Party opposes the construction of any new gas or oil pipelines in Quebec",
                    url: "https://www.greenparty.ca/en/media-release/2021-05-11/green-party-opposes-construction-any-new-gas-or-oil-pipelines-quebec"
                },
                {
                    title: "A Green Future",
                    url: "https://www.greenparty.ca/en/platform/green-future#:~:text=Cancel%20all%20new%20oil%20exploration%20projects%2C%20including%20in%20the%20off-shore"
                },
            ],
            demographics: [
                OIL_WORKERS,
            ],
        },
        {
            text: <>Ban <Citation data={ALL_CITATIONS.FRACKING}>Fracking</Citation>  and end all subsidies to the fossil fuel sector</>,
            source: "https://www.greenparty.ca/en/platform/green-future#:~:text=Ban%20hydraulic%20fracturing%20(fracking)",
            demographics: [
                OIL_WORKERS,
            ],
        },
        {
            text: "Require federal public investment funds (including the Canada Pension Plan Investment Board) to divest from fossil fuels",
            source: "https://www.greenparty.ca/en/platform/green-future#:~:text=Require%20federal%20public%20investment%20funds%20(including%20the%20Canada%20Pension%20Plan%20Investment%20Board)%20to%20divest%20from%20fossil%20fuels",
            demographics: [
                OIL_WORKERS,
            ],
        },
        {
            text: "Beginning in 2022 and up to 2030, increase carbon taxes by $25 per tonne each year.",
            source: "https://www.greenparty.ca/en/platform/green-future#:~:text=Beginning%20in%202022%20and%20up%20to%202030%2C%20increase%20carbon%20taxes%20by%20%2425%20per%20tonne%20each%20year.%C2%A0",
            demographics: [
                OIL_WORKERS,
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

ENERGY_CLIMATE_PLATFORMS
    .filter(platform =>platform.party!=="People's")
    .forEach(platform => {

        platform.partyPlatforms.forEach( idea => {

            if (!idea.demographics) {
                idea.demographics = []
            }
            idea.demographics.push(CLIMATE_CONSCIOUS)
        })
    });

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