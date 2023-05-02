import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { getBoards } from '../axios/apiConfig';
import Button from './componet/Button'
import InputModal from './InputModal';
import * as CSS from './style'

const Thread = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = ()=>{
    setModal(!modal)
  }
  //tract query로 데이터 조회
  const {isLoading, isError, data} = useQuery("getBoards",getBoards)
  
  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Error: {Error.message}</div>

  return (
    <CSS.Main>
      <CSS.buttonHandler>
      <Button type="blue" size='M' onClick={toggleModal}>게시글 등록하기</Button>
      </CSS.buttonHandler>
      {modal && <InputModal modal={modal} toggleModal={toggleModal} />}
    <CSS.ThreadContainer>
    <CSS.ListBox>
      <CSS.ThreadNumber>번호</CSS.ThreadNumber>
      <CSS.DetailLink>제목</CSS.DetailLink>
      <CSS.ThreadDate>수정일</CSS.ThreadDate>
    </CSS.ListBox>
      {data.map((item,idx)=>{
        return (
          <CSS.ListBox key={item.id}>
            <CSS.ThreadNumber>{idx+1}</CSS.ThreadNumber>
            <CSS.DetailLink to={`/main/${item.id}`}>{item.title}</CSS.DetailLink>
            <CSS.ThreadDate>{item.currentDate}</CSS.ThreadDate>
          </CSS.ListBox>
        )
      })}
    </CSS.ThreadContainer>

    </CSS.Main>

  )
}

export default Thread
