const express = require("express");
const router = express.Router();

const ekstraController = require("../controllers/controlEkskul");

router.get("/ekskul", ekstraController.index);

router.post("/ekskulPost", ekstraController.store);

router.get("/ekskul/:id", ekstraController.show);

router.put("/ekskul/:id", ekstraController.update);

router.delete("/ekskul/:id", ekstraController.delete);

module.exports = router;
