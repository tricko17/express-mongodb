const mongoose = require('mongoose');
const User = require('./models/users');

const url = "mongodb://localhost:27017/toko";

mongoose.connect(url, () => {
    console.log("Terhubung ke MongoDB");
});

// Insert Data
// new User({
//     nama: "Bambang",
//     usia: 20,
//     kota: "Jakarta"
// }).save().then((response) => {
//     console.log("Data Masuk " + response);
// });

// Get All Data
// User.find((err, users) => {
//     console.log(users);
// });

// Get Detail Data
User.find(({nama: "Andi"}),(err, users) => {
    console.log(users);
});