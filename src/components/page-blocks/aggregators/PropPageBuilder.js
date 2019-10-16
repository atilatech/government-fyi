import React from 'react'
import PropTypes from 'prop-types';
import Head from 'layout/head'
import {Spacer} from 'layout/util'

import WallpaperBannerImg from '../blocks/WallpaperBannerImg'
import BottomNavBlock from '../blocks/BottomNavBlock'
import TopNavBlock from '../blocks/TopNavBlock'
import PublishDateBlock from '../blocks/PublishDateBlock'
import {PropMetaData, GetNextAndPrevNum} from 'pages/prop-attributes'
import {PROP_NUM_TO_CATEGORY_DICT} from "../../../data/Constants";
import {unSlugify} from "../../../services/Utils";

/*
takes the block components and puts them together on a page
*/

const PropPageBuilder = (props) => {
	const { meta, blocks, propNum } = props.data;

	const bodySections = blocks.map( (block, i ) => {
		const Block = block.component;
		return(
			<Block key={i} data={block.data}/>
		)
	});

	const {dateCreated, dateModified, pageType} = meta;
	const {color, imageSet, title, socialHeadline, socialDescription} = PropMetaData(propNum)
	const adjacentProps = GetNextAndPrevNum(propNum);

	const prevLink = PROP_NUM_TO_CATEGORY_DICT[adjacentProps.prev] ?
		`/${PROP_NUM_TO_CATEGORY_DICT[adjacentProps.prev]}`:
		`/prop-${adjacentProps.prev}`;

	const nextLink = PROP_NUM_TO_CATEGORY_DICT[adjacentProps.next] ?
		`/${PROP_NUM_TO_CATEGORY_DICT[adjacentProps.next]}`:
		`/prop-${adjacentProps.next}`;

	const customTitle = PROP_NUM_TO_CATEGORY_DICT[propNum]
		? unSlugify(PROP_NUM_TO_CATEGORY_DICT[propNum]) : `Prop ${propNum}`;

	// todo Change image attributes to use category names
	return(
		<div>
			<Head
				url={"https://www.ourgovernment.fyi/prop-" + propNum}
				title={`${customTitle} | Canada Federal Elections 2019 | ourgovernment.fyi`}
				headline={socialHeadline}
				description={socialDescription}
				image={`${PROP_NUM_TO_CATEGORY_DICT[propNum]}.png`}
				pageType={pageType || 'article'}
				dateCreated={dateCreated}
				dateModified={dateModified}
			/>
			<TopNavBlock currentProp={propNum}/>
			<Spacer height={30}/>
			<WallpaperBannerImg
				data={{
					color: color,
					image: imageSet._2x,
					title: title,
				}}
			/>
			{bodySections}
			<PublishDateBlock
				data={{
					dateCreated: dateCreated,
					dateModified: dateModified
				}}
			/>
			<Spacer height={45}/>
			<BottomNavBlock
				data = {{
					color: color,
					tiles: [
						{
							img: PropMetaData(adjacentProps.prev).imageSet,
							to:  prevLink,
							text: PropMetaData(adjacentProps.prev).title,
						},
						{
							img: PropMetaData(adjacentProps.next).imageSet,
							to: nextLink,
							text: PropMetaData(adjacentProps.next).title,
						}
					],
				}}
			/>
		</div>
	)
}

PropPageBuilder.propTypes = {
	data: PropTypes.shape({
		propNum: PropTypes.number.isRequired,
		meta: PropTypes.shape({
			pageType: PropTypes.string,
			dateCreated: PropTypes.instanceOf(Date),
			dateModified: PropTypes.instanceOf(Date),
		}).isRequired,
		blocks: PropTypes.arrayOf(
			PropTypes.shape({
				component: PropTypes.func.isRequired,
				data: PropTypes.object.isRequired,
			}).isRequired
		).isRequired
	}).isRequired
}

export default PropPageBuilder;
