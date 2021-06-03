const TodoModel = require('../models/todos')

module.exports = async (req, res, next) => {
  try{
    const todos = await TodoModel.find({})
    if(todos.length === 0) res.send('No actual todos now. Let`s plan something!')
  } catch(e){
    res.status(500).json(e)
  }
  next()
}