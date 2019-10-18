// export const RECENT_GRADS = 'recent grads';
import React from "react";
import LinksBlock from "../components/page-blocks/blocks/LinksBlock";
import SectionTitleBlock from "../components/page-blocks/blocks/SectionTitleBlock";

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
    FreeTuitionCost:{
        link:"https://www.pbo-dpb.gc.ca/web/default/files/Documents/ElectionProposalCosting/Results/32724544_EN.pdf?timestamp=1571157057530",
        publication:"Parliamentary Budget Office",
        headline:"How much doe free tuition cost?",
        directQuote: <span>
            The parliamentary budget office conducted a study on how much it would cost the government to offer free tuition.
            They estimated that tuition fee funding to provinces and territories would cost $10.6 billion.
            The cost of forgiven debt and free tuition on Canada student Loans program would cost about $6.1 billion.
            For a total cost of $16.4 billion.
        </span>
    },
    GermanyFreeTuition:{
        link:"http://www.cnn.com/2014/10/22/world/europe/want-education-cant-pay-germany/",
        publication:"CNN",
        headline:"Does Germany Have Free Tuition?",
        directQuote: <span>
            The country's federal state of Lower Saxony became the last region to scrap tuition fees
            in mid-October 2014,
            which means that studying in Germany is now completely free even for international students.
        </span>
    },
    MortgageTermCalculator:{
        link:"https://itools-ioutils.fcac-acfc.gc.ca/MC-CH/MCCalc-CHCalc-eng.aspx",
        publication:"Government of Canada",
        headline:"Mortgage Calculator",
        directQuote: <span>
            Increasing the length of your mortgage reduces your monthly mortgage payment.
            But you pay for a longer period of time and usually end up paying more money overall.
            Use this{' '}
            <a  target="_blank"
                rel="noopener noreferrer"
                href="https://itools-ioutils.fcac-acfc.gc.ca/MC-CH/MCCalc-CHCalc-eng.aspx">
            mortgage calculator
            </a> to see how this might affect you.
        </span>
    },
    SpeculationTax: {

        link: "https://vancouversun.com/news/local-news/b-c-speculation-tax-heres-what-you-need-to-know",
        publication: "Vancouver Sun",
        headline: "What is a Speculation Tax",
        directQuote: <span>
            Tax applied on properties that are not the primary residences of the owner — they’re not living there for more than six months per year — and that aren’t being occupied by a tenant when the owner isn’t there.
            <br/><br/>
            Note: This is the plan for BC's provincial speculation tax.

            Other provinces and federal governments might have slightly different details,
            but the general idea is the same.
        </span>
    },
    SpeculationTaxForeignersRealEstate: {

        link: "https://www.urbaneer.com/blog/foreign_buyers_policy_and_canadian_real_estate",
        publication: "Urbaneer",
        headline: "How Does Speculation Tax Affect Real Estate Prices?",
        directQuote: <span>
            "In Toronto (and in it surrounding Golden Horseshoe area)
            a 15 per cent foreign investor tax was introduced in 2017.
            This tax did cause the pullback of foreign investors and
            Toronto housing prices moderated."
            <img alt="How Does Speculation Tax Affect Real Estate Prices?"
                 src="https://www.urbaneer.com/media/uploads/main_uploads/toronto_housing_graph.jpg"
                 className="mt-3" />

        </span>
    },
    OilAndEnvironment: {
        link: "https://www.greenpeace.org/usa/global-warming/issues/oil/",
        publication: "Green Peace",
        headline: "Why is oil bad for the environment?",
        directQuote: "Burning oil releases carbon dioxide into the atmosphere, contributing to the warming of our planet. In 2013, petroleum accounted for 41 percent of the U.S.’s carbon dioxide emissions from fossil fuels."
    },
    CarbonTaxCost: {
        link: "https://theconversation.com/heres-what-the-carbon-tax-means-for-you-114671",
        publication: "The Conversation",
        headline: "How Much Will the Carbon Tax Cost You?",
        directQuote: <span>
            The average household cost from the federal carbon tax will range from $200 per year in New Brunswick to $400 in Saskatchewan, which relies more on coal to generate electricity.
            In 2019, the carbon price starts at
            {' '}
            <a  target="_blank"
                rel="noopener noreferrer"
                href="https://www.canada.ca/en/department-finance/news/2018/10/backgrounder-fuel-charge-rates-in-listed-provinces-and-territories.html">
            4.4 cents per litre of gasoline.
            </a>
            The total cost will depend on how much fossil fuel energy you use.
            If you drive a lot or heat a large house, you will pay more.
        </span>
    },
    CarbonTaxNotEffective: {
        link: "https://econweb.ucsd.edu/~carsonvs/papers/632.pdf",
        publication: "Statistics Norway",
        headline: "Are Carbon Taxes Effective? Not really",
        directQuote: "\"We find that despite significant price increases for some fueltypes, the carbon tax effect on emissions was modest." +
            " The taxes contributed to a reduction in onshore" +
            "emissions of only 1.5 percent and total emissions of 2.3 percent.\""
    },
    CarbonTaxIsEffective: {
        link: "https://www.clcouncil.org/economists-statement/",
        publication: "Climate Leadership Council",
        headline: "Are Carbon Taxes Effective? Yes",
        directQuote: "A carbon tax offers the most cost-effective lever to reduce carbon emissions at a large scale and very quickly." +
            "Sometimes market fail, and the price of a carbon tax will incentivize carbon emitters to use less carbon."
    },
    BillC69: {
        link: "https://openparliament.ca/bills/42-1/C-69/",
        publication: "Open Parliament",
        headline: "What is Bill C-69?",
        directQuote: <span>
            Bill C-69 makes it easier to cancel pipeline projects if it will badly harm the environment.
            One perspective says that it will make us have a cleaner environment and help reduce the effects of climate change.
            Another perspective says that it will cost a lot of jobs, make Canadian companies weaker globally
            and slow down the economy in certain parts of Canada.
        </span>
    },
    NIMBYISM: {
        link: "https://www.tvo.org/article/dont-you-be-my-neighbour-ontarios-new-nimbyism",
        publication: "TVO",
        headline: "What is NIMBYISM?",
        directQuote: <span>
            NIMBYISM is when people lobby against new homes being built in their neighborhoods.
            Or lobby against certain types of homes being built, usually high-density homes.
            The Pro NIMBYISM perspective says that it could reduce the values of their homes.
            Another Pro NIMBYISM perspective says that it could affect the culture of the community.
            The anti NIMBYISM perspective says that building more high homes and higher density homes,
            creates more affordable housing for everyone
        </span>
    }
};

export const References = [
    {
        subsectionTitle: "Business News Network and CBC",
        links: [
            {
                text: "2019 Federal election platform tracker: Where the major parties stand so far (BNN)",
                url: "https://www.bnnbloomberg.ca/2019-federal-election-platform-tracker-where-the-major-parties-stand-so-far-1.1308714"
            },
            {
                text:"How do the main parties compare on these issues? (CBC)",
                url:"https://newsinteractives.cbc.ca/elections/federal/2019/party-platforms/"
            }
        ]
    },
    {
        subsectionTitle: "Maclean's and CTV",
        links: [
            {
                text: "2019 Federal election platform guide: Where the parties stand on everything (Macleans)",
                url: "https://www.macleans.ca/politics/2019-federal-election-platform-guide-where-the-parties-stand-on-everything/"
            },
            {
                text:"2019 Federal election platforms (CTV)",
                url:"https://election.ctvnews.ca/platforms"
            },
        ]
    },
];

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