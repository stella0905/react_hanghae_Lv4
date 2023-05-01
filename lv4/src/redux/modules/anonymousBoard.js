import { createSlice } from "@reduxjs/toolkit";

// initial states
const initialState = {
  posts: [],
  post: {
    postId: 0,
    title: '',
    content: '',
    password: '',
    rgstrTime: '',
    rgstrId: ''
  }
}

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {

  }
});

//1. export action creator
//2. export reducer
//3. action value

export const { addTodo, removeTodo, switchTodo } = boardSlice.actions;
export default boardSlice.reducer;