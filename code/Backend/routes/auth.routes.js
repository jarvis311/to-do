const router = require("express").Router()
// const AuthMiddleware = require("../middleware/")
const AuthController = require("../controllers/admin/auth-controller")


router.post("/signup",AuthController.signUpUser)
router.post("/signin",AuthController.userLogin)


module.exports = router
