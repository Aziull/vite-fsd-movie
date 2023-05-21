import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthToken } from './types';

interface AuthTokenState {
    token: string | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: AuthTokenState = {
    token: null,
    status: 'idle',
    error: null
}

export const authTokenSlice = createSlice({
    name: 'authToken',
    initialState,
    reducers: {
        setAuthToken: (state, action: PayloadAction<AuthToken>) => {
            state.token = action.payload.token;
            state.status = 'succeeded';
        },
        clearAuthToken: (state) => {
            state.token = null;
            state.status = 'idle';
        },
        startLoading: (state) => {
            state.status = 'loading';
        },
        hasError: (state, action: PayloadAction<string>) => {
            state.status = 'failed';
            state.error = action.payload;
        }
    }
});

export const { setAuthToken, clearAuthToken, startLoading, hasError } = authTokenSlice.actions;

export const selectIsAuthorized = (state: RootState) => state.authToken.token !== null;
