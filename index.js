const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/links", { useNewUrlParser: true, useUnifiedTopology: true }, (error, db) => {
        console.log(error);
        console.log(db);
})




app.get("/", (req, res) => {
        res.send("Hello World!");
})

app.listen(port, () => {
        console.log("Server running on port 3000...")
})