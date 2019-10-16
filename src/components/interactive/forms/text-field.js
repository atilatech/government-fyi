import React from 'react'
import PropTypes from 'prop-types'

const InputField = (props) => {
	return(
		<input 
      required={props.required}
	    type={props.type} 
	    name={props.name} 
	    id={props.id}
	    style={props.style}
	    placeholder={props.placeholder}
      tabIndex="0"
	    onChange={(event)=>{props.onChange(event)}} 
	    onSubmit={()=>{props.onSubmit()}}
	    autoComplete="on"
	    autoCapitalize="off" 
	    autoCorrect="off"
	    aria-label={props.placeholder}
	    size={props.size}
      className={props.className}
      value={props.value}
      maxLength={props.maxLength}
    /> 
	);
};


InputField.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	onChange: PropTypes.func,
};

InputField.defaultProps = {
	value: '',
	onChange: ()=>{},
};

export default InputField