const express = require('express');
const { chats } = require('./data/data');
const app = express()



app.get('/', (req, res) => {
    res.send("API is running");
});

app.get('/hello', (req, res) => {
    res.send("API is running here hello");
});

app.get("/api/chat", (req, res) => {
    res.send(chats);
});

app.listen(5000, console.log("server started on port 5000"));
