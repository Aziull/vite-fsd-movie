export type GenreId = Brand<Id, 'GenreId'>

export type Genre = {
    id: GenreId,
    name: string,
}

export type GenreWithDescription = Genre & {
   // description: string,
}