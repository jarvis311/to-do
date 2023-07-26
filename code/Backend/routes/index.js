const router = require("express").Router()
const authMiddleware = require("../middleware/auth-middleware")
// const AuthMiddleware = require("../middleware/auth-middleware")


router.use("/auth", require("./auth.routes"))
router.use("/todo",require("./todo.routes"))


module.exports = router
