// *************** Redux Thunk ***************

// const initialState = {
//     loading: false,
//     user: [],
//     error: ''
// }

// const reducer = (state = initialState, action) => {
//     switch(action.type){
//         case 'Fetch_User_Request': 
//             return{
//                 ...state,
//                 loading: true
//             }
//         case 'Fetch_User_Success':
//             return{
//                 loading: false,
//                 user: action.payload,
//                 error: ''
//             }
//         case 'Fetch_User_Failure': 
//             return{
//                 loading: false,
//                 user: [],
//                 error: action.payload
//             }
//         default: return state
//     }
// }

// export default reducer


// *************** Redux Toolkit ***************


import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    users: [],
    error: ''
  }
  
  export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios 
        .get('https://jsonplaceholder.typicode.com/users')
        .then(res => res.data.map(user => user.name))
  })
  
  const user = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
      builder.addCase(fetchUsers.pending, state => {
        state.loading = true
      })
      builder.addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false
        state.users = action.payload
        state.error = ''
      })
      builder.addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false
        state.users = []
        state.error = action.error.message
      })
    }
  })
  
export default user.reducer