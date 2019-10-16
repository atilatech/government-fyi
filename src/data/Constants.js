// export const RECENT_GRADS = 'recent grads';
import React from "react";

export const YOUNG_PEOPLE = 'young people';
export const STUDENTS = 'students';
export const CLIMATE_CONSCIOUS = 'climate conscious';
// export const SENIORS = 'seniors';
export const IMMIGRANTS = 'immigrants';
export const HOMEOWNERS = 'homeowners';
export const OIL_WORKERS = 'oil workers';
export const ENTREPRENEURS_AND_SMALL_BUSINESS = 'entrepreneurs and small business';
export const UNEMPLOYED = 'unemployed';
export const FOREIGNERS = 'foreigners';
export const LOW_INCOME = 'low income';
export const WOMEN = 'women';
export const VISIBLE_MINORITY = 'visible minority';

export const ALL_DEMOGRAPHICS = [
    YOUNG_PEOPLE, STUDENTS, IMMIGRANTS, WOMEN,
    CLIMATE_CONSCIOUS, VISIBLE_MINORITY, HOMEOWNERS, OIL_WORKERS,
    ENTREPRENEURS_AND_SMALL_BUSINESS, UNEMPLOYED,
    FOREIGNERS, LOW_INCOME];

export const HOUSING = "Housing";
export const JOBS_AND_ECONOMY = "Jobs and Economy";
export const ENERGY_AND_CLIMATE = "Energy and Climate";
export const EDUCATION = "Education";
export const HEALTHCARE = "Healthcare";
export const IMMIGRATION = "Immigration";
export const TAXES = "Taxes";
export const ELECTION_TOPICS = [
    HOUSING,
    JOBS_AND_ECONOMY,
    ENERGY_AND_CLIMATE,
    EDUCATION,
    HEALTHCARE,
    IMMIGRATION,
    TAXES,
];

export const PROP_NUM_TO_CATEGORY_DICT = {
    1: 'housing',
    2: 'jobs-and-economy',
    3: 'energy-and-climate',
    4: 'education',
    5: 'healthcare',
    6: 'immigration',
    7: 'taxes',
};

export const CitationsMaster = {
    RESP:{
        link:"https://www.moneysense.ca/save/investing/resp/what-is-resp-registered-education-savings-plan-explained/#whatis",
        publication:"Money Sense Canada",
        headline:"What is an RESP?",
        directQuote:"An investment account which parents can use to save towards their Child’s education. The major benefit is that the government will match 20% of each dollar you put in up to $2,500. So if you put $1,000 into your child’s RESP account, the government puts in another $200."
    },
    RepaymentAssistancePlan:{
        link:"https://www.canada.ca/en/services/benefits/education/student-aid/grants-loans/repay/assistance/rap.html",
        publication:"Government of Canada",
        headline:"What is Repayment Assistance Plan?",
        directQuote:"A loan which, depending on your income, you either don’t have to pay back the loan" +
            " or your monthly payment is capped at 20% of your income." +
            " After about 60 months or 10 years, you pay your monthly payments " +
            "and the government covers the remaining principal and interest. " +
            "15 years after leaving school, you no longer have to pay anything.\n" +
            "This has been simplified to keep it short. For more details click read more.\n"
    },
    CanadaStudentGrant:{
        link:"https://www.canada.ca/en/services/benefits/education/student-aid/grants-loans.html",
        publication:"Government of Canada",
        headline:"What is Canada Student Grant?",
        directQuote:"Money that the government gives you for school which you don't have to pay back."
    },
    Pharmacare:{
        link:"https://www.cbc.ca/news/health/pharmacare-faq-1.4554270",
        publication:"CBC",
        headline:"What is Pharmacare?",
        directQuote:"If you go to the hospital, your visit and care is currently covered under health insurance." +
            "If you need to get a prescription afterwards, health insurance doesn’t cover it for most people." +
            "Having pharmacare would mean that your prescription medicine is also covered under health insurance."
    },
    SafeThirdCountryAct:{
        link:"https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/agreements/safe-third-country-agreement.html",
        publication:"CBC",
        headline:"What is the Safe Third Country Act?",
        directQuote:<span>
      Prevents refugees who made claims in the US from making claims in Canada.
      For example, if you are a Syrian refugee and you applied for refugee status in Canada.
      If you land in America first, America can decide if they should give you asylum.
      If they say no, you can’t try and apply for asylum in Canada.
      The original intention was that Canada and the US both have similar values for determining if someone should be given refugee status.
      So if the US said no, Canada would likely say no as well.
      Recently, an increasing number of people believe that
      <a href="https://www.amnesty.ca/news/light-new-us-refugee-policy-canada-must-immediately-suspend-safe-third-country-agreement"
         target="_blank"
         rel="noopener noreferrer" >
       this system should be changed
      </a>
      because the US has changed their refugee policies
      and this system no longer aligns with the values of Canada’s refugee system.
    </span>
    },
    StudentLoansDebt:{
        link:"https://www.theglobeandmail.com/investing/personal-finance/gen-y-money/article-recent-federal-budget-will-help-indebted-students-but-experts-say-its/",
        publication:"Globe and Mail",
        headline:"How much student Loans does the average student have?",
        directQuote: <span>
            A 2018 <a target="_blank" rel="noopener noreferrer" href="http://cusc-ccreu.ca/?page_id=32&lang=en">
						Canadian University Survey Consortium survey
					</a> of about 15,000 graduating students put the average debt –
            among the 50 per cent of students who finished with debt – at $27,929
        </span>
    },
}