import { MediaId } from "@/entities/media/@x/rating";

export type Rating = {
    media: MediaId;
    star: number;
};