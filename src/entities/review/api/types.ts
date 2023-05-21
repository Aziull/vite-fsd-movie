export type ReviewDto = {
    media: number;
    text: string;
    parent: number | null;
};

export type CreateReviewDto = ReviewDto;