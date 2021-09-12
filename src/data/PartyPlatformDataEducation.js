import {EmojiLg} from "../components/static/iMessageStyles";
import Citation from "../components/interactive/citation/citation";
import React from "react";
import {CONTRIBUTION_INSTRUCTIONS_LINK, EDUCATION, INDIGENOUS, PARENTS, STUDENTS} from "./Constants";
import { ALL_CITATIONS } from "./Citations";

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
							<Citation data={ALL_CITATIONS.StudentLoansDebt}>$28,00 in student loans</Citation>.
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

							You have the <Citation data={ALL_CITATIONS.FreeTuitionCost}>
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
            <Citation data={ALL_CITATIONS.GermanyFreeTuition}>
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
            text: "Replace Liberal government child-care funding deals with a refundable tax credit of between $4,560 and $6,000",
            source: "https://www.bnnbloomberg.ca/2021-federal-election-platform-tracker-where-each-party-stands-so-far-1.1639592#:~:text=Liberal%20government%20child-care%20funding%20deals%20in%20favour%20of%20a%20refundable%20tax%20credit%20of%20between%20%244%2C560%20and%20%246%2C000",
            demographics: [
                PARENTS,
            ],
        },
        {
            text: <span>
                Increase Federal contribution to <Citation data={ALL_CITATIONS.RESP}>
						RESP
                </Citation> from 20 percent to 30 percent

            </span>,
            source: "https://www.bnnbloomberg.ca/conservatives-promise-to-boost-federal-contribution-to-resp-to-30-1.1317404",
        },
    ],
};

export const LIBERALS_EDUCATION = {
    party: "Liberal",
    topic: EDUCATION,
    partyPlatforms: [
        {
            text: "Reduce child care fees to $10 per day within the next five years(does not include Québec)",
            source: "https://www.bnnbloomberg.ca/2021-federal-election-platform-tracker-where-each-party-stands-so-far-1.1639592#:~:text=Reduce%20child%20care%20fees%20to%20%2410%20per%20day%20on%20average%20within%20next%20five%20years%20%E2%80%93%20everywhere%20outside%20of%20Que.",
        },
        {
            text: <span>Extend the doubling of the  <Citation data={ALL_CITATIONS.CanadaStudentGrant}>
            Canada Student Grant
    </Citation> to $6,000 for full-time students until July 2023.</span>,
            source: "https://www.canada.ca/en/employment-social-development/news/2021/07/back-to-school-news-release.html#:~:text=the%20Government%20is%20extending%20the%20doubling%20of%20CSG%20for%20an%20additional%20two%20years.%20This%20means%20that%20the%20maximum%20amount%20available%20for%20the%20CSG%20will%20be%20up%20to%20%246%2C000%20for%20full-time%20students%20and%20%2410%2C000%20for%20students%20with%20disabilties%20until%20July%2031%2C%202023",
        },
        {
            text:  <React.Fragment>Change the student loan
                <Citation data={ALL_CITATIONS.RepaymentAssistancePlan}>
						Repayment Assistance Plan
                </Citation>, so that new grads don't have to start paying their loans back until they make at least $40,000 per year.</React.Fragment>,
            source: "https://ottawa.ctvnews.ca/what-the-federal-parties-are-offering-ottawa-s-college-and-university-students-1.5565180#:~:text=The%20Liberals%20have%20also%20said%20they%20would%20change%20the%20student%20loan%20repayment%20assistance%20program",
        },
        {
            text: "Increase interest free non-repayment period from 6-months to 24-months for federal student loans",
        },
        {
            text: "Increase the minimum annual income to qualify for repayment assistance for student loans from $25,000 to $40,000 and reduce the maximum amount of your income that can be used to pay the loan from 20 to 10 per cent of your income.",
            source: "https://www.macleans.ca/rankings/2021-federal-election-platform-guide/#:~:text=Increase%20the%20threshold%20for%20repayment%20assistance%20for%20student%20loans"
        }
    ],
};

export const NDP_EDUCATION = {
    party: "NDP",
    topic: EDUCATION,
    partyPlatforms: [
        {
            text: "Remove interest from federal student loans",
            source: "https://www.macleans.ca/rankings/2021-federal-election-platform-guide/#:~:text=Remove%20interest%20permanently%20on%20all%20federal%20student%20loans.",
            source_details: [
                {
                    text: "Jagmeet Singh commits to cancelling up to $20,000 per person in federal student loan debt",
                    url: "https://xfer.ndp.ca/2021/Commitments/Ready%20for%20Better-NDP%202021%20Commitments_AccessibleVersion.pdf#page=17",
                }
            ],
        },
        {
            text: "Introduce a debt forgiveness program for graduates that will forgive up to $20,000 in student debt."
        },
        {
            text: <span>Permanently double non-repayable  <Citation data={ALL_CITATIONS.CanadaStudentGrant}>
            Canada Student Grants</Citation>.</span>,
            source: "https://www.canada.ca/en/employment-social-development/news/2021/07/back-to-school-news-release.html#:~:text=the%20Government%20is%20extending%20the%20doubling%20of%20CSG%20for%20an%20additional%20two%20years.%20This%20means%20that%20the%20maximum%20amount%20available%20for%20the%20CSG%20will%20be%20up%20to%20%246%2C000%20for%20full-time%20students%20and%20%2410%2C000%20for%20students%20with%20disabilties%20until%20July%2031%2C%202023",
        },
    ],
};

export const GREEN_EDUCATION = {
    party: "Green",
    topic: EDUCATION,
    partyPlatforms: [
        {
            text: "Abolish post-secondary education tuition and Cancel all federally held student loan debt",
            source: "https://www.greenparty.ca/en/platform/life-with-dignity#:~:text=Abolish%20post-secondary%20education%20tuition",
        },
        {
            text: "Triple the number of Canada Graduate Scholarships available for master’s students and doubling the number available for PhD students",
            source: "https://www.greenparty.ca/en/platform/life-with-dignity#:~:text=tripling%20the%20number%20of%20Canada%20Graduate%20Scholarships%20available%20for%20master%E2%80%99s%20students%20and%20doubling%20the%20number%20available%20for%20PhD%20students"
        },
        {
            text: "Remove the two per cent cap on increases in education funding for Indigenous students",
            demographics: [
                INDIGENOUS,
            ]
        },
    ],
};

export const BLOC_QUEBECOIS_EDUCATION = {
    party: "Bloc Quebecois",
    topic: EDUCATION,
    partyPlatforms: [
        {
            text: <>
            The only information for Bloc Quebecois we could find on this issue was written in French. If anyone undestands French and wants to add their policy. You can
            {' '}<a href={CONTRIBUTION_INSTRUCTIONS_LINK}
             target="_blank" rel="noopener noreferrer">contribute policy information</a>.
            </>,
            source_details: [
                {
                    name: "Bloc Quebecois Platform",
                    url: "https://www.blocquebecois.org/wp-content/uploads/2019/10/Plateforme_Bloc2019_web-1.pdf"
                }
            ],
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
            text: <span>If you know some you can{' '}
                <a href={CONTRIBUTION_INSTRUCTIONS_LINK}
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

EDUCATION_PLATFORMS
    .filter(platform =>platform.party!=="People's")
    .forEach(platform => {

        platform.partyPlatforms.forEach( idea => {

            if (!idea.demographics) {
                idea.demographics = []
            }
            idea.demographics.push(STUDENTS)
        })
    });
