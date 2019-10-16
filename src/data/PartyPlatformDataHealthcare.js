import Citation from "../components/interactive/citation/citation";
import React from "react";
import {CitationsMaster, HEALTHCARE, LOW_INCOME} from "./Constants";


export const CONSERVATIVES_HEALTHCARE = {
    party: "Conservative",
    topic: HEALTHCARE,
    partyPlatforms: [
        {
            text: "Spend $1.5 billion to buy new MRI and CT machines across Canada",
            source: "https://www.conservative.ca/andrew-scheer-to-invest-1-5-billion-to-replace-and-purchase-new-mri-and-ct-machines/",
        },
        {
            text: "Increase the amount of money the federal government gives to provinces for healthcare by at least three per cent every year",
            source: "http://s3.documentcloud.org/documents/6236510/Morneau-letter-to-Scheer.pdf",
        },
    ],
};

export const LIBERALS_HEALTHCARE = {
    party: "Liberal",
    topic: HEALTHCARE,
    partyPlatforms: [
        {
            text: <span>Spend $6 billion as “down payment” over the next four years to ,

                <Citation data={CitationsMaster.Pharmacare}>
						implement pharmacare
                </Citation>, universal access to family doctor, mental health services and palliative care
                (people with serious illnesses)</span>,
            source: "https://globalnews.ca/news/5939030/trudeau-pledges-6b-to-kickstart-talks-on-health-care-national-pharmacare-with-provinces/",
        }
    ],
};

export const NDP_HEALTHCARE = {
    party: "NDP",
    topic: HEALTHCARE,
    partyPlatforms: [
        {
            text: "Spend $10 billion a year to create universal pharmacare program by 2020",
            source: "https://www.bnnbloomberg.ca/ndp-s-jagmeet-singh-highlights-pledge-for-universal-drug-coverage-1.1319460",
        },
        {
            text: "Spend $1.9 billion in Public dental coverage for households making less than $70k per year",
        },
    ],
};

export const GREEN_HEALTHCARE = {
    party: "Green",
    topic: HEALTHCARE,
    partyPlatforms: [
        {
            text: "Expand health insurance to include Pharmacare for everyone as well as free dental care for low-income Canadians",
            source: "https://www.greenparty.ca/en/platform/renew-social-contract#health-care",
            demographics: [
                LOW_INCOME,
            ],
        },
        {
            text: "Address the opioid crisis as a health-care issue, not a criminal issue, by declaring a national health emergency.",
        },
        {
            text: "Ban for-profit blood collection services and remove barriers to blood donations not based on science",
        },
    ],
};

export const BLOC_QUEBECOIS_HEALTHCARE = {
    party: "Bloc Quebecois",
    topic: HEALTHCARE,
    partyPlatforms: [
        {
            text: "Stop pricing drugs relative to their prices in the United States, thus lowering the price of drugs",
            source: "https://www.blocquebecois.org/wp-content/uploads/2019/10/Plateforme_Bloc2019_web-1.pdf",
        },
    ],
};

export const PEOPLES_HEALTHCARE = {
    party: "People's",
    topic: HEALTHCARE,
    partyPlatforms: [
        {
            text: "Replace how much money the government gives to provinces for health care" +
                " with giving the tax revenue money back to the provinces and territories ",
            source: "https://www.peoplespartyofcanada.ca/health_care_giving_provinces_the_incentives_to_deal_with_wait_times_and_rising_costs",
        },
        {
            text: "Provinces that get less in tax revenue compared to what" +
                " they used to receive in transfer payments will be compensated with a temporary program",
        },
    ],
};


export const HEALTHCARE_PLATFORMS = [
    CONSERVATIVES_HEALTHCARE, LIBERALS_HEALTHCARE, NDP_HEALTHCARE,
    GREEN_HEALTHCARE, BLOC_QUEBECOIS_HEALTHCARE,PEOPLES_HEALTHCARE
];
