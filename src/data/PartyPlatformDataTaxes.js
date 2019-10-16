import React from "react";
import {CLIMATE_CONSCIOUS, TAXES, ENTREPRENEURS_AND_SMALL_BUSINESS} from "./Constants";
import {EmojiLg} from "../components/static/iMessageStyles";

export const TAXES_CONVERSATION_MESSAGES = [
    {
        from: "me",
        body: <span>today was payday</span>,
    },
    {
        from:"me-no-bg",
        body:<EmojiLg><span role="img" aria-label="angry emoji">😡</span></EmojiLg>
    },
    {
        from: "them",
        body: "Nice, dinner is on you! 🎉",
    },
    {
        from: "them",
        body: "Wait. Why are you angry? ",
    },
    {
        from: "me",
        body: "You'd be sad too if you saw how much taxes they took from my salary"
    },
    {
        from: "them",
        body: "But those are the same taxes that paid for you to go to public school and free hospital visits when you're socl"
    },
    {
        from:"me-no-bg",
        body:<EmojiLg><span role="img" aria-label="rolls eye emoji">🙄</span></EmojiLg>
    },
    {
        from: "me",
        body: "well if I didn't pay so much in taxes maybe I could pay for my own hospital visit and pay for private school."
    },
    {
        from: "them",
        body: "Well not everyone is as privileged as you"
    },
    {
        from: "them",
        body: "A lot of people would end up not getting any medical treatment"
    },
    {
        from: "me",
        body: "but if you just give people free stuff, where's the incentive to work hard?"
    },
    {
        from: "them",
        body: "it's not just about \"working hard\", there are systemic barriers in place "
    },
    {
        from: "me",
        body: "you lost me at systemic barriers"
    },
    {
        from: "them",
        body: "What about things like roads and military. How do you privatize that?"
    },
    {
        from: "me",
        body: "hmmm...I see where you’re coming from..."
    },
    {
        from: "me",
        body: "But... I still don’t like taxes"
    },
    {
        from: "them",
        body: "most people don't but society is better off with a fair tax rate"
    },
    {
        from: "me",
        body: "true, so what's a \"fair tax rate\" "
    },
    {
        from: "them",
        body: "good question"
    },
    {
        from: "them-no-bg",
        body: <span>Chanel has left the conversation</span>
    },
];

export const CONSERVATIVES_TAXES = {
    party: "Conservative",
    topic: TAXES,
    partyPlatforms: [
        {
            text: "Universal Tax Cut, the tax rate on income under $47,630 will be reduced from 15 per cent to 13.75 percent",
            source: "https://www.pbo-dpb.gc.ca/web/default/files/Documents/ElectionProposalCosting/Results/32644536_EN.pdf?timestamp=1571166194063",
        },
        {
            text: "Single tax return for Quebecers",
            source: "https://www.conservative.ca/andrew-scheer-announces-fives-measures-for-quebec/",
        },
        {
            text: "Work to reunite survivors of genocide, who have already resettled in Canada, more expeditiously",
        },
        {
            text: "remove federal income tax from Employment Insurance (EI) maternity and EI paternal/maternal" +
                " benefits by providing a non-refundable tax credit of 15 percent for any income earned under these two programs",
            source: "https://www.conservative.ca/scheer-to-make-maternity-benefits-tax-free/",
        },
        {
            text: "15 percent tax credit for weekly and monthly transit passes",
            source: "https://www.conservative.ca/andrew-scheer-to-reduce-cost-of-public-transit/",

        },
        {
            text: "remove the Goods and Services Tax (GST) from home heating and energy bills",
            source: "https://www.conservative.ca/conservatives-to-remove-gst-from-home-heating/"
        },
        {
            text: "Add a 3 per cent tax on revenues of large multinational tech companies",
            source: "https://nationalpost.com/news/politics/election-2019/how-the-tories-plan-to-balance-the-budget-scheer-says-transfer-payments-core-services-safe-from-cuts"
        }
    ],
};

