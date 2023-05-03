const express = require('express');
const app = express();

const cors = require('cors')
app.use(cors())




app.listen(4000, () =>{
    console.log("server running port 4000")
});

