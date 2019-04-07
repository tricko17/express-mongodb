const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
const assert = require('assert');
const dbName = "toko";

MongoClient.connect(url, (err, client) => {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    // Input Data
    // inputData(db, () => {
    //   client.close();
    // });
    // Get Data
    findData(db, () => {
        client.close();
    });
});

const inputData = (db, callback) => {
    const collection = db.collection("karyawan");
    collection.insertMany(
        [
            {nama: "Bambang", usia: 20, kota: "Bandung"},
            {nama: "Candra", usia: 20, kota: "Bandung"},
            {nama: "Dedi", usia: 20, kota: "Bandung"},
        ],
        (err, result) => {
            if (err) throw err;
            console.log("Data Tersimpan");
            callback(result);
        }
    )
}

const findData = (db, callback) => {
    const collection = db.collection('karyawan');
    collection.find({}).toArray((err, docs) => {
        console.log("Berikut Data yang Tersimpan");
        console.log(docs);
        callback(docs);
    });
}