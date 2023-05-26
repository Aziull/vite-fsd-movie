import { combineReducers } from '@reduxjs/toolkit'
import { authTokenSlice } from '@/entities/authToken'
import { baseApi } from '@/shared/api'
import { userSlice } from '@/entities/user'
import { videoSlice } from '@/entities/mediaVideo'
import { mediaSlice } from '@/entities/media'

export const rootReducer = combineReducers({  
  [authTokenSlice.name]: authTokenSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
  [userSlice.name]: userSlice.reducer,
  [videoSlice.name]: videoSlice.reducer,
  [mediaSlice.name]: mediaSlice.reducer,
})
