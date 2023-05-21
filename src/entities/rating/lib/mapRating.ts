import { MediaId } from '@/entities/media/@x/rating';
import { Rating } from "../model/types";
import { RatingDto } from "../api/types";

export function mapRating(ratingDto: RatingDto): Rating {
    return {
        media: ratingDto.media as MediaId,
        star: ratingDto.star,
    };
}