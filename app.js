const express = require('express')
const app = express();
const morgan = require("morgan");

 // bring in routes
 const {getPosts} = require('./routes/post')

 // middleware
 app.use(morgan("dev"))

app.get("/", getPosts);

const port = 8080
app.listen(port, () => {console.log(`The Node API is listening in Server ${port}`)})