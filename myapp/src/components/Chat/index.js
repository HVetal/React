import { onValue } from "@firebase/database";
import { useEffect, useRef, useState } from 'react';
import { AUTHORS } from '../utils/constants';
import { MessageList } from '../MessageList';
import { FormMui } from '../FormMui';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { Navigate, useParams } from 'react-router-dom';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectMessages } from '../../store/messages/selectors';
import { addMessage, addMessageWithThunk } from '../../store/messages/actions';
import { onChildAdded, onChildRemoved, push, set } from 'firebase/database';
import { getMessageListRefByChatId, getMessageRefById, getMessagesRefByChatId } from '../../services/firebase';

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

export function Chat() {
  const params = useParams();
  const { chatId } = params;

  // const messages = useSelector(selectMessages);
  const [messages, setMessages] = useState([]);
  const dispatch = useDispatch();

  const messagesEnd = useRef();

  const handleAddMessage = (text) => {
    sendMessage(text, AUTHORS.ME);
    }

  const sendMessage = (text, author) => {
    const newMsg = {
      text,
      author,
      id: `msg-${Date.now()}`,
    };
    // dispatch(addMessageWithThunk(chatId, newMsg));
    set(getMessageRefById(chatId, newMsg.id), newMsg);
  };

  useEffect(() => {
    const unsubscribe = onValue(getMessagesRefByChatId(chatId), (snapshot) => {
      if (!snapshot.val()?.empty) {
        setMessages(null);
      }
    });

    return unsubscribe;
  }, [chatId]);

  useEffect(() => {
    const unsubscribe = onChildAdded(getMessageListRefByChatId(chatId), (snapshot) => {
      console.log(snapshot.val());
      setMessages((prevMessages) => [...prevMessages, snapshot.val()]);
    });

    return unsubscribe;
  }, [chatId]);

  useEffect(() => {
    const unsubscribe = onChildRemoved(getMessageListRefByChatId(chatId), (snapshot) => {
      console.log(snapshot.val());
      setMessages((prevMessages) => prevMessages.filter(({ id }) => id !== snapshot.val()?.id));
    });

    return unsubscribe;
  }, [chatId]);

  useEffect(() => {
    messagesEnd.current?.scrollIntoView();
  }, [messages]);

  // if (!chatId || !messages[chatId]) {
    if (!messages) {
    return <Navigate to="/nochat" replace />
  }

  return ( 
    <ThemeProvider theme={theme}>
      <div className = "app" >
        <div className = "content" >
            <MessageList messages={messages} />
        </div> 
        <div className = "content" >
            <FormMui onSubmit={handleAddMessage} />
        </div> 
      </div>
     </ThemeProvider>
  );
};