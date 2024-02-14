import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';


const socket = io.connect('http://localhost:5000');


const ChatRoom = () => {
    const [messageValue, setMessageValue] = useState("");
  
    const allChats = useRef();
  
    
    useEffect(()=>{
      console.log("socket change  ");
      socket.on('roomMessage', (data)=>{
        console.log("message", data);
        let node = document.createElement('p');
        let textNode = document.createTextNode(data);
        node.appendChild(textNode);
        allChats.current.appendChild(node);
        setMessageValue("");
      })
    }, [socket])


    const handleChange = (e)=>{
        setMessageValue(e.target.value);
    };

    useEffect(()=>{
        console.log(messageValue);
    }, [])
  
    const sendMessage = ()=>{
      socket.emit('message', messageValue);
    }
  
    return (
      <div>
        <ul ref={allChats}></ul>
        <input placeholder='message...' value={messageValue} onChange={handleChange}></input>
        <button onClick={sendMessage}>Send</button>
      </div>
    )
}

export default ChatRoom
