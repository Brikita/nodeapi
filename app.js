const express = require('express')
const app = express()


app.get("/", (req, res) => {
    res.send("hello wowrd from node js")
});

app.listen(8000)