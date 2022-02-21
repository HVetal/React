import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link, Outlet } from 'react-router-dom';
import './styles.css'
import { Button } from '@mui/material';

// const chats = [
//   { name: 'Chat 1', id: "chat1"}, 
//   { name: 'Chat 2', id: "chat2"}, 
//   { name: 'Chat 3', id: "chat3" }];

  // const handleDeleteChat = (idToDelete) => {
  //   const newChats = chats.filter(chat => chat.id !== idToDelete);
  //   setChat(newChats);
  //   const newMessageList = { ...messageList };
  //   delete messageList[idToDelete];
  //   setMessageList(newMessageList);
  // }

  // const deleteChat = (id) => {
  //   return id;
  // };

export const ChatList = ({ chats, deleteChat }  ) => 
<>
<List>
{chats.map((chat) => ( 
  <ListItem key={chat.id}><Link to={`/chats/${chat.id}`}>{chat.name}</Link>
  <Button className="delete_btn" onClick={() => deleteChat(chat.id)}>X</Button>
  </ListItem>
))}
</List>
<Outlet />
</>
