import { MediaId } from "@/entities/media/@x/mediaVideo";
import { MediaVideo } from "../model/types";
import { MediaVideoDto } from "../api/types";

export function mapMovieVideo(dto: MediaVideoDto): MediaVideo {
    return {
        title: dto.title,
        videoFile: dto.video_file,
    };
}