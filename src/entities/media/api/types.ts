import { CategoryDto } from "@/entities/category/api/types"
import { GenreDto } from "@/entities/genre/api/types"

type Role =  {
    id: Id,
    name: string
}

export type MediaDto = {
    id: number,
    title: string,
    poster: Url,
    year: number,
    genres: GenreDto[],
    category: CategoryDto,
    type: {id: number, type: string}
}

export type MediaDetailDto = MediaDto & {
    directors: Role[],
    actors: Role[],
    tagline: string,
    description: string,
    country: string,
    world_premiere: string
    budget: number,
    feed_in_usa: number,
    feed_in_world: number,
    draft: boolean
}

export type MedisDetailsRequestArgs = {
    mediaId: number 
}

export interface SearchParams {
    genre?: string;
    category?: string;
    type_movie?: string;
    title?: string;
  }