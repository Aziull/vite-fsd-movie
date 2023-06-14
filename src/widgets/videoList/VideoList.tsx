import {MediaId} from '@/entities/media'
import {MediaVideo, useGetMovieVideoQuery} from '@/entities/mediaVideo'
import {Box, Button, Typography} from '@mui/material'
import React, {useEffect, useState} from 'react'
import cn from 'classnames'
import './index.scss'

type Props = {
  mediaId: MediaId,
  type: { id: number, type: string }
}

const VideoList: React.FC<Props> = ({mediaId, type}) => {
  const [selectedVideo, setSelectedVideo] = useState<number>(0)
  const {data, isFetching} = useGetMovieVideoQuery(mediaId as MediaId)

  if (isFetching) return null;
  if (!data?.videos.length) return null;

  const handleEpisodeChange = (index: number) => {
    setSelectedVideo(index)
  }


  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
      <video width={'1200px'} src={data?.videos[selectedVideo].videoFile} controls/>

      <Box >
        {type.type === 'series' && data?.videos.map((_, index) => (
          <Button
            className={cn({
              selected: index === selectedVideo,
            })}
            onClick={() => handleEpisodeChange(Number(index))} key={index}>{index + 1}</Button>
        ))
        }
      </Box>

    </Box>
  )
}

export default VideoList
