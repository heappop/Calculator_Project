const express = require('express');
const mongoose= require("./db/conn");
const port= process.env.PORT || 8000;
const route = require("./routes/route.js");

const app = express();
app.use(express.json());

app.use('/', route);


app.listen(port,()=>{

    console.log(`connection is setup at ${port}`);
}) 