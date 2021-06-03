const TodoModel = require('../models/todos')

module.exports = async (req, res, next) => {
  try {
    const todoId = req.params.id
    const presentId = await TodoModel.findById(todoId).exec()
    if(!presentId) res.send('Indicated todo doesn`t exist in your list')
  } catch (e) {
    res.status(500).json(e)
  }
  next()
}