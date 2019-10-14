import React from 'react'
import PropPageBuilder from 'components/page-blocks/aggregators/PropPageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import LinksBlock from 'components/page-blocks/blocks/LinksBlock'
import SectionTitleBlock from 'components/page-blocks/blocks/SectionTitleBlock'

import ResultBlock from 'components/page-blocks/blocks/ResultBlock'
import { PropMetaData } from 'pages/prop-attributes'

// import Acronym from 'components/interactive/acronym'
import PartyPlatformBlock from "../../components/page-blocks/blocks/PartyPlatformBlock";
import {CONSERVATIVE_JOBS_AND_ECONOMY, LIBERAL_JOBS_AND_ECONOMY} from "../../data/PartyPlatformData";

const Data = {
	pageId: "jobs-and-economy",
	propNum: 2,
	meta: {
		dateCreated: new Date('October 8, 2018 10:00:00'),
		dateModified: new Date('November 5, 2018 12:52:00')
	},
	blocks: [
		{
			component: ResultBlock,
			data: {
				result: PropMetaData(2).result,
				title: "What is the key issue with the Economy?",
				text: <span>What should the federal minimum wage be?
				If its too high, people may hire less workers
				but if its too low, workers may get taken advantage of.
				What's the right balance?
				</span>,
			},
		},
		{
			component: PartyPlatformBlock,
			data: CONSERVATIVE_JOBS_AND_ECONOMY,
		},
		{
			component: PartyPlatformBlock,
			data: LIBERAL_JOBS_AND_ECONOMY,
		},
		{
			component: TextWithTitleBlock,
			data: {
				title: <span className="ndp">
					What does the NDP think…
			</span>,
				text: <ul>
					<li>
						Raise the federal minimum wage to $15 per hour.
					</li>
					<li>
						Ban unpaid internships if they don’t count for school credit.
					</li>
				</ul>
			}
		},
		{
			component: TextWithTitleBlock,
			data: {
				title: <span className="green">
					What does the Green Party think…
			</span>,
				text: <ul>
					<li>
						Raise the federal minimum wage to $15 per hour.
					</li>
					<li>
					ban unpaid internships that aren’t for school credits.
					</li>
					<li>
					robot tax, which would force companies to pay a tax when they replace an employee with a machine.
					</li>
				</ul>
			}
		},
		{
			component: TextWithTitleBlock,
			data: {
				title: <span className="conservative">
					What does the Bloc Quebecois think…
			</span>,
				text: <ul>
					<li>
					tax credit for recent graduates or immigrants who move to rural areas for jobs
					</li>
					<li>
					ban unpaid internships that aren’t for school credits.
					</li>
				</ul>
			}
		},
		{
			component: TextWithTitleBlock,
			data: {
				title: <span className="conservative">
					What does the People's Party think…
			</span>,
				text: <ul>
					<li>
					claims getting rid of supply management would create “thousands of jobs.”
					</li>
					<li>
					Privatize Canada Post
					</li>
					<li>
					Privatize airports
					</li>
				</ul>
			}
		},

		{
			component: SectionTitleBlock,
			data: {
				title: "More articles"
			}
		},
		{
			component: LinksBlock,
			data: {
				subsections: [
					{
						subsectionTitle: "Yes on Prop 2",
						links: [
							{
								text: "SF Chronicle Editorial Board",
								url: "https://www.sfchronicle.com/opinion/editorials/article/Editorial-Chronicle-recommends-Yes-on-California-13242085.php"
							},
							{
								text: "LA Times Editorial Board",
								url: "http://www.latimes.com/opinion/endorsements/la-ed-proposition-2-mentally-ill-housing-20181002-story.html",
							},
							{
								text: "San Diego Union-Tribune Editorial Board",
								url: "http://www.sandiegouniontribune.com/opinion/editorials/sd-proposition-two-help-homeless-menatl-health-utak-20180917-story.html"
							},
							{
								text: "San Jose Mercury News & East Bay Times Editorial Board",
								url: "https://www.mercurynews.com/2018/09/22/editorial-prop-2/"
							},
							{
								text: "Sac Bee Editorial Board",
								url: "https://www.sacbee.com/opinion/election-endorsements/article218406765.html"
							},
							{
								text: "Press Democrat Editorial Board",
								url: "https://www.pressdemocrat.com/opinion/8665876-181/pd-editorial-yes-on-prop?sba=AAS"
							},
							{
								text: "Fresno Bee Editorial Board",
								url: "https://www.fresnobee.com/opinion/editorials/article218551355.html"
							},
							{
								text: "CA Chamber of Commerce",
								url: "https://advocacy.calchamber.com/2018/09/12/calchamber-takes-positions-on-propositions-1-2-and-4-recaps-positions-on-all-ballot-measures/"
							}
						]
					},
					{
						subsectionTitle: "No on Prop 2",
						links: [
							{
								text: "Op-ed: Invest in people first",
								url: "http://www.sandiegouniontribune.com/opinion/commentary/sd-proposition-2-20180830-story.html"
							},
						]
					},
					{
						subsectionTitle: "Related coverage",
						links: [
							{
								text: "KQED Forum debate",
								url: "https://www.kqed.org/forum/2010101867764/election-2018-proposition-2-would-use-revenue-from-millionaires-tax-to-fund-homeless-housing"
							},
							{
								text: "$2 billion to help house California's homeless isn't being spent — and no one knows when it will be",
								url: "http://www.latimes.com/politics/la-pol-ca-homeless-housing-bond-stalled-20180301-story.html"
							},
							{
								text: "CA counties slow to spend mental health tax",
								url: "https://www.sacbee.com/news/politics-government/capitol-alert/article202396749.html"
							}
						]
					},
					{
						subsectionTitle: "Impartial analyses",
						links: [
							{
								text: "Legislative Analyst's Office report",
								url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=2&year=2018",
							},
							{
								text: "Official voter guide digest",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/prop2-title-summ-analysis.pdf"
							},
							{
								text: "Legal text of proposition",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/topl.pdf#Prop2"
							},
							{
								text: "Ballotpedia",
								url: "https://ballotpedia.org/California_Proposition_2,_Use_Millionaire%27s_Tax_Revenue_for_Homelessness_Prevention_Housing_Bonds_Measure_(2018)"
							},
						]
					}
				]
			}
		}
	]
}
export default () => (<PropPageBuilder data={Data} />);
