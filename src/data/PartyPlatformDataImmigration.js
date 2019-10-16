import Citation from "../components/interactive/citation/citation";
import React from "react";
import {CitationsMaster, CLIMATE_CONSCIOUS, IMMIGRANTS, IMMIGRATION, STUDENTS} from "./Constants";


export const CONSERVATIVES_IMMIGRATION = {
    party: "Conservative",
    topic: IMMIGRATION,
    partyPlatforms: [
        {
            text: "Put an end to illegal border crossings at unofficial points of entry like Roxham Road",
            source: "https://www.conservative.ca/cpc/andrew-scheers-immigration-plan/",
        },
        {
            text: <span>
                Close the loophole in the
                <Citation data={CitationsMaster.SafeThirdCountryAct}>
						Safe Third Country Act
                </Citation>
                that
                "allows some people to skip the line and avoid the queue"
            </span>
                ,
        },
        {
            text: "Work to reunite survivors of genocide, who have already resettled in Canada, more expeditiously",
        },
        {
            text: "Bring back the Office of Religious Freedom so that we can protect our shared humanity and promote interest in the dignity of all people",
        },
        {
            text: "Promote the private sponsorship of refugees",
        },
        {
            text: "Hire 250 additional border officers",
            source: "https://www.bnnbloomberg.ca/scheer-pledges-to-close-roxham-road-loophole-in-immigration-plan-1.1328932"
        }
    ],
};

export const LIBERALS_IMMIGRATION = {
    party: "Liberal",
    topic: IMMIGRATION,
    partyPlatforms: [
        {
            text: "Create a Municipal Nominee Program. Allow local community organizations to directly sponsor permanent immigrants.",
            source: "https://2019.liberal.ca/our-platform/more-help-for-communities/",
        },
        {
            text: "Make the Atlantic Immigration Pilot (AIP) permanent." +
                "AIP allows Atlantic provinces (Nova Scotia, New Brunswic, Newfoundland, PEI" +
                " to hire foreigners for jobs they can't fill with a fast track application.",
        },
        {
            text: "Make the application process for becoming a Canadian citizen free",
            source: "https://2019.liberal.ca/our-platform/a-more-affordable-path-to-citizenship/",
        }
    ],
};

export const NDP_IMMIGRATION = {
    party: "NDP",
    topic: IMMIGRATION,
    partyPlatforms: [
        {
            text: "Suspend the Safe Third Country agreement with the United States",
            source: "https://www.ndp.ca/communities?focus=13934157",
        },
        {
            text: "end the cap on applications to sponsor parents and grandparents",
        },
        {
            text: "increase the immigration transfer to Quebec by $73 million," +
                " from $490 million to $563 million per year." +
                " This Money will be used to help newcomers integrate into French language and Quebec culture",
        },
    ],
};

export const GREEN_IMMIGRATION = {
    party: "Green",
    topic: IMMIGRATION,
    partyPlatforms: [
        {
            text: "Create a new refugee category called “environmental refugees,”" +
                " and accept an appropriate share of the world’s environmental refugees",
            source: "https://www.greenparty.ca/en/platform/green-economy#immigration",
            demographics: [
                CLIMATE_CONSCIOUS,
            ],
        },
        {
            text: "Establish a program to process the estimated 200,000 people living in Canada without official status, providing a pathway to permanent residency for those who qualify.",
        },
        {
            text: "Terminate Canada’s Safe Third Country Agreement with the United States",
        },
        {
            text: "Improve the pathway for international students and foreign workers to Canadian permanent residency and citizenship.",
            demographics: [
                STUDENTS
            ]
        },
    ],
};

export const BLOC_QUEBECOIS_IMMIGRATION = {
    party: "Bloc Quebecois",
    topic: IMMIGRATION,
    partyPlatforms: [
        {
            text: "Ensure that people applying for citizenship in Quebec have sufficient french knowledge",
            source: "http://www.blocquebecois.org/wp-content/uploads/2019/10/Plateforme_Bloc2019_web-1.pdf",
        },
        {
            text: "Give Quebec final say on any federal decision to expel refugees",
        },
        {
            text: "Allow Quebec to impose conditions on Granting permanent residence",
            source: "http://www.blocquebecois.org/2019/10/des-mesures-pour-contrer-la-penurie-de-main-doeuvre-en-region/",
        },
        {
            text: "Suspend Canada’s Safe Third Country Agreement with the U.S."
        }

    ],
};

export const PEOPLES_IMMIGRATION = {
    party: "People's",
    topic: IMMIGRATION,
    partyPlatforms: [
        {
            text: "Reduce total number of immigrants in Canada every year from 350,000 to 125,000 ",
            source: "https://www.peoplespartyofcanada.ca/immigration_reducing_overall_levels_and_prioritizing_skilled_immigrants",
        },
        {
            text: "Reform the immigration point system to accept a larger proportion of economic immigrants",
        },
        {
            text: "Accept fewer resettled refugees, limit the number of immigrants accepted" +
                " under the family reunification program, abolish the program for parents and grand-parents"
        }
    ],
};


export const IMMIGRATION_PLATFORMS = [
    CONSERVATIVES_IMMIGRATION, LIBERALS_IMMIGRATION, NDP_IMMIGRATION,
    GREEN_IMMIGRATION, BLOC_QUEBECOIS_IMMIGRATION,PEOPLES_IMMIGRATION
];

IMMIGRATION_PLATFORMS.forEach(platform => {

    platform.partyPlatforms.forEach( idea => {

        if (!idea.demographics) {
            idea.demographics = []
        }
        idea.demographics.push(IMMIGRANTS)
    })
});
