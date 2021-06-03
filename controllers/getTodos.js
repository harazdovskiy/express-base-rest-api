const TodoModel = require('../models/todos')

module.exports = async (req, res, next) => {
  try{
    req.data = await TodoModel.find({})
  } catch(e){
    res.status(500).json(e)
  }
  next()
}