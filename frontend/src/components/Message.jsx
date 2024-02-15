import React from 'react'

const Message = ({message, messageId}) => {
  return (
    <div className=' w-fit m-2 px-5 py-2 border rounded-lg border-red-500 bg-red-500'>
      <p className='text-xs'>
        {messageId}
      </p>
      <p className='text-lg'>
      {message}

      </p>
      
    </div>
  )
}

export default Message
