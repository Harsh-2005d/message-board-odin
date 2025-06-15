// db.js
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "data", "messages.json");

function loadMessages() {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

function saveMessages(messages) {
  fs.writeFileSync(filePath, JSON.stringify(messages, null, 2), "utf-8");
}

module.exports = {
  loadMessages,
  saveMessages
};
