import { useMediaRecomendedQuery } from '@/entities/media'
import { MediaList } from '@/widgets/mediaList'
import { Box, Typography } from '@mui/material'
import React from 'react'

const RecomendedMediaList: React.FC = () => {
    const { data = [], isFetching } = useMediaRecomendedQuery()

    if (!data.length) {
        return null
    }

    const dataToSend = data.filter(el => el.type.type === 'series')
    return (
        <Box>
            <Typography variant='h5'>Серіали</Typography>
            <MediaList mediaList={dataToSend} isFetching={isFetching} />
        </Box>
    )
}

export default RecomendedMediaList;