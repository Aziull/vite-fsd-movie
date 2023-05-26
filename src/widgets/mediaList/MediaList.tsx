import { selectIsAuthorized } from '@/entities/authToken'
import { Media, MediaCard } from '@/entities/media'
import { useAppSelector } from '@/shared/model'
import { Box, CircularProgress } from '@mui/material'
import React from 'react'

type Props = {
    mediaList: Media[],
    isFetching?: boolean,
    filterBy?: string

}

const MediaList: React.FC<Props> = ({mediaList, isFetching}) => {

    const isAuthorized = useAppSelector(selectIsAuthorized)
    if (Boolean(isFetching) && mediaList.length === 0) {
        return <CircularProgress />
    }
    return (
        <Box display={'flex'} gap={5}>
            {mediaList.map(media => (
                <React.Fragment key={media.id}>
                    <MediaCard media={media} />
                </React.Fragment>
            ))}
        </Box>
    )
}

export default MediaList