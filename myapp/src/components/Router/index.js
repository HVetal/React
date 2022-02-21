import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Chat } from "../Chat";
import { ChatList } from "../ChatList";
import { NoChat } from "../Nochat";
import { ProfilePage } from "../Profile";

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

// const [messageListState, setMessageList] = useState(messageList);
// const [chatState, setChatState] = useState(chats);

// const handleDeleteChat = (idToDelete) => {
//     const newChats = chatState.filter(chat => chat.id !== idToDelete);
//     setChatState(newChats);
//     const newMessageList = { ...messageList };
//     delete messageList[idToDelete];
//     setMessageList(newMessageList);
//   }

export const Router = () => {
    const [deleteChatState, setDeleteChat] = useState();
    console.log(deleteChatState);
    console.log(setDeleteChat);
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
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="chats" element={<ChatList chats={chats} onClick={deleteChatState} />}>
            <Route path=":chatId" element={<Chat messageList={messageList} />} />
        </Route>
        {/* <Route path="*" element={<h2>Page not found</h2>} /> */}
        <Route path="/nochat" element={<NoChat chats={chats} />} />
      </Routes>  
    </BrowserRouter>
    );
};
