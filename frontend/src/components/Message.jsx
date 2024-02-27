import React, { useEffect, useState } from "react";

const Message = ({ props }) => {
  const { message, messageId, socketid, displayName, messageTime } = props;
  const [messageLooks, setMessageLooks] = useState({
    bgColor: "bg-red-300",
    alignment: "mr-auto",
  });
  useEffect(() => {
    if (socketid === messageId.substring(0, 20)) {
      setMessageLooks({ bgColor: "bg-green-500", alignment: "ml-auto" });
    }
  }, []);

  useEffect(() => {
    console.log(messageLooks);
  }, [messageLooks]);

  return (
    <div
      className={`w-fit max-w-md m-2 px-5 py-2 rounded-lg  ${messageLooks.bgColor} ${messageLooks.alignment} max-w-screen-lg`}
    >
      {socketid != messageId.substring(0, 20) && (
        <p className="text-xs my-0 text-blue-800">{displayName}</p>
      )}
      <p className="text-lg myy-0">{message}</p>
      <span className="text-xs mr-0 text-gray-500">{messageTime}</span>
    </div>
  );
};

export default Message;
