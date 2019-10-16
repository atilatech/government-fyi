import React from 'react'
import PropTypes from 'prop-types';
import Head from 'layout/head'
import {Spacer} from 'layout/util'
/*
takes the block components and puts them together on a page
*/

const PageBuilder = (props) => {
	const { meta, blocks } = props.data;

	const bodySections = blocks.map( (block,i ) => {
    const Block = block.component;
    return(
      <Block key={i} data={block.data}/>
    )
	});

	const {documentTitle, socialHeadline, socialDescription, socialImage, pageType, dateCreated, dateModified} = meta;
	return(
		<div>
	    <Head
	      url={window.location.href}
	      title={documentTitle}
	      headline={socialHeadline}
	      description={socialDescription}
	      image={socialImage}
				pageType={pageType}
				dateCreated={dateCreated}
				dateModified={dateModified}
			/>
			<Spacer height={45}/>
			{bodySections}
		</div>
	)
}

PageBuilder.propTypes = {
  data: PropTypes.shape({
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
        component: PropTypes.func.isRequired,
        data: PropTypes.object.isRequired,
      }).isRequired
    ).isRequired
  }).isRequired
}

export default PageBuilder;
