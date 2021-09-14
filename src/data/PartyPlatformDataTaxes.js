import React from "react";
import {CLIMATE_CONSCIOUS, TAXES, ENTREPRENEURS_AND_SMALL_BUSINESS, FOREIGNERS} from "./Constants";
import {EmojiLg} from "../components/static/iMessageStyles";
import { PlatformUtils } from "services/PlatformUtils";

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
        body: "But those are the same taxes that paid for you to go to public school and free hospital visits when you're sick"
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
];

export const CONSERVATIVES_TAXES = {
    party: "Conservative",
    topic: TAXES,
    partyPlatforms: [
        {
            text: "Provide more funding to the Canada Revenue Agency, increasing to $750 million per year, to fund stronger enforcement of taxation for big companies, international tax and tax evasion",
            source: "https://cpcassets.conservative.ca/wp-content/uploads/2021/08/16102359/f8279981721e07a.pdf#page=79",
        },
        {
            text: "Foreign tech companies pay their fair share of taxes including sales tax and a digital services tax representing 3% of their gross revenue in Canada if they don’t pay corporate income tax here.",
            source: "https://cpcassets.conservative.ca/wp-content/uploads/2021/08/16102359/f8279981721e07a.pdf#page=79",
        },
        {
            text: "Exempt Canadian-controlled start-ups headquartered and with at least 2/3 of their employees in Canada from the current plan to tax stock options. ",
            source: "https://cpcassets.conservative.ca/wp-content/uploads/2021/08/16102359/f8279981721e07a.pdf#page=15",
            demographics: [
                ENTREPRENEURS_AND_SMALL_BUSINESS
            ]
        },
        {
            text: "Create a tax credit for buying from a Canadian start-up."
        },
        {
            text: "Increase the amount of money that charitable foundations have to spend on charitable activities from 3.5% to 7.5%",
            source: "https://cpcassets.conservative.ca/wp-content/uploads/2021/08/16102359/f8279981721e07a.pdf#page=11"
        },
        {
            text: "Implement a month-long GST holiday this fall. All purchases made at retail stores will be tax free for this month.",
            source: "https://cpcassets.conservative.ca/wp-content/uploads/2021/08/16102359/f8279981721e07a.pdf#page=26"
        },
        {
            text: "Introduce a tax credit for use of Carbon Capture, Utilization and Storage technology in the energy sector and in other industries that have few alternatives to burning fossil fuels, like fertilizer and chemical production",
            source: "https://cpcassets.conservative.ca/wp-content/uploads/2021/08/16102359/f8279981721e07a.pdf#page=17",
            demographics: [
                CLIMATE_CONSCIOUS
            ]
        },
        {
            text: "tax relief to the first five facilities that use new technology that provides meaningful emissions reductions and has a high cost to build",
            source: "https://cpcassets.conservative.ca/wp-content/uploads/2021/08/16102359/f8279981721e07a.pdf#page=41",
            demographics: [
                CLIMATE_CONSCIOUS
            ]
        }
    ],
};

export const LIBERALS_TAXES = {
    party: "Liberal",
    topic: TAXES,
    partyPlatforms: [
        {
            text: "Raise corporate income taxes on the largest, most profitable banks and insurance companies who earn more than $1 billion per year and introduce a temporary Canada Recovery Dividend that these companies would pay in recognition of the fact they have recovered faster and stronger than many other industries",
            source: "https://liberal.ca/wp-content/uploads/sites/292/2021/09/Platform-Forward-For-Everyone.pdf#page=84",
        },
        {
            text: "Minimum tax rule so that everyone who earns enough to qualify for the top bracket pays at least 15 % each year",
        },
        {
            text: "Implement a tax on luxury cars, boats, and planes"
        },
        {
            text: "Work with our international partners to implement a global minimum tax",
        },
        {
            text: "Eliminate flow through shares for oil, gas, and coal projects to help promote",
            demographics: [
                CLIMATE_CONSCIOUS
            ]
        },
        {
            text: "Implement a national anti-flipping tax and national tax on nonresident, non-Canadians on vacant land and residential property."
        },
        {
            text: "National tax on vaping products and require tobacco manufacturers to pay for the cost of federal public health investments in tobacco control."
        }
    ],
};

