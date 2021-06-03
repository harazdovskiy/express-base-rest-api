const TodoModel = require('../models/todos')

module.exports = async (req, res, next) => {
  try {
    const todoId = req.params.id
    req.data = await TodoModel.findById(todoId, (err, status) => {
      status.completed = !status.completed
      status.save()
    })
  } catch (e) {
    res.status(500).json(e)
  }
  next()
}