const express = require ('express');
const bodyParser = require('body-parser')
const app = express();
const data = require('./data.json')

let jwt = require('jsonwebtoken');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send("Selamat datang di Integrasi JWT Tiana");
})

function verifikasi(req, res, next) {
    let getHeader = req.headers["authorization"];
    if (typeof getHeader !== "undefined") {
        req.token = getHeader;
        next();
    } else {
        res.status(403).json({message: "Empty Token"})
        console.log("Empty Token");
    }
}

function generate(username) {
    return jwt.sign(username, "secret")
}

app.post('/register', (req, res) => {
    const user = req.body.username;
    if(user === undefined) {
        res.sendStatus(400).json({ message: "Username is Undefined" })
    } else {
        const token = generate({username: user});
        console.log(user);
        res.json(token);
    }
})

app.get("/data", verifikasi, (req, res) => {
    jwt.verify(req.token, "secret", (err, dataAuth) => {
        if (err) {
            res.status(403).json({"message": "Wrong Token"});
            console.log("Wrong Token");
        } else {
            res.json(data);
        }
    });
});

app.listen(3000, () => {
    console.log("Berjalan di PORT 3000");
})