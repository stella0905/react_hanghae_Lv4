import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import useInput from '../hooks/useInput'
import Header from './Header'
import * as CSS from './style'


const Login = () => {

  const [email,onChangeEmailHandler] = useInput('');
  const [password,onChangePasswordHandler] = useInput('');

  const [warningMessage,setWarningMessage] =useState('')

  const emailRef = useRef();
  const passwordRef = useRef();

  const onClickLoginHandler = (e) =>{
    if(email.length<1){
      emailRef.current.focus();
      setWarningMessage('이메일을 입력해주세요.')
      return;
    }
    if(password.length<1){
      passwordRef.current.focus();
      setWarningMessage('비밀번호를 입력해주세요.')
      return;
    }
  }
  return (
    <>
      <Header page={-1} LoginVisible={true}/>
      <CSS.Main>
      <CSS.Login>Login</CSS.Login>
      <CSS.Content>
      이메일
      <CSS.InputTitle 
      name='email'
      ref={emailRef}
      size='15px' 
      type='login' 
      width='300px' 
      placeholder='USER EMAIL'
      value={email}
      onChange={onChangeEmailHandler}
      />
      비밀번호    
      <CSS.InputTitle 
      name='password'
      ref={passwordRef}
      size='15px' 
      type='login' 
      placeholder='PASSWORD'
      value={password}
      onChange={onChangePasswordHandler}
      />
      <CSS.WarningMessage>{warningMessage}</CSS.WarningMessage>
      </CSS.Content>
      <CSS.Button size='M' type='blue' onClick={onClickLoginHandler}>Login</CSS.Button>
      <Link to='/signUp'>
      <CSS.Button size='M' type='red'>SignUp</CSS.Button>
      </Link>
    </CSS.Main>
    </>
  )
}

export default Login