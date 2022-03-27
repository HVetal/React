import { remove, set, onChildChanged, onValue } from "@firebase/database";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMessageEditRefById, getMessageRefById, getMessagesRefByChatId, messagesRef } from "../../services/firebase";
import { deleteMessage, editMessage } from "../../store/messages/actions";
import { selectMessages } from "../../store/messages/selectors";
import { editMessageWithFirebase } from "../../store/messages/actions";
import { Message } from "../Message";

export const MessageList = ({ messages }) => {
  const { chatId } = useParams();
  const dispatch = useDispatch();
  // const messages = useSelector(selectMessages);


  const handleDelete = (id) => {
    // dispatch(deleteMessage(chatId, id));
    remove(getMessageRefById(chatId, id));
  };

  const handleEdit = (id) => {
    messages.map((message) => {
      if (message.id === id) 
      {const text_edit = message.text;
      console.log('message text_edit', message);
      // dispatch(editMessage(chatId, id, "edited"));

      set(getMessageEditRefById(chatId, id), {...message, text: 'edited'});
    }
    }
    )
}

    return messages.map((message) => (
        <div key={message.id}>
          <Message text={message.text} author={message.author} />
          <button onClick={() => handleDelete(message.id)}>Delete</button>
          <button onClick={() => handleEdit(message.id)}>Edit</button>
        </div>
    
    ));
};
