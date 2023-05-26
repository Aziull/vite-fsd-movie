import { VideoPlayer } from '@/shared/ui'
import { NewMovies } from '@/widgets/newMovies'
import { NewSeries } from '@/widgets/newSeries'
import RecomendedMediaList from '@/widgets/recomendedMedia/ui/RecomendedMediaList'
import { Container } from '@mui/material'
import React from 'react'

const HomePage = () => {
  return (
    <Container maxWidth='xl'>
        <RecomendedMediaList /><br></br>
        <NewSeries/><br></br>
        <NewMovies/>
    </Container>
  )
}

export default HomePage