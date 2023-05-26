import { Card, CardMedia, CardContent, Typography, Box, CardActionArea, styled } from '@mui/material'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import React from 'react'
import { Media } from '../../model/types';
import { Link } from 'react-router-dom';

const CardActionAreaStyled = styled(CardActionArea)({
  '& .video-perosn-photo': {
    position: 'relative',
    width: '100%',
  },
  '&:hover svg': {
    display: 'block',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '10rem',
    color: '#367e8a',
    opacity: 1,
    transition: 'all 1s ease-in-out',
  },
});

type Props = {
  media: Media
}

const MediaCard: React.FC<Props> = ({ media }) => {

  return (
    <Link to={`/media/${media.id}`}>
      <Card sx={{
        maxWidth: '200px',
        backgroundColor: '#2e818ffc',
        color: 'white',
        flexShrink: 0
      }}>
        <CardActionAreaStyled disableRipple >
          <CardMedia className='video-perosn-photo'
          >
            <PlayArrowRoundedIcon sx={{
              display: 'none',
              opacity: 0,
              transition: 'all 1s ease-in-out'
            }} />
            <img src={media.poster} style={{ aspectRatio: 3 / 4, }} width={'100%'} height={'auto'} alt="Live from space album cover" />
          </CardMedia>
          <CardContent className={'content'}>
            <Typography variant='overline' sx={{ fontSize: '0.75rem' }}>{media.title}</Typography>
            <Box display={'flex'} alignItems={'baseline'} sx={{ fontSize: '0.625rem' }}>
              <Typography component={'span'} variant='caption'>{media.genres[0].name}</Typography>,<Typography component={'span'} variant='caption' sx={{ marginLeft: '4px' }}>{media.year}</Typography>
            </Box>
          </CardContent>
        </CardActionAreaStyled>


      </Card>
    </Link>

  )
}

export default MediaCard