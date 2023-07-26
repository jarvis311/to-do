const router = require("express").Router()
const TodoController = require("../controllers/admin/todo-controller")
const AuthMiddleware = require("../middleware/auth-middleware")


router.get("/",AuthMiddleware,TodoController.getAllTodos)
router.post("/",AuthMiddleware,TodoController.addTodoList)
router.put("/:id",TodoController.completeTodo)
router.delete("/:id",TodoController.deleteTodo)


module.exports = router
