// import axios from "axios";
// import React, { useEffect, useState } from "react";

const OnlineUsers = () => {
  //     const [onlineUsers, setOnlineUsers] = useState([]);

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
           <h1 className='my-5 mx-5 font-bold text-xl text-white'>Users Online</h1>
           <ul className='space-y-1 text-white'>

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
