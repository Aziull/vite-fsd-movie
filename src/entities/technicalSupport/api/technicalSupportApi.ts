import { baseApi } from '@/shared/api';
import { CreateTechnicalSupportDto } from './types';

export const technicalSupportApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createTechnicalSupport: build.mutation<void, CreateTechnicalSupportDto>({
            query: (createTechnicalSupportDto) => ({
                url: `api/v1/movies/technicalsupport/`,
                method: 'POST',
                body: createTechnicalSupportDto
            }),
        }),
    })
})

export const { useCreateTechnicalSupportMutation } = technicalSupportApi