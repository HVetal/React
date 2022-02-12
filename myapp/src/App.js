import logo from './logo.svg';
import './App.css';
import { Message } from './components/Message';
import { Counter } from './components/Counter';
import { useEffect, useState } from 'react';
import { Form } from './components/Form';

function App() {
  const [messageList, setMessageList] = useState([]);
  const handleMessageClick = () => {
    console.log("hello!!!");
  };

  const msgRobot = {"author": "robot", "text": "RobotoText"};

  const handleAddMessage = (msg) => {
    setMessageList((prevMessageList) => [...prevMessageList, msg]);
    // setMessageList([...messageList, text]);
  }

  useEffect(() => {
    if (((messageList.length - 1) >= 0) && (messageList[messageList.length - 1].author !== 'robot')) {
      setTimeout(() => {
        setMessageList((prevMessageList) => [...prevMessageList, msgRobot]);
      }, 1500);
    }
  }, [messageList]);

  return ( 
    <div className = "App" >
      <header className = "App-header" >
        {messageList.map((msg) => <Message msg={msg} onMessageClick={handleMessageClick} />)}
        {/* <Counter /> */}
        <Form onSubmit={handleAddMessage}/>
      </header> 
    </div>
  );
}

export default App;