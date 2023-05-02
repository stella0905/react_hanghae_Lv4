import React, { useState } from 'react'
import { QueryClient, useMutation, useQuery, useQueryClient } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { editBoards, getBoard, getBoards, removeBoards } from '../axios/apiConfig'
import Button from './componet/Button'
import getCurrentDateTime from './componet/getCurrentDateTime'
import Header from './Header'
import * as CSS from './style'

const Detail = () => {
  const queryClient = useQueryClient();
  const params = useParams()
  const navigate = useNavigate();
  const [editing,setEditing] = useState(true)
  //단일 조회
  const {isLoading, isError, data} = useQuery('getBoard',()=>getBoard(params.id))

  //수정하기 useState
  const [state, setState] = useState({
    title:"",
    content:""
  })
  const onChangHandler = (e)=>{
    setState({
      ...state,
      [e.target.name] :e.target.value
    })
  }
  //삭제하기 
  const mutation =useMutation(removeBoards,{
    onSuccess: ()=>{
      queryClient.invalidateQueries("getBoards")
      getBoards();
    }
  })
  //수정하기
  const editMutation = useMutation(editBoards,{
    onSuccess: ()=>{
      queryClient.invalidateQueries("getBoard")
      getBoards();
    }
  })

  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Error: {Error.message}</div>

  // const foundData = data.find((item)=>{
  //   return item.id === parseInt(params.id)
  // })

  //삭제하기 함수
  const CONFIRM_MESSAGE = `[삭제 확인]\n\n게시물을 정말로 삭제하시겠습니까?\n삭제를 원치 않으시면 [취소] 버튼을 눌러주세요.`;

  const onClickRemoveButtonHandler = () =>{
    const userPasswordInput = prompt('비밀번호를 입력해주세요.')
    if(userPasswordInput === data.password ){
      if(window.confirm(CONFIRM_MESSAGE)){
      mutation.mutate(data.id)
      navigate("/main")
    }}else {
      alert('비밀번호가 틀렸습니다. 다시 입력해주세요.')
    }
  }

  
  //수정하기 버튼 함수
  const onClickEditButtonHandler = () =>{
    const userPasswordInput = prompt('비밀번호를 입력해주세요.')
    if(userPasswordInput === data.password ){
    setState({
      title:data.title,
      content:data.content
    })
    setEditing(!editing)
    }else {
      alert('비밀번호가 틀렸습니다. 다시 입력해주세요.')
    }
    
  }
  
  const currentDate = getCurrentDateTime()
  //수정완료 함수
  const onClickEditCompleteButtonHandler = () =>{
    
    editMutation.mutate({id:data.id,title:state.title,content:state.content,currentDate})
    setEditing(!editing)
  }
  //취소하기 버튼
  const onClickEditCancelButtonHandler = () =>{
    setEditing(!editing)
  }
    
  return (
    // 상세페이지 폼
    <CSS.DetailEntire>
      <Header page={-1}/>
      {editing &&
      <CSS.DetailMain>
        <CSS.Date>수정일 {data.currentDate}</CSS.Date>
        <CSS.DetailH1>{data.title}</CSS.DetailH1>
        <CSS.DetailContent>{data.content}</CSS.DetailContent>
    
        <CSS.ButtonContainer>
          <Button type="blue" onClick={onClickEditButtonHandler}>수정하기</Button>
          <Button type="red" onClick={()=>onClickRemoveButtonHandler()}>삭제하기</Button>
        </CSS.ButtonContainer>
      </CSS.DetailMain>}

      {/* 수정하기 폼 */}
      {!editing &&
      <CSS.DetailEditMain>
        <CSS.Form>
          {/* title */}
          제목
          <CSS.InputTitle 
          type="text"
          name='title'
          value={state.title} 
          onChange={onChangHandler}/>
          {/* content */}
          내용
          <CSS.InputContent 
          size='m'
          type="text"
          name='content'
          value={state.content} 
          onChange={onChangHandler} /> 
        </CSS.Form> 
    
        <CSS.ButtonContainer>
          <Button type="blue" onClick={onClickEditCompleteButtonHandler}>수정완료</Button>
          <Button type="red" onClick={onClickEditCancelButtonHandler}>취소하기</Button>
        </CSS.ButtonContainer>
      </CSS.DetailEditMain>}
    </CSS.DetailEntire>
  )
}

export default Detail