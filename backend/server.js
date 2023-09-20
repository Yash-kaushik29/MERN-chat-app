const express = require('express');
const dotenv = require('dotenv');
const chats = require('./data/data');
const connectDB = require('./config/db');
const colors = require('colors');

dotenv.config();
connectDB();
const app = express();

app.get('/', (req, res) => {
    res.send("Server running");
});

app.get('/api/chat', (req, res) => {
    res.send(chats);
});

app.get('/api/chat/:id', (req, res) => {
    const id = req.params.id;

    const chat = chats.find((c) => c._id === id);
    res.send(chat);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, 
    console.log("Server started on port 5000".yellow.bold)
);

