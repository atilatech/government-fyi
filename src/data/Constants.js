// export const RECENT_GRADS = 'recent grads';
import LinksBlock from "../components/page-blocks/blocks/LinksBlock";
import SectionTitleBlock from "../components/page-blocks/blocks/SectionTitleBlock";
import { References } from "./References";

export const YOUNG_PEOPLE = 'young people';
export const STUDENTS = 'students';
export const CLIMATE_CONSCIOUS = 'climate conscious';
export const IMMIGRANTS = 'immigrants';
export const HOMEOWNERS = 'homeowners';
export const OIL_WORKERS = 'oil workers';
export const ENTREPRENEURS_AND_SMALL_BUSINESS = 'entrepreneurs and small business';
export const UNEMPLOYED = 'unemployed';
export const FOREIGNERS = 'foreigners';
export const LOW_INCOME = 'low income';
export const WOMEN = 'women';
export const VISIBLE_MINORITY = 'visible minority';
export const SENIORS = 'seniors';

export const ALL_DEMOGRAPHICS = [
    STUDENTS,
    YOUNG_PEOPLE,
    IMMIGRANTS,
    WOMEN,
    CLIMATE_CONSCIOUS,
    VISIBLE_MINORITY,
    HOMEOWNERS,
    ENTREPRENEURS_AND_SMALL_BUSINESS,
    LOW_INCOME,
    OIL_WORKERS,
    UNEMPLOYED,
    FOREIGNERS,
    SENIORS,
];

export const HOUSING = "Housing";
export const JOBS_AND_ECONOMY = "Jobs and Economy";
export const ENERGY_AND_CLIMATE = "Energy and Climate";
export const EDUCATION = "Education";
export const HEALTHCARE = "Healthcare";
export const IMMIGRATION = "Immigration";
export const TAXES = "Taxes";
export const SENIORS_TOPIC = "Seniors";
export const ELECTION_TOPICS = [
    HOUSING,
    JOBS_AND_ECONOMY,
    ENERGY_AND_CLIMATE,
    EDUCATION,
    HEALTHCARE,
    IMMIGRATION,
    TAXES,
    SENIORS_TOPIC,
];

export const ELECTION_YEAR = 2021;
export const CREATION_DATE = `September 11, ${ELECTION_YEAR} 7:00:00`;
export const BANNER_IMAGE = "banner-image-2021.png";

export const SEO_META = {
    url: "https://www.ourgovernment.fyi/",
    title: `OurGovernment.FYI 🇨🇦 – The simplest non-partisan guide to Canada's ${ELECTION_YEAR} Federal elections 🍁 - ourgovernment.fyi`,
    headline: `The simplest non-partisan voter guide for the ${ELECTION_YEAR} Canadian federal elections`,
    description: `The simplest non-partisan voter guide for the ${ELECTION_YEAR} Canadian federal elections`,
    image: BANNER_IMAGE,
};

export const PROP_NUM_TO_CATEGORY_DICT = {
    1: 'housing',
    2: 'jobs-and-economy',
    3: 'energy-and-climate',
    4: 'education',
    5: 'healthcare',
    6: 'immigration',
    7: 'taxes',
    8: 'seniors',
};

export const ReferencesBlock = [
    {
        component: SectionTitleBlock,
        data:{
            title: "References"
        }
    },
    {
        component: LinksBlock,
        data: {
            subsections: References
        }
    }
];
