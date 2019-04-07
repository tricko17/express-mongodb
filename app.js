const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/users');
const url = "mongodb://localhost:27017/toko";

mongoose.connect(url, () => {
    console.log("Terhubung ke MongoDB");
});

app.use(cors());
app.use(bodyParser.json());

app.get('/users', (req, res) => {
    User.find((err, users) => {
        res.send(users);
    })
});

app.get('/users/:nama', (req, res) => {
    User.find({nama: req.params.nama},(err, users) => {
        res.send(users);
    })
});

app.post('/users', (req, res) => {
    new User(
        req.body
    )
    .save()
    .then((response) => {
        console.log("Data Masuk " + response);
        res.send({
            "message": "success",
            "result": response
        });
    })
    .catch(() => {
        res.send({
            "message":"error",
            "result": []
        });
    });
});

app.listen(3210, () => {
    console.log("Server Aktif Di Port 3210");
});
