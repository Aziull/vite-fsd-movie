import { selectIsAuthorized } from '@/entities/authToken';
import { useGetUserProfileQuery } from '@/entities/user'
import { ChangeUserProfile } from '@/features/user';
import { useAppSelector } from '@/shared/model';
import { CircularProgress, Container, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const ProfilePage = () => {

  const { data, isFetching } = useGetUserProfileQuery();
  const isAuthorized = useAppSelector(selectIsAuthorized)

  if (!isAuthorized) {
    return (<>
      <Container >
        <Typography variant='h2'>Ви не авторизовані, <Link to='/login'>авторизуватись</Link></Typography>
      </Container>
    </>)
  }

  if (isFetching) return <CircularProgress />

  if (!data) return <div>not registered</div>
  return (
    <div>
      <ChangeUserProfile userProfile={data} />
    </div>
  )
}

export default ProfilePage