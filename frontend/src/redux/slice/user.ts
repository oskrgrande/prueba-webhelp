import { UserEmptyState, UserInfo } from "@/models";
import { clearLocalStorage, persistLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

export const UserKey = 'user';

export const userSlice = createSlice({
  name:UserKey,
  initialState:localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : UserEmptyState,
  reducers: {
    createUser: (state, action) => {
        persistLocalStorage<UserInfo>(UserKey, action.payload);
        return action.payload;
      },
    updateUser: (state, action) => {
      const result = { ...state, ...action.payload };
      persistLocalStorage<UserInfo>(UserKey, result);
      return result;
    },
    resetUser: () => {
      clearLocalStorage(UserKey);
      return UserEmptyState;
    }

  }

});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;