import {EmojiLg} from "../components/static/iMessageStyles";
import Citation from "../components/interactive/citation/citation";
import {Citations} from "../pages/4/expandables";
import React from "react";
import {CLIMATE_CONSCIOUS, EDUCATION, OIL_WORKERS} from "./Constants";

export const EDUCATION_CONVERSATION_MESSAGES = [
    {
        from: "me",
        body: <span>I'm graduating soon </span>,
    },
    {
        from:"me-no-bg",
        body:<EmojiLg><span role="img" aria-label="crying emoji">😭</span></EmojiLg>
    },
    {
        from: "them",
        body: "You should be celebrating. Why the crying face?",
    },
    {
        from: "me",
        body: "I realized that I'm graduating with over $20,000 in student loans"
    },
    {
        from: "me",
        body: "And I have to start paying it back 6 months after I graduate."
    },
    {
        from: "me",
        body: "Also, I don't have a job lined up for when I leave school."
    },
    {
        from: "them",
        body: "Well it could be worse"
    },
    {
        from: "them",
        body: <span>
							Most people graduate with about
							<Citation data={Citations['7']}>$28,00 in student loans</Citation>.
						</span>
    },
    {
        from: "me",
        body: "Not helping 🙄"
    },
    {
        from: "them",
        body: "Look on the bright side, I heard that some parties were talking about forgiving student loans"
    },
    {
        from: "me",
        body: "Forgiving student loans? "
    },
    {
        from: "me",
        body: "I like the sound of that 😁"
    },
    {
        from:"me-no-bg",
        body:<EmojiLg><span role="img" aria-label="thinking emoji">🤔</span></EmojiLg>
    },
    {
        from: "me",
        body: "But Wait, what about the people that worked hard to pay their student loans"
    },
    {
        from: "them",
        body: "Unfortunately, we can't change the past."
    },
    {
        from: "them",
        body: "The most important thing now is making sure future students " +
            "aren't crushed with debt when they graduate."
    },
    {
        from: "me",
        body: "hmm, I see what you mean"
    },
    {
        from: "me",
        body: "But what happens the next year. Back to square one?"
    },
    {
        from: "me",
        body: "Why not just make university tuition free?"
    },
    {
        from: "them",
        body: <span>chill, that would be way too expensive.

							You have the <Citation data={Citations['7']}>$10.6 billion</Citation> to pay for that?
						</span>
    },
    {
        from: "them",
        body: "You can't even afford your $20,000 student loan . 😂"
    },
    {
        from:"me-no-bg",
        body:<EmojiLg><span role="img" aria-label="angry emoji">😡</span></EmojiLg>
    },
    {
        from: "them",
        body: "Sorry, I got carried away 😂"
    },
    {
        from: "them",
        body: <span>
							You have a point though. I mean <Citation data={Citations['7']}>Germany has free tuition.</Citation>
							Even for international students.
						</span>
    },
    {
        from: "me",
        body: "btw...One more thing..."
    },
    {
        from: "me",
        body: "Can I have a job? 😁"
    },
];


export const CONSERVATIVES_EDUCATION = {
    party: "Conservative",
    topic: EDUCATION,
    partyPlatforms: [
        {
            text: <span>
                Increase Federal contribution to <Citation data={Citations.whatIsResp}>
						RESP
                </Citation> from 30 percent to 20 percent

            </span>,
            source: "https://www.bnnbloomberg.ca/conservatives-promise-to-boost-federal-contribution-to-resp-to-30-1.1317404",
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

export const LIBERALS_EDUCATION = {
    party: "Liberal",
    topic: EDUCATION,
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

export const NDP_EDUCATION = {
    party: "NDP",
    topic: EDUCATION,
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

export const GREEN_EDUCATION = {
    party: "Green",
    topic: EDUCATION,
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

export const BLOC_QUEBECOIS_EDUCATION = {
    party: "Bloc Quebecois",
    topic: EDUCATION,
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

export const PEOPLES_EDUCATION = {
    party: "People's",
    topic: EDUCATION,
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


export const EDUCATION_PLATFORMS = [
    CONSERVATIVES_EDUCATION, LIBERALS_EDUCATION, NDP_EDUCATION,
    GREEN_EDUCATION, BLOC_QUEBECOIS_EDUCATION,PEOPLES_EDUCATION
];
