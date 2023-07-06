import {ChatEngine} from 'react-chat-engine';
import ChatFeed from "./components/ChatFeed";
import './App.css';



const App = () => {
    return (
        <ChatEngine
        height = "100vh"
        projectID = "8e335f9c-3271-4f9f-aab4-436344d9f00e"
        userName = "monk"
        userSecret = "123123"
        renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}



        />
    );
}

export default App;