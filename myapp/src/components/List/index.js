import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


export const ListChat = ({ chats_list }) => 
<List>
{chats_list.map((chat) => ( 
  <ListItem key={chat.id}>
    <ListItemText
      primary={chat.name} 
    />
  </ListItem>
))}
</List>



