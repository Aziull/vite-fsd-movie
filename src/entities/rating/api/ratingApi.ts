import { baseApi } from "@/shared/api";
import { Rating } from "../model/types";
import { mapRating } from "../lib/mapRating";
import { RatingDto, CreateRatingDto } from "./types";

export const ratingApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getRatings: build.query<Rating[], { mediaId: number }>({
            query: (args) => ({
                url: `api/v1/movies/movie/rating/?movie_id=${args.mediaId}`,
            }),
            transformResponse: (response: RatingDto[]) => response.map(mapRating),
        }),
        createRating: build.mutation<Rating, CreateRatingDto>({
            query: (createRatingDto) => ({
                url: `api/v1/movies/movie/rating/`,
                method: 'POST',
                body: createRatingDto
            }),
            transformResponse: (response: RatingDto) => mapRating(response),
        }),
    })
})

export const {useGetRatingsQuery, useCreateRatingMutation} = ratingApi;