import { Category } from "@/entities/category/@x/media"
import { Genre } from "@/entities/genre/@x/media"

type Role =  {
    id: Id,
    name: string
}


export type MediaId = Brand<Id, 'mediaId'>

export type Media = {
    id: MediaId,
    title: string,
    poster: Url,
    year: number,
    genres: Genre[],
    categoty: Category,
}

export type MediaDetail = Media & {
    directors: Role[],
    actors: Role[],
    tagline: string,
    description: string,
    country: string,
    worldPremiere: string
    budget: number,
    feedInUsa: number,
    feedInWorld: number,
    draft: boolean
}