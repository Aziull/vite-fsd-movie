import React from 'react'
import { CategoryWithDescription } from '../model/types'
import { Typography } from '@mui/material'

type Props = {
  category: CategoryWithDescription,
}

const CategoryData: React.FC<Props> = (props) => {
  const { id, name } = props.category
  return (
    <Typography component={'span'}>{name}</Typography>
  )
}

export default CategoryData