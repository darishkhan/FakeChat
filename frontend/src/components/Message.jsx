import React, { useEffect, useState } from 'react'


const Message = ({props}) => {
  const {message, messageId, socketid, displayName}  = props;
  const [messageLooks, setMessageLooks] = useState({
    bgColor:"bg-red-300",
    alignment: "mr-auto"
  });
  useEffect(()=>{
    if(socketid===messageId.substring(0, 20)) 
    {
      setMessageLooks({bgColor: "bg-green-500", alignment:"ml-auto"})
    }
  }, []);

useEffect(()=>{
  console.log(messageLooks);
}, [messageLooks]);

  return (
    <div className={`w-fit m-2 px-5 py-2 rounded-lg  ${messageLooks.bgColor} ${messageLooks.alignment} max-w-screen-lg`}>
      {socketid != messageId.substring(0, 20) && <p className='text-xs'>
        {displayName}
      </p>}
      <p className='text-lg'>
      {message}
      </p>
      
    </div>
  )
}

export default Message
