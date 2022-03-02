import { ChatList } from "../ChatList";

export const NoChat = ({ chatList }) => (
    <>
      <ChatList chats={chatList} />
      <span>Please select a chat</span>
    </>
   );