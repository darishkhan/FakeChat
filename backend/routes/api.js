const { Router } = require("express");
const router = Router();

var users = [];

console.log("...........",users);

router.get('/onlineusers', (req, res)=>{
    console.log(users);
    return res.json(users);
});

const updateUsers = (newUser)=>{
    // users.push(newUser);
}

module.exports = {router:router, updateUsers:updateUsers};