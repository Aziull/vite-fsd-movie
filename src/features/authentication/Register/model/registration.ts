import { userApi } from "@/entities/user"
import { isFetchBaseQueryError } from "@/shared/api"
import { createAsyncThunk } from "@reduxjs/toolkit"

type Params = {
    email: Email
    username: Username
    password: string
}

export const registrantionThunk = createAsyncThunk<void, Params, {state: RootState}>(
    'authentication/registration',
    async (body: Params, {dispatch}) => {
        try{
            await dispatch(userApi.endpoints.createUser.initiate(body)).unwrap()
        } catch (error) { 
            if (isFetchBaseQueryError(error)) {
                if (typeof error.data === 'string') {
                  throw new Error(error.data)
                }
              }
              throw new Error('Unknown error')
        }
    }
)