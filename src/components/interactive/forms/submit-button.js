import React from 'react'

const SubmitButton = (props) =>{
  return(
    <input 
      className = {props.className}
      type="submit" 
      value={props.value} 
      disabled={props.disabled ? "disabled" : null}
      name={props.name}
    />
  );
}


export default SubmitButton;
