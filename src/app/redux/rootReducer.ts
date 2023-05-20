import { combineReducers } from '@reduxjs/toolkit'

import { baseApi } from 'shared/api'
import { debugModeSlice } from 'shared/model'

export const rootReducer = combineReducers({
  [debugModeSlice.name]: debugModeSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
})
