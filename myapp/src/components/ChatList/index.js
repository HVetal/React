import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link, Outlet } from 'react-router-dom';
import './styles.css'
import { Button } from '@mui/material';
import { FormMui } from '../FormMui';
import { ChatItem } from './ChatItem';

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

export const ChatList = ({ chats, onAddChat, onDeleteChat }) => 
<>
<List>
{chats.map((chat) => 
<ChatItem chat={chat} onDeleteChat={onDeleteChat} /> 
)}
</List>
<FormMui onSubmit={onAddChat} />
<Outlet />
</>
