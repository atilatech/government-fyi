import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Color from 'layout/colors'
import PageBuilder from 'components/page-blocks/aggregators/PageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import PageTitleBlock from 'components/page-blocks/blocks/PageTitleBlock'
import CustomBlock from 'components/page-blocks/blocks/CustomBlock'
import TopNavBlock from 'components/page-blocks/blocks/TopNavBlock'
import SectionTitleBlock from 'components/page-blocks/blocks/SectionTitleBlock'
import {PropMetaData} from 'pages/prop-attributes'
import {Spacer} from 'layout/util'


const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
`

export const ExpandButton = styled(Link)`
	margin-top: 20px;
	padding: 10px 25px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: black;
	border-radius: 4px;
  text-decoration: none;
	@media not all and (hover: none) {
    &:hover{
      background-color: ${Color('pink2')};
      cursor: pointer;
    }
  }
`;

const StyledH3 = styled.h3`
	font-size: 14px;
  font-weight: bold;
  color: #fff;
`
const Btn = (props) => (
  <ButtonContainer>
    <ExpandButton to={props.to}>
      <StyledH3>{props.label}</StyledH3>
    </ExpandButton>
  </ButtonContainer>
)
const Data = {
	pageId: "procrastinators",
	meta: {
		canonicalUrl:"https://www.ourgovernment.fyi/procrastinators/",
		documentTitle:"Procrastinator's guide to the election",
		socialHeadline:"Last-minute, procrastinators guide to CA's 11 props",
		socialDescription:"Get smart about the ballot in five minutes.",
		socialImage:"lastmin.jpg",
    dateCreated: new Date('November 6, 2018 8:00:00'),
		dateModified: new Date('November 6, 2018 8:00:00'),
    pageType: "article"
	},
	blocks: [
    {
      component: CustomBlock,
      data:{
        nColWidth: 12,
        body:
        <React.Fragment>
          <TopNavBlock currentProp={null}/>
          <Spacer height={30}/>
        </React.Fragment>
      }
    },
    {
    	component: PageTitleBlock,
    	data: {
    		title: "Procrastinator's Guide",
    		subtitle: "Last minute guide to the 11 California propositions."
    	}
    },
    {
      component: SectionTitleBlock,
      data: {
        title:PropMetaData(1).title,
        img: PropMetaData(1).thumbSet._1x,
      }
    },
    {
      component: TextWithTitleBlock,
      data: {
        text:<span>
          Prop 1 would issue $4B in bonds to fund housing assistance programs. ~$1B would fund loans for military veterans, and the rest would provide subsidies and grants to farmworkers, homeowners, and other residents. Prop 1 would cost the state $5.9B, after interest.
          <br/><br/>
          Prop 1 is pretty straightforward. Supporters say it’s going to have an immediate impact on residents who need help affording their homes. Opponents complain that it’s only a band-aid for CA’s housing shortage, and that we should be building more housing and reforming laws that make housing hard to build.
        </span>
      }
    },
    {
      component: CustomBlock,
      data: {
        body: <Btn to="/housing" label="Explain this more deeply"/>
      }
    },
    {
      component: SectionTitleBlock,
      data: {
        title:PropMetaData(2).title,
        img: PropMetaData(2).thumbSet._1x,
      }
    },
    {
      component: TextWithTitleBlock,
      data: {
        text:<span>
          Prop 2 would reallocate part of the "Millionaire's tax" revenue – a 1% income tax for residents earning $1M or more a year – to pay for housing for mentally ill homeless people. Currently, the Millionaire’s tax generates ~$2B every year, which funds local counties’ mental health services. Prop 2 would use $130M every year (up to $2B total) to fund a program called <em>No Place Like Home</em>.
          <br/><br/>
          Supporters say taking a housing-first approach is essential to creating a stable environment for homeless residents, and the tax revenue would help CA’s housing shortage. Opponents argue for a treatment-first approach and that we shouldn’t be taking funds from mental health services and local control of funds.
        </span>
      }
    },
    {
      component: CustomBlock,
      data: {
        body: <Btn to="/jobs-and-economy" label="Read more about it"/>
      }
    },
    {
      component: SectionTitleBlock,
      data: {
        title:PropMetaData(3).title,
        img: PropMetaData(3).thumbSet._1x,
      }
    },
    {
      component: TextWithTitleBlock,
      data: {
        text:<span>
          Prop 3 provides clean drinking water for local communities, fixes dams and canals, maintains watershed lands, and funds a plethora of other water and environmental projects in CA.
            It’s similar to the $4B water and environmental bond measure (Prop 68) we passed in June,
            but Prop 3 is a voter-backed ballot initiative. That means it bypasses a lot of the budgetary review processes often in legislatively-backed initiatives, like Prop 68. Prop 3 would cost CA a total of $17.3B, after interest.
          <br/><br/>
          Supporters say Prop 3 is a much-needed investment for areas in inland CA. Opponents call this a “pay-to-play” measure because the special interests that are funding it (e.g. billionaire owners of POM juice), would be the ones who directly benefit from some of the projects.
        </span>
      }
    },
    {
      component: CustomBlock,
      data: {
        body: <Btn to="/prop-3" label="Dive in"/>
      }
    },
    {
      component: SectionTitleBlock,
      data: {
        title:PropMetaData(4).title,
        img: PropMetaData(4).thumbSet._1x,
      }
    },
    {
      component: TextWithTitleBlock,
      data: {
        text:<span>
          Prop 4 would issue $1.5B in bonds to renovate and upgrade CA’s 13 children's hospitals and some specialized wings.
          <br/><br/>
          California's children’s hospitals receive a majority of their funding from Medi-Cal, the state’s insurance program for low-income residents, which means they often lack the funds to keep up with their infrastructure costs.
          <br/><br/>
          Supporters say our munchkins deserve the best care, and that we passed similar bond measures for children’s hospitals in 2004 and 2008, and they were all responsibly spent. There isn’t a lot of opposition, but opponents argue that we shouldn’t use public funds to support private hospitals.
        </span>
      }
    },
    {
      component: CustomBlock,
      data: {
        body: <Btn to="/prop-4" label="We don't kid around"/>
      }
    },
    {
      component: SectionTitleBlock,
      data: {
        title:PropMetaData(5).title,
        img: PropMetaData(5).thumbSet._1x,
      }
    },
    {
      component: TextWithTitleBlock,
      data: {
        text:<span>
          Prop 5 would give homeowners who are over 55 or severely disabled a discounted property assessement when they move to a new home. CA's Association of Realtors authored Prop 5 as an amendment to Prop 13, a statewide law that capped property tax assessments to 1% of their purchase price (adjusted for inflation). Prop 5 would remove certain restrictions from Prop 13 so that senior homeowners can transfer their property tax assessment (with an adjustment) when they move anywhere in the state, regardless of how many times they move, and regardless of the price of the new home. (It's a little tangled.)
          <br/><br/>
          The CA Association of Realtors says Prop 5 would incentivize older homeowners to move and free up CA’s housing supply so other families can move in. Opponents argue this doubles down on Prop 13 and continues to help the wealthy; we should be helping people afford housing in California.
          <br/><br/>
          The Legislative Analyst's Office estimates that if Prop 5 passes, schools and cities would lose up to $100M a year in the first few years, and up to a $1B in lost property tax revenue in subsequent years.
        </span>
      }
    },
    {
      component: CustomBlock,
      data: {
        body: <Btn to="/prop-5" label="The details"/>
      }
    },
    {
      component: SectionTitleBlock,
      data: {
        title:PropMetaData(6).title,
        img: PropMetaData(6).thumbSet._1x,
      }
    },
    {
      component: TextWithTitleBlock,
      data: {
        text:<span>
          Last year, Gov. Jerry Brown and the state legislature passed the <em>Road Repair and Accountability Act</em>, aka a gas tax, to generate up to $5B a year to improve our highways, roads, bridges, and other transit-related projects. Prop 6 would repeal last year’s gas tax and require residents to vote on all future gas tax increases.
          <br/><br/>
          Supporters say CA already pays the second highest gas tax in the country, and that we shouldn’t burden residents with higher taxes. Opponents say CA ranks 48th in the country when it comes to road quality, and that the state needs to invest in its infrastructure.
          <br/><br/>
          To be clear:
          <ul>
            <li>Vote <b>Yes</b> if you <b>do not</b> want the gas tax and its revenue, and want to vote on all future gas tax increases.</li>
            <li>Vote <b>No</b> if you <b>do</b> want the gas tax and its revenue.</li>
          </ul>
        </span>
      }
    },
    {
      component: CustomBlock,
      data: {
        body: <Btn to="/prop-6" label="Give me more gas"/>
      }
    },
    {
      component: SectionTitleBlock,
      data: {
        title:PropMetaData(7).title,
        img: PropMetaData(7).thumbSet._1x,
      }
    },
    {
      component: TextWithTitleBlock,
      data: {
        text:<span>
          If Prop 7 passes, we would be empowering the legislature to maybe change how California observies Daylight Saving Time (DST). We could move off of it (like Hawaii and Arizona) with a two-thirds vote, or, if we want to move to DST year-round, which is what’s being discussed, Congress would need to approve it.
          <br/><br/>
          Supporters say let’s stop changing our clocks twice a year and enjoy brighter afternoons. They also cite studies that say year-round DST saves electricity and makes people more active. Opponents say kids would now have to walk to school in the dark. It’d also put us out of sync from other states’ time zones, which creates even more confusion.
        </span>
      }
    },
    {
      component: CustomBlock,
      data: {
        body: <Btn to="/prop-7" label="I have time to read more"/>
      }
    },
    {
      component: SectionTitleBlock,
      data: {
        title:PropMetaData(8).title,
        img: PropMetaData(8).thumbSet._1x,
      }
    },
    {
      component: TextWithTitleBlock,
      data: {
        text:<span>
          Prop 8 would limit dialysis clinics’ revenue to 115% of total costs in two categories: “direct patient care service costs” and “health care quality improvement costs.” Any amount over and they must issue refunds to private insurance companies. (BTW, dialysis is one of several treatments for people whose kidneys aren't working properly.)
          <br/><br/>
          Confused? Prop 8 is really a roundabout way for a labor organization, SEIU-UHW West, to legislatively compel CA’s two largest dialysis businesses, <em>DaVita</em> and <em>Fresenius Medical Care</em>, to invest in staff wages, benefits, training and development, and other costs that fall within these two categories.
          <br/><br/>
          Supporters say these for-profit dialysis clinics already make $3B a year in CA and capping their revenue would improve worker wages and the decrepit condition of clinics. Opponents say capping revenue would jeopardize clinics and patients’ access to dialysis treatment.
        </span>
      }
    },
    {
      component: CustomBlock,
      data: {
        body: <Btn to="/prop-8" label="See more of the dispute"/>
      }
    },
    {
      component: SectionTitleBlock,
      data: {
        title:PropMetaData(10).title,
        img: PropMetaData(10).thumbSet._1x,
      }
    },
    {
      component: TextWithTitleBlock,
      data: {
        text:<span>
          Prop 10 would repeal the <em>Costa-Hawkins Rental Housing Act</em>, a state law passed in 1995 that limits how cities can regulate rent on housing built after that year. Fifteen cities, like LA, SF, Oakland, and San Jose, already have local rent control laws, but Costa-Hawkins prevents them from regulating rents on any buildings built after 1995.
          <br/><br/>
          Prop 10 would give cities the authority to implement local rent control on buildings and single-family homes built after 1995. If and how a city implements rent control would be up to each individual city.
          <br/><br/>
          Supporters say rent control helps let people, especially low-income and people of color, stay where they live longer. And this measure would give control back to the cities. Opponents say rent control doesn't always get to the people who need it, and it encourages landlords to flip their buildings to condos, which can fuel gentrification and displacement.
          <br/><br/>
          Arguably, Prop 10 could be the most consequential statewide ballot measure you vote on today.
        </span>
      }
    },
    {
      component: CustomBlock,
      data: {
        body: <Btn to="/prop-10" label="Get more arguments"/>
      }
    },
    {
      component: SectionTitleBlock,
      data: {
        title:PropMetaData(11).title,
        img: PropMetaData(11).thumbSet._1x,
      }
    },
    {
      component: TextWithTitleBlock,
      data: {
        text:<span>
          This measure would legalize on-call breaks for paramedics in CA. It’s currently the industry practice for EMTs to immediately respond to 911 calls even when they interrupt their lunches and breaks, but since a CA Supreme Court ruling made it illegal for <em>security</em> workers to be on-call during breaks, EMT labor unions have been suing private ambulance companies and trying to extend the 2016 labor law to paramedics. Negotiations fell through, and now private ambulance companies put Prop 11 on the ballot to legalize on-call breaks and absolve them from about $100M in liability.
          <br/><br/>
          Supporters say not having on-call breaks for EMTs would require private ambulance companies to increase their staffing by 25%, where most of the cost would fall on counties. Opponents say EMTs deserve real breaks and workplace protections. If they respond to an emergency exhausted, then it may have a detrimental effect on local residents.
        </span>
      }
    },
    {
      component: CustomBlock,
      data: {
        body: <Btn to="/prop-11" label="I need more info, stat"/>
      }
    },
    {
      component: SectionTitleBlock,
      data: {
        title:PropMetaData(12).title,
        img: PropMetaData(12).thumbSet._1x,
      }
    },
    {
      component: TextWithTitleBlock,
      data: {
        text:<span>
          The origins of Prop 12 began a decade ago with Prop 2, which said animals sold for meat and eggs must be able "to lie down, stand up, fully extend their limbs and turn around." Farmers thought Prop 2 was unconstitutional, vague, and unenforceable. There’s also evidence that it decreased production and raised consumer costs for eggs. Since then, the authors of Prop 2 put Prop 12 on the ballot to strengthen the policy.
          <br/><br/>
          They put specific minimum space requirements and designated the Dept. of Agriculture to enforce the law, which would cost the state about $10M a year to implement.
          <br/><br/>
          Supporters say Prop 12 updates the flaws in Prop 2 and would help improve the cruel, inhuman conditions of farmed animals which leads to safer food. Opponents say the same problems with Prop 2 still exist, namely that it would increase prices for consumers by transitioning California to cage-free eggs by 2022.
        </span>
      }
    },
    {
      component: CustomBlock,
      data: {
        body: <Btn to="/prop-12" label="Eggsplain some more"/>
      }
    },

  ]
}

export default () => (<PageBuilder data={Data}/>);
