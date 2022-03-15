import { onValue, set } from "@firebase/database"
import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import { Outlet } from 'react-router-dom';
import './styles.css'
import { FormMui } from '../FormMui';
import { ChatItem } from './ChatItem';
import { selectChats } from '../../store/chats/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from '../../store/chats/actions';
import { chatsRef, getChatsRefById } from '../../services/firebase';

export const ChatList = () => {
    // const chats = useSelector(selectChats);
    const [chats, setChats] = useState([]);
    const dispatch = useDispatch();

    const handleAddChat = (newChatName) => {
        const newId = `chat-${Date.now()}`;
        // dispatch(addChat(newId, newChatName));
        set(getChatsRefById(newId), { id: newId, name: newChatName });
      };

      useEffect(() => {
          const unsubscribe = onValue(chatsRef, (snapshot) => {
              const newChats = [];
              snapshot.forEach((child) => {
                  newChats.push(child.val());
              });

              setChats(newChats);
          });

          return unsubscribe;
      }, []);

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