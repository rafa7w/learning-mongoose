const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

// Document Level
const linkSchema = new mongoose.Schema({
        title: {type: String, required:true},
        description: String,
        url: {type: String, required:true},
        click: {type: Number, default:0}
})

// Collection Level
const Link = mongoose.model("Link", linkSchema); 

// Creating document
let link = new Link({
        title: "barcelona",
        description: "Link para insta do Barça",
        url: "https://www.instagram.com/fcbarcelona/",
        click: 0,
});

link.save().then(doc => {
        console.log(doc);
}).catch(error => {
        console.log(error);
})



mongoose.connect("mongodb://localhost/newlinks", { useNewUrlParser: true, useUnifiedTopology: true } );

let db = mongoose.connection;

db.on("error", () => { console.log("Houve um erro.") });
db.once("open", () => { console.log("Banco carregado.") });





app.get("/", (req, res) => {
        res.send("Hello World!");
})

app.listen(port, () => {
        console.log("Server running on port 3000...")
})