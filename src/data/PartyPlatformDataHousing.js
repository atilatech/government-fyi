import React from "react";
import { ALL_CITATIONS } from "./Citations";
import Citation from "../components/interactive/citation/citation";
import {EmojiLg} from "../components/static/iMessageStyles";
import { PlatformUtils } from "services/PlatformUtils";
import { FOREIGNERS } from "./Constants";

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
            text: "Create at least 500,000 units of quality, affordable housing in the next ten years, with half of that done within five years",
            source: "https://xfer.ndp.ca/2021/Commitments/Ready%20for%20Better-NDP%202021%20Commitments_AccessibleVersion.pdf#page=11",
        },
        {
            text: <>Re-introduce 30-year terms to <Citation data={ALL_CITATIONS.CMHC}>
            CMHC
    </Citation> insured mortgages on entry-level homes for first time home buyers</>,
            source: "https://xfer.ndp.ca/2021/Commitments/Ready%20for%20Better-NDP%202021%20Commitments_AccessibleVersion.pdf#page=12",
        },
        {
            text: <>Provide model <Citation data={ALL_CITATIONS.HomeCoOwnership}>
            co-ownership
    </Citation> agreements and offer mortgage insurance backed by the CMHC for co-ownership of homes.</>,
            source: "https://xfer.ndp.ca/2021/Commitments/Ready%20for%20Better-NDP%202021%20Commitments_AccessibleVersion.pdf#page=12",
        },
        {
            text: "20% Foreign Buyer’s tax on the sale of homes to individuals who aren’t Canadian citizens or permanent residents",
        },
        {
            text: "Doubling the Home Buyer’s Tax Credit to $1,500",
        }
    ],
};
export const GREEN_HOUSING = {
    party: "Green",
    topic: "Housing",
    partyPlatforms: [
        {
            text: "Build and acquire a minimum of 300,000 units of deeply affordable non-market, co-op and non-profit housing over a decade.",
            souce: "https://www.greenparty.ca/en/platform/life-with-dignity#:~:text=Build%20and%20acquire%20a%20minimum%20of%20300%2C000%20units%20of%20deeply%20affordable",
        },
        {
            text: "Invest in construction and operation of 50,000 supportive housing units over 10 years.",
        },
        {
            text: <>Change the focus of the <Citation data={ALL_CITATIONS.CMHC}>
            CMHC
    </Citation> from it's current priority of helping Canadian lenders derisk their investment and individual home ownership to supporting affordable, non-market and cooperative housing.</>,
            source: "https://www.greenparty.ca/en/platform/life-with-dignity#:~:text=Re-focus%20the%20core%20mandate%20of%20Canada%20Mortgage%20and%20Housing%20Corporation%20(CMHC)"
        },
        {
            text: "Raise the “empty home” tax for foreign and corporate residential property owners who leave buildings and units vacant. Close tax haven loopholes that allow foreign investors to hide the names of beneficial owners of properties in Canada.",
            source: "https://www.greenparty.ca/en/platform/life-with-dignity#:~:text=Strengthen%20regulation%20to%20limit%20foreign%20investment%20and%20end%20predatory%20practices%20in%20residential%20real%20estate%C2%A0",
            demographics: [
                FOREIGNERS
            ]
        },
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
