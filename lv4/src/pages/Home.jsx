import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import * as CSS from '../components/style'


const Home = () => {
  
  return (
    <CSS.HomeMain>
      <Header Visible={true}/>
      <CSS.HomeContainer>
      <CSS.HomeTextLink to="/main">대나무숲 산책하기➡️</CSS.HomeTextLink>
      </CSS.HomeContainer>
    </CSS.HomeMain>
  )
}

export default Home