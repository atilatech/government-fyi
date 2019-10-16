import {EmojiLg} from "../components/static/iMessageStyles";
import Citation from "../components/interactive/citation/citation";
import {Citations} from "../pages/4/expandables";
import React from "react";

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
]