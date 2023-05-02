import React from 'react'
import { Link } from 'react-router-dom'
import Button from './componet/Button'
import Login from './Login'
import * as CSS from './style'

const Header = ({Visible,page,LoginVisible}) => {
  return (
    <CSS.Header>
      <Link to={page}>
      {!Visible && <Button>이전으로</Button>}
      </Link>
      <CSS.Title>항해99 대나무 숲</CSS.Title>
        <Link to='/login'>
      {!LoginVisible && <Button>Login</Button>}
        </Link>
    </CSS.Header>
  )
}

export default Header