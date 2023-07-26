const { validationResult } = require("express-validator");
const db = require("../../models/index");
const { Op } = require("sequelize");
const Todos = db.Todo;

exports.getAllTodos = async (req, res) => {
  try {
    const response = await Todos.findAll({});
    res.status(200).json({ data: response });
  } catch (error) {
    res.json(error.message);
  }
};

exports.addTodoList = async (req, res) => { 
  const stripHtmlTags = (html) => {
    return html.replace(/<[^>]*>/g, "");
  };
  const { title, desc, dueDate } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Return validation errors if any
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const user = res.user;
    console.log(">>>",user);
    if (title && desc) {
      // const sanitizedTitle = stripHtmlTags(title);
      // const sanitizedDesc = stripHtmlTags(desc);
      const response = await Todos.create({
        title,
        desc,
        dueDate,
        userId: user.id,
      });
      if (response) {
        res.status(200).json(response);
      } else {
        res.json("Something went wrong");
      }
    } else {
      res.status(403).json({ error: "Its null" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.completeTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const findTodo = await Todos.findByPk(id);
    if (findTodo) {
      const response = await Todos.update(
        { complete: !findTodo.dataValues.complete },
        { where: { id: id } }
      );
      res.send(response);
    } else {
      res.send("This Todo is not available!!");
    }
  } catch (error) {}
};
exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const findTodo = await Todos.destroy({
      where: {
        id: id,
      },
    });
    res.json(findTodo);
  } catch (error) {}
};
