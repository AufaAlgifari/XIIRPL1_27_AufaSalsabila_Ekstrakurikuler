const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  Ekstrakurikuler: {
    type: String,
    required: [true, "Nama Ekstrakurikuler"],
    unique: false,
  },
  Pembina: {
    type: String,
    required: [true, "Nama Pembina"],
    unique: false,
  },
  Jadwal: {
    type: String,
    required: [true, "Jadwal Ekstrakurikuler"],
    unique: false,
  },
  Anggota: {
    type: Number,
    required: [true, "Jumlah Anggota"],
    unique: false,
  },
  Penghargaan: {
    type: String,
    required: [true, "Penghargaan yang diperoleh"],
    unique: false,
  },
});

module.exports = mongoose.model("Ekstra", UserSchema);
