import { useEffect, useRef, useState } from 'react';
import { AUTHORS } from '../utils/constants';
import { MessageList } from '../MessageList';
import { FormMui } from '../FormMui';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { Navigate, useParams } from 'react-router-dom';
import { Button } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

export function Chat() {
  const { chatId } = useParams();
  const [messageList, setMessageList] = useState({
      chat1: [],
      chat2: [],
      chat3: [],
  });
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
    setMessageList((prevMessageList) => ({ 
        ...prevMessageList,
        [chatId]: [...prevMessageList[chatId], newMsg],
    }));
  };

  const chat4 = [];

  const addChat = () => {
          messageList = messageList + chat4;
  }

  console.log(messageList);

  useEffect(() => {
    let timeout;
    if (messageList[chatId]?.[messageList[chatId]?.length - 1]?.author === AUTHORS.ME) {
        timeout = setTimeout(() => {
          sendMessage('i am bot', AUTHORS.BOT);
        }, 1000);
    }
    return () => {
      clearTimeout(timeout);
    }
  }, [messageList]);

  if (!chatId || !messageList[chatId]) {
    return <Navigate to="/nochat" replace />
  }

  return ( 
    <ThemeProvider theme={theme}>
    <div className = "App" >
      {/* <ChatList /> */}
      <div>
  <div className = "App-content" >
    <MessageList messages={messageList[chatId]} />
  </div> 
  <FormMui onSubmit={handleAddMessage} />
</div>
    </div>
    <Button onClick={addChat}>Add chat</Button>
     </ThemeProvider>
  );
};