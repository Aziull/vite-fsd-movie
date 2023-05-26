import { useMediaRecomendedQuery } from '@/entities/media'
import { MediaList } from '@/widgets/mediaList'
import { Box, Typography } from '@mui/material'
import React from 'react'

const RecomendedMediaList: React.FC = () => {
    const { data = [], isFetching } = useMediaRecomendedQuery()

    if (!data.length) {
        return null
    }
    return (
        <Box>
            <Typography variant='h5'>Зараз популярно</Typography>
            <MediaList mediaList={data} isFetching={isFetching} />
        </Box>
    )
}

export default RecomendedMediaList;