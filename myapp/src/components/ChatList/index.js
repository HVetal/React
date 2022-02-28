import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link, Outlet } from 'react-router-dom';
import './styles.css'
import { Button } from '@mui/material';
import { FormMui } from '../FormMui';
import { ChatItem } from './ChatItem';

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
