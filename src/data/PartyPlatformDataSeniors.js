import { PlatformUtils } from "services/PlatformUtils";

import { SENIORS_TOPIC } from "./Constants";

export const CONSERVATIVE_SENIORS = {
    party: "Conservative",
    // TODO SENIORS_TOPIC should be automatically added by iterating through the array of all plattforms in SENIORS_PLATFORMS.forEach()
    topic: SENIORS_TOPIC,
    partyPlatforms: [
        {
            
            text: "Introducing the Canada Seniors Care benefit, paying $200 per month per household to any Canadian who is living with and taking care of a parent over the age of 70",
            source: "https://cpcassets.conservative.ca/wp-content/uploads/2021/08/16102359/f8279981721e07a.pdf#page=75",
        },
        {
            text: "Amending the Home Accessibility (making a home more accessible for people with disabilities) Tax Credit by increasing the limit from $10,000 per dwelling to $10,000 per person.",
        },
        {
            text: "Allowing seniors or their caregivers, including their children, to claim the Medical Expense Tax Credit for home care instead of only allowing them to claim attendant care if they live in a group home."
        },
        {
            text: "Devote $3 billion of infrastructure funding over the next three years to renovate Long-Term Care Homes in all provinces and territories across Canada to improve the care that residents receive",
            source: "https://cpcassets.conservative.ca/wp-content/uploads/2021/08/16102359/f8279981721e07a.pdf#page=76",
        },
        {
            text: "Double the Canada Workers Benefit up to a maximum of $2,800 for individuals or $5,000 for families and pay it as a quarterly direct deposit rather than a tax refund at year-end"
        },
        {
            text: "Prevent executives from paying themselves bonuses while managing a company going through restructuring if the pension plan is not fully funded."
        }
    ],
};

export const LIBERAL_SENIORS = {
    party: "Liberal",
    topic: SENIORS_TOPIC,
    partyPlatforms: [
        {
            text: "Increase the Guaranteed Income Supplement by $500 for single seniors and $750 for couples, starting at age 65.",
            source: "https://liberal.ca/wp-content/uploads/sites/292/2021/09/Platform-Forward-For-Everyone.pdf#page=26",
        },
        {
            text: "Increase the Old Age Support by 10% next year for seniors 75 and over.",
        },
        {
            text: "Double the Home Accessibility Tax Credit, to $20,000, putting up to $1,500",
            source: "https://liberal.ca/wp-content/uploads/sites/292/2021/09/Platform-Forward-For-Everyone.pdf#page=27",
        },
        {
            text: "Raise wages for personal support workers, including a guaranteed minimum wage of at least $25 per hour. Train up to 50,000 new personal support workers.",
            source: "https://liberal.ca/wp-content/uploads/sites/292/2021/09/Platform-Forward-For-Everyone.pdf#page=16",
        }
    ],
};
export const NDP_SENIORS = {
    party: "NDP",
    topic: SENIORS_TOPIC,
    partyPlatforms: [
        // TODO this point is copied from healthcare, allow platforms to be reused in multiple places
        {
            text: "End private, for-profit long-term care and bring long-term care homes under the government owned company, Revera.",
            source: "https://xfer.ndp.ca/2021/Commitments/Ready%20for%20Better-NDP%202021%20Commitments_AccessibleVersion.pdf#page=64"
        },
        {
            text: "Stop companies from paying out dividends and bonuses when pensions are under-funded. Ceate a mandatory, industry-financed pension insurance program",
            source: "https://xfer.ndp.ca/2021/Commitments/Ready%20for%20Better-NDP%202021%20Commitments_AccessibleVersion.pdf#page=71"
        },
        // TODO add citation for Old Age Security and Guaranteed Income Supplement
        {
            text: "Make automatic enrollment in Old Age Security and Guaranteed Income Supplement retroactive. So seniors who weren't enrolled before can still receive benefits they should have received."
        },
        {
            text: "Add a one year delay to help seniors at risk of having their GIS benefits suspended for being unable to make the required income statement."
        },
        {
            text: "Make the Caregiver Tax Credit refundable",
            source: "https://xfer.ndp.ca/2021/Commitments/Ready%20for%20Better-NDP%202021%20Commitments_AccessibleVersion.pdf#page=72",
            
        },
    ],
};
export const GREEN_SENIORS = {
    party: "Green",
    topic: SENIORS_TOPIC,
    partyPlatforms: [
        // TODO this coould also go in Healthcare
        {
            text: "Develop a national seniors strategy that includes a national dementia strategy. Increasing overall Canadian investment from $50 million to $150 million over five years in the field of dementia research.",
            source: "https://www.greenparty.ca/en/platform/life-with-dignity#:~:text=Fully%20fund%20the%20National%20Dementia%20Strategy",
        },
        {
            text: "Give high priority to pensions if a company goes bankrupt",
            source: "https://www.greenparty.ca/en/platform/life-with-dignity#:~:text=To%20better%20protect%20the%20pensions%20of%20all%20Canadians%20whose%20companies%20file%20for%20bankruptcy"
        },
        {
            text: "Amend pension benefit laws for federally regulated pensions: Maintain the solvency target at 100%.",
            source: "https://www.greenparty.ca/en/platform/renew-social-contract#respecting-and-supporting-seniors",
        },
        {
            text: "introduce a refundable tax credit equal to the amount of pension loss an individual incurs when a pension fails.",
            source: "https://www.greenparty.ca/en/platform/life-with-dignity#:~:text=introduce%20a%20refundable%20tax%20credit%20equal%20to%20the%20amount%20of%20pension%20loss%20an%20individual%20incurs%20when%20a%20pension%20fails.",
        },
    ],
};
export const BLOC_QUEBECOIS_SENIORS = {
    party: "Bloc Quebecois",
    topic: SENIORS_TOPIC,
    incomplete: true,
};
export const PEOPLES_SENIORS = {
    party: "People's",
    topic: SENIORS_TOPIC,
    incomplete: true,
};

export const SENIORS_PLATFORMS = [CONSERVATIVE_SENIORS, LIBERAL_SENIORS, NDP_SENIORS,
    GREEN_SENIORS, BLOC_QUEBECOIS_SENIORS, PEOPLES_SENIORS];

SENIORS_PLATFORMS.forEach(platform => PlatformUtils.addMissingPlatformData(platform));
