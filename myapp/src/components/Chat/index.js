import { useEffect, useRef } from 'react';
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

  const messages = useSelector(selectMessages);
  const dispatch = useDispatch();

  const messageEnd = useRef();

  const handleAddMessage = (text) => {
    sendMessage(text, AUTHORS.ME);
    }

  const sendMessage = (text, author) => {
    const newMsg = {
      text,
      author,
      id: `msg-${Date.now()}`,
    };
    dispatch(addMessageWithThunk(chatId, newMsg));
  };

  useEffect(() => {
    messageEnd.current?.scrollIntoView();
    // let timeout;
    // if (messages[chatId]?.[messages[chatId]?.length - 1]?.author === AUTHORS.ME) {
    //     timeout = setTimeout(() => {
    //       sendMessage('i am bot', AUTHORS.BOT);
    //     }, 1000);
    // }
    // return () => {
    //   clearTimeout(timeout);
    // }
  }, [messages]);

  if (!chatId || !messages[chatId]) {
    return <Navigate to="/nochat" replace />
  }

  return ( 
    <ThemeProvider theme={theme}>
      <div className = "app" >
        <div className = "content" >
            <MessageList messages={messages[chatId]} />
        </div> 
        <div className = "content" >
            <FormMui onSubmit={handleAddMessage} />
        </div> 
      </div>
     </ThemeProvider>
  );
};