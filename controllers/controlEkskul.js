const modelsEkstra = require("../models/modelsEkstra");
const User = require("../models/modelsEkstra");

module.exports = {
  index: async (req, res) => {
    try {
      const ekstra = await modelsEkstra.find();
      if (ekstra.length > 0) {
        res.status(200).json({
          status: true,
          data: ekstra,
          method: req.method,
          url: req.url,
        });
      } else {
        res.json({
          status: false,
          massage: "Data Masih Kosong",
        });
      }
    } catch (error) {
      res.status(400).json({ sucess: false });
    }
  },
  store: async (req, res) => {
    try {
      const ekstra = await modelsEkstra.create(req.body);
      res.status(200).json({
        status: true,
        data: ekstra,
        method: req.method,
        url: req.url,
        massage: "Data Berhasil Ditambahkan",
      });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },
  update: async (req, res) => {
    try {
      const ekstra = await modelsEkstra.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      res.json({
        status: true,
        data: ekstra,
        method: req.method,
        url: req.url,
        massage: "Data Berhasil Diubah",
      });
    } catch (error) {
      res.status(400).json({ success: false });
    }
    const id = req.params.id;
  },
  delete: async (req, res) => {
    try {
      await modelsEkstra.findByIdAndDelete(req.params.id);
      res.json({
        status: true,
        method: req.method,
        url: req.url,
        massage: "Data Berhasil Dihapus",
      });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },

  // get user by id
  show: async (req, res) => {
    try {
      const ekstra = await modelsEkstra.findById(req.params.id);
      res.json({
        status: true,
        data: ekstra,
        method: req.method,
        url: req.url,
        massage: "Data Berhasil Didapatkan",
      });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },
};
