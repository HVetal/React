import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Chat } from "../Chat";
import { ChatList } from "../ChatList";
import { NoChat } from "../Nochat";
import { ProfilePage } from "../Profile";
import './styles.css'

const Home = () => <h2>Home page</h2>;

const chats = [
    { name: 'Chat 1', id: "chat1"}, 
    { name: 'Chat 2', id: "chat2"}, 
    { name: 'Chat 3', id: "chat3" }
];

const messageList = {
    chat1: [],
    chat2: [],
    chat3: [],
};

export const Router = () => {
    let [messageListState, setMessageList] = useState(messageList);
    let [chatState, setDeleteChat] = useState(chats);

    const handleDeleteChat = (idToDelete) => {     
      const newChats = chatState.filter(chat => chat.id !== idToDelete);
      setDeleteChat(newChats);
      chatState = newChats;
      const newMessageList = { ...messageListState };
      delete newMessageList[idToDelete];
      messageListState = newMessageList;
      setMessageList(messageListState);
      
      console.log('idToDelete', idToDelete);
      console.log('chatState', chatState);
      console.log('messageListState', messageListState);
      console.log('newMessageList', newMessageList);
    }

    return (
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
        <Route path="profile" element={<ProfilePage />} />
        <Route path="chats" element={<ChatList deleteChat={handleDeleteChat} chatState={chatState} />}>
            <Route path=":chatId" element={<Chat messageListState={messageListState} />} />
        </Route>
        {/* <Route path="*" element={<h2>Page not found</h2>} /> */}
        <Route path="/nochat" element={<NoChat chatState={chatState} />} />
      </Routes>  
      </div>
    </BrowserRouter>
    );
};
