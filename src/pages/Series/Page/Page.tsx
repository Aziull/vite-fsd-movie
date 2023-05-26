import { useMediaRecomendedQuery } from '@/entities/media'
import { MediaList } from '@/widgets/mediaList'
import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const SeriesPage = () => {
    const { data = [], isFetching } = useMediaRecomendedQuery()

    if (!data.length) {
        return null
    }

    const dataToSend = data.filter(el => el.type.type === 'series')
    return (
        <Container maxWidth='xl'>
            <Box>
                <Typography variant='h3'>Серіали</Typography>
                <MediaList mediaList={dataToSend} isFetching={isFetching} />
            </Box>
        </Container>

    )
}

export default SeriesPage