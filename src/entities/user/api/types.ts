
export type UserId = Brand<Id,'UserId'>

export type UserDto = {
    email: string,
    id: UserId,
    username: string
}

export type UserProfileDto = {
    id: UserId,
    avatar: string | null,
    last_name: string | null,
    first_name: string | null,
    phone_number: string | null,
    birthday: string | null
}

export type UserCreateRequest = {
    email: string,
    username: string,
    password: string
}

export type UserProfileUpdateRequest = {
    avatar: string,
    last_name: string,
    first_name: string,
    phone_number: string,
    birthday: string
}