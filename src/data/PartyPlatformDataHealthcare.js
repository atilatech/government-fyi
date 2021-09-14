import Citation from "../components/interactive/citation/citation";
import React from "react";
import {HEALTHCARE, SENIORS, STUDENTS} from "./Constants";
import { ALL_CITATIONS } from "./Citations";
import { PlatformUtils } from "services/PlatformUtils";


export const CONSERVATIVES_HEALTHCARE = {
    party: "Conservative",
    topic: HEALTHCARE,
    partyPlatforms: [
        {
            text: "Offer employers a tax credit of 25 per cent of the cost of additional mental health coverage for the first three years after adding it to employee benefit plans, for $29 million over five years.",
            source: "https://cpcassets.conservative.ca/wp-content/uploads/2021/08/16102359/f8279981721e07a.pdf#page=33",
        },
        // TODO addd citation for Bill
        {
            text: <>Reinstate the rule that patients must wait 10-days before seeking medical assistance in dying, restore the requirement for two independent witnesses to be present and repeal the provision of Bill C-7 that allows medical assistance in dying for patients with mental health challenges.</>,
            source: "http://s3.documentcloud.org/documents/6236510/Morneau-letter-to-Scheer.pdf#page=34",
        },
        {
            text: <>Provide $1 billion over five years to boost funding for Indigenous mental health and drug treatment programs.</>,
            source: "http://s3.documentcloud.org/documents/6236510/Morneau-letter-to-Scheer.pdf#page=60",
        },
        {
            text: <>Invest $325 over three years to create 1,000 residential drug treatment beds and build 50 recovery community centres.</>,
            source: "http://s3.documentcloud.org/documents/6236510/Morneau-letter-to-Scheer.pdf#page=29",
        },
    ],
};

export const LIBERALS_HEALTHCARE = {
    party: "Liberal",
    topic: HEALTHCARE,
    partyPlatforms: [
        {
            text: "No longer provide charity status to anti-abortion organizations (for example, Crisis Pregnancy Centres) that provide dishonest counseling to women about their rights and about the options available to them at all stages of the pregnancy.",
            source: "https://liberal.ca/our-platform/protecting-your-sexual-and-reproductive-health-and-rights/#:~:text=No%20longer%20provide%20charity%20status%20to%20anti-abortion%20organizations"
        },
        {
            text: "Make a law that no matter where someone lives, they have access to publicly available sexual and reproductive health services. If provinces don't meet this standard they will get less money from the federal government.",
            source: "https://liberal.ca/our-platform/protecting-your-sexual-and-reproductive-health-and-rights/#:~:text=no%20matter%20where%20someone%20lives%2C%20that%20they%20have%20access%20to%20publicly%20available%20sexual%20and%20reproductive%20health%20services.",
        },
        {
            text: "Raise wages for personal support workers, including a guaranteed minimum wage of at least $25 per hour.",
            source: "https://liberal.ca/our-platform/better-working-conditions-for-personal-support-workers/#:~:text=Raise%20wages%20for%20personal%20support%20workers",
            demographics: [
                SENIORS,
            ],
        },
        {
            text: "Increase the maximum student loans debt relief that family doctors, residents in family medicine, nurse practitioners, or nurses are eligible for by 50% (from $40,000 to $60,000 over 5 years)",
            source: "https://liberal.ca/our-platform/increasing-rural-and-underserved-communities-access-to-health-care/#:~:text=increasing%20by%2050%25%20(from%20%2440%2C000%20up%20to%20%2460%2C000%20over%205%20years)%2C",
            demographics: [
                STUDENTS,
            ],
        },
        {
            text: "Offer health care professionals, a one-time income tax deduction of up to $15,000 over their first 3 years of practice to help with the costs of setting up a practice.",
            source: "https://liberal.ca/our-platform/increasing-rural-and-underserved-communities-access-to-health-care/#:~:text=Offer%20health%20care%20professionals%2C%20who%20are%20just%20starting%20out%20in%20their%20careers%2C%20a%20one-time%20income%20tax%20deduction%20of%20up%20to%20%2415%2C000",
        }
    ],
};

