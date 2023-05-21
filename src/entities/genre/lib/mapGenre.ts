import { GenreDto } from "../api/types";
import { Genre, GenreId } from "../model/types";

export const mapGenre = (dto: GenreDto): Genre => {
    return {
        id: dto.id as GenreId,
        name: dto.name,
    }
}