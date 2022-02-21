import { useEffect, useState } from 'react';
import { AUTHORS } from '../utils/constants';
import { MessageList } from '../MessageList';
import { FormMui } from '../FormMui';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { Navigate, useParams } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

export function Chat({ messageList, chats }) {
  const { chatId } = useParams();

  const [messageListState, setMessageList] = useState(messageList);
//   const [chatState, setChatState] = useState(chats);

//   handleDeleteChat = (deleteChatState) => {
//     const newChats = chatState.filter(chat => chat.id !== deleteChatState);
//     setChatState(newChats);
//     const newMessageList = { ...messageListState };
//     delete messageListState[deleteChatState];
//     setMessageList(newMessageList);
//   }

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

  useEffect(() => {
    let timeout;
    if (messageListState[chatId]?.[messageListState[chatId]?.length - 1]?.author === AUTHORS.ME) {
        timeout = setTimeout(() => {
          sendMessage('i am bot', AUTHORS.BOT);
        }, 1000);
    }
    return () => {
      clearTimeout(timeout);
    }
  }, [messageListState]);

  if (!chatId || !messageListState[chatId]) {
    return <Navigate to="/nochat" replace />
  }

  return ( 
    <ThemeProvider theme={theme}>
    <div className = "App" >
      {/* <ChatList /> */}
      <div>
  <div className = "App-content" >
    <MessageList messages={messageListState[chatId]} />
  </div> 
  <FormMui onSubmit={handleAddMessage} />
</div>
    </div>
     </ThemeProvider>
  );
};