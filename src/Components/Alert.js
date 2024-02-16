import React from 'react'
import { ReactPropTypes } from 'react'

function Alert(props) {

  function capitalize(words)
{
  const lower= words.toLowerCase();
  return lower.charAt(0).toUpperCase()+lower.slice(1);
}

  return (
    props.alert &&  <div class={`alert alert-${props.alert.type}`} role="alert"> //phle frst evalute hga agr null nhi h to 2nd
  <strong>{props.alert.msg}</strong>   <strong>{capitalize(props.alert.type)}</strong> //success ka s capitl krega
  
</div>
  )
}
export default Alert