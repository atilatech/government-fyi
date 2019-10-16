import React from 'react'
import PropTypes from 'prop-types';


/*
	Author:
	-------------
	Jimmy Chion
	Nov 2017
	By the Bay

	Usage:
	-------------
	<MultisourceImage
		img_webp_1x={image_handle_example_w_1}
		img_webp_2x={image_handle_example_w_2}
		img_1x={image_handle_example_1x}
		img_2x={image_handle_example_2x}
		alt='this is alt text'
	/>

	------or, to make shorter------

	<MultisourceImage
		imageHandles = {img}
		alt='this is alt text'
	/>


	img_web_1x and img_web_2x should be primarily used, as they are significantly
	less in file size, but not all browsers support it. The _2x indicates it's for
	resolutions with 2x dpi (i.e. retina)
	img_1x is the fallback to webp, could be png, jpg, gif, etc.
	img_2x is the the retina version of img_1x
	only img_1x and alt are required

	Notes:
	------------
	✅ Should be able to handle only having a jpg, or png
	✅ Throws warning if only given webp
	✅ Will use 1x as 2x if only one is given
	✅ when given all props, should show all 4 appropriately
	✅ Non-webp compliant browsers work 1x and 2x
	✅ only show image after load
	-- replace error state with graphic
*/

const styles = {
	loading: {
		opacity: 0,
	},
	loaded: {
		opacity: 1,
		transition: 'opacity 150ms ease-in',
	},
};

class MultisourceImage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {loadingStyle: styles.loading}
	}
	handleImageLoaded = () => {
		this.setState({loadingStyle: styles.loaded})
	};
	handleImageErrored = () => {
		console.warn('Error loading image')
	};

	render() {
		const { imageHandles, img_webp_1x, img_webp_2x, style, alt, className } = this.props;
		const webp_1x = (imageHandles) ? imageHandles._1x_webp : img_webp_1x;
		const webp_2x = (imageHandles) ? imageHandles._2x_webp : img_webp_2x;
		const img_1x = (imageHandles) ? imageHandles._1x : this.props.img_1x;
		const img_2x = (imageHandles) ? imageHandles._2x : this.props.img_2x;

		//-- if no webp's provided, return a plain img tag, maybe with @2x
		if (webp_1x == null && webp_2x == null) {
			let srcset = img_2x ? (img_1x + ' 1x,' + img_2x + ' 2x') : (img_1x + ' 1x,' + img_1x + ' 2x');
			return(
				<span style={this.state.loadingStyle}>
	  	 		<img
	  	 			style={style}
	  	 			alt={alt}
	  	 			src={img_1x}
	  	 			srcSet={srcset}
	  	 			onLoad={this.handleImageLoaded}
	  	 			onError={this.handleImageErrored}
	  	 			className={className}
		 			/>
	 			</span>
			);
		//-- otherwise, return the HTML5 picture tag with webp and fallback
		} else {
			let imageExtension = img_1x.split('.').pop(); // jpg, png, gif, etc
			let srcsetForWebp = webp_2x ? webp_1x + " 1x, " + webp_2x + ' 2x' : webp_1x;
			let srcsetForElse = img_2x ? img_1x + " 1x, " + img_2x + ' 2x' : img_1x;
			return(
				<span style={this.state.loadingStyle}>
		    	<picture>
					  <source srcSet={srcsetForWebp} type="image/webp" />
					  <source srcSet={srcsetForElse} type={'image/' + imageExtension} />
		  	 		<img
		  	 			onLoad={this.handleImageLoaded}
		  	 			onError={this.handleImageErrored}
		  	 			style={style}
		  	 			alt={alt}
		  	 			src={img_1x}
		  	 			className={className}/>
					</picture>
				</span>
			);
		}

	}
}


MultisourceImage.defaultProps = {
	imageHandles: null,
	img_webp_1x: null,
	img_webp_2x: null,
	img_1x: null,
	img_2x: null,
 	alt: null,
};

//-- because we'll be passing in handles, we expect strings
//-- only the _1x of any image type, is required
//-- alt text required for accessibility
MultisourceImage.propTypes = {
	imageHandles: PropTypes.shape({
		_1x_webp: PropTypes.string,
		_2x_webp: PropTypes.string,
		_1x: PropTypes.string,
		_2x: PropTypes.string,
	}),
	alt: PropTypes.string.isRequired,
};

export default MultisourceImage
