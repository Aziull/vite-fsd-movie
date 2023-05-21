import { baseApi } from "@/shared/api";
import { mapMovieVideo } from "../lib/movieVideoMapper";
import { MediaVideoDto, MediaVideoRequestArgs } from "./types";
import { MediaVideo } from "../model/types";

export const mediaVideoApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getMovieVideo: build.query<MediaVideo, MediaVideoRequestArgs>({
            query: ({mediaId}) => ({
                url: `api/v1/movies/movie/video/?movie_id=${mediaId}`,
            }),
            transformResponse: (response: MediaVideoDto) => mapMovieVideo(response),
        }),
    })
})

export const { useGetMovieVideoQuery } = mediaVideoApi;