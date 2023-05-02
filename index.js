const express = require('express');

const app = express();

app.get("/", (req, res) =>{
    res.json({name : "asadullah"})
});

app.listen(4000, () =>{
    console.log("server running port 500")
});

