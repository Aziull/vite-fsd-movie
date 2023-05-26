import { createAsyncThunk } from '@reduxjs/toolkit'
import { sessionApi, clearAuthToken } from '@/entities/authToken'
import { wait } from '@/shared/lib'
import { isFetchBaseQueryError } from '@/shared/api'

export const logoutThunk = createAsyncThunk<void, void, { state: RootState }>(
  'authentication/logout',
  async (_: unknown, { dispatch }) => {
    dispatch(clearAuthToken())
    try {
      await dispatch(sessionApi.endpoints.logout.initiate()).unwrap()
    } catch (error) {
      if (isFetchBaseQueryError(error)) {
        if (typeof error.data === 'string') {
          throw new Error(error.data)
        }
      }

      throw new Error('Unknown error')
    }

    // Wait 10ms to invalidateTags in next event loop tick.
    // Otherwise after invalidate related requests with SESSION_TAG
    // will be started, but isAuthorized will still be equal to true
    await wait(10)

    // 👇 ATTENTION: This line clear all baseApi state instead of sessionApi
    // dispatch(sessionApi.util.resetApiState())

    // dispatch(sessionApi.util.invalidateTags([SESSION_TAG]))
    // dispatch(wishlistApi.util.invalidateTags([WISHLIST_TAG]))
  }
)
