import {EmojiLg} from "../components/static/iMessageStyles";
import Citation from "../components/interactive/citation/citation";
import {Citations} from "../pages/4/expandables";
import React from "react";
import {CitationsMaster, CLIMATE_CONSCIOUS, EDUCATION, OIL_WORKERS, STUDENTS} from "./Constants";

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
							Most people graduate with about{' '}
							<Citation data={CitationsMaster.StudentLoansDebt}>$28,00 in student loans</Citation>.
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

							You have the <Citation data={CitationsMaster.FreeTuitionCost}>
                $16.4 billion
        </Citation> to pay for that?
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
							You have a point though. I mean
            <Citation data={CitationsMaster.GermanyFreeTuition}>
                Germany has free tuition.
            </Citation>
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
                Increase Federal contribution to <Citation data={CitationsMaster.RESP}>
						RESP
                </Citation> from 30 percent to 20 percent

            </span>,
            source: "https://www.bnnbloomberg.ca/conservatives-promise-to-boost-federal-contribution-to-resp-to-30-1.1317404",
            demographics: [
                STUDENTS,
            ],
        },
    ],
};

export const LIBERALS_EDUCATION = {
    party: "Liberal",
    topic: EDUCATION,
    partyPlatforms: [
        {
            text: <span>Increase <Citation data={CitationsMaster.CanadaStudentGrant}>
						Canada Student Grant
                </Citation> by 40% and increase maximum annual amount from $3,000 to $4,200</span>,
            source: "https://www.pbo-dpb.gc.ca/web/default/files/Documents/ElectionProposalCosting/Results/33096593_EN.pdf?timestamp=1571158047327",
            demographics: [
                STUDENTS,
            ],
        },
        {
            text: <span>Increase the minimum income you need to qualify for
                <Citation data={CitationsMaster.RepaymentAssistancePlan}>
						Repayment Assistance Plan
                </Citation>
                from $25k to $35k for people with family size of one</span>,
            source: "https://www.liberal.ca/liberals-move-forward-to-legislate-net-zero-emissions-by-2050/",
        },
        {
            text: "Increase interest free non-repayment period from 6-months to 24-months for federal student loans",
            demographics: [
                STUDENTS,
            ]
        },
        {
            text: "Provide student borrowers with federal student loans with children that are aged 4 and under, an interest free non-repayment period until their youngest child turns 5",
            demographics: [
                STUDENTS,
            ]
        },
        {
            text: "Total net cost of above programs: $170 million in 2020 to $1 billion in 2024",
            source: "https://www.pbo-dpb.gc.ca/web/default/files/Documents/ElectionProposalCosting/Results/33096593_EN.pdf?timestamp=1571158047327",
        }
    ],
};

export const NDP_EDUCATION = {
    party: "NDP",
    topic: EDUCATION,
    partyPlatforms: [
        {
            text: "Remove interest on all current and future student loans,",
            source: "https://www.bnnbloomberg.ca/ndp-promises-to-remove-interest-on-federal-student-loans-1.1328344",
            demographics: [
                STUDENTS,
            ],
        },
    ],
};

export const GREEN_EDUCATION = {
    party: "Green",
    topic: EDUCATION,
    partyPlatforms: [
        {
            text: "Make college and university tuition free for all Canadian students",
            source: "https://www.greenparty.ca/en/platform/renew-social-contract#investing-in-post-secondary-education",
            demographics: [
                STUDENTS,
            ],
        },
        {
            text: "Forgive the federal government part of existing student loans for unemployed students or those earning less than $70k per year",
            demographics: [
                STUDENTS,
            ],
        },
        {
            text: "Remove the two per cent cap on increases in education funding for Indigenous students",
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
            text: "Create a French-speaking university in Ontario",
            source: "https://www.blocquebecois.org/wp-content/uploads/2019/10/Plateforme_Bloc2019_web-1.pdf",
        },
    ],
};

export const PEOPLES_EDUCATION = {
    party: "People's",
    topic: EDUCATION,
    partyPlatforms: [
        {
            text: "No specific proposals to date. ",
        },
        {
            text: <span>If you know some you can
                <a href="https://github.com/atilatech/government-fyi/wiki/Contributing-to-Government-FYI"
                   target="_blank"
                   rel="noopener noreferrer">
                contribute them here
                </a>.
            </span>,
        },
    ],
};


export const EDUCATION_PLATFORMS = [
    CONSERVATIVES_EDUCATION, LIBERALS_EDUCATION, NDP_EDUCATION,
    GREEN_EDUCATION, BLOC_QUEBECOIS_EDUCATION,PEOPLES_EDUCATION
];
