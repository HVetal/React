import logo from './logo.svg';
import './App.css';
import { Message } from './components/Message';
import { Counter } from './components/Counter';
import { useEffect, useState } from 'react';
// import { Form } from './components/Form';
import { AUTHORS } from './components/utils/constants';
import { MessageList } from './components/MessageList';
// import { Box } from '@mui/material';
import { FormMui } from './components/FormMui';


const chats = [{ name: 'Chat 1', id: '1'}, { name: 'Chat 2', id: '2'}, { name: 'Chat 3', id: '3'}];

function App() {
  const [messageList, setMessageList] = useState([]);


  const handleAddMessage = (text) => {
    sendMessage(text, AUTHORS.ME);
    }

  const sendMessage = (text, author) => {
    const newMsg = {
      text,
      author,
      id: `msg-${Date.now()}`,
    };
    setMessageList((prevMessageList) => [...prevMessageList, newMsg]);
  }

  useEffect(() => {
    let timeout;
    if (messageList[messageList.length - 1]?.author === AUTHORS.ME) {
        timeout = setTimeout(() => {
          sendMessage('i am bot', AUTHORS.BOT);
        }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    }
  }, [messageList]);

  return ( 
    <div className = "App" >

      <div className = "App-content" >
        <MessageList messages={messageList} />
      </div> 
        {/* <Counter /> */}
        <FormMui onSubmit={handleAddMessage} />
    </div>
  );
}

export default App;