export type CategoryId = Brand<Id, 'CategoryId'>

export type Category = {
    id: CategoryId,
    name: string,
}

export type CategoryWithDescription = Category & {
   // description: string,
}