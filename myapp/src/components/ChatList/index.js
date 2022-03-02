import React from 'react';
import List from '@mui/material/List';
import { Outlet } from 'react-router-dom';
import './styles.css'
import { FormMui } from '../FormMui';
import { ChatItem } from './ChatItem';

export const ChatList = ({ chats, onAddChat, onDeleteChat }) => 
<>
<List>
{chats.map((chat) => 
<ChatItem key={chat.id} chat={chat} onDeleteChat={onDeleteChat} /> 
)}
</List>
<FormMui onSubmit={onAddChat} />
<Outlet />
</>
