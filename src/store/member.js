import { createSlice } from "@reduxjs/toolkit";

const memberSlice = createSlice({
  name: 'members',
  initialState: {
    members: [],  // [{userEmail, userPw, userName, userPhone, zipCode, addr1, addr2}, ...]
    logined: null
  },
  reducers : {
    addMembers(state, action) {
      state.members.push(action.payload)
    },
    userLogin(state, action) {
      const {userEmail, userPw} = action.payload
      state.members.map((user)=>{
        if (user.userEmail == userEmail && user.userPw == userPw) {
          state.logined = user
        } 
      })
    }
  }
})

export const {addMembers, userLogin} = memberSlice.actions;

export default memberSlice.reducer;