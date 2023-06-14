import {baseApi} from "@/shared/api";
import {Group, GroupRecommendedMedia,} from "../model/types";
import {GroupDto, GroupRecommendedMediaDto,} from "./types";
import {mapGroup, mapGroupRecommendation} from "../lib/mapGroup";

export const groupsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    GroupsAll: build.query<Group[], void>({
      query: () => ({
        url: `api/v1/movies/groups/`
      }),
      transformResponse: (response: GroupDto[]) => response.map(mapGroup),
    }),
    GroupSubscribe: build.query<Group[], void>({
      query: () => ({
        url: `api/v1/movies/groups/subscribe/`
      }),
      transformResponse: (response: GroupDto[]) => response.map(mapGroup),
    }),
    GroupRecommended: build.query<GroupRecommendedMedia[], void>({
      query: () => ({
        url: `api/v1/movies/groups/recomend/movie/`
      }),
      transformResponse: (response: GroupRecommendedMediaDto[]) => response.map(mapGroupRecommendation),
    }),
    GroupCreate: build.mutation<Group, Partial<Group>>({
      query: (newGroup) => ({
        url: `api/v1/movies/groups/`,
        method: 'POST',
        body: newGroup,
      }),
      transformResponse: (response: GroupDto) => mapGroup(response),
    }),
  })
})

export const {
  useGroupsAllQuery,
  useGroupSubscribeQuery,
  useGroupRecommendedQuery,
  useGroupCreateMutation,
} = groupsApi
