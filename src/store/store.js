import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './slice/UserSlice'
export const store = configureStore({
  reducer: {
    users:usersReducer,
  },
})