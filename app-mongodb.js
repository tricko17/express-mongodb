const express = require('express');
const app = express();
const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

const url = "mongodb://localhost:27017";
const dbName = "toko";

MongoClient.connect(url, (err, client) => {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    client.db(dbName);
});

app.get('/data', (req, res) => {
    MongoClient.connect(url, (err, client) => {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        const collection = db.collection('karyawan');
        collection.find({}).toArray((err, docs) => {
            console.log("Berikut Data yang Tersimpan");
            console.log(docs);
            res.send(docs)
        });
    });
});

app.post('/data', (req, res) => {
    MongoClient.connect(url, (err, client) => {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        let data = {nama: req.body.nama, usia: req.body.usia};
        let collection = db.collection("karyawan");
        collection.insert(data, (err, result) => {
            console.log(result);
            res.send(result)
        });
    });
});

app.listen(3210, () => {
    console.log("Server Aktif Di Port 3210");
});
