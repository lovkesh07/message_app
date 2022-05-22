const express = require('express');
const { chats } = require('./data/data');
const dotenv = require('dotenv');

const app = express()
dotenv.config();


app.get('/', (req, res) => {
    res.send("API is running");
});

app.get('/hello', (req, res) => {
    res.send("API is running hello");
});

app.get("/api/chat", (req, res) => {
    res.send(chats);
});

const PORT = process.env.PORT || 5000;
app.listen(5000, console.log(`server started on port ${PORT}`));
