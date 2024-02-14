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
        console.log(allChats.current);
        let node = document.createElement('p');
        let textNode = document.createTextNode(data);
        node.appendChild(textNode);
        allChats.current.appendChild(node);
        setMessageValue("");
        // alert(data);
      })
      // console.log('asas');
    }, [socket])
  
    
  
  
    const sendMessage = ()=>{
      console.log("message value: " , messageValue);
      socket.emit('message', messageValue);
    }
  
    return (
      <div>
        <ul ref={allChats}></ul>
        <input placeholder='message...' value={messageValue} onChange={(e)=>{setMessageValue(e.target.value)}}></input>
        <button onClick={sendMessage}>Send</button>
      </div>
    )
}

export default ChatRoom
