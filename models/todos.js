const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Joigoose = require('joigoose')(mongoose)
const Joi = require('joi')

const todosSchema = Joi.object({
    name: Joi.string().min(2).max(40).required(),
    description: Joi.string().min(2).max(99).required(),
    completed: Joi.boolean().required()
})

const TodoSchema = new Schema(Joigoose.convert(todosSchema))

module.exports = mongoose.model('Todo', TodoSchema)