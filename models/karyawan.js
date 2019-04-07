const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const karyawanSchema = new Schema({
    nama: String,
    usia: Number,
    kota: String
});

const Karyawan = mongoose.model('karyawan', karyawanSchema);

module.exports = Karyawan;