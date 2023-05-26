export { userSlice, setUser, setUserProfile } from './model/slice';
export type { User, UserProfile } from './model/types';
export {
    useCreateUserMutation,
    useGetUserQuery,
    useGetUserProfileQuery,
    useUpdateUserProfileMutation, userApi
} from './api/userApi';
export {default as UserAvatar} from './ui/UserAvatar/UserAvatar'