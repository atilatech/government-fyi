import React from 'react'
import PropPageBuilder from 'components/page-blocks/aggregators/PropPageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import SectionTitleBlock from 'components/page-blocks/blocks/SectionTitleBlock'
import LinksBlock from 'components/page-blocks/blocks/LinksBlock'
import IMessageBlock from 'components/page-blocks/blocks/IMessageBlock'
import VerticalSummaryListBlock from 'components/page-blocks/blocks/VerticalSummaryListBlock'
import {EmojiLg} from 'components/static/iMessageStyles'
import Citation from 'components/interactive/citation/citation'
import Acronym from 'components/interactive/acronym'
import { Acronyms, Citations} from './expandables'
import ResultBlock from 'components/page-blocks/blocks/ResultBlock'
import {PropMetaData} from 'pages/prop-attributes'

const Data = {
	pageId:"prop-10",
	propNum: 10,
	meta: {
		dateCreated: new Date('October 14, 2019 10:00:00'),
		dateModified: new Date('October 14, 2019 10:00:00')
	},
	blocks: [
		{
			component: ResultBlock,
			data: {
				result: PropMetaData(10).result,
				title: "Failed",
				text: <span>Voters decided not to repeal the <em>Costa Hawkins Rental Housing Act</em>, which would have expanded cities' ability to implement rent control, namely for single-fam homes and buildings built after 1995, and to control rents even when the apartment is vacant between tenants. <a target="_blank" rel="noreferrer noopener" href="http://www.latimes.com/politics/la-pol-ca-proposition-10-rent-control-20181106-story.html">Read the LA Times' take.</a></span>
			},
		},
    {
    	component: TextWithTitleBlock,
    	data: {
    		title: "Would expanded rent control help the housing crisis?",
    		text:
				<span>
					Prop 10 would repeal the <em>Costa-Hawkins Rental Housing Act</em>, <Citation data={Citations['1']}>a state law passed in 1995 that limits how cities can regulate rent on housing built after that year.</Citation> In addition, it explicitly said that landlords could reset rents to market rate after a tenant moved out, ending the practice of "vacancy control." <Citation data={Citations['8']}>Fifteen cities, like LA, SF, Oakland, and San Jose, already had local rent control laws in 1995, but Costa-Hawkins prevented them from regulating rents on any buildings after that.</Citation>. (Cities can implement rent control today under Costa-Hawkins, but only on buildings built before 1995. <Citation data={Citations['23']}>Three Bay Area cities did so in 2016.</Citation>)
					<br/><br/>
					By repealing <em>Costa-Hawkins</em>, Prop 10 would give cities the authority to implement local rent control on buildings built after 1995 and single-family homes, and also allow vacancy control. If and how a city implements specific policy would be up to each individual city.
				</span>,
    	},
    },
    {
    	component: TextWithTitleBlock,
    	data: {
    		title: "Isn’t rent control a good thing?",
    		text:
				<span>
					It's complicated. Prop 10 critics say rent control is problematic for CA’s housing shortage because:
					<ul>
						<li>It often isn't "means-tested". Residents who live in rent controlled apartments aren’t necessarily the people who need it the most.</li>
						<li><Citation data={Citations['4']}>It causes displacement and gentrification as some landlords try to convert their units to more profitable real estate.</Citation></li>
						<li><Citation data={Citations['5']}>It discourages real estate developers from building rental units because it affects their profit margins.</Citation></li>
					</ul>
					<Citation data={Citations['6']}>Economists generally agree that price ceilings on rental prices would lead to less available housing.</Citation> The Legislative Analyst's Office estimates that renters would move less often, property values would decrease because landlords would earn less, and <Citation data={Citations['9']}>local governments would receive less money.</Citation>
				</span>
				}
			},
			{
				component: TextWithTitleBlock,
				data: {
					title: "Fine. Rent control is the devil.",
					text:
					<span>
						Not so fast, fella. We all know it's expensive to rent in California. <Citation data={Citations['10']}>Renters typically pay 50% more for housing than renters in other states, and sometimes double.</Citation> Rent control helps reduce displacement for people living in increasingly expensive cities, the benefits of which are immeasurable. Prop 10 supporters argue the lack of affordable housing has led to more homelessness across the state. <Citation data={Citations['11']}>One study found that rent control in the Bay Area helped increase housing production</Citation>, contrary to what economists might predict.
						<br/><br/>
						<Citation data={Citations['7']}>Supporters also argue Prop 10 would give control back to cities. Local governments are the best advocates for their residents, and passing Prop 10 would give cities an additional tool to help address their specific housing needs, particularly in the short-term.</Citation>
					</span>,
    	},
    },
		{
			component: TextWithTitleBlock,
			data: {
				title: "Hasn't somebody researched this by now?",
				text: "Yes, but there's a lot. Rent control is both gnarly and well-studied. We've attempted to summarize many of the studies cited by proponents and opponents; we encourage you to dig deeper and read the actual papers."
			}
		},
		{
			component: VerticalSummaryListBlock,
			data: {
				listNItems: 3,
				stories: [
					{
						title:"The impact of rent regulations, USC, meta-analysis (2018)",
						buttonText:"More questions they tried to answer",
						links:[
							{
								label:"Published paper",
								url:"https://dornsife.usc.edu/assets/sites/242/docs/Rent_Matters_PERE_Report_Final_02.pdf"
							}
						],
						description:<span>This meta-analysis tries to address common questions about rent regulation by looking at the current literature. (Spoiler: it's nuanced.) It also discusses the intangible benefits of housing stability.
							<br/><br/>
							<b>Does rent control increase rent on units that aren't rent-controlled?</b> <Citation data={Citations['24']}>It appears not, but SF might have been an exception.</Citation> The paper suggests that surrounding units' rental prices stay the same or are lower as a result of nearby rent controlled units.
						</span>,
						expandedContent:<span>
							<br/>
							<b>Does rent control decrease the buildings property value for landlords?</b> <Citation data={Citations['25']}>The answers are mixed. In Cambridge, MA, before rent control was removed in 1995, researchers found that property values for rent controlled buildings was lower than non-rent controlled buildings. The removal of rent control mostly equalized it.</Citation><br/><br/><Citation data={Citations['26']}>But that's just one city. Another study found that rent regulation in several New Jersey cities had no significant impact on appreciation or foreclosures.</Citation>
							<br/><br/>
							<b>Does rent control decrease housing supply or production?</b> <Citation data={Citations['28']}>The paper suggests that it does not affect production</Citation>, but <Citation data={Citations['27']}> it may decrease existing supply of units if policy is not designed well.</Citation>. <Citation data={Citations['29']}>In particular, without regulation, more landlords will likely be converting their rental units to condos.</Citation>
							<br/><br/>
							<b>Does rent control affect "mom and pop" property owners?</b> There isn't enough research to suggest either way.
						</span>
					},
					{
						title: "Stanford study on SF rent control (2018)",
						buttonText: "What they found",
						links: [
							{
								label:"Summarized article",
								url:"https://www.brookings.edu/research/what-does-economic-evidence-tell-us-about-the-effects-of-rent-control/"
							},
							{
								label:"Research paper",
								url:"https://web.stanford.edu/~diamondr/DMQ.pdf"
							},
						],
						description:
							<span>Researchers took advantage of a unique "quasi-experimental" situation <Citation data={Citations['12']}>where in 1994, rent control in SF was suddenly applied to small multifamily homes (SMFH) built before 1980.</Citation> The researchers compared those <Acronym data={Acronyms.SMFH}/>s to <Acronym data={Acronyms.SMFH}/>s built after 1980 (not rent controlled) and studied how renters and landlords behaved after 1994.</span>,
						expandedContent:
							<span>
								<br/>
								A few findings: (1) <Citation data={Citations['13']}>People in rent controlled <Acronym data={Acronyms.SMFH}/>s were more likely to still be living at their 1994 addresses.</Citation> (Supporting what rent control advocates say.)
								<br/><br/>
								(2) <Citation data={Citations['16']}>Rent-controlled buildings were more likely to turn into condos or Tenancy in Common (TIC) buildings, effectively reducing the number of renters in buildings that were rent controlled.</Citation> (Supporting what rent control opponents say.)
								<br/><br/>
								(3) <Citation data={Citations['14']}>In areas where surrounding rents increased rapidly, being in a rent controlled apartment actually <em>decreased</em> the likelihood that renters remained at their address.</Citation> This is because landlords, who had a large incentive to remove tenants, <Citation data={Citations['15']}>could effectively do so through <Acronym data={Acronyms.variousMeans}/>.</Citation> (This is counter to rent control's intention)
							</span>,
					},
					{
						title: "Haas Institute, UC Berkeley, Policy/Research Brief (2018)",
						buttonText: "More conclusions",
						links: [
							{
								label:"Related post",
								url:"https://haasinstitute.berkeley.edu/rent-control-key-neighborhood-stabilization"
							},
							{
								label:"Policy Brief",
								url:"https://haasinstitute.berkeley.edu/sites/default/files/haasinstitute_rentcontrol.pdf"
							},
						],
						description: <span>This policy brief describes how rent control would help the dire housing situation for California renters. Stagnating wages and an overheated rental market has led to a situation where government needs to step in. Rent control would reduce displacement, particularly for low-income families, people with disabilities, and people of color.<br/><br/><Citation data={Citations['17']}>Perhaps the most surprising argument is that rent control has lead to <em>increased</em> housing production, citing the Bay Area and LA.</Citation></span>,
						expandedContent:
						<span>
							<br/>
							(1) <Citation data={Citations['19']}>Rent control preserves economic diversity in neighborhoods by allowing lower paid workers (e.g. teachers, service workers, health workers) to live closer to their jobs.</Citation> <Citation data={Citations['18']}>This benefits everybody because it reduces traffic, supports local businesses, increases the cohesion of neighborhood communities,</Citation> <Citation data={Citations['22']}>and potentially decreases rental prices for <em>non-controlled</em> units.</Citation>
							<br/><br/>
							(2) <Citation data={Citations['21']}>The paper argues that rent control shouldn't be means tested (aka applying only to low-income individuals) because it would inevitably result in discrimination by landlords, who would have a monetary incentive to turn down qualifying renters.</Citation>
							<br/><br/>
							(3) <Citation data={Citations['20']}>The paper cautions that rent control is not the solution to CA's housing problem. It is the first step. They also say that thoughtful policy design is required to minimize the downsides of rent control.</Citation>
						</span>
					},

				]
			}
		},
		{
			component: SectionTitleBlock,
			data:{
				nColWidth: 6,
				title: "Two well-read roommates",
			}
		},
		{
			component: IMessageBlock,
			data: {
				messages: [
					{
						from: "them",
						body: "Hey make sure to vote Yes on 10. It'd nice to live in a rent controlled apartment.",
					},
					{
						from:"me",
						body:<span>It's not all peachy <span role="img" aria-label="peach">🍑 </span>If we were rent controlled, Frank probably wouldn't have fixed the building's washer.</span>
					},
					{
						from: "me",
						body: <span><Citation data={Citations['6']}>I've been reading. Pretty much all economists agree rent control is bad.</Citation></span>,
					},
					{
						from:"them",
						body:"What have you been reading?"
					},
					{
						from:"me",
						body:"ourgovernment.fyi"
					},
					{
						from:"them-no-bg",
						body:<EmojiLg><span role="img" aria-label="eyes rolled up emoji">🙄</span></EmojiLg>
					},
					{
						from: "them",
						body: <span>Then you should know economists are talking about rent ceilings and how <Citation data={Citations['35']}>rent control limits how much a landlord can charge.</Citation></span>
					},
					{
						from: "them",
						body: <Citation data={Citations['30']}>On the other hand, rent control reduces displacement, especially for poor people and people of color.</Citation>,
					},
					{
						from: "me",
						body: "But that's not going to solve CA's housing shortage.",
					},
					{
						from: "me",
						body: <span>We need to build more homes. It's a supply problem, <Citation data={Citations['7']}>and passing Prop 10 would restrict our housing supply.</Citation></span>,
					},
					{
						from: "them",
						body: "Sure, we need to build more, but it'll take decades to build enough housing for everyone. Cities need ways to help renters now, not 20 years from now.",
					},
					{
						from: "them",
						body:<Citation data={Citations['37']}>And it's not totally clear whether rent control stifles housing supply.</Citation>
					},
					{
						from:"me",
						body:"Of course it does. People stay in rent-controlled apartments longer."
					},
					{
						from: "them",
						body:<Citation data={Citations['28']}>It depends how many landlords convert their apartments to condos, but there's a study that claims it doesn't affect housing production.</Citation>
					},
					{
						from: "them",
						body: <span>And isn't it a good thing to help tenants afford their apartment? If people live near their work, there's less commuting, less traffic, cleaner air. <Citation data={Citations['7']}>That's ultimately how people don't end up on the streets.</Citation></span>,
					},
					{
						from: "me",
						body: "Sure, that's great if it doesn't do more harm than good."
					},
					{
						from: "me",
						body: "Any rich techie could land a rent controlled apt. They're not reserved for the poor.",
					},
					{
						from: "them",
						body: <Citation data={Citations['21']}>If we made rent control for low-income people only, landlords would discriminate against them. They'd never get an apt.</Citation>,
					},
					{
						from: "me",
						body: "It doesn't make sense for landlords to bear the burden of all our housing issues.",
					},
					{
						from: "me",
						body: <span>Rent control not only reduces landlords' revenue, <Citation data={Citations['33']}>but it reduces their property values too.</Citation></span>,
					},
					{
						from: "me",
						body: <span><Citation data={Citations['25']}>When Cambridge, MA removed rent control, even non rent controlled buildings shot up in value.</Citation></span>,

					},
					{
						from: "them",
						body: <Citation data={Citations['19']}>That's because Cambridge got gentrified.</Citation>,
					},
					{
						from: "them",
						body: <span><Citation data={Citations['32']}>A study of 74 cities that had rent control in NJ found no evidence that regulation affected property values.</Citation> <Citation data={Citations['11']}>Another study found that Bay Area cities with rent control had increased housing production.</Citation></span>,
					},
					{
						from: "me",
						body: <span><Citation data={Citations['16']}>Another study found that apartments in SF were converted to condos. Again, reducing supply of rentals.</Citation></span>,
					},
					{
						from: "them",
						body: <Citation data={Citations['27']}>This could be prevented with the right policies.</Citation>,
					},
					{
						from: "them",
						body: "Prop 10 gives cities the option to implement rent control on new buildings. It doesn't say if or how it'd be done.",
					},
					{
						from: "me",
						body: "Right, and Prop 10 would increase construction costs.",
					},
					{
						from: "them",
						body: <span>That could also be prevented <Citation data={Citations['36']}>if cities don't apply rent control to newer housing development until a certain age.</Citation></span>,
					},
					{
						from: "me",
						body: "And do you trust cities will pass good housing policy? I don't.",
					},
					{
						from:"them",
						body:"We don't have much of a choice. CA's housing situation is dire and cities need more options."
					}
				]
			}
		},
		{
			component: SectionTitleBlock,
			data:{
				title: "And there's always more"
			}
		},
		{
			component: LinksBlock,
			data: {
				subsections:[
					{
						subsectionTitle: "Yes on Prop 10",
						links: [
							{
								text: "LA Times Editorial Board",
								url: "http://www.latimes.com/opinion/editorials/la-ed-endorsement-proposition-10-20180915-story.html"
							},
							{
								text:"Sac Bee Editorial Board",
								url:"https://www.sacbee.com/opinion/election-endorsements/article218278780.html"
							}
						]
					},
					{
						subsectionTitle: "No on Prop 10",
						links: [
							{
								text: "SF Chronicle Editorial Board",
								url: "https://www.sfchronicle.com/opinion/editorials/article/Chronicle-Recommends-No-on-Prop-10-13231228.php"
							},
							{
								text:"San Jose Mercury News & East Bay Times Editorial Boards",
								url:"https://www.mercurynews.com/2018/08/25/editorial-prop-10-would-exacerbate-californias-housing-crisis/?clearUserState=true"
							},
							{
								text:"San Diego Union-Tribune Editorial Board",
								url:"http://www.sandiegouniontribune.com/opinion/editorials/sd-prop-10-rent-control-20180913-story.html"
							},
							{
								text:"Fresno Bee Editorial Board",
								url:"https://www.fresnobee.com/opinion/editorials/article219315885.html"
							},
							{
								text:"LA Daily News Editorial Board",
								url:"https://www.dailynews.com/2018/09/28/no-on-proposition-10-the-wrong-fix-for-californias-housing-crisis/"
							},
						]
					},
					{
						subsectionTitle:"Other coverage",
						links:[
							{
								text:"KQED Forum debate (audio)",
								url:"https://www.kqed.org/forum/2010101867796/election-2018-prop-10-would-repeal-costa-hawkins-allow-rent-control-to-expand"
							},
							{
								text:"NYTimes: The expensive rent control battle",
								url:"https://www.nytimes.com/2018/10/15/us/california-today-rent-control-prop-10.html"
							}
						]
					},
					{
						subsectionTitle: "Impartial analyses",
						links: [
							{
								text: "Legislative Analyst's Office report",
								url: "https://lao.ca.gov/BallotAnalysis/Proposition?number=10&year=2018",
							},
							{
								text: "Official voter guide digest",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/prop10-title-summ-analysis.pdf"
							},
							{
								text: "Legal text of proposition",
								url: "https://vig.cdn.sos.ca.gov/2018/general/pdf/topl.pdf#Prop10"
							},
							{
								text: "Ballotpedia",
								url:"https://ballotpedia.org/California_Proposition_10,_Local_Rent_Control_Initiative_(2018)"
							},
						]
					},
					{
						subsectionTitle: "Studies about rent control",
						links: [
							{
								text: "Stanford study analyzing SF rent control",
								url: "https://www.brookings.edu/research/what-does-economic-evidence-tell-us-about-the-effects-of-rent-control/"
							},
							{
								text:"History of rent control in Los Angeles",
								url:"http://luskincenter.history.ucla.edu/wp-content/uploads/sites/66/2018/09/People-Are-Simply-Unable-to-Pay-the-Rent.pdf"
							},
							{
								text:"Impacts of Rent Stabilization",
								url:"https://dornsife.usc.edu/assets/sites/242/docs/Rent_Matters_PERE_Report_Final_02.pdf"
							},
							{
								text:"Displacement and rent control in the Bay Area",
								url:"https://haasinstitute.berkeley.edu/rent-control-key-neighborhood-stabilization"
							},
							{
								text:"An overview of types of rent control in California, commissioned by Fremont to help it decide",
								url:"https://fremont.gov/DocumentCenter/View/35249/Fremont---Rent-Control-Just-Cause-Eviction-Report---final?bidId="
							},
							{
								text:"What happened when rent control was removed in Cambridge, MA",
								url:"https://economics.mit.edu/files/9760"
							},
							{
								text:"Eric Fischer's statistical analysis of SF rents from 1950-now",
								url:"https://observer.com/2016/05/a-guy-just-transcribed-30-years-of-for-rent-ads/"
							},
							{
								text:"Berlin's rent control and its effects after one year",
								url:"http://cityobservatory.org/does-rent-control-work-evidence-from-berlin/"
							}
						]
					}
				]
			}
		}
  ]
}
export default () => (<PropPageBuilder data={Data}/>);
