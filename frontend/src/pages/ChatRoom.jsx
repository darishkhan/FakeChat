import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import OnlineUsers from "../components/OnlineUsers";
import { useLocation } from "react-router-dom";
import Message from "../components/Message";

const socket = io.connect("http://localhost:5000");

const ChatRoom = () => {
  const [messageValue, setMessageValue] = useState({});
  const [messages, setMessages] = useState([]);
  const [socketid, setSocketid] = useState("");
  const location = useLocation();

  socket.on("connect", () => {
    setSocketid(socket.id);
  });

  // useEffect(() => {
    // console.log("socket change  ", socket, messages);
    socket.on("roomMessage", (data) => {

      // console.log("```````````````",messages, data);
      // let updatedMessages = [...messages];
      // console.log(messages===updatedMessages, messages, updatedMessages);
      // updatedMessages.push(data);
      // let updatedMessages = messages.concat(data);
      setMessages([...messages, data]);

      setMessageValue("");
      // console.log("message", data);
    });
  // }, [socket]);

  const handleChange = (e='#') => {
    if(e==='#'){
      setMessageValue(messageValue);
    }
    else{
      setMessageValue({
        messageId: socketid + '%$' + messages.length,
        message: e.target.value,
      });
    }
  };

  const sendMessage = () => {
    socket.emit("message", messageValue);
  };

  useEffect(() => {
    console.log("messages..", messages);
    // handleChange();
  }, [messages]);

  useEffect(() => {
    console.log(messageValue);
  }, [messageValue]);

  return (
    <>
      <div className="grid grid-cols-12 min-h-screen  bg-yellow-200 p-5 space-x-1">
        <div className="col-span-4 h-120 border-2 border-black rounded-lg ">
          <OnlineUsers></OnlineUsers>
        </div>
        <div className="col-span-8  h-full border-2 border-black rounded-lg">
          <div className="grid grid-rows-12 p-5 h-full">
            <div className="h-100 row-span-11 border-2 border-black mb-2">
              <ul className="space-y-1   max-h-full overflow-y-scroll no-scrollbar">
                {messages && messages.map((message) => {
                  {console.log('renderd', message)};
                  // return <p key={message.messageId}>{message.message}</p>;
                  return <div key={message.messageId} ><Message message={message.message} messageId={message.messageId}></Message></div>
                })}
              </ul>
            </div>
            <div>
              <div className="grid grid-cols-12 ">
                <div className="col-span-10 pr-2">
                  <input
                    className="w-full p-2 rounded-xl"
                    placeholder="message..."
                    value={messageValue.message ? messageValue.message : ""}
                    onChange={handleChange}
                  ></input>
                </div>
                <button
                  className="col-span-2 bg-blue-500 text-white font-semibold py-2 rounded-lg"
                  onClick={sendMessage}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatRoom;
