import React from 'react'
import { GenreWithDescription } from '../model/types'
import { Typography } from '@mui/material'

type Props = {
  genre: GenreWithDescription,
}

const GenreData: React.FC<Props> = (props) => {
  const { id, name } = props.genre
  return (
    <Typography component={'span'}>{name}</Typography>
  )
}

export default GenreData