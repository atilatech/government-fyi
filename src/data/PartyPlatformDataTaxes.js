import Citation from "../components/interactive/citation/citation";
import {Citations} from "../pages/4/expandables";
import React from "react";
import {CLIMATE_CONSCIOUS, IMMIGRANTS, TAXES, STUDENTS} from "./Constants";
import {EmojiLg} from "../components/static/iMessageStyles";

export const TAXES_CONVERSATION_MESSAGES = [
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

export const CONSERVATIVES_TAXES = {
    party: "Conservative",
    topic: TAXES,
    partyPlatforms: [
        {
            text: "Put an end to illegal border crossings at unofficial points of entry like Roxham Road",
            source: "https://www.conservative.ca/cpc/andrew-scheers-TAXES-plan/",
        },
        {
            text: <span>
                Close the loophole in the
                <Citation data={Citations.SafeThirdCountryAct}>
						Safe Third Country Act
                </Citation>
                that
                "allows some people to skip the line and avoid the queue"
            </span>
            ,
        },
        {
            text: "Work to reunite survivors of genocide, who have already resettled in Canada, more expeditiously",
        },
        {
            text: "Bring back the Office of Religious Freedom so that we can protect our shared humanity and promote interest in the dignity of all people",
        },
        {
            text: "Promote the private sponsorship of refugees",
        },
        {
            text: "Hire 250 additional border officers",
            source: "https://www.bnnbloomberg.ca/scheer-pledges-to-close-roxham-road-loophole-in-TAXES-plan-1.1328932"
        }
    ],
};

export const LIBERALS_TAXES = {
    party: "Liberal",
    topic: TAXES,
    partyPlatforms: [
        {
            text: "Create a Municipal Nominee Program. Allow local community organizations to directly sponsor permanent immigrants.",
            source: "https://2019.liberal.ca/our-platform/more-help-for-communities/",
        },
        {
            text: "Make the Atlantic TAXES Pilot (AIP) permanent." +
                "AIP allows Atlantic provinces (Nova Scotia, New Brunswic, Newfoundland, PEI" +
                " to hire foreigners for jobs they can't fill with a fast track application.",
        },
        {
            text: "Make the application process for becoming a Canadian citizen free",
            source: "https://2019.liberal.ca/our-platform/a-more-affordable-path-to-citizenship/",
        }
    ],
};

export const NDP_TAXES = {
    party: "NDP",
    topic: TAXES,
    partyPlatforms: [
        {
            text: "Suspend the Safe Third Country agreement with the United States",
            source: "https://www.ndp.ca/communities?focus=13934157",
        },
        {
            text: "end the cap on applications to sponsor parents and grandparents",
        },
        {
            text: "increase the TAXES transfer to Quebec by $73 million," +
                " from $490 million to $563 million per year." +
                " This Money will be used to help newcomers integrate into French language and Quebec culture",
        },
    ],
};

export const GREEN_TAXES = {
    party: "Green",
    topic: TAXES,
    partyPlatforms: [
        {
            text: "Create a new refugee category called “environmental refugees,”" +
                " and accept an appropriate share of the world’s environmental refugees",
            source: "https://www.greenparty.ca/en/platform/green-economy#TAXES",
            demographics: [
                CLIMATE_CONSCIOUS,
            ],
        },
        {
            text: "Establish a program to process the estimated 200,000 people living in Canada without official status, providing a pathway to permanent residency for those who qualify.",
        },
        {
            text: "Terminate Canada’s Safe Third Country Agreement with the United States",
        },
        {
            text: "Improve the pathway for international students and foreign workers to Canadian permanent residency and citizenship.",
            demographics: [
                STUDENTS
            ]
        },
    ],
};

export const BLOC_QUEBECOIS_TAXES = {
    party: "Bloc Quebecois",
    topic: TAXES,
    partyPlatforms: [
        {
            text: "Ensure that people applying for citizenship in Quebec have sufficient french knowledge",
            source: "http://www.blocquebecois.org/wp-content/uploads/2019/10/Plateforme_Bloc2019_web-1.pdf",
        },
        {
            text: "Give Quebec final say on any federal decision to expel refugees",
        },
        {
            text: "Allow Quebec to impose conditions on Granting permanent residence",
            source: "http://www.blocquebecois.org/2019/10/des-mesures-pour-contrer-la-penurie-de-main-doeuvre-en-region/",
        },
        {
            text: "Suspend Canada’s Safe Third Country Agreement with the U.S."
        }

    ],
};

export const PEOPLES_TAXES = {
    party: "People's",
    topic: TAXES,
    partyPlatforms: [
        {
            text: "Reduce total number of immigrants in Canada every year from 350,000 to 125,000 ",
            source: "https://www.peoplespartyofcanada.ca/TAXES_reducing_overall_levels_and_prioritizing_skilled_immigrants",
        },
        {
            text: "Reform the TAXES point system to accept a larger proportion of economic immigrants",
        },
        {
            text: "Accept fewer resettled refugees, limit the number of immigrants accepted" +
                " under the family reunification program, abolish the program for parents and grand-parents"
        }
    ],
};


export const TAXES_PLATFORMS = [
    CONSERVATIVES_TAXES, LIBERALS_TAXES, NDP_TAXES,
    GREEN_TAXES, BLOC_QUEBECOIS_TAXES,PEOPLES_TAXES
];
