import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {useGroupSubscribeQuery, useGroupsAllQuery, useGroupRecommendedQuery} from '@/entities/groups';
import {CircularProgress} from '@mui/material';
import {useAppSelector} from "@/shared/model";
import {selectIsAuthorized} from "@/entities/authToken";
import {useEffect, useState} from "react";
import {Group} from "@/entities/groups/model/types";
import {GroupsList} from "@/features/groups/GetGroups";
import {MediaList} from "@/widgets/mediaList";

const Groups = () => {
  const isAuthorized = useAppSelector(selectIsAuthorized);

  if (!isAuthorized) return (<>
    Не авторизований користувач
  </>)

  let {data: allGroups = [], isFetching: isAllFetching} = useGroupsAllQuery();
  let {data: myGroups = [], isFetching: isMyFetching} = useGroupSubscribeQuery();
  const {data: groupRecommendedMedia = [], isFetching: isGroupRecommendedMediaFetching} = useGroupRecommendedQuery();

  if (!isAllFetching || !isMyFetching || !isGroupRecommendedMediaFetching) <CircularProgress/>

  const [filteredAllGroups, setFilteredAllGroups] = useState<Group[]>([])
  useEffect(() => {
    setFilteredAllGroups(allGroups.filter(group => !myGroups.some(myGroup => myGroup.id === group.id)));
    console.log('ff')
  }, [allGroups, myGroups])

  const drawerWidth = 240;
  console.log('groupRecommendedMedia', groupRecommendedMedia)
  // logic
  const [selectedGroup, setSelectedGroup] = useState<Group>();

  return (
    <Box sx={{display: 'flex', marginTop: '70px'}}>
      <CssBaseline/>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {width: drawerWidth, boxSizing: 'border-box'},
          zIndex: -0
        }}
      >
        <Toolbar/>
        <Box sx={{overflow: 'auto'}}>
          <Typography paddingLeft={2}> Мої групи</Typography>
          <GroupsList groups={myGroups} setSelected={setSelectedGroup} selected={selectedGroup}/>
          <Divider/>
          <Typography paddingLeft={2}> Дослідити </Typography>
          <GroupsList groups={filteredAllGroups} setSelected={setSelectedGroup} selected={selectedGroup}/>
        </Box>
      </Drawer>
      <Box component="main" sx={{flexGrow: 1, p: 3}}>
        <Typography variant={'h4'}>Учасники групи</Typography>
        <Box display={'flex'} gap={3} marginBottom={'20px'}>
          {selectedGroup?.subscribers.map((s,id) => <React.Fragment key={id}>
              <img
                src={'https://www.advancy.com/wp-content/uploads/2017/11/avatar.jpg'}
                width={'80px'}
                style={{
                  borderRadius:'50%',
                  border: '1px solid #eee'
              }} />
            </React.Fragment>
          )}
        </Box>
        <Divider  />
        <Typography marginTop={'20px'} variant={'h4'}>Рекомендований Контент</Typography>
        <MediaList mediaList={groupRecommendedMedia.map(el => el.media)} isFetching={isGroupRecommendedMediaFetching}/>

      </Box>
    </Box>
  )
}

export default Groups
