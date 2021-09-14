import { PlatformUtils } from "services/PlatformUtils";
import {
    ENTREPRENEURS_AND_SMALL_BUSINESS,
    IMMIGRANTS,
    PARENTS,
    STUDENTS,
    UNEMPLOYED,
    WOMEN,
} from "./Constants";

export const CONSERVATIVE_JOBS_AND_ECONOMY = {
    party: "Conservative",
    topic: "Jobs and Economy",
    partyPlatforms: [
        {
            text: "Introduce a Dine and Discover Program: Provide a 50% rebate for food and non-alcoholic drinks purchased for dine-in from Monday to Wednesday for one month once it is safe to do so and eliminate the Liberal escalator tax on alcohol.",
            source: "https://cpcassets.conservative.ca/wp-content/uploads/2021/08/16102359/f8279981721e07a.pdf#page=11",
        },
        {
            text: "Launch the Explore and Support Canada initiative with a 15% tax credit for vacation expenses of up to $1,000 per person for Canadians to vacation in Canada in 2022, helping our tourism sector get back on its feet",
        },
        {
            text: "Launch the Main Street Business Loan to provide loans of up to $200,000. (The current Canada Emergency Business Account (CEBA) is $60,000).",
        },
        {
            text: "Provide a 25% tax credit on amounts of up to $100,000 that Canadians personally invest in a small business over the next two years.",
        },
        {
            text: " Allow businesses with less than $60,000 in revenues to use simple cash accounting.",
            source: "https://cpcassets.conservative.ca/wp-content/uploads/2021/08/16102359/f8279981721e07a.pdf#page=12",
            demographics: [
                ENTREPRENEURS_AND_SMALL_BUSINESS
            ]
        },
        {
            text: "Appoint a Minister Responsible for Red Tape Reduction tasked with introducing and passing at least one red tape reduction bill per year, eliminating unneeded or counterproductive red tape.",
            source: "https://cpcassets.conservative.ca/wp-content/uploads/2021/08/16102359/f8279981721e07a.pdf#page=14",
            demographics: [
                ENTREPRENEURS_AND_SMALL_BUSINESS
            ]
        },
    ],
};
export const LIBERAL_JOBS_AND_ECONOMY = {
    party: "Liberal",
    topic: "Jobs and Economy",
    partyPlatforms: [
        {
            text: "Introduce a new EI benefit for self-employed Canadians, delivered through the tax system, that would provide similar unemployment assistance to EI and lasting for up to 26 weeks. Self-employed Canadians would only pay the portion they would normally pay if they were a salaried employee",
            source: "https://liberal.ca/wp-content/uploads/sites/292/2021/09/Platform-Forward-For-Everyone.pdf#page=32",
            demographics: [UNEMPLOYED, ENTREPRENEURS_AND_SMALL_BUSINESS],
        },
        {
            text: "Provide up to 5 new paid leave days for federally regulated employees who experience a miscarriage or stillbirth, which can happen in up to 1 in 5 pregnancies.",
            source: "https://liberal.ca/wp-content/uploads/sites/292/2021/09/Platform-Forward-For-Everyone.pdf#page=33",
            demographics: [WOMEN,],
        },
        {
            text: "Establish a new Apprenticeship Service which will connect 55,000 first-year apprentices in Red Seal trades with opportunities at small and medium-sized employers",
            demographics: [ENTREPRENEURS_AND_SMALL_BUSINESS]
        },
        {
            text: "Give microgrants of up to $2,400 to smaller Main Street businesses so they can afford the costs of new technology",
            demographics: [ENTREPRENEURS_AND_SMALL_BUSINESS]
        },
        {
            text: "250 to every new business looking to expand online",
            source: "https://2019.liberal.ca/wp-content/uploads/sites/292/2019/09/BG_EN_Backgrounder.pdf",
        },
        {
            text: "Introduce Career Insurance Benefit that starts after Employment Insurance ends. You get 20 percent of insured earnings the first year you’re laid off and 10 percent in the second year",
        },
        {
            text: "Offer zero-interest loans to small and medium-sized businesses so they can finance larger technology adoption projects.",
        },
        {
            text: "Build on the Economic Mobility Pathways Pilot and work with employers and communities across Canada to welcome 2,000 skilled refugees to fill labour shortages in in-demand sectors such as health care.",
            demographics: [
                IMMIGRANTS
            ]
        }

    ],
};
export const NDP_JOBS_AND_ECONOMY = {
    party: "NDP",
    topic: "Jobs and Economy",
    partyPlatforms: [
        {
            text: "Bring in a new special leave that allows parents to take shorter parental leave at a higher replacement rate. We’ll also allow self-employed workers to opt-into parental benefits at any time before taking the leave, and move to double leave for parents of multiples.",
            source: "https://xfer.ndp.ca/2021/Commitments/Ready%20for%20Better-NDP%202021%20Commitments_AccessibleVersion.pdf#page=27",
            demographics: [PARENTS, ENTREPRENEURS_AND_SMALL_BUSINESS],
        },
        {
            text: "Allow sick leave to be taken by workers one or two days at a time, give full income replacement to workers who are sick, and reimburse employers instead of putting the onus on workers to apply for the program.",
            source: "https://xfer.ndp.ca/2021/Commitments/Ready%20for%20Better-NDP%202021%20Commitments_AccessibleVersion.pdf#page=31",
        },
        {
            text: "Put in place a living federal minimum wage starting at $15 an hour and rising to $20 an hour, indexed to the cost of living",
            source: "https://xfer.ndp.ca/2021/Commitments/Ready%20for%20Better-NDP%202021%20Commitments_AccessibleVersion.pdf#page=32"
        },
        {
            text: "Put in place rules to require that part-time and contract workers be compensated equally to full-time workers.",
        },
        {
            text: "Immediately ban unpaid internships outside of education programs.",
            demographics: [
                STUDENTS
            ]
        },
        {
            text: "Change EI rules to allow workers who quit their job to go to school to qualify for EI benefits",
            source: "https://xfer.ndp.ca/2021/Commitments/Ready%20for%20Better-NDP%202021%20Commitments_AccessibleVersion.pdf#page=33",
            demographics: [
                UNEMPLOYED,
            ]
        },
    ],
};
export const GREEN_JOBS_AND_ECONOMY = {
    party: "Green",
    topic: "Jobs and Economy",
    partyPlatforms: [
        {
            text: "Establish a Guaranteed Livable Income program: Every Canadian would be guaranteed a minimum income.",
            source: "https://www.greenparty.ca/en/platform/life-with-dignity#guaranteed-livable-income",
        },

    ],
};
export const BLOC_QUEBECOIS_JOBS_AND_ECONOMY = {
    party: "Bloc Qubecois",
    topic: "Jobs and Economy",
    incomplete: true,
};
export const PEOPLES_JOBS_AND_ECONOMY = {
    party: "People's",
    topic: "Jobs and Economy",
    incomplete: true,
};
export const JOBS_ECONOMY_PLATFORMS = [CONSERVATIVE_JOBS_AND_ECONOMY, LIBERAL_JOBS_AND_ECONOMY, NDP_JOBS_AND_ECONOMY,
    GREEN_JOBS_AND_ECONOMY, BLOC_QUEBECOIS_JOBS_AND_ECONOMY, PEOPLES_JOBS_AND_ECONOMY];

JOBS_ECONOMY_PLATFORMS.forEach(platform => PlatformUtils.addMissingPlatformData(platform));