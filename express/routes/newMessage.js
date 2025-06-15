const { Router } = require("express");
const { newMessageAdd } = require("../controllers/newcontroller");
const newMessage = Router();


newMessage.get("/",(req,res)=>{
    res.render("new");
})
newMessage.post("/",newMessageAdd);

module.exports=newMessage