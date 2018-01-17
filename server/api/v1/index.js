"use strict";

const router = require("express").Router();

const postsRoutes = require("./routes/posts");

router.use("/posts", postsRoutes);

module.exports = router;
