import {FOREIGNERS, HOMEOWNERS} from "./Constants";
import { ALL_CITATIONS } from "./Citations";
import Citation from "../components/interactive/citation/citation";
import React from "react";
import {EmojiLg} from "../components/static/iMessageStyles";
import { PlatformUtils } from "services/PlatformUtils";

export const CONSERVATIVE_HOUSING = {
    party: "Conservative",
    topic: "Housing",
    partyPlatforms: [
        {
            text: "Release at least 15% of the federal government's real estate for housing.",
            source: "https://cpcassets.conservative.ca/wp-content/uploads/2021/08/16102359/f8279981721e07a.pdf#page=28",
        },
        {
            text: "Remove the requirement to conduct a stress test when a homeowner renews a mortgage with another lender instead of only when staying with their current lender, as is the case today",
            source: "https://cpcassets.conservative.ca/wp-content/uploads/2021/08/16102359/f8279981721e07a.pdf#page=29"
        },
        {
            text: "Invest $325 million over the next three years to create 1,000 residential drug treatment beds and build 50 recovery community centres across the country",
        },
        {
            text: "Ban foreign investors not living in or moving to Canada from buying homes here for a two year period after which it will be reviewed.",
        },
        {
            text: "Extend the ability to defer capital gains tax when selling a rental property and reinvesting in rental housing.",
            source: "https://cpcassets.conservative.ca/wp-content/uploads/2021/08/16102359/f8279981721e07a.pdf#page=28"
        }
    ],
};

export const LIBERAL_HOUSING = {
    party: "Liberal",
    topic: "Housing",
    partyPlatforms: [
        {
            text: "Introduce a tax-free First Home Savings Account will allow Canadians under 40 to save up to $40,000 towards their first home, and to withdraw it tax-free to put towards their first home purchase, with no requirement to repay it",
            source: "https://liberal.ca/wp-content/uploads/sites/292/2021/09/Platform-Forward-For-Everyone.pdf#page=21",
        },
        {
            text: "Banning blind bidding, establishing a legal right to a home inspection, and banning new foreign ownership for two years.",
            source: "https://liberal.ca/a-home-for-everyone-liberals-move-forward-with-a-new-housing-plan/#:~:text=banning%20blind%20bidding%2C%20establishing%20a%20legal%20right%20to%20a%20home%20inspection%2C%20and%20banning%20new%20foreign%20ownership%20for%20two%20years."
        },
        {
            text: "Double the First-Time Home Buyers Tax Credit, from $5,000 to $10,000.",
            source: "https://liberal.ca/wp-content/uploads/sites/292/2021/09/Platform-Forward-For-Everyone.pdf#page=21",
        },
        {
            text: "Introduce a new Multigenerational Home Renovation tax credit: families adding a secondary unit to their home for a family member can claim a 15% tax credit for up to $50,000 in renovation and construction costs. $7,500 in tax savings.",
            source: "https://liberal.ca/wp-content/uploads/sites/292/2021/09/Platform-Forward-For-Everyone.pdf#page=22",
        },
        {
            text: "Establish an anti-flipping tax on residential properties, requiring properties to be held for at least 12 months.",
            source: "https://liberal.ca/wp-content/uploads/sites/292/2021/09/Platform-Forward-For-Everyone.pdf#page=23",
        },
    ],
};
export const NDP_HOUSING = {
    party: "NDP",
    topic: "Housing",
    partyPlatforms: [
        {
            text: "Build 500,000 affordable housing units over 10 years",
            source: "https://action.ndp.ca/page/-/2019/Q4/PDF%20assets/NDP-TheFiscalPlan-EN-PRINT.pdf#page=3",
        },
        {
            text: "Removing GST from New Rental Buildings",
            source: "https://www.ndp.ca/news/jagmeet-singh-lets-build-half-million-affordable-housing-units",
        },
        {
            text: "NDP proposes a 15% extra tax on foreign buyers.",
            source: "https://vancouversun.com/news/local-news/ndp-leader-jagmeet-singh-in-vancouver-and-port-moody",
            demographics: [FOREIGNERS]
        },
        {
            text: "Increase mortgage term length to 30 years for first-time homebuyers",
            source: "https://globalnews.ca/news/4981158/ndp-leader-jagmeet-singh-proposes-new-housing-measures/",
        }
    ],
};
export const GREEN_HOUSING = {
    party: "Green",
    topic: "Housing",
    partyPlatforms: [
        {
            text: "$750 million for rent assistance for 125,000 households",
            souce: "https://www.greenparty.ca/en/platform/renew-social-contract",
        },
        {
            text: "Provide support to the co-operative housing sector at a total cost of $950 million"
        },
        {
            text: "Provide incentives of $250 million to convert existing properties to rentals by 2025"
        },
        {
            text: "Legislate housing as a legally protected fundamental human right for all Canadians and permanent residents"
        }
    ],
};
export const BLOC_QUEBECOIS_HOUSING = {
    party: "Bloc Quebecois",
    topic: "Housing",
    incomplete: true,
};
export const PEOPLES_HOUSING = {
    party: "People's",
    topic: "Housing",
    incomplete: true,
};

