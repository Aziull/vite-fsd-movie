import { baseApi } from "@/shared/api";
import { MediaHistoryDto, MediaHistoryRequestArgs } from "./types";
import { MediaHistory } from "../model/types";
import { mapMediaHistory } from "../lib/mapMediaHistory";

export const mediaHistoryApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getMediaHistory: build.query<MediaHistory[], void>({
            query: () => ({
                url: `api/v1/movies/movie/history/`,
            }),
            transformResponse: (response: MediaHistoryDto[]) => response.map(mapMediaHistory),
        }),
        createMediaHistory: build.mutation<MediaHistory, MediaHistoryRequestArgs>({
            query: ({media}) => ({
                url: `api/v1/movies/movie/history/`,
                method: 'POST',
                body: media
            }),
            transformResponse: (response: MediaHistoryDto) => mapMediaHistory(response),
        }),
    })
})

export const { useGetMediaHistoryQuery, useCreateMediaHistoryMutation } = mediaHistoryApi