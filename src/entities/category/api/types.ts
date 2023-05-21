export type CategoryDto = {
    id: number,
    name:string
}

export type CategoryWithDescriptionDto = CategoryDto & {
    description: string
}

export type CategoryDetailsRequestArgs = {
    categoryId: number 
}