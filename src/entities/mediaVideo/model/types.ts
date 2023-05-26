import { MediaId } from "@/entities/media/@x/mediaVideo";


export type MediaVideo = {
    title: string;
    videoFile: string;
};

export type MediaVideos = {
    mediaId: MediaId,
    videos: MediaVideo[]
}