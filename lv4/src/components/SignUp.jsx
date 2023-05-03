import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import useInput from '../hooks/useInput';
import Header from './Header'
import * as CSS from './style'

const SignUp = () => {
  const [email,onChangeEmailHandler] = useInput('');
  const [password,onChangePasswordHandler] = useInput('');
  const [checkPassword,onChangeCheckPasswordHandler] = useInput('');

  const [warningMessage,setWarningMessage] =useState('')

  const emailRef = useRef();
  const passwordRef = useRef();
  const checkPasswordRef = useRef();

  const onClickSignUpHandler = (e) =>{
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
    if(checkPassword.length<1){
      checkPasswordRef.current.focus();
      setWarningMessage('비밀번호 확인해주세요.')
      return;
    }
  }

  return (
    <>
      <Header page={-1} LoginVisible={true}/>
      <CSS.Main>
      <CSS.Login>SignUp</CSS.Login>
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
      비밀번호 확인
      <CSS.InputTitle 
      name='checkPassword'
      ref={checkPasswordRef}
      size='15px' 
      type='login' 
      placeholder='PASSWORD'
      value={checkPassword}
      onChange={onChangeCheckPasswordHandler}
      />
      <CSS.WarningMessage>{warningMessage}</CSS.WarningMessage>

      </CSS.Content>
      <CSS.Button size='M' type='red' onClick={onClickSignUpHandler}>SignUp</CSS.Button>
    </CSS.Main>
    </>
  )
}

export default SignUp