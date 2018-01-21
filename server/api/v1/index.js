"use strict";

const router = require("express").Router();

const postsRoutes = require("./routes/posts");
const usersRoutes = require("./routes/users");

router.use("/posts", postsRoutes);
router.use("/users", usersRoutes);

module.exports = router;
