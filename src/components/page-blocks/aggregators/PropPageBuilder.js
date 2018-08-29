import React from 'react'
import PropTypes from 'prop-types';
import Head from 'layout/head'
import {Spacer} from 'layout/util'

import WallpaperBannerImg from 'components/page-blocks/blocks/WallpaperBannerImg'
import BottomNavBlock from 'components/page-blocks/blocks/BottomNavBlock'
import {PropBgColor, PropImageSet, GetNextAndPrevNum, PropShortTitles} from 'pages/prop-attributes'

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

	const {socialHeadline, socialDescription, socialImage, pageType, dateCreated, dateModified} = meta;
  const adjacentProps = GetNextAndPrevNum(propNum);
  return(
		<div>
	    <Head
	      url={"https://www.ballot.fyi/prop-" + propNum}
				title={`Prop ${propNum} | California Propositions | ballot.fyi`}
	      headline={socialHeadline}
	      description={socialDescription}
	      image={socialImage}
				pageType={pageType || 'article'}
				dateCreated={dateCreated}
				dateModified={dateModified}
			/>
			<Spacer height={45}/>
      <WallpaperBannerImg
        data={{
          color: PropBgColor(propNum),
          image: PropImageSet(propNum)._2x,
          title: PropShortTitles(propNum)
        }}
      />
		 	{bodySections}
      <BottomNavBlock
        data = {{
          color: PropBgColor(propNum),
          tiles: [
          {
            img: PropImageSet(adjacentProps.prev),
            to: `/prop-${adjacentProps.prev}`,
            text: PropShortTitles(adjacentProps.prev),
          },
          {
            img: PropImageSet(adjacentProps.next),
            to: `/prop-${adjacentProps.next}`,
            text: PropShortTitles(adjacentProps.next),
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
      socialImage: PropTypes.string.isRequired,
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
