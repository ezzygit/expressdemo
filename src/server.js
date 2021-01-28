const express = require("express");
const fs = require("fs");


const app = express();

app.use(express.json());

//set up middleware function // 

const myFunction = (req, res, next) => {
    console.log("hello");
    req.query.random = "framboise";
    next();
};

app.get("/", myFunction, (req, res) => {
    console.log("running controller");
    console.log(req.query);
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


// create post route to /task
// send json data
// save that task to a .txt file called tasks.txt
// finish controller by sending back a string 'success'

app.post("/task", (req, res) => {
    fs.writeFileSync('tasks.txt', req.body.task);
    res.send("success");
});




































app.listen(5000, () => {
    console.log("listening on port 5000");
});

