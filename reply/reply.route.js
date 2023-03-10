const express = require("express");
const router = express.Router();
const { controller } = require("./reply.module");
console.log(controller);

router.get("/:board_idx", (req, res, next) => controller.getAll(req, res, next)); // this 가 바뀌기 때문에 //closer 사용 // req,res next가 필요
router.post("/:board_idx", (req, res, next) => controller.postOne(req, res, next));
router.put("/:idx", (req, res, next) => controller.putOne(req, res, next));
router.delete("/:idx", (req, res, next) => controller.deleteOne(req, res, next));

module.exports = router;

