import { baseApi } from "@/shared/api";
import { Category, CategoryWithDescription } from "../model/types";
import { response } from "express";
import { CategoryDetailsRequestArgs, CategoryDto, CategoryWithDescriptionDto } from "./types";
import { mapCategory } from "../lib/mapCategory";
import { mapCategoryWithDescription } from "../lib/mapCategoryWithDescription";

export const categoryApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        allCategories: build.query<Category[], void>({
            query: () => ({
                url: `api/v1/movies/category/all/`
            }),
            transformResponse: (response: CategoryDto[]) => response.map(mapCategory)
        }),
        categoryDescription: build.query<
            CategoryWithDescription,
            CategoryDetailsRequestArgs
        >({
            query: ({ categoryId }) => ({
                url: `api/v1/movies/category/${categoryId}/`,
            }),
            transformResponse: (response: CategoryWithDescriptionDto) =>
                mapCategoryWithDescription(response),
        })
    })
})

export const { useAllCategoriesQuery, useCategoryDescriptionQuery } = categoryApi;