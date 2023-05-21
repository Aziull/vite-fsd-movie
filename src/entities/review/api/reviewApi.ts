import { baseApi } from "@/shared/api";
import { mapReview } from "../lib/mapReview";
import { Review } from "../media/types";
import { ReviewDto, CreateReviewDto } from "./types";

export const reviewApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getReviews: build.query<Review[], { mediaId: number }>({
            query: (args) => ({
                url: `api/v1/movies/movie/review/?movie_id=${args.mediaId}`,
            }),
            transformResponse: (response: ReviewDto[]) => response.map(mapReview),
        }),
        createReview: build.mutation<Review, CreateReviewDto>({
            query: (createReviewDto) => ({
                url: `api/v1/movies/movie/review/`,
                method: 'POST',
                body: createReviewDto
            }),
            transformResponse: (response: ReviewDto) => mapReview(response),
        }),
    })
})

export const { useGetReviewsQuery, useCreateReviewMutation} = reviewApi; 