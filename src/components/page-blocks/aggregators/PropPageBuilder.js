import React from 'react'
import PropTypes from 'prop-types';
import Head from 'layout/head'
import {Spacer} from 'layout/util'

import WallpaperBannerImg from 'components/page-blocks/blocks/WallpaperBannerImg'
import BottomNavBlock from 'components/page-blocks/blocks/BottomNavBlock'
import {PropMetaData, GetNextAndPrevNum} from 'pages/prop-attributes'

/*
takes the block components and puts them together on a page
*/

const PropPageBuilder = (props) => {
	const { meta, blocks, propNum } = props.data;

	const bodySections = blocks.map( (block ) => {
    const Block = block.component;
    return(
      <Block key={block.id} data={block.data}/>
    )
	});

	const {dateCreated, dateModified, pageType} = meta;
	const {color, imageSet, title, shortTitle, socialHeadline, socialDescription} = PropMetaData(propNum)
  const adjacentProps = GetNextAndPrevNum(propNum);
  return(
		<div>
	    <Head
	      url={"https://www.ballot.fyi/prop-" + propNum}
				title={`Prop ${propNum} | California Propositions | ballot.fyi`}
	      headline={socialHeadline}
	      description={socialDescription}
	      image={`Prop-${propNum}.png`}
				pageType={pageType || 'article'}
				dateCreated={dateCreated}
				dateModified={dateModified}
			/>
			<Spacer height={45}/>
      <WallpaperBannerImg
        data={{
          color: color,
          image: imageSet._2x,
          title: shortTitle,
        }}
      />
		 	{bodySections}
			<Spacer height={45}/>
      <BottomNavBlock
        data = {{
          color: color,
          tiles: [
          {
            img: PropMetaData(adjacentProps.prev).imageSet,
            to: `/prop-${adjacentProps.prev}`,
            text: PropMetaData(adjacentProps.prev).shortTitle,
          },
          {
            img: PropMetaData(adjacentProps.next).imageSet,
            to: `/prop-${adjacentProps.next}`,
            text: PropMetaData(adjacentProps.next).shortTitle,
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
      socialHeadline: PropTypes.string.isRequired,
      socialDescription: PropTypes.string.isRequired,
      pageType: PropTypes.string,
      dateCreated: PropTypes.instanceOf(Date),
      dateModified: PropTypes.instanceOf(Date),
    }).isRequired,
    blocks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        component: PropTypes.func.isRequired,
        data: PropTypes.object.isRequired,
      }).isRequired
    ).isRequired
  }).isRequired
}

export default PropPageBuilder;
