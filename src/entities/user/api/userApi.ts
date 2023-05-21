import { baseApi } from "@/shared/api";
import { mapUser, mapUserProfile } from "../lib/mapUser";
import { User, UserProfile } from "../model/types";
import { UserCreateRequest, UserDto, UserProfileDto, UserProfileUpdateRequest } from "./types";

export const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createUser: build.mutation<User, UserCreateRequest>({
            query: (user) => ({
                url: `api/v1/auth/users/`,
                method: 'POST',
                body: user
            }),
            transformResponse: (response: UserDto) => mapUser(response),
        }),
        getUser: build.query<User, void>({
            query: () => ({
                url: `api/v1/auth/users/me/`
            }),
            transformResponse: (response: UserDto) => mapUser(response),
        }),
        getUserProfile: build.query<UserProfile, void>({
            query: () => ({
                url: `api/v1/movies/user/profile/`
            }),
            transformResponse: (response: UserProfileDto) => mapUserProfile(response),
        }),
        updateUserProfile: build.mutation<UserProfile, UserProfileUpdateRequest>({
            query: (profile) => ({
                url: `api/v1/movies/user/profile/`,
                method: 'POST',
                body: profile
            }),
            transformResponse: (response: UserProfileDto) => mapUserProfile(response),
        }),
    })
})


export const { useCreateUserMutation, useGetUserQuery, useGetUserProfileQuery, useUpdateUserProfileMutation  } = userApi
