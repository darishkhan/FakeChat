// import axios from "axios";
import React, { useEffect, useState } from "react";

const OnlineUsers = ({onlineUsers}) => {
      // const [onlineUsers, setOnlineUsers] = useState(1);

      // socket.on('userCount', (userCount)=>{
      //   console.log('userCount', userCount);
      //   setOnlineUsers(userCount);
      // })

      // useEffect(()=>{
      //   console.log("socket changed")
      // }, [socket]);

  //     const fetchUsers = async()=>{
  //         const response = await axios.get('http://localhost:5000/api/v1/onlineusers');
  //         setOnlineUsers(response.data.users);
  //     };

  //     useEffect(()=>{
  //         setInterval(()=>{
  //             fetchUsers();
  //         }, 5000)
  //     }, [])

    return (
      <div className="h-full bg-blue-500 rounded-lg overflow-y-scroll no-scrollbar px-2">
           <h1 className='my-5 mx-5 font-bold text-xl bg-green-200 rounded-lg p-2 text-center'>Users Online ({onlineUsers})</h1>
           <ul className='space-y-1 text-white'>
            <div>
            <img className="w-full" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXI0ZDhnMjR1aXVjazJka2ppem1hOThlaDVweG84Y3BxM3JwbDRncCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/MfnJATkfrAIBG/giphy.gif" width="480" height="480"  allowFullScreen></img>
            </div>

           {/* {onlineUsers && onlineUsers.map((onlineUser)=>{ 
               return <li key={onlineUser.displayName}>
                   <div className='h-10 p-2 border border-white rounded-xl'>{onlineUser.displayName}</div>
                </li>
           })} */}
          </ul> 
      </div>
      );
};

export default OnlineUsers;
