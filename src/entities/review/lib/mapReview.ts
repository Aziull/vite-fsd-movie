import { MediaId } from '@/entities/media/@x/review';
import { ReviewDto } from "../api/types";
import { Review } from "../media/types";

export function mapReview(reviewDto: ReviewDto): Review {
    return {
        media: reviewDto.media as MediaId,
        text: reviewDto.text,
        parent: reviewDto.parent,
    };
}