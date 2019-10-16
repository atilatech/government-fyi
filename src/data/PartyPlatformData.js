import PropTypes from "prop-types";
import {Citations} from "../pages/1/expandables";
import React from "react";
import Citation from "../components/interactive/citation/citation";
import {
    ENTREPRENEURS_AND_SMALL_BUSINESS,
    FOREIGNERS,
    HOMEOWNERS, IMMIGRANTS,
    LOW_INCOME,
    STUDENTS, UNEMPLOYED,
    VISIBLE_MINORITY,
    WOMEN,
    YOUNG_PEOPLE
} from "./Constants";


export const PartyPlatformPropTypes = {
    text: PropTypes.PropTypes.oneOfType(
        [PropTypes.string, PropTypes.object])
        .isRequired,
    source: PropTypes.string,
    question: PropTypes.string,
    demographics: PropTypes.arrayOf(PropTypes.string),
};

export const LIBERAL_HOUSING = {
    party: "Liberal",
    topic: "Housing",
    partyPlatforms: [
        {
            question: "How easy should it be for builders to build new homes?",
            text: "Make it harder for foreigners to speculate on Canadian real estate market through a speculation tax. [tk what is speculation tax?]",
            source: "https://www.bnnbloomberg.ca/trudeau-promises-new-speculation-tax-on-foreign-buyers-if-re-elected-1.1315217",
            demographics: [
                FOREIGNERS,
                HOMEOWNERS,
            ]
        },
        {
            question: "How much of a role should the government play in helping people afford a home?",
            text: "Build 100,000 affordable homes over a decade and offer first-time home-buyer subsidies of 10 per cent on new home purchases and 5 per cent on resales — with restrictions.",
            source: "https://www.bnnbloomberg.ca/trudeau-promises-new-speculation-tax-on-foreign-buyers-if-re-elected-1.1315217",
        }
    ],
};
export const CONSERVATIVE_HOUSING = {
    party: "Conservative",
    topic: "Housing",
    partyPlatforms: [
        {
            question: "How easy should it be for builders to build new homes?",
            text: (<span><Citation data={Citations['1']}>
						Make it easier</Citation> to build new homes.
			[tk how specifically will they do that?]</span>),
        }
    ],
};
export const NDP_HOUSING = {
    party: "NDP",
    topic: "Housing",
    partyPlatforms: [
        {
            text: "New Democrats want to build 500,000 affordable housing units over 10 years;" +
                " before then, they propose a rental subsidy.",
        },
        {
            text: "NDP proposes a 15% extra tax on foreign buyers.",
            demographics: [FOREIGNERS]
        }
    ],
};

export const CONSERVATIVE_JOBS_AND_ECONOMY = {
    party: "Conservative",
    topic: "Jobs and Economy",
    partyPlatforms: [
        {
            text: "Improve “credential recognition” to make it easier for immigrants to get jobs, if they have equivalent skills.",
            source: "https://www.conservative.ca/cpc/andrew-scheers-immigration-plan/",
            demographics: [IMMIGRANTS, UNEMPLOYED],
        },
        {
            text: "Spend $187 billion on infrastructure investments",
            source: "https://www.bnnbloomberg.ca/punting-infrastructure-funds-key-to-conservatives-balanced-budget-plan-1.1330412",
        },
        {
            text: "Balance the budget in five years",
            source: "https://www.conservative.ca/andrew-scheer-reveals-his-plan-for-you-to-get-ahead/",
        },
    ],
};

export const LIBERAL_JOBS_AND_ECONOMY = {
    party: "Liberal",
    topic: "Jobs and Economy",
    partyPlatforms: [
        {
            text: "Raise the federal minimum wage to $15 per hour.",
            source: "https://2019.liberal.ca/wp-content/uploads/sites/292/2019/09/Forward-A-real-plan-for-the-middle-class.pdf#page=12",
            demographics: [LOW_INCOME,],
        },
        {
            text: "Give 2,000 entrepreneurs up to $50,000 to launch a new business",
            source: "https://2019.liberal.ca/wp-content/uploads/sites/292/2019/09/BG_EN_Backgrounder.pdf",
            demographics: [ENTREPRENEURS_AND_SMALL_BUSINESS,],
        },
        {
            text: "Add an additional $9 million over three years to help more visible minority newcomer women find work",
            source: "https://2019.liberal.ca/wp-content/uploads/sites/292/2019/09/Forward-A-real-plan-for-the-middle-class.pdf#page=47",
            demographics: [WOMEN, VISIBLE_MINORITY]
        },
        {
            text: "Create a new federal Family Day holiday"
        },
        {
            text: "250 to every new business looking to expand online",
            source: "https://2019.liberal.ca/wp-content/uploads/sites/292/2019/09/BG_EN_Backgrounder.pdf",
        },
        {
            text: "Introduce Career Insurance Benefit that starts after Employment Insurance ends. You get 20 percent of insured earnings the first year you’re laid off and 10 percent in the second year",
        },
        {
            text: "Reduce cost of incorporating a business federally from $200 to $50",
        },
        {
            text: "extending Employment Insurance sickness benefits from 15 weeks to 26 weeks",
            source: "https://2019.liberal.ca/wp-content/uploads/sites/292/2019/09/Forward-A-real-plan-for-the-middle-class.pdf#page=12",
        }

    ],
};

