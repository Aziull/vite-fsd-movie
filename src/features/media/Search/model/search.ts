import { mediaApi } from "@/entities/media";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { response } from "express";


export const searchMovies = createAsyncThunk(
    "movies/searchMovies",
     async (searchTerm: string, { dispatch }) => {
        const res = await dispatch(mediaApi.endpoints.MediaAll.initiate())
        .unwrap()
        return res
        // Робимо запит до API
    }
);