import { CategoryWithDescriptionDto } from "../api/types";
import { Category} from "../model/types";
import { mapCategory } from "./mapCategory";

export const mapCategoryWithDescription = (dto: CategoryWithDescriptionDto): Category => {
    return {
        ...mapCategory(dto),
    }
}