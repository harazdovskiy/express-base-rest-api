const TodoModel = require('../models/todos')

module.exports = async (req, res, next) => {
  try {
    const todoId = req.params.id
    req.data = await TodoModel.deleteOne({ "_id": todoId})
  } catch (e) {
    res.status(500).json(e)
  }
  next()
}