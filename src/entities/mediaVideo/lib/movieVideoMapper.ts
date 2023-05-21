import { MediaId } from "@/entities/media/@x/mediaVideo";
import { MediaVideo } from "../model/types";
import { MediaVideoDto } from "../api/types";

export function mapMovieVideo(movieVideoDto: MediaVideoDto): MediaVideo {
    return {
        movieId: movieVideoDto.movie_id as MediaId,
        videoUrl: movieVideoDto.video_url,
    };
}