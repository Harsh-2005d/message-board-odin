const { loadMessages, saveMessages } = require("../db");

const newMessageAdd=(req,res)=> {
    const message=req.body;

    const messages=loadMessages();
    
    messages.push({text:message.msg,user:message.user,added: new Date()})
    
    saveMessages(messages);
    res.redirect("/");
}


module.exports={newMessageAdd}