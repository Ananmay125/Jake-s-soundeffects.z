const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get('/legacy', (req, res)=>{
    res.sendFile(__dirname + "/legacy.html");
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
