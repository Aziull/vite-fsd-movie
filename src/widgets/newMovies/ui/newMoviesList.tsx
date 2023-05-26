import { useMediaRecomendedQuery } from '@/entities/media'
import { MediaList } from '@/widgets/mediaList'
import { Box, Typography } from '@mui/material'
import React from 'react'

const NewMoviesList: React.FC = () => {
    const { data = [], isFetching } = useMediaRecomendedQuery()

    if (!data.length) {
        return null
    }

    const dataToSend = data.filter(el => el.type.type === 'movie').reverse()

    return (
        <Box>
            <Typography variant='h5'> Фільми </Typography>
            <MediaList mediaList={dataToSend} isFetching={isFetching} />
        </Box>
    )
}

export default NewMoviesList;
