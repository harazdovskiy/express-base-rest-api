const express = require('express')
const router = express.Router()

const getTodos = require('../controllers/getTodos')
const postTodo = require('../controllers/postTodo')
const removeTodo = require('../controllers/deleteTodo')
const toggleCompleted = require('../controllers/statusToggler')

const notFoundErr = require('../middleware/notFoundErr')
const emptyListErr = require('../middleware/emptyListErr')

router.get('/',
  emptyListErr,
  getTodos,
    (req, res) => {
        res.send(req.data)
})

router.post('/',
  postTodo,
    (req, res) => {
        res.send(req.data)
})

router.delete('/:id',
  emptyListErr,
  notFoundErr,
  removeTodo,
  (req, res) => {
    res.send(req.data)
})

router.put('/:id',
  emptyListErr,
  notFoundErr,
  toggleCompleted,
  (req, res) => {
    res.send(req.data)
})

module.exports = router