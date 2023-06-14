import React from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {Group} from "@/entities/groups";
import List from "@mui/material/List";

type Props = {
  groups: Group[],
  setSelected: (group: Group) => void,
  selected?: Group,
}
const Groups: React.FC<Props> = ({groups, setSelected, selected}) => {

  console.log('avarae', groups)

  return (<List>
    {groups.map((group, index) => (
      <ListItem
        key={group.id + index}
        disablePadding
        className={(selected && group.id === selected.id) ? 'selected' : ''}
      >
        <ListItemButton

          onClick={() => {
          console.log('asdqerweq')
          setSelected(group)
        }}>
          <ListItemIcon>
            <img src={'https://www.advancy.com/wp-content/uploads/2017/11/avatar.jpg'} width={'50px'}/>
          </ListItemIcon>
          <ListItemText primary={group.title}/>
        </ListItemButton>
      </ListItem>
    ))}
  </List>)
};

export default Groups;
