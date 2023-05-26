import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User, UserProfile } from './types'
import { userApi } from '../api/userApi'

type UserState = {
  user: User | null,
  userProfile: UserProfile | null
}

const initialState: UserState = {
  user: null,
  userProfile: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setUserProfile: (state, action: PayloadAction<UserProfile>) => {
      state.userProfile = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.getUser.matchFulfilled,
      (state: UserState, { payload }) => {
        state.user = { ...payload }
      }
    ),
      builder.addMatcher(
        userApi.endpoints.getUserProfile.matchFulfilled,

        (state: UserState, { payload }) => {
          let birthday
          if (payload.birthday) {
            birthday = new Date(payload.birthday); 

            const day = birthday.getDate(); 
            const month = birthday.getMonth() + 1; 
            const year = birthday.getFullYear(); 
            const formattedDate = `${day}-${month}-${year}`;

            state.userProfile = { ...payload, birthday: formattedDate }

          }
          state.userProfile = { ...payload }
        }
      )
  },
})

export const { setUser, setUserProfile } = userSlice.actions;