export const NDP_JOBS_AND_ECONOMY = {
    party: "NDP",
    topic: "Jobs and Economy",
    partyPlatforms: [
        {
            text: "Raise the federal minimum wage to $15 per hour",
            source: "https://www.ndp.ca/economy",
            demographics: [LOW_INCOME,],
        },
        {
            text: "Reduce hours to qualify for employment insurance (EI) to 360 hours to cover more workers",
            source: "https://www.ndp.ca/commitments",
        },
        {
            text: "Ban unpaid internships if they don’t count for school credit",
            source: "https://www.ndp.ca/commitments",
            demographics: [
                STUDENTS, YOUNG_PEOPLE
            ]
        },
        {
            text: "roll back the Conservatives’ corporate income tax cuts by three percentage points",
            source: "https://www.ndp.ca/economy"
        },
        {
            text: "require the use of Canadian-made steel and aluminum"
        },
        {
            text: "If you are unemployed, increase the amount of your income that is replaced to 60 percent ",
            demographics: [
                UNEMPLOYED,
            ]
        },
        {
            text: "create a low income supplement so that no one receiving EI regular or special benefits receives less than $1,200 a month",
            demographics: [
                LOW_INCOME
            ]
        },
        {
            text: "extend sickness benefits to 50 weeks"
        }
    ],
};

export const GREEN_JOBS_AND_ECONOMY = {
    party: "Green",
    topic: "Jobs and Economy",
    partyPlatforms: [
        {
            text: "raise the federal minimum wage to $15 an hour",
            source: "https://www.greenparty.ca/sites/default/files/platform_2019_en_web_update_09-16.pdf",
        },
        {
            text: "ban unpaid internships that aren’t for school credits",
            demographics: [
                STUDENTS,
                YOUNG_PEOPLE
            ]
        },
        {
            text: "Introduce a robot tax,  companies to pay a tax when they replace an employee with a machine"
        },
        {
            text: "provide $1 billion annually to municipalities to hire Canadian youth",
            source: "https://www.greenparty.ca/en/platform/green-economy",
            demographics: [
                STUDENTS,
                YOUNG_PEOPLE
            ]
        }

    ],
};

export const BLOC_QUEBECOIS_JOBS_AND_ECONOMY = {
    party: "Bloc Qubecois",
    topic: "Jobs and Economy",
    partyPlatforms: [
        {
            text: "Protect Quebec jobs and corporations from foreign takeovers",
            source: "https://www.blocquebecois.org/wp-content/uploads/2019/09/Plateforme_Bloc2019_web-1.pdf",
        },
        {
            text: "ban unpaid internships that aren’t for school credits",
            demographics: [
                STUDENTS,
                YOUNG_PEOPLE
            ]
        },
        {
            text: "reduced tax rate for overtime work"
        },
        {
            text: "Establish loans and loan guarantee programs for companies looking to automate",
        }

    ],
};
export const PEOPLES_JOBS_AND_ECONOMY = {
    party: "People's",
    topic: "Jobs and Economy",
    partyPlatforms: [
        {
            // todo add Citation for supply management
            text: "Phase out the supply management system over a number of years",
            source: "https://www.peoplespartyofcanada.ca/supply_management_making_dairy_poultry_and_eggs_more_affordable",
        },
        {
            text: "Privatize Canada Post",
            source: "https://www.bnnbloomberg.ca/airlines-telecoms-canada-post-maxime-bernier-unveils-people-s-party-vision-for-canada-1.1138093",
        },
        {
            text: "Privatize airports",
            source: "https://www.maximebernier.com/lower_air_travel_costs_by_privatizing_airports_and_opening_the_sector_to_more_competition",

        },
        {
            text: "Get rid of the deficit in two years through spending cuts and fiscal prudence. Spending cuts will include: corporate welfare ($5B-$10B), foreign development aid ($5B), CBC ($1B), equalization payments, and funding for programs which are provincial or municipal responsibilities.",
            source: "https://www.peoplespartyofcanada.ca/public_finance_balancing_the_budget_in_two_years_and_cutting_taxes",
        }

    ],
};


export const HOUSING_PLATFORMS = [CONSERVATIVE_HOUSING, LIBERAL_HOUSING, NDP_HOUSING];
export const JOBS_ECONOMY_PLATFORMS = [CONSERVATIVE_JOBS_AND_ECONOMY, LIBERAL_JOBS_AND_ECONOMY, NDP_JOBS_AND_ECONOMY,
    GREEN_JOBS_AND_ECONOMY, BLOC_QUEBECOIS_JOBS_AND_ECONOMY, PEOPLES_JOBS_AND_ECONOMY  ];

