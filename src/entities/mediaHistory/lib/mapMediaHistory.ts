import { MediaId } from '@/entities/media/@x/mediaHistory';
import { MediaHistoryDto } from "../api/types";
import { MediaHistory } from "../model/types";

export function mapMediaHistory(movieHistoryDto: MediaHistoryDto): MediaHistory {
    return {
        movie: movieHistoryDto.media as MediaId,
    };
}