import { UserDto, UserProfileDto } from "../api/types"
import { User, UserProfile } from "../model/types"

export const mapUser = (dto: UserDto): User => ({
    email: dto.email,
    id: dto.id, 
    username: dto.username
})

export const mapUserProfile = (dto: UserProfileDto): UserProfile => ({
    id: dto.id,
    avatar: dto.avatar,
    lastName: dto.last_name,
    firstName: dto.first_name,
    phoneNumber: dto.phone_number,
    birthday: dto.birthday ? new Date(dto.birthday).toString() : null
})