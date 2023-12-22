const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const server = express();
const PORT = 8080;

dotenv.config({path:'.env'})
const connectDB = require('./database/connection');
connectDB();

server.get('/', (req, res) => {
    res.status(200).json({ status: 'success' });
});

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