export const NDP_HEALTHCARE = {
    party: "NDP",
    topic: HEALTHCARE,
    partyPlatforms: [
        {
            text: <>Expand public health care to include <Citation data={ALL_CITATIONS.Pharmacare}>
            Pharmacare
    </Citation>.</>,
            source: "https://www.greenparty.ca/en/our-vision/health-care#:~:text=Expand%20public%20health%20care%20to%20include%20pharmacare",
        },
        {
            text: "End private, for-profit long-term care and bring long-term care homes under the government owned company, Revera.",
            source: "https://xfer.ndp.ca/2021/Commitments/Ready%20for%20Better-NDP%202021%20Commitments_AccessibleVersion.pdf#page=64",
            demographics: [
                SENIORS
            ]
        },
        {
            text: "End the ban on blood donation by men who have sex with anyone assigned male at birth. Instead use behaviour-based screening.",
            source: "https://xfer.ndp.ca/2021/Commitments/Ready%20for%20Better-NDP%202021%20Commitments_AccessibleVersion.pdf#page=111"
        },
        {
            text: "Enforce the Canada Health Act to require all provinces to make medical and surgical abortion available in all areas of the country.",
            source: "https://xfer.ndp.ca/2021/Commitments/Ready%20for%20Better-NDP%202021%20Commitments_AccessibleVersion.pdf#page=110"
        },
        {
            text: "Provide mental health care for uninsured Canadians.",
            source: "https://xfer.ndp.ca/2021/Commitments/Ready%20for%20Better-NDP%202021%20Commitments_AccessibleVersion.pdf#page=67"
        }
    ],
};

export const GREEN_HEALTHCARE = {
    party: "Green",
    topic: HEALTHCARE,
    partyPlatforms: [
        {
            text: <>Expand public health care to include <Citation data={ALL_CITATIONS.Pharmacare}>
            Pharmacare
    </Citation>, create a government company to bulk purchase and dispense prescription drugs.</>,
            source: "https://www.greenparty.ca/en/our-vision/health-care#:~:text=Expand%20public%20health%20care%20to%20include%20pharmacare",
        },
        {
            text: "Decriminalize possession of illicit drugs for personal use. Provide automatic pardons to anyone convicted in the past of simple possession of cannabis and ensure that any records of such offences and circumstances are expunged from police records.",
            source: "https://www.greenparty.ca/en/platform/life-with-dignity#:~:text=Decriminalize%20possession%20of%20illicit%20drugs%20for%20personal%20use"
        },
        {
            text: "Add a 10% tax on sugary drinks",
            source: "https://www.greenparty.ca/sites/default/files/platform_2021_en_web_-_20210907.pdf#page=62"
        },
    ],
};

export const BLOC_QUEBECOIS_HEALTHCARE = {
    party: "Bloc Quebecois",
    topic: HEALTHCARE,
    incomplete: true,
    partyPlatforms: [],
};

export const PEOPLES_HEALTHCARE = {
    party: "People's",
    topic: HEALTHCARE,
    incomplete: true,
    partyPlatforms: [],
};


export const HEALTHCARE_PLATFORMS = [
    CONSERVATIVES_HEALTHCARE, LIBERALS_HEALTHCARE, NDP_HEALTHCARE,
    GREEN_HEALTHCARE, BLOC_QUEBECOIS_HEALTHCARE,PEOPLES_HEALTHCARE
];
// TODO implement this in PatyPlatformBlock.js so we don't have to call this for each block.
// currently giving error: TypeError: Converting circular structure to JSON  --> starting at object with constructor 'FiberNode'
HEALTHCARE_PLATFORMS.forEach(platform => PlatformUtils.addMissingPlatformData(platform));