export const NDP_TAXES = {
    party: "NDP",
    topic: TAXES,
    partyPlatforms: [
        {
            text: "Introduce a temporary COVID-19 excess profit tax that puts an additional 15% tax on large corporate windfall profits during the pandemic",
            source: "https://xfer.ndp.ca/2021/Commitments/Ready%20for%20Better-NDP%202021%20Commitments_AccessibleVersion.pdf#page=42",
        },
        {
            text: "Increase the capital gains inclusion rate to 75 percent",
        },
        {
            text: "Boost the top marginal tax rate two points, put in place a luxury goods tax on things like yachts and private jets",
        },
        {
            // TODO use a proper citation for wealth  tax
            text: "Implement a wealth tax (tax based on assets you already have instead of income generated) for the 'very richest millinaires'",
        },
        {
            text: "Roll back the Conservatives’ corporate income tax cuts by three percentage points to 2010 levels",
            page: "https://xfer.ndp.ca/2021/Commitments/Ready%20for%20Better-NDP%202021%20Commitments_AccessibleVersion.pdf#page=43"
        },
        {
            text: "Close loopholes that include eliminating bearer shares, force companies to prove their offshore transactions, and improving transparency on the taxes paid by large corporations.",
            source: "https://xfer.ndp.ca/2021/Commitments/Ready%20for%20Better-NDP%202021%20Commitments_AccessibleVersion.pdf#page=43"
        }
    ],
};

export const GREEN_TAXES = {
    party: "Green",
    topic: TAXES,
    partyPlatforms: [
        {
            text: "Apply a corporate tax on international e-commerce companies doing business in Canada",
            source: "https://www.greenparty.ca/en/platform/just-society#:~:text=Apply%20a%20corporate%20tax%20on%20transnational%20e-commerce%20companies%20doing%20business%20in%20Canada",
        },
        {
            text: "Impose a financial transactions tax of 0.5 per cent in the finance sector",
        },
        {
            text: "Increase the federal corporate tax rate from 15 to 21 per cent",
        },
        {
            text: "Charge a five per cent surtax on commercial bank profits",
        },
        {
            text: "Apply a tax on luxury goods, such as planes, and luxury cars.",
        },
        {   //TODO other (all?) parties mention this as well
            text: "Work with our international partners to implement a global minimum tax"
        },
        {   
            text: "Prohibit Canadian businesses from deducting the cost of advertising on foreign-owned sites such as Google and Facebook which now account for 80 per cent of all spending on advertising Canada."
        },
        {   
            text: "Eliminate the 50 per cent corporate meals and entertainment expense deduction, which includes season tickets and private boxes at sporting events"
        },
        {
            text: "Apply a one per cent tax on net (family) wealth above $20 million",
            source: "https://www.greenparty.ca/en/platform/just-society#:~:text=Apply%20a%20one%20per%20cent%20tax%20on%20net%20(family)%20wealth%20above%20%2420%20million."
        },
        // TODO add the following 2 to housing
        {
            text: "Create an “empty home” tax for foreign and corporate residential property owners who leave buildings and units vacant",
            source: "https://www.greenparty.ca/en/platform/just-society#:~:text=Create%20an%20%E2%80%9Cempty%20home%E2%80%9D%20tax%20for%20foreign%20and%20corporate%20residential%20property",
            demographics: [
                FOREIGNERS
            ]
        },
        {
            text: "Close tax haven loopholes that allow foreign investors to hide the names of beneficial owners of properties in Canada",
            demographics: [
                FOREIGNERS
            ]
        },
    ],
};

export const BLOC_QUEBECOIS_TAXES = {
    party: "Bloc Quebecois",
    topic: TAXES,
    incomplete: true,
};

export const PEOPLES_TAXES = {
    party: "People's",
    topic: TAXES,
    incomplete: true,
};


export const TAXES_PLATFORMS = [
    CONSERVATIVES_TAXES, LIBERALS_TAXES, NDP_TAXES,
    GREEN_TAXES, BLOC_QUEBECOIS_TAXES,PEOPLES_TAXES
];

TAXES_PLATFORMS.forEach(platform => PlatformUtils.addMissingPlatformData(platform));
