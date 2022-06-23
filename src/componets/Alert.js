import React from 'react'

export default function Alert(props) {
  return (
<div style={{height:"40px"}}>
    {props.alert && <div>
      <div class="alert alert-primary" role="alert">
        {props.alert.message}:{props.alert.type}
      </div>


    </div>}
    </div>

  )
}
