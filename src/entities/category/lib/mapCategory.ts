import { CategoryDto } from "../api/types";
import { Category, CategoryId } from "../model/types";

export const mapCategory = (dto: CategoryDto): Category => {
    return {
        id: dto.id as CategoryId,
        name: dto.name,
    }
}