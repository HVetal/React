import { ChatList } from "../ChatList";

export const NoChat = ({ chats }) => (
    <>
      <ChatList chats={chats} />
      <span>Please select a chat</span>
    </>
   );