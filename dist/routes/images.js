"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const images_controller_1 = require("../controllers/images.controller");
const router = (0, express_1.Router)();
router.route("/:id")
    .get(images_controller_1.loadImage);
exports.default = router;
