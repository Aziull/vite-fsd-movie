import { mediaApi } from "@/entities/media";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface SearchParams {
    title?: string;
}

export const searchMediaThunk = createAsyncThunk<void, SearchParams, { state: RootState }>(
    'media/search',
    async (params: SearchParams, { dispatch }) => {
        try {
            const response = await dispatch(mediaApi.endpoints.MediaAll.initiate(params)).unwrap();
            // Handle the response if necessary
        } catch (error) {

            throw new Error('Unknown error');
        }
    }
);