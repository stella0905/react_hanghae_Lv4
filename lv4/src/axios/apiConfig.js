import axios from "axios"
import { useParams } from "react-router-dom"



const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL
})
//API폴더
//조회
const getBoards = async () => {
  const response = await instance.get('/posts')
  return response.data
}

//단일 조회
const getBoard = async (props) => {
  const response = await instance.get(`/posts/${props}`)
  return response.data
}
//추가
//어떤 Post를 추가했는지 알아야하기 때문에 인자로 newPost를 받는다.
const addBoards = async (newPost) => {
  await instance.post('/posts', newPost)
}

//수정
const editBoards = async (props) => {
  return instance.patch(`/posts/${props.id}`, {
    title: props.title,
    content: props.content,
    currentDate: props.currentDate
  })
}

//삭제
const removeBoards = async (id) => {
  instance.delete(`/posts/${id}`)
}

export { getBoards, addBoards, removeBoards, editBoards, getBoard }