export const LIBERALS_TAXES = {
    party: "Liberal",
    topic: TAXES,
    partyPlatforms: [
        {
            text: "introduce a new 10 per cent tax on luxury cars, boats, and personal aircraft over $100,000",
            source: "https://2019.liberal.ca/wp-content/uploads/sites/292/2019/09/Forward-A-real-plan-for-the-middle-class.pdf#page=79",
        },
        {
            text: "Place a  national tax on vacant houses owned by non-Canadians who don’t live in Canada",
        },
        {
            text: "Decrease the amount of your income that you pay tax on by $15,000," +
                " if you make less than $147,000 per year. " +
                "For example, if you make $50,000 you will only be taxed on $35,000",
            source: "https://2019.liberal.ca/wp-content/uploads/sites/292/2019/09/2019-backgrounder-tax-cut-ENG.pdf",
        },
        {
            text: "Lower corporate taxes for small cleantech businesses from 9 to 4.5%," +
                " and larger cleantech companies from 15 to 7.5%",
            source: "https://2019.liberal.ca/wp-content/uploads/sites/292/2019/09/cutting-taxes-for-clean-tech-businesses.pdf#page=2",
            demographics: [
                CLIMATE_CONSCIOUS,
            ]
        }
    ],
};

export const NDP_TAXES = {
    party: "NDP",
    topic: TAXES,
    partyPlatforms: [
        {
            text: "Raise corporate taxes to 18% (from 15%) and tax capital gains at a rate of 75%",
            source: "https://action.ndp.ca/page/-/2019/Q2/NDP-Commitments_EN.pdf#page=108",
        },
        {
            text: "Maintain the small business tax rate at its current level",
            demographics: [
                ENTREPRENEURS_AND_SMALL_BUSINESS,
            ]
        },
        {
            text: "Ensure that multinational tech giants pay corporate tax on the revenue they generate in Canada",
        },
        {
            text: "Increase the top marginal tax rate by two points to 35 percent for those making over $210,000",
        },
        {
            text: "Increase the amount of investment profits that will be subject to a capital gains tax to 75 percent",
        },
        {
            text: "Introduce one percent wealth tax on those with wealth over $20 million",
        },
    ],
};

export const GREEN_TAXES = {
    party: "Green",
    topic: TAXES,
    partyPlatforms: [
        {
            text: "Apply a corporate tax on transnational e-commerce companies doing business in Canada",
            source: "https://www.greenparty.ca/en/platform/green-economy#fair-taxation",
        },
        {
            text: "Impose a financial transactions tax of 0.5 per cent in the finance sector",
        },
        {
            text: "Increase the federal corporate tax rate from 15 to 21 per cent",
        },
        {
            text: "Maintain the small business tax rate at its current level",
            demographics: [
                ENTREPRENEURS_AND_SMALL_BUSINESS
            ]
        },
        {
            text: "Charge a five per cent surtax on commercial bank profits",
        },
        {
            text: "Apply a one per cent tax on net (family) wealth above $20 million",
        },
    ],
};

export const BLOC_QUEBECOIS_TAXES = {
    party: "Bloc Quebecois",
    topic: TAXES,
    partyPlatforms: [
        {
            text: "Revenu Quebec to collect federal income taxes instead of Canada Revenu agency," +
                "  so Quebecers only have to file one income tax return",
            source: "https://www.blocquebecois.org/wp-content/uploads/2019/10/Plateforme_Bloc2019_web-1.pdf",
        },
    ],
};

export const PEOPLES_TAXES = {
    party: "People's",
    topic: TAXES,
    partyPlatforms: [
        {
            text: "Reduce the number of tax brackets from five to two. Incomes from $15,001 to $100,000 taxed at 15%, and income over $100,000 taxed at 25%. No taxes for those making $15k or less",
            source: "https://www.peoplespartyofcanada.ca/public_finance_balancing_the_budget_in_two_years_and_cutting_taxes",
        },
        {
            text: "Abolish the personal capital gains tax, decreasing the inclusion rate from 50% to 0%",
        },
        {
            text: "Reduce the corporate income tax rate from 15% down to 10%",
            source: "https://www.peoplespartyofcanada.ca/economy_encouraging_investment_and_productivity_growth",
        }
    ],
};


export const TAXES_PLATFORMS = [
    CONSERVATIVES_TAXES, LIBERALS_TAXES, NDP_TAXES,
    GREEN_TAXES, BLOC_QUEBECOIS_TAXES,PEOPLES_TAXES
];
