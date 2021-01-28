const express = require("express");


const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    console.log("hiiii")
    res.send("Bonjour Madame");
});

app.get("/languages", (req, res) => {
    console.log(req.query);
    res.send({name: "Erin", age:24});

});

app.get("/food/:id", (req, res) => {
    console.log(req.params);
    res.send("Noodles");
});

// challenge - get 12 to show in terminal // 

app.get("/person/:id", (req, res) => {
    console.log(req.params.id);
    res.send("Hello Person");
});

app.post("/", (req, res) => {
    console.log(req.body);
    res.send({data: req.body});
});

// write one more post route and send it some JSON to the web//
// server from insomnia//

app.post("/mail", (req, res) => {
    console.log(req.body.email);
    res.send({data: req.body});
});




































app.listen(5000, () => {
    console.log("listening on port 5000");
});

