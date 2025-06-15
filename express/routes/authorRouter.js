// routes/authorRouter.js
const { Router } = require("express");
const { getAuthor } = require('../controllers/authorController');
const authorRouter = Router();

authorRouter.get("/", (req, res) => res.send("All authors"));

// routes/authorRouter.js

// ... other route handlers
authorRouter.get("/:authorId", {
    getAuthor
    
});


module.exports = authorRouter;