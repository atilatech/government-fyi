import React from 'react'
import styled from 'styled-components'
import PageBuilder from 'components/page-blocks/aggregators/PageBuilder'
import TextWithTitleBlock from 'components/page-blocks/blocks/TextWithTitleBlock'
import PageTitleBlock from 'components/page-blocks/blocks/PageTitleBlock'

const H3 = styled.h3`
	margin-top: 15px;
`;

const Data = {
	pageId: "terms-page",
	meta: {
		canonicalUrl:"https://www.ourgovernment.fyi/terms/",
		documentTitle:"Terms of Serivce – ourgovernment.fyi",
		socialHeadline:"Terms of Serivce – ourgovernment.fyi",
		socialDescription:"If you're seeing this, somebody shared our terms and conditions page on social media. WTF.",
		socialImage:"general.png",
	},
	blocks: [
    {
    	component: PageTitleBlock,
    	data: {
    		title: "Terms of Service",
    		subtitle: "How you may and may not use ourgovernment.fyi",
    	}
    },
		{
			component: TextWithTitleBlock,
			data: {
				title: null,
				text: <span>These Terms of Service (“Terms”) are a contract between you and ourgovernment.fyi. They govern your use of ourgovernment.fyi's sites, services, and content (“Services”). By using ourgovernment.fyi, you agree to these Terms. If you don’t agree to any of the Terms, you can’t use ourgovernment.fyi <span role="img" aria-label="sad face">😞</span>.
          <br/><br/>We can change these Terms at any time. By using ourgovernment.fyi on or after that effective date, you agree to the new Terms. If you don’t agree to them, you should delete your account before they take effect, otherwise your use of the site and content will be subject to the new Terms.</span>,
			},
		},
		{
			component: TextWithTitleBlock,
			data: {
				title: "Content rights & responsibilities",
				text: <span>
					You own the rights to the content you create and publish on ourgovernment.fyi.
          <br/><br/>By publishing content to ourgovernment.fyi, you give us a nonexclusive license to publish it on ourgovernment.fyi Services, including anything reasonably related to publishing it (like storing, displaying, reformatting, and distributing it). We aim to preserve your intent as much as possible. In consideration for ourgovernment.fyi granting you access to and use of the Services, you agree that ourgovernment.fyi may enable advertising on the Services, including in connection with the display of your content or other information. We may also use your content to promote ourgovernment.fyi, including its products and content.
          <br/><br/>You’re responsible for the content you publish. This means you assume all risks related to it, including someone else’s reliance on its accuracy, or claims relating to intellectual property or other legal rights.
          <br/><br/>You’re welcome to post content on ourgovernment.fyi that you’ve published elsewhere, as long as you have the rights you need to do so. By publishing content to ourgovernment.fyi, you represent that doing so doesn’t conflict with any other agreement you’ve made. By publishing content you didn’t create to ourgovernment.fyi, you are representing that you have the right to do so. For example, you are publishing a work that’s in the public domain, used under license (including a free license, such as <a href="https://creativecommons.org/licenses/">Creative Commons</a>), or a fair use.
          <br/><br/>We can remove any content you post for any reason.
          <br/><br/>You can delete any of your posts, or your account, anytime. Processing the deletion may take a little time, but we’ll do it as quickly as possible. We may keep backup copies of your deleted post or account on our servers after you delete it.
				</span>,
			},
		},
		{
			component: TextWithTitleBlock,
			data: {
				title: "Your Content and Conduct",
				text: <span>
					As a ourgovernment.fyi user you may submit Content to the Service. You understand that ourgovernment.fyi does not guarantee any confidentiality with respect to any Content you submit.
					<br/><br/>You shall be solely responsible for your own Content and the consequences of submitting and publishing your Content on the Service. You affirm, represent, and warrant that you own or have the necessary licenses, rights, consents, and permissions to publish Content you submit; and you license to ourgovernment.fyi all patent, trademark, trade secret, copyright or other proprietary rights in and to such Content for publication on the Service pursuant to these Terms of Service.
					<br/><br/>For clarity, you retain all of your ownership rights of your Content. However, by submitting Content to ourgovernment.fyi, you hereby grant ourgovernment.fyi a worldwide, non-exclusive, royalty-free, sublicenseable and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform the Content in connection with the Service and ourgovernment.fyi's (and its successors' and affiliates') business, including without limitation for promoting and redistributing part or all of the Service (and derivative works thereof) in any media formats and through any media channels. You also hereby grant each user of the Service a non-exclusive license to access your Content through the Service, and to use, reproduce, distribute, display and perform such Content as permitted through the functionality of the Service and under these Terms of Service. The above licenses granted by you in video Content you submit to the Service terminate within a commercially reasonable time after you remove or delete your videos from the Service. You understand and agree, however, that ourgovernment.fyi may retain, but not display, distribute, or perform, server copies of your videos that have been removed or deleted. The above licenses granted by you are perpetual and irrevocable.
					<br/><br/>You further agree that Content you submit to the Service will not contain third party copyrighted material, or material that is subject to other third party proprietary rights, unless you have permission from the rightful owner of the material or you are otherwise legally entitled to post the material and to grant ourgovernment.fyi all of the license rights granted herein.
					<br/><br/>You further agree that you will not submit to the Service any Content or other material that is contrary to the ourgovernment.fyi Community Values, which may be updated from time to time, or contrary to applicable local, national, and international laws and regulations.
					<br/><br/>ourgovernment.fyi does not endorse any Content submitted to the Service by any user or other licensor, or any opinion, recommendation, or advice expressed therein, and ourgovernment.fyi expressly disclaims any and all liability in connection with Content. ourgovernment.fyi does not permit copyright infringing activities and infringement of intellectual property rights on the Service, and ourgovernment.fyi will remove all Content if properly notified that such Content infringes on another's intellectual property rights. ourgovernment.fyi reserves the right to remove Content without prior notice.
					</span>,
			},
		},
		{
			component: TextWithTitleBlock,
			data: {
				title: "General Use of Services",
				text: <span>
					ourgovernment.fyi hereby grants you permission to access and use the Service as set forth in these Terms of Service, provided that:
					<br/><br/>You agree not to distribute in any medium any part of the Service or the Content without ourgovernment.fyi's prior written authorization, unless ourgovernment.fyi makes available the means for such distribution through functionality offered by the Service.
					<br/><br/>You agree not to alter or modify any part of the Service.
					<br/><br/>You agree not to access Content through any technology or means other than the video playback pages of the Service itself or other explicitly authorized means ourgovernment.fyi may designate.
					<br/><br/>You agree not to use the Service for any of the following commercial uses unless you obtain ourgovernment.fyi's prior written approval:
					<ul>
						<li>the sale of access to the Service;</li>
						<li>the sale of advertising, sponsorships, or promotions placed on or within the Service or Content.</li>
					</ul>
					Prohibited commercial uses do not include:
					<ul>
						<li>uploading an original video to ourgovernment.fyi</li>
						<li>any use that ourgovernment.fyi expressly authorizes in writing.</li>
					</ul>
					You agree not to use or launch any automated system, including without limitation, "robots," "spiders," or "offline readers," that accesses the Service in a manner that sends more request messages to the ourgovernment.fyi servers in a given period of time than a human can reasonably produce in the same period by using a conventional on-line web browser. You agree not to collect or harvest any personally identifiable information, including account names, from the Service, nor to use the communication systems provided by the Service (e.g., comments, email) for any commercial solicitation purposes. You agree not to solicit, for commercial purposes, any users of the Service with respect to their Content.
					<br/><br/>In your use of the Service, you will comply with all applicable laws.
					</span>,
			},
		},
		{
			component: TextWithTitleBlock,
			data: {
				title: "Your use of content",
				text: <span>
				The following restrictions and conditions apply specifically to your use of Content.
				<br/><br/>The Content on the Service, and the trademarks, service marks and logos ("Marks") on the Service, are owned by or licensed to ourgovernment.fyi, subject to copyright and other intellectual property rights under the law.
				<br/><br/>Content is provided to you AS IS. You may access Content for your information and personal use solely as intended through the provided functionality of the Service and as permitted under these Terms of Service. You shall not download any Content unless you see a “download” or similar link displayed by ourgovernment.fyi on the Service for that Content. You shall not copy, reproduce, distribute, transmit, broadcast, display, sell, license, or otherwise exploit any Content for any other purposes without the prior written consent of ourgovernment.fyi or the respective licensors of the Content. ourgovernment.fyi and its licensors reserve all rights not expressly granted in and to the Service and the Content.
				<br/><br/>You agree not to circumvent, disable or otherwise interfere with security-related features of the Service or features that prevent or restrict use or copying of any Content or enforce limitations on use of the Service or the Content therein.
				<br/><br/>You understand that when using the Service, you will be exposed to Content from a variety of sources, and that ourgovernment.fyi is not responsible for the accuracy, usefulness, safety, or intellectual property rights of or relating to such Content. You further understand and acknowledge that you may be exposed to Content that is inaccurate, offensive, indecent, or objectionable, and you agree to waive, and hereby do waive, any legal or equitable rights or remedies you have or may have against ourgovernment.fyi with respect thereto, and, to the extent permitted by applicable law, agree to indemnify and hold harmless ourgovernment.fyi, its owners, operators, affiliates, licensors, and licensees to the fullest extent allowed by law regarding all matters related to your use of the Service.
					</span>,
			},
		},
		{
			component: TextWithTitleBlock,
			data: {
				title: "Our content & services",
				text: <span>
					We reserve all rights in ourgovernment.fyi's look and feel. Some parts of ourgovernment.fyi are licensed under third-party open source licenses. We also make some of our own code available under open source licenses. As for other parts of ourgovernment.fyi, you may not copy or adapt any portion of our code or visual design elements (including logos) without express written permission from ourgovernment.fyi unless otherwise permitted by law.
        <br/><br/>
        You may not do, or try to do, the following:
        <ol>
        <li>Access or tamper with non-public areas of the Services, our computer systems, or the systems of our technical providers</li>
        <li>Access or search the Services by any means other than the currently available, published interfaces (e.g., APIs) that we provide</li>
        <li>Forge any TCP/IP packet header or any part of the header information in any email or posting, or in any way use the Services to send altered, deceptive, or false source-identifying information</li>
        <li>Interfere with, or disrupt, the access of any user, host, or network, including sending a virus, overloading, flooding, spamming, mail-bombing the Services, or by scripting the creation of content or accounts in such a manner as to interfere with or create an undue burden on the Services</li></ol>
        Crawling the Services is allowed if done in accordance with the provisions of our robots.txt file, but scraping the Services is prohibited.
        <br/><br/>
        We may change, terminate, or restrict access to any aspect of the service, at any time, without notice.
				</span>,
			},
		},
		{
			component: TextWithTitleBlock,
			data: {
				title: "No children",
				text: "ourgovernment.fyi is only for people 13 years old and over. By using ourgovernment.fyi, you affirm that you are over 13. If we learn someone under 13 is using ourgovernment.fyi, we’ll terminate their account.",
			},
		},
		{
			component: TextWithTitleBlock,
			data: {
				title: "Incorporated rules & policies",
				text: <span>
				 By using the Services, you agree to let ourgovernment.fyi collect and use information as detailed in our Privacy Policy. If you’re outside the United States, you consent to letting ourgovernment.fyi transfer, store, and process your information (including your personal information and content) in and out of the United States.
        <br/><br/>
        To enable a functioning community, we have Rules.
        <br/><br/>
        By using ourgovernment.fyi, you agree to follow these Rules and Policies. If you don’t, we may remove content, or suspend or delete your account.
				</span>
			},
		},
		{
			component: TextWithTitleBlock,
			data: {
				title: "Miscellaneous",
				text: <span>
				 <H3>Disclaimer of warranty</H3>
	        ourgovernment.fyi provides the Services to you as is. You use them at your own risk and discretion. That means they don’t come with any warranty. None express, none implied. No implied warranty of merchantability, fitness for a particular purpose, availability, security, title or non-infringement.
	        <H3>Limitation of Liability</H3>
	        ourgovernment.fyi won’t be liable to you for any damages that arise from your using the Services. This includes if the Services are hacked or unavailable. This includes all types of damages (indirect, incidental, consequential, special or exemplary). And it includes all kinds of legal claims, such as breach of contract, breach of warranty, tort, or any other loss.
	        <H3>No waiver</H3>
	        If ourgovernment.fyi doesn’t exercise a particular right under these Terms, that doesn’t waive it.
	        <H3>Severability</H3>
	        If any provision of these terms is found invalid by a court of competent jurisdiction, you agree that the court should try to give effect to the parties’ intentions as reflected in the provision and that other provisions of the Terms will remain in full effect.
	        <H3>Choice of law and jurisdiction</H3>
	        These Terms are governed by California law, without reference to its conflict of laws provisions. You agree that any suit arising from the Services must take place in a court located in San Francisco, California.
	        <H3>Entire agreement</H3>
	        These Terms (including any document incorporated by reference into them) are the whole agreement between ourgovernment.fyi and you concerning the Services.
	        </span>
			},
		},
		{
			component: TextWithTitleBlock,
			data: {
				title: "Copyright & DMCA policy",
				text: <span>
          We’ll respond to legitimate requests under the Digital Millennium Copyright Act ("DMCA"), and we retain the right to remove user content on ourgovernment.fyi that we deem to be infringing the copyright of others. If you become aware of user content on ourgovernment.fyi that infringes your copyright rights, you may submit a properly formatted DMCA request (see 17 U.S.C. § 512) to ourgovernment.fyi.
          <br/><br/>
          Misrepresentations of infringement can result in liability for monetary damages. You may want to consult an attorney before taking any action pursuant to the DMCA. A DMCA request can be sent to us via the contact information below:
          <br/>
          <br/>Amir & Erica, Inc
          <br/>ATTN: ourgovernment.fyi’s Copyright Agent
          <br/>50 Museum Way
          <br/>San Francisco, CA 94114

          Or email us at: copyright@bythebay.cool

          Please send our Copyright Agent the following information:

          <ol>
          <li>The electronic or physical signature of the owner of the copyright or the person authorized to act on the owner's behalf</li>
          <li>Identification of the copyrighted work claimed to have been infringed, or a representative list of such works</li>
          <li>The URL or Internet location of the materials claimed to be infringing or to be the subject of infringing activity, or information reasonably sufficient to permit us to locate the material</li>
          <li>Your name, address, telephone number and email address</li>
          <li>A statement by you that you have a good faith belief that the disputed use of the material is not authorized by the copyright owner, its agent or the law</li>
          <li>A statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or are authorized to act on the copyright owner's behalf.</li>
        </ol>
        </span>
			},
		},
		{
			component: TextWithTitleBlock,
			data: {
				title: "Filing a counter-notice",
				text: <span>
				     If we remove your user content in response to a copyright or trademark notice, we will notify you via email. If you believe your user content was wrongly removed due to a mistake or misidentification of the material, you can send a counter-notice to our Copyright Agent (contact information provided above) that includes the following:
         <ol>
          <li>Your physical or electronic signature</li>
          <li>Identification of the material that has been removed or to which access has been disabled and where the material was located online before it was removed or access to it was disabled</li>
          <li>A statement by you, under penalty of perjury, that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification of the material to be removed or disabled</li>
          <li>Your name, address, and telephone number, and a statement that you consent to the jurisdiction of federal district court for the judicial district in which the address is located, or if your address is outside of the United States, for any judicial district in which the service provider may be found, and that you will accept service of process from the person who provided notification under DMCA 512 subsection (c)(1)(c) or an agent of such person.</li>
          </ol>

          Upon receiving your counter-notice we will forward it to the complaining party and tell them we will restore your content within 14 business days. If that party does not notify us that they have filed an action to enjoin your use of that content on ourgovernment.fyi before that period passes, we will consider restoring your user content to the site.            It’s ourgovernment.fyi's policy to close the accounts of users we identify as repeat infringers. We apply this policy at our discretion and in appropriate circumstances, such as when a user has repeatedly been charged with infringing the copyrights or other intellectual property rights of others.
        </span>
			},
		},
		{
			component: TextWithTitleBlock,
			data: {
				title: "Filing a counter-notice",
				text: <span>
          If we remove your user content in response to a copyright or trademark notice, we will notify you via email. If you believe your user content was wrongly removed due to a mistake or misidentification of the material, you can send a counter-notice to our Copyright Agent (contact information provided above) that includes the following:
          <ol>
            <li>Your physical or electronic signature</li>
            <li>Identification of the material that has been removed or to which access has been disabled and where the material was located online before it was removed or access to it was disabled</li>
            <li>A statement by you, under penalty of perjury, that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification of the material to be removed or disabled</li>
            <li>Your name, address, and telephone number, and a statement that you consent to the jurisdiction of federal district court for the judicial district in which the address is located, or if your address is outside of the United States, for any judicial district in which the service provider may be found, and that you will accept service of process from the person who provided notification under DMCA 512 subsection (c)(1)(c) or an agent of such person.</li>
          </ol>

          Upon receiving your counter-notice we will forward it to the complaining party and tell them we will restore your content within 14 business days. If that party does not notify us that they have filed an action to enjoin your use of that content on ourgovernment.fyi before that period passes, we will consider restoring your user content to the site.            It’s ourgovernment.fyi's policy to close the accounts of users we identify as repeat infringers. We apply this policy at our discretion and in appropriate circumstances, such as when a user has repeatedly been charged with infringing the copyrights or other intellectual property rights of others.
        </span>
			},
		},
		{
			component: TextWithTitleBlock,
			data: {
				title: "Learn more about DMCA",
				text: <span>
          Check out the following resources:
          <br/><a href="https://copyright.gov/">United States Copyright Office</a>
          <br/><a href="https://lumendatabase.org/">Lumen</a>

          <br/><br/>Questions? Let us know at legal@bythebay.cool.

        </span>
			},
		},
	]
}

export default () => (<PageBuilder data={Data}/>);
