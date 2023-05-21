import { mapCategory } from "@/entities/category/lib/mapCategory";
import { MediaDto } from "../api/types";
import { Media, MediaId } from "../model/types";
import { mapGenre } from "@/entities/genre/lib/mapGenre";

export const mapMedia = (dto: MediaDto): Media => {
    return {
        id: dto.id as MediaId,
        title: dto.title,
        poster: dto.poster,
        year: dto.year,
        genres: dto.genres.map(mapGenre),
        categoty: mapCategory(dto.categoty),
    }
}