import { combineReducers } from '@reduxjs/toolkit'
import { authTokenSlice } from '@/entities/authToken'
import { baseApi } from '@/shared/api'
import { userSlice } from '@/entities/user'

export const rootReducer = combineReducers({  
  [authTokenSlice.name]: authTokenSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
  [userSlice.name]: userSlice.reducer,
})
