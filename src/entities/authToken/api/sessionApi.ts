import { baseApi } from "@/shared/api"
import { mapAuthToken } from "../lib/mapSession"
import { AuthToken } from "../model/types"
import { CreateAuthTokenDto, AuthTokenDto } from "./types"


export const sessionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<AuthToken, CreateAuthTokenDto>({
      query: (createAuthTokenDto) => ({
        url: `api/v1/auth_token/token/login/`,
        method: 'POST',
        body: createAuthTokenDto
      }),
      transformResponse: (response: AuthTokenDto) => mapAuthToken(response),
    }),
    logout: build.mutation<void, void>({
      query: () => ({
        url: `api/v1/auth_token/token/logout/`,
        method: 'POST',
      }),
    }),
  })
})

export const { useLoginMutation, useLogoutMutation } = sessionApi;
