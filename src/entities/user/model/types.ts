export type User = {
    email: string,
    id: number,
    username: string
}

export type UserProfile = {
    id: number,
    avatar: string | null,
    lastName: string | null,
    firstName: string | null,
    phoneNumber: string | null,
    birthday: null | string
}