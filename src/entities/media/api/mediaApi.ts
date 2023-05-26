import { baseApi } from "@/shared/api";
import { Media, MediaDetail, MediaId } from "../model/types";
import { response } from "express";
import { MediaDetailDto, MediaDto, MedisDetailsRequestArgs } from "./types";
import { mapMedia } from "../lib/mapMedia";
import { mapMediaDetail } from "../lib/mapMediaDetail";

export const mediaApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        MediaRecomended: build.query<Media[], void>({
            query: () => ({
                url: `api/v1/movies/movie/recommend/`
            }),
            transformResponse: (response: MediaDto[]) => response.map(mapMedia),
        }),
        MediaAll: build.query<Media[], void>({
            query: () => ({
                url: `api/v1/movies/movie/all/`
            }),
            transformResponse: (response: MediaDto[]) => response.map(mapMedia),
        }),
        MediaDetails: build.query<MediaDetail, MediaId>({
            query: (mediaId) => ({
                url: `api/v1/movies/movie/${mediaId}/`
            }),
            transformResponse: (response: MediaDetailDto) => mapMediaDetail(response),
        }),

    })
})

export const { 
    useMediaRecomendedQuery,
    useMediaAllQuery,
    useMediaDetailsQuery
  } = mediaApi