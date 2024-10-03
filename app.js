const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

const mongoURI = process.env.MONGODB_URI;

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get('/trending', (req, res)=>{
    res.sendFile(__dirname + "/trending.html");
});

app.get('/most_listened', (req, res)=>{
    res.sendFile(__dirname + "/most_listened.html");
});

app.get('/index', (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get('/home', (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get('/legacy', (req, res)=>{
    res.sendFile(__dirname + "/legacy.html");
});

app.get('/about_us', (req, res)=>{
    res.sendFile(__dirname + "/about_us.html");
});

app.get('/license', (req, res)=>{
    res.sendFile(__dirname + "/license.html");
});

// mongodb connection
mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
