import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User, UserProfile } from './types'

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
})

export const { setUser, setUserProfile } = userSlice.actions;