export const HOUSING_PLATFORMS = [CONSERVATIVE_HOUSING, LIBERAL_HOUSING, NDP_HOUSING,
    GREEN_HOUSING, BLOC_QUEBECOIS_HOUSING, PEOPLES_HOUSING];
HOUSING_PLATFORMS.forEach(platform => PlatformUtils.addMissingPlatformData(platform));

export const HOUSING_CONVERSATION = [
    {
        from: "me",
        body:"well, looks like I'm not going to be buying a house any time soon"
    },
    {
        from:"me-no-bg",
        body:<EmojiLg><span role="img" aria-label="cry emoji">😭</span></EmojiLg>
    },

    {
        from: "them",
        body:"why not?"
    },
    {
        from: "me",
        body:"Everything. Is. So. Expensive"
    },
    {
        from: "me",
        body: "The government should just let people build more houses"
    },
    {
        from:"them",
        body: "Yeah! That's a great idea"
    },
    {
        from:"them",
        body: "As long as it's not in my neighborhood, we should definitely build more houses! 👌🏿"
    },
    {
        from:"me",
        body:<span>That's literally{' '}
            <Citation data={ALL_CITATIONS.NIMBYISM}>NIMBYISM</Citation>.
						</span>
    },
    {
        from:"them",
        body: "No, this is different. I want more affordable housing."
    },
    {
        from:"them",
        body: "But If you build condos or all these new houses that they squeeze together"
    },
    {
        from:"them",
        body: "it will ruin a lot of small communities"
    },
    {
        from:"me",
        body:"NIMBYISM, You just defined NIMBYISM"
    },
    {
        from:"them",
        body:"Look I'm not even the problem here"
    },
    {
        from:"them",
        body:"No, the real problem is that too many foreigners are buying Canadian homes and they don't even live in them"
    },
    {
        from:"them",
        body:"Canadians can't even afford to live in their own country"
    },
    {
        from:"them",
        body:<span>What we need is a
            <Citation data={ALL_CITATIONS.SpeculationTax}>
                speculation or foreign buyer's tax.
                </Citation>
            </span>
    },
    {
        from: "me",
        body:<span>Wait, won't that
                <Citation data={ALL_CITATIONS.SpeculationTaxForeignersRealEstate}>
                          decrease the value of your house
                </Citation>
            </span>
    },
    {
        from: "me",
        body:"With all that foreign demand. A lot of homeonwers like you are " +
            "millionaires now, just because of your house"
    },
    {
        from: "them",
        body:"hmm...I see"
    },
    {
        from:"them-no-bg",
        body:<EmojiLg><span role="img" aria-label="thinking emoji">🤔</span></EmojiLg>
    },
    {
        from:"them",
        body:"All I want is for everyone to be better off. Without me having to sacrifice. Why is that so hard?"
    },
    {
        from: "me",
        body:"I know It's hard to have your cake and eat it"
    },
    {
        from:"them-no-bg",
        body:<span>Cake has entered the conversation</span>
    },
    {
        from:"them-no-bg",
        body:<EmojiLg><span role="img" aria-label="cake emoji">🍰</span></EmojiLg>
    },

]
