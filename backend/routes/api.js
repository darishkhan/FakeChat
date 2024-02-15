// const { Router } = require("express");
// const router = Router();
// const fs = require('fs');
// console.log(users);




// const addUser = (newUser)=>{ 
//     var users = [];
//     fs.readFile(require.resolve('../users.txt'), 'utf-8', (err, data)=>{
//         users = data;
//         console.log(users);
//         if(!users.includes(user=>user.id===newUser.id)) 
//         {
//             users.push(newUser);
//             fs.writeFile(require.resolve('../users.txt'), users);
//         }
//     })
// }

// const deleteUser = (id)=>{
//     var users = [];
//     fs.readFile(require.resolve('../users.txt'), 'utf-8', (err, data)=>{
//         users=data;
//         users = users.filter(user=>user.id!=id);
//         fs.writeFile(require.resolve('../users.txt'), users);
//     })
// }

// router.get('/onlineusers', async(req, res)=>{
//     var users=[]
//     fs.readFile(require.resolve('../users.txt'), 'utf-8', (err, data)=>{
//         users=data;
//     })
//     console.log(users);
//     return res.json({users});
// });

// router.post('/newuser', async(req, res)=>{
//     console.log(req.body)
//     addUser({
//         id: req.body.id,
//         displayName: req.body.displayName
//     })
//     // console.log(users);
//     return res.send("OK");
// })

// module.exports = {router:router, addUser:addUser, deleteUser:deleteUser};