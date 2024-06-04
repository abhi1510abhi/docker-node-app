const express = require("express");
const mainController = require("../controllers/main_controller");

let router = express.Router();

// using callback
router.get("/", (req, res) => {
    console.log("hello from docker app");
    return res.json({data : "hello from docker app"})
})


router.get("/health-check", mainController.healthCheck);
router.post("/get-app-config", mainController.getAppConfig);
module.exports = router
