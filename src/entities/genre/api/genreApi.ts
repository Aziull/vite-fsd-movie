import { baseApi } from "@/shared/api";
import { Genre, GenreWithDescription } from "../model/types";
import { response } from "express";
import { GenreDetailsRequestArgs, GenreDto, GenreWithDescriptionDto } from "./types";
import { mapGenre } from "../lib/mapGenre";
import { mapGenreWithDescription } from "../lib/mapGenreWithDescription";

export const genreApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        allGenres: build.query<Genre[], void>({
            query: () => ({
                url: `api/v1/movies/genre/all/`
            }),
            transformResponse: (response: GenreDto[]) => response.map(mapGenre)
        }),
        genreDescription: build.query<
            GenreWithDescription,
            GenreDetailsRequestArgs
        >({
            query: ({ genreId }) => ({
                url: `api/v1/movies/genre/${genreId}/`,
            }),
            transformResponse: (response: GenreWithDescriptionDto) =>
                mapGenreWithDescription(response),
        })
    })
})

export const { useAllGenresQuery, useGenreDescriptionQuery } = genreApi;