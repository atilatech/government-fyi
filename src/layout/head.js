import React from 'react'
import PropTypes from 'prop-types'
import Helmet from "react-helmet";
import Color from 'layout/colors'

import appleTouchIcon from './touch/apple-touch-icon-180x180.png'
import appleLaunchImg from './touch/apple-launch-img.png'
import touchIcon192 from './touch/touch-icon-192x192.png'
import touchIcon144 from './touch/touch-icon-144x144.png'


/* This will go at the top of every page in the <head> tag unless overridden.

all these props will be used for Meta, Facebook og, and Twitter cards

props
---------
url will be the canonical url that this page links to
title will be the title at the top of every page. It should end with "– By The Bay"
headline should be short and descriptive (70 chars)
description should be 160 characters max and explain what the purpose of the page is
image should be a url to an image, could be static.
    URL of image to use in the card.
    Images must be less than 5MB in size. JPG, PNG, WEBP and GIF formats are supported.
    Only the first frame of an animated GIF will be used. SVG is not supported.
USAGE:
    import Head from 'layout/head'

    <Head
      url=""
      title=""
      headline=""
      description=""
      image=""
      pageType=""
      dateCreated=""
      dateModified=""
    />

*/

class Head extends React.Component{
  constructor(props) {
    super(props);
    this.state={structuredData:null};
  }

  componentDidMount() {
    const {title, url, description, headline, image, dateCreated, dateModified, pageType} = this.props;
    if(pageType === "article"){
      this.setState({ structuredData:
        `
          {
            "@context": "http://schema.org",
            "@type": "NewsArticle",
            "headline": "${headline && (headline).replace(/"/g, "'")}",
            "name": "${title && (title).replace(/"/g, "'")}",
            "url": "${url}",
            "image": "${("https://www.ourgovernment.fyi/socialimages/" + image) || ""}",
            "datePublished": "${dateCreated || ""}",
            "dateCreated": "${dateCreated || ""}",
            "dateModified": "${dateModified || dateCreated || ""}",
            "description": "${description && (description).replace(/"/g, "'")}",
            "mainEntityOfPage":{
              "@type": "WebPage",
              "@id": "${url}"
            },
            "author": {
              "@type": "Organization",
              "name":"ourgovernment.fyi",
              "url":"https://www.ourgovernment.fyi/"
            },
            "Publisher": {
              "@type": "Organization",
              "name":"ourgovernment.fyi",
              "url":"https://www.ourgovernment.fyi/",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.ourgovernment.fyi/touch-icon-512x512.png"
              },
              "description": "ourgovernment.fyi is a nonpartisan voter guide for California's statewide elections",
              "email": "fax@ourgovernment.fyi",
              "founder": ["Jimmy Chion", "Yvonne Leow"],
              "sameAs": [
                "https://www.facebook.com/ballotfyi/",
                "https://twitter.com/ballotfyi/",
                "https://www.instagram.com/ballotfyi/"
              ]
            }
          }
        `
      });
    } else {
      this.setState({ structuredData:
        `
        {
          "@context": "http://schema.org",
          "@type": "WebPage",
          "name": "ourgovernment.fyi",
          "alternateName": "ballotfyi",
          "headline":"${title}",
          "url": "${url}",
          "description":"${description}",
          "copyrightYear":"2018",
          "creator":{
            "@type": "Organization",
            "name": "ourgovernment.fyi",
            "description": "ourgovernment.fyi is a nonpartisan voter guide for California elections",
            "url": "https://www.ourgovernment.fyi/",
            "email": "fax@ourgovernment.fyi",
            "founder": ["Jimmy Chion", "Yvonne Leow"],
            "logo": "https://www.ourgovernment.fyi/touch-icon-512x512.png",
            "sameAs": [
              "https://www.facebook.com/ballotfyi/",
              "https://twitter.com/ballotfyi/",
              "https://www.instagram.com/ballotfyi/"
            ]
          },
          "image":{
            "@type":"ImageObject",
            "URL": "https://s3.amazonaws.com/ourgovernment.fyi/static/img/share-twit.png"
          }
        }
        `
      });
    }
  }
  render() {
    const {title, url, description, headline, image, pageType} = this.props;
    return(
      <Helmet>
        <title>{title}</title>
        <link rel="canonical"            href={url} />
        <meta name="viewport"            content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="description"         content={description} />
        <meta name="keywords"            content="CA, elections, propsitions" />

        <meta prefix="og: http://ogp.me/ns#" property="og:url"          content={url} />
        <meta prefix="og: http://ogp.me/ns#" property="og:type"         content="website" />
        <meta prefix="og: http://ogp.me/ns#" property="og:title"        content={headline} />
        <meta prefix="og: http://ogp.me/ns#" property="og:description"  content={description} />
        <meta prefix="og: http://ogp.me/ns#" property="og:image"        content={"https://www.ourgovernment.fyi/socialimages/" + image} />
        <meta prefix="og: http://ogp.me/ns#" property="og:locale"       content="en_US" />
        <meta prefix="og: http://ogp.me/ns#" property="fb:app_id"       content="1134187086655814" />

        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:site"        content="@ballotfyi" />
        <meta name="twitter:title"       content={headline} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image"       content={"https://www.ourgovernment.fyi/socialimages/" + image} />

        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="mobile-web-app-capable" content="yes"/>
        <meta name="application-name" content={title}/>
        <link rel="icon" sizes="192x192" href={touchIcon192}/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
        <meta name="apple-mobile-web-app-title" content={title}/>
        <link rel="apple-touch-startup-image" href={appleLaunchImg}/>
        <link rel="apple-touch-icon-precomposed" href={appleTouchIcon}/>
        <link rel="apple-touch-icon" href={appleTouchIcon}/>
        <meta name="theme-color" content={Color('teal')}/>
        <meta name="msapplication-TileImage" content={touchIcon144}/>
        <meta name="msapplication-TileColor" content={Color('teal')}/>

        {pageType &&
          <script type="application/ld+json">{this.state.structuredData}</script>
        }
        {this.props.children}
      </Helmet>
    )
  }
}

Head.defaultProps = {
  url: "https://www.ourgovernment.fyi/",
  title: "OurGovernment.FYI 🇨🇦 – A simple nonpartisan guide to Canada's 2019 Federal elections - ourgovernment.fyi",
  headline: "The simplest nonpartisan voter guide for the 2019 Canadian federal elections",
  description: "The simplest nonpartisan voter guide for the 2019 Canadian federal elections",
  image: "general-2.png",
}


Head.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  pageType:PropTypes.string,
  dateCreated: PropTypes.instanceOf(Date),
  dateModified: PropTypes.instanceOf(Date),
}

export default Head;
