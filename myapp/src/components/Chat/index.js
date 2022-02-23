import { useEffect, useState } from 'react';
import { AUTHORS } from '../utils/constants';
import { MessageList } from '../MessageList';
import { FormMui } from '../FormMui';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { Navigate, useParams } from 'react-router-dom';
import './styles.css'
import { ChatList } from '../ChatList';

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

export function Chat({ messageListState, chats }) {
  const { chatId } = useParams();

  const [stateMessageList, setMessageList] = useState(messageListState);

  const handleAddMessage = (text) => {
    sendMessage(text, AUTHORS.ME);
    }

  const sendMessage = (text, author) => {
    const newMsg = {
      text,
      author,
      id: `msg-${Date.now()}`,
    };
    setMessageList((prevMessageList) => ({ 
        ...prevMessageList,
        [chatId]: [...prevMessageList[chatId], newMsg],
    })
    );
    
  };

  useEffect(() => {
    let timeout;
    if (stateMessageList[chatId]?.[stateMessageList[chatId]?.length - 1]?.author === AUTHORS.ME) {
        timeout = setTimeout(() => {
          sendMessage('i am bot', AUTHORS.BOT);
        }, 1000);
    }
    return () => {
      clearTimeout(timeout);
    }
  }, [stateMessageList]);

  if (!chatId || !stateMessageList[chatId]) {
    return <Navigate to="/nochat" replace />
  }

  return ( 
    <ThemeProvider theme={theme}>
      <div className = "app" >
        {/* <ChatList /> */}

        <div className = "content" >
            <MessageList messages={stateMessageList[chatId]} />
        </div> 
        <div className = "content" >
            <FormMui onSubmit={handleAddMessage} />
        </div> 
      </div>
     </ThemeProvider>
  );
};