import React from 'react'
import PropTypes from 'prop-types'
import ImgAndTextBlock from './ImgAndTextBlock'
import {ExpandButtonLabel, ExpandButton} from './SummaryListBlock'
/*
usage

{
	
	component: SummaryListBlock,
	data: {
		listNItems: 3, //optional
		buttonText: "View more", //optional
		stories: [
			{
        src: {
          _1x: partnerlogos,
          _1x_webp: partnerlogos_w,
        },
        alt: "Image of partner logos"
				title: "Defied state law and issued same-sex marriage licenses (2004)",
				description: <span>While it was still illegal in California in 2004, Gavin, as Mayor of SF, ordered his County Clerk to issue 4K same-sex marriage licenses.</span>,
			},
		],
	}
},
*/


class ImgListBlock extends React.Component  {
	constructor(props) {
		super(props);
		this.state = {
			expanded: false,
		}
	}

	expandContainer = () => {
		this.setState({expanded: true})
	}

	render() {
		const { stories, listNItems, buttonText } = this.props.data;
		const nItems = listNItems || 3;
		const snippets = stories.map( (story, i) => {
			if(i < nItems) {
				return(
          <ImgAndTextBlock
            key={i}
            data = {{
              title: story.title,
              body: story.body,
              src: story.img,
              alt: story.alt,
            }}
          />
				);
			} else {
				return null
			}
		});

    let restOfSnippets = stories.map( (story, i) => {
      if(i >= nItems) {
        return(
          <ImgAndTextBlock
            key={i}
            data={{
              title: story.title,
              body: story.body,
              src: story.img,
              alt: story.alt,
            }}
          />
        );
      } else {
        return null
      }
    });

		if (restOfSnippets[restOfSnippets.length-1] === null) {
			restOfSnippets = null;
		}
		return(
			<React.Fragment>
        {snippets}
        {(!this.state.expanded && restOfSnippets) &&
          <ExpandButton onClick={this.expandContainer}>
            <ExpandButtonLabel>{buttonText}</ExpandButtonLabel>
          </ExpandButton>
        }
        {this.state.expanded && restOfSnippets}
			</React.Fragment>
		);
	}
}

ImgListBlock.propTypes = {
	data: PropTypes.shape({
		listNItems: PropTypes.number,
		buttonText: PropTypes.string,
		stories: PropTypes.arrayOf(
			PropTypes.shape({
        img: PropTypes.shape({
          _1x:PropTypes.string.isRequired,
          _2x:PropTypes.string,
          _1x_webp:PropTypes.string,
          _2x_webp:PropTypes.string,
        }),
        alt: PropTypes.string,
				title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
				body: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
			})
		),
	})
}

export default ImgListBlock;
