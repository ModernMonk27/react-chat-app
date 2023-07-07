import React from 'react';
import  MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
import MessageForm from './MessageForm';
const ChatFeed = (props) => {

    const { chats, activeChats, userName, messages } = props;

    const chat = chats && chats[activeChats];

    const RenderMessages = () => {
        const keys = Object.keys(messages)

        return keys.map((keys, index ) => {

            const message = messages[keys];

            const lastmessage = index === 0 ? null : keys[index - 1];
            const ismymessage = userName === message.sender.username;

            return (
                <div key ={`img_${index}`} style={ { width : '100%'} }>
                    <div className="message-block">
                        {
                            ismymessage
                            ? <MyMessage message ={message}/>
                            : <TheirMessage message ={message} lastMessage = {message[lastmessage]} />
                        }

                    </div>
                    <div className="read-receipts" style={ { marginRight : ismymessage ? '80px' : '0px', marginLeft : ismymessage ? '0px' : '68px'}}>
                        read recepts

                    </div>
                </div>
            )


        })

    }
    if(!chat) return "loading..."

    return(
        <div>
            <div className="chat-feed">
                <div className="chat-title">
                    {chat.title}

                </div>
                <div className="chat-subtitle">
                    {chat.people.map((person) => ` ${person.person.userName}`)}

                </div>
                {RenderMessages()}
                <div style={ {height : '100px'} } />
                <div className="message-form-container">
                    <MessageForm {...props} chatId = {activeChats} />
                </div>

            </div>

        </div>
    );
}

export default ChatFeed;