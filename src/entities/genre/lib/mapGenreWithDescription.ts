import { GenreDto, GenreWithDescriptionDto } from "../api/types";
import { Genre} from "../model/types";
import { mapGenre } from "./mapGenre";

export const mapGenreWithDescription = (dto: GenreWithDescriptionDto): Genre => {
    return {
        ...mapGenre(dto as GenreDto),
    }
}