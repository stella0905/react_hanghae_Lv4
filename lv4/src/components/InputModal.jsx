import useInput from '../hooks/useInput';
import Button from './componet/Button';
import * as CSS from './style'
import { addBoards } from '../axios/apiConfig';
import { useMutation, useQueryClient } from 'react-query';
import getCurrentDateTime from './componet/getCurrentDateTime';

const InputModal = (props) => {
  const [title, onChangTitleHandler] = useInput();
  const [content, onChangContentHandler] = useInput();
  const [password, onChangPasswordHandler] = useInput();

  //리액트 쿼리 관련 코드
  const queryClient = useQueryClient();
  const mutation =useMutation(addBoards,{
    onSuccess: ()=>{
      queryClient.invalidateQueries("getBoards")
    }
  })
  //db에 저장할 데이터
  const currentDate = getCurrentDateTime()
    const newPost = {
      title,
      content,
      password,
      currentDate,
    }
  //등록하기 버튼 함수
  const onClickSaveToggleButton = (toggleModal)=>{
    if(title.length<1){
      alert('제목을 입력해주세요.')
      return;
    }
    if(content.length<1){
      alert('내용을 입력해주세요.')
      return;
    }
    if(password.length<1){
      alert('비밀번호를 입력해주세요.')
      return;
    }
    //우리가 사용하던 dispatch와 동일한 기능
    mutation.mutate(newPost)
    //부모함수로 모달상태 보냄
    toggleModal()
  }
  //취소하기 버튼 함수
  const onClickDeleteToggleButton = (toggleModal)=>{
    toggleModal()
  }
  return (
    <div>
      
    <CSS.ModalOverlay>
      <CSS.ModalContent>
        <CSS.Content>
          제목을 입력해 주세요.
          <CSS.InputTitle 
          size={'30px'}
          type="text" 
          value={title} 
          onChange={onChangTitleHandler}/>
          내용을 입력해 주세요.
          <CSS.InputContent 
          size='s'
          type="text" 
          value={content} 
          onChange={onChangContentHandler}/>
          <div> 비밀번호 설정&nbsp;
          <CSS.InputPassword
          type="text" 
          value={password} 
          onChange={onChangPasswordHandler}/></div>
        </CSS.Content>
        <CSS.ModalButton>
          <Button type="blue" onClick={()=>onClickSaveToggleButton(props.toggleModal)}>등록하기</Button>
          <Button type="red" onClick={()=>onClickDeleteToggleButton(props.toggleModal)}>취소하기</Button>
        </CSS.ModalButton>
      </CSS.ModalContent>
    </CSS.ModalOverlay>
    </div>
  )
}

export default InputModal