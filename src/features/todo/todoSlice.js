import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: []
  },
  reducers: {
    setTodo: (state, action) => {
      state.todos = [...action.payload]
    },
    addTodo: (state, action) => {
        state.todos.push(action.payload)
      },
      deleteTodo: (state, action) => {
        state.todos = state.todos.filter(todo => todo._id !== action.payload);
      },
      updateTodo: (state, action) => {
        const { _id, updatedTodo } = action.payload;
        state.todos = state.todos.map(todo =>
          todo._id === _id ? { ...todo, ...updatedTodo } : todo
        );
      }
  }
})

// Action creators are generated for each case reducer function
export const { setTodo,addTodo,deleteTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer