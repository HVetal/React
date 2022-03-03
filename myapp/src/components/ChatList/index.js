import React from 'react';
import List from '@mui/material/List';
import { Outlet } from 'react-router-dom';
import './styles.css'
import { FormMui } from '../FormMui';
import { ChatItem } from './ChatItem';
import { selectChats } from '../../store/chats/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from '../../store/chats/actions';

export const ChatList = () => {
    const chats = useSelector(selectChats);
    const dispatch = useDispatch();

    const handleAddChat = (newChatName) => {
        const newId = `chat-${Date.now()}`;
        dispatch(addChat(newId, newChatName));
      };

   return (
        <>
        <List>
            {chats.map((chat) => 
                <ChatItem key={chat.id} chat={chat} /> 
            )}
        </List>
        <FormMui onSubmit={handleAddChat} />
        <Outlet />
        </>
    )
};