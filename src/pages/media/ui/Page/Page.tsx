import { selectIsAuthorized } from '@/entities/authToken'
import { MediaDetail, useMediaDetailsQuery } from '@/entities/media'
import { MediaId } from '@/entities/media/model/types'
import { useGetMovieVideoQuery } from '@/entities/mediaVideo'
import { useAppSelector } from '@/shared/model'
import { MediaDetails } from '@/widgets/mediaDetail'
import { Container, Typography } from '@mui/material'
import { skipToken } from '@reduxjs/toolkit/dist/query'
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'


const MediaPage: React.FC = () => {
  const isAuthorized = useAppSelector(selectIsAuthorized)

  if (!isAuthorized) {
    return (<>
      <Container>
        <Typography variant='h2'>Ви не авторизовані, <Link to='/login'>авторизуватись</Link></Typography>
      </Container>
    </>)
  }
  const { mediaId } = useParams<{ mediaId: string }>();

  const { data, isFetching } = useMediaDetailsQuery(
    mediaId ? (Number.parseInt(mediaId, 10) as MediaId) : skipToken,
    { skip: !mediaId }
  )

  const isNotFound = !mediaId || (!isFetching && !data)

  if (isNotFound) {
    return (
      <Typography>
        Product not found, go to <Link to="/">домашня сторінка</Link>
      </Typography>
    )
  }
  return (
    <>
      <MediaDetails isFetching={isFetching} media={data} />
    </>
  )
}

export default MediaPage