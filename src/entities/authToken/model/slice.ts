import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthToken } from './types';
import { sessionApi } from '../api/sessionApi';

interface AuthTokenState {
    authToken: string | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: AuthTokenState = {
    authToken: null,
    status: 'idle',
    error: null
}

export const authTokenSlice = createSlice({
    name: 'authToken',
    initialState,
    reducers: {
        setAuthToken: (state, action: PayloadAction<AuthToken>) => {
            state.authToken = action.payload.authToken;
            state.status = 'succeeded';
        },
        clearAuthToken: (state) => {
            state.authToken = null;
            state.status = 'idle';
        },
        startLoading: (state) => {
            state.status = 'loading';
        },
        hasError: (state, action: PayloadAction<string>) => {
            state.status = 'failed';
            state.error = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(
          sessionApi.endpoints.login.matchFulfilled,
          (state: AuthTokenState, { payload }) => {
            state.authToken = payload.authToken
          }
        )
      },
});

export const { setAuthToken, clearAuthToken, startLoading, hasError } = authTokenSlice.actions;

export const selectIsAuthorized = (state: RootState) => state.authToken.authToken !== null;
