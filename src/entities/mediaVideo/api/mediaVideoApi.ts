import { baseApi } from "@/shared/api";
import { mapMovieVideo } from "../lib/movieVideoMapper";
import { MediaVideoDto, MediaVideoRequestArgs } from "./types";
import { MediaVideo, MediaVideos } from "../model/types";
import { MediaId } from "@/entities/media/model/types";

let newMediaId: number;

export const mediaVideoApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getMovieVideo: build.query<MediaVideos, MediaId>({
            query: (mediaId) => {
                newMediaId = mediaId;
                return {
                    url: `api/v1/movies/movie/video/?movie_id=${mediaId}`,
                }
            },
            //todo: need to remove when id will come from server
            transformResponse: (response: MediaVideoDto[]): MediaVideos => ({mediaId: newMediaId, videos: response.map(mapMovieVideo)}) ,
        }),
    })
})

export const { useGetMovieVideoQuery } = mediaVideoApi;