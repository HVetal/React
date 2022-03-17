// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { getDatabase, ref } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg36eyUttB8p5XXfIg1juyTaQG9nYFUTg",
  authDomain: "gb1702-d6562.firebaseapp.com",
  projectId: "gb1702-d6562",
  storageBucket: "gb1702-d6562.appspot.com",
  messagingSenderId: "1067395621910",
  appId: "1:1067395621910:web:588e5a622f68dec8fb0137"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = (email, pass) => createUserWithEmailAndPassword(auth, email, pass);
export const login = (email, pass) => signInWithEmailAndPassword(auth, email, pass);
export const logout = () => signOut(auth);

export const db = getDatabase(app);
export const profileRef = ref(db, 'profile');
export const getProfileNameRef = (userId) => ref(db, `profile/${userId}/name`);
export const profileShowNameRef = ref(db, 'profile/showName');
export const chatsRef = ref(db, "chats");
export const getChatsRefById = (chatId) => ref(db, `chats/${chatId}`);

export const messagesRef = ref(db, 'messages');
export const getMessageListRefByChatId = (chatId) => ref(db, `messages/${chatId}/messageList`);
export const getMessagesRefByChatId = (chatId) => ref(db, `messages/${chatId}`);
export const getMessageRefById = (chatId, msgId) => ref(db, `messages/${chatId}/messageList/${msgId}`);