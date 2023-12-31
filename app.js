const express = require('express')
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require("morgan");
const dotenv = require('dotenv');
const expressValidator = require('express-validator')
dotenv.config();

// db
mongoose.connect(
    process.env.MONGO_URI,
    {useNewUrlParser: true}
    )
    .then(() => console.log("DB Connnected"))

mongoose.connection.on("error", err => {
    console.log(`DB connection error: ${err.message}`);
})


 // bring in routes
 const postRoutes = require('./routes/post')

 // middleware
 app.use(morgan("dev"))
 app.use(bodyParser.json())
app.use(expressValidator())
app.use("/", postRoutes);

const port = 8080
app.listen(port, () => {console.log(`The Node API is listening in Server ${port}`)})