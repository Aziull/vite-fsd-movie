import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mediaApi } from '../api/mediaApi'; 
import { Media, MediaDetail } from '../model/types';

type MediaState = {
    entities: Media[];
    details: MediaDetail | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error?: string | null;
};

const initialState: MediaState = {
    entities: [],
    details: null,
    status: 'idle',
    error: null
};

export const mediaSlice = createSlice({
    name: 'media',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(mediaApi.endpoints.MediaRecomended.matchFulfilled, (state, action: PayloadAction<Media[]>) => {
                state.status = 'succeeded'; 
                console.log('pay',action.payload)
                state.entities = action.payload;
            })
            .addMatcher(mediaApi.endpoints.MediaRecomended.matchRejected, (state, { error }) => {
                state.status = 'failed';
                state.error = error.message;
            })
            .addMatcher(mediaApi.endpoints.MediaAll.matchFulfilled, (state, action: PayloadAction<Media[]>) => {
                state.status = 'succeeded';
                state.entities = action.payload;
            })
            .addMatcher(mediaApi.endpoints.MediaAll.matchRejected, (state, { error }) => {
                state.status = 'failed';
                state.error = error.message;
            })
            .addMatcher(mediaApi.endpoints.MediaDetails.matchFulfilled, (state, action: PayloadAction<MediaDetail>) => {
                state.status = 'succeeded';
                state.details = action.payload;
            })
            .addMatcher(mediaApi.endpoints.MediaDetails.matchRejected, (state, { error }) => {
                state.status = 'failed';
                state.error = error.message;
            });
    }
});

