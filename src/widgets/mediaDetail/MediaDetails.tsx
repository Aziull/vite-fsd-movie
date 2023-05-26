import React from 'react'
import './styles.scss';
import { Box, CircularProgress, Container, Grid, Tab, Typography } from '@mui/material';
//import { TabContext, TabList, TabPanel } from '@mui/lab';
import { MediaDetail } from '@/entities/media';
import { DataFormatter } from '@/shared/ui';
import { VideoList } from '../videoList';

type Props = {
  media?: MediaDetail,
  isFetching: boolean,
}

const MediaDetails: React.FC<Props> = ({ media, isFetching }) => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };


  if (isFetching) {
    return (
      <Box display={'flex'} justifyContent={'center'}>
        <CircularProgress />
      </Box>
    )
  }

  if (!media) {
    return null
  }

  return (
    <>
      <Container maxWidth='xl' sx={{padding:'50px 0'}}>
        <Grid container>
          <Grid item md={4}>
            <img src={media.poster} alt={media.tagline} />
          </Grid>
          <Grid item md={8}>
            <Typography variant='h5'>{media.title}</Typography>
            <Typography component={'p'} sx={{border: '1px solid black', padding:4}} >
              {media.description}
            </Typography>
            <Typography component={'span'}><b>Country:</b> {media.country}</Typography>,
            <Typography component={'span'}><b>Year:</b> {media.year}</Typography>,<br />
            <Typography component={'span'}><b>World premiere:</b> <DataFormatter date={media.worldPremiere} /></Typography>

            <Typography><b>Budget:</b> {media.budget}</Typography>
            <Typography><b>Feed in usa:</b> {media.feedInUsa}</Typography>
            <Typography><b>Feed in world:</b> {media.feedInWorld}</Typography>

            {media.genres.map(genre => (<React.Fragment key={genre.id}>
              <Typography component={'span'}> {genre.name} </Typography>
            </React.Fragment>))}

            <br />
            {media.directors.map(genre => (<React.Fragment key={genre.id}>
              <Typography component={'span'}> {genre.name} </Typography>
            </React.Fragment>))}
            <br />
            {media.actors.map(genre => (<React.Fragment key={genre.id}>
              <Typography component={'span'}> {genre.name} </Typography>
            </React.Fragment>))}

          </Grid>
        </Grid>

        <VideoList mediaId={media.id} type={media.type} />
      </Container>
    </>
    // <Box
    //   className='filmScreen'
    //   sx={{
    //     backgroundImage: `url(https://images.alphacoders.com/900/900483.png)`,
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "cover",

    //   }} >
    //   <TabContext value={value}>
    //     <TabPanel sx={{ padding: 0 }} value="1">
    //       1
    //     </TabPanel>
    //     <TabPanel sx={{ padding: 0 }} value="2">
    //       2
    //     </TabPanel>
    //     <TabPanel sx={{ padding: 0 }} value="3">
    //       3
    //     </TabPanel>


    //     <TabList textColor="inherit" indicatorColor="secondary" onChange={handleChange} aria-label="lab API tabs example">
    //       <Tab label="Огляд" value="1" />
    //       <Tab label="Деталі" value="2" />
    //       <Tab label="Рекомендації" value="3" />
    //     </TabList>
    //   </TabContext>
    // </Box>
  )
}

export default MediaDetails