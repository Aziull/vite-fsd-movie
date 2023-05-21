import { MediaId } from '@/entities/media/@x/review';
export type Review = {
    media: MediaId;
    text: string;
    parent: number | null;
};