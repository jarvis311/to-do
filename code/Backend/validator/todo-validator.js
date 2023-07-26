const { body, validationResult } = require('express-validator')

const todoValidatior = [
    // Add validation rules using express-validator functions
    body('title').notEmpty().isString().withMessage('Title is required'),
    body('desc').isString().withMessage('Invalid Description'),
    // body('completed').isBoolean().withMessage('Its vollean value'),
  ]

  module.exports = todoValidatior

  // exports.serachTodos = async (req, res) => {
  //   const { term } = req.query;
  
  //   try {
  //     if (term) {
  //       const response = await Todos.findAll({
  //         where: {
  //           [Op.or]: {
  //             title: {
  //               [Op.like]: `%${term}%`,
  //             },
  //             desc: {
  //               [Op.like]: `%${term}%`,
  //             },
  //           },
  //         },
  //       });
  //       if (response.length === 0) {
  //         return res.json("No Todos fouxnd !!");
  //        }
  //       res.json(response);
       
  //     }
  //   } catch (error) {
  //     res.status(500).json(error.message);
  //   }
  // };
  
  
  
  // filter data Date Wise
// exports.filterTodo = async (req, res) => {
//   const { startDate, endDate } = req.body;
//   try {
//     const response = await Todos.findAll({
//       where: {
//         updatedAt: {
//           [Op.between]: [startDate, endDate],
//         },
//       },
//     });
//     res.json(response);
//   } catch (error) {
//     res.json(error.message);
//   }
// };
