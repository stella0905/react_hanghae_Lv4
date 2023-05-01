import React from 'react'
import * as CSS from '../style'

const Button = (props) => {

  return (
  <CSS.Button 
  gps={props.gps}
  top={props.top}
  bottom={props.bottom}
  left={props.left}
  right={props.right}
  size={props.size}
  type={props.type}
  onClick={props.onClick}>{props.children}</CSS.Button>
  )
}

export default Button