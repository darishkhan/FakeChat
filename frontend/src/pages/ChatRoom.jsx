import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import OnlineUsers from "../components/OnlineUsers";
import { useLocation, useNavigate } from "react-router-dom";
import Message from "../components/Message";

const socket = io.connect("");

const ChatRoom = () => {
  const location = useLocation();
  const navigate = useNavigate();
  if(!location.state)
  {
    navigate('/');
  }
  
  const [messageValue, setMessageValue] = useState({});
  const [messages, setMessages] = useState([]);
  const [socketid, setSocketid] = useState("");
  const [onlineUsers, setOnlineUsers] = useState(1);

  const butref = useRef();
  const messageScrollRef = useRef();

  useEffect(() => {
    socket.emit("sendsocketid");
    socket.emit("sendusercount");
    console.log("emittes");
  }, []);

  socket.on("yoursocketid", (id) => {
    setSocketid(id);
  });

  useEffect(() => {
    console.log(socketid);
  }, [socketid]);

  socket.on("roomMessage", (data) => {
    setMessages([...messages, data]);
    setMessageValue("");
  });

  socket.on('userCount', (userCount)=>{
    setOnlineUsers(userCount);
  })

  useEffect(()=>{
    console.log("onlineusers", onlineUsers);
  }, [onlineUsers])

  const handleChange = (e = "#") => {
    if (e === "#") {
      setMessageValue(messageValue);
    } else {
      setMessageValue({
        messageId: socketid + "%$" + messages.length,
        message: e.target.value,
        displayName: location.state.displayName,
      });
    }
  };

  const sendMessage = () => {
    socket.emit("message", messageValue);
  };

  useEffect(() => {
    console.log("messages..", messages);
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    console.log(messageValue);
  }, [messageValue]);

  const checkKey = (e) => {
    if (e.key === "Enter") {
      butref.current.click();
      console.log("sjkd");
    }
  };

  const scrollToBottom = () => {
    messageScrollRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <div className="grid grid-cols-12 min-h-screen  bg-yellow-200 p-5 space-x-1">
        <div className="col-span-4 h-120 border-2 border-black rounded-lg ">
          <OnlineUsers onlineUsers={onlineUsers}></OnlineUsers>
        </div>
        <div className="col-span-8  h-full border-2 border-black bg-green-200 rounded-lg">
          <div className="grid grid-rows-12 p-5 h-full">
            <div className="h-100 row-span-11 border-2 border-black bg-blue-200 mb-2 rounded-lg">
              <ul className="space-y-1  p-2 max-h-full bg-blue-200 overflow-y-scroll no-scrollbar">
                {messages &&
                  messages.map((message) => {
                    return (
                      <div key={message.messageId}>
                        <Message
                          props={{
                            message: message.message,
                            messageId: message.messageId,
                            socketid: socketid,
                            displayName: message.displayName,
                          }}
                        ></Message>
                      </div>
                    );
                  })}
                  <div ref={messageScrollRef} />
              </ul>
            </div>
            <div>
              <div className="grid grid-cols-12 ">
                <div className="col-span-10 pr-2">
                  <input
                    className="w-full  p-2 rounded-xl"
                    placeholder="message..."
                    value={messageValue.message ? messageValue.message : ""}
                    onKeyUp={checkKey}
                    onChange={handleChange}
                  ></input>
                </div>
                <button
                  ref={butref}
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
