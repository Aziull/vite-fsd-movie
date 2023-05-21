export type GenreDto = {
    id: number,
    name:string
}

export type GenreWithDescriptionDto = GenreDto & {
    description: string
}

export type GenreDetailsRequestArgs = {
    genreId: number 
}