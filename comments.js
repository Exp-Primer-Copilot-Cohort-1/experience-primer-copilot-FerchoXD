//create server web 
const express = require("express");
const router = express.Router();
const { getComments, createComment, deleteComment } = require("../controllers/comments");
const { protect } = require("../middleware/auth");

//router.get("/", getComments);
router.post("/", protect, createComment);
router.delete("/:id", protect, deleteComment);

module.exports = router;