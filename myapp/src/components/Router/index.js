import { ThemeContext } from "../utils/ThemeContext";
import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Chat } from "../Chat";
import { ChatList } from "../ChatList";
import { NoChat } from "../Nochat";
import { Profile } from "../Profile";
import './styles.css'

const Home = () => <h2>Home page</h2>;

const initialChats = [
    { name: 'Chat 1', id: "chat1"}, 
    { name: 'Chat 2', id: "chat2"}, 
    { name: 'Chat 3', id: "chat3" }
];

const initialMessages = initialChats.reduce((acc,el) => {
  acc[el.id] = [];
  return acc;
}, {});

export const Router = () => {
  const [messageColor, setMessageColor] = useState('blue');

    let [messages, setMessages] = useState(initialMessages);
    let [chatList, setChatList] = useState(initialChats);

    const handleAddMessage = (chatId, newMsg) => {
      setMessages((prevMessageList) => ({ 
        ...prevMessageList,
        [chatId]: [...prevMessageList[chatId], newMsg],
    })    );
    };

    const handleAddChat = (newChatName) => {
      const newId = `chat-${Date.now()}`;

      const newChat = {
        id: newId,
        name: newChatName,
      };

      setChatList((prevChatList) => [...prevChatList, newChat]);
      setMessages((prevMessages) => ({
        ...prevMessages,
        [newId]: [],
      }));
    };

  const handleDeleteChat = (idToDelete) => {
    setChatList((prevChatList) => prevChatList.filter(chat => chat.id !== idToDelete)
    );
    setMessages((prevMessages) => { 
      const newMsgs = { ...prevMessages };
    delete newMsgs[idToDelete];
    return newMsgs;
    });
  }

    return (
      <ThemeContext.Provider value={{messageColor, setMessageColor}}>
    <BrowserRouter>
      <div>
        <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "green" : "grey" })}>home</NavLink>
      </div>
      <div>
        <NavLink to="/profile" style={({ isActive }) => ({ color: isActive ? "green" : "grey" })}>profile</NavLink>
      </div> 
      <div>
        <NavLink to="/chats" style={({ isActive }) => ({ color: isActive ? "green" : "grey" })}>chats</NavLink>
      </div>    
      <div className="router_chatlist">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="chats" element={<ChatList onAddChat={handleAddChat} onDeleteChat={handleDeleteChat} chats={chatList} />}>
            <Route path=":chatId" element={<Chat messages={messages} addMessage={handleAddMessage}/>} />
        </Route>
        {/* <Route path="*" element={<h2>Page not found</h2>} /> */}
        <Route path="/nochat" element={<NoChat chatList={chatList} />} />
      </Routes>  
      </div>
    </BrowserRouter>
    </ThemeContext.Provider>
    );
};
