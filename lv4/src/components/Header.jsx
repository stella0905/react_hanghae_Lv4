import React from 'react'
import { Link } from 'react-router-dom'
import Button from './componet/Button'
import * as CSS from './style'

const Header = ({Visible,page}) => {
  return (
    <CSS.Header>
      <Link to={page}>
      {!Visible && 
      <Button 
      gps='header'
      top='20%'
      left='1%'
      >이전으로</Button>}
      </Link>
      <CSS.Title>항해99 대나무 숲</CSS.Title>
    </CSS.Header>
  )
}

export default Header