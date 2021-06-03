const express = require('express')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/TodoApp_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
const app = express()
app.use(express.json())
const todos = require('./router/todos')
app.use('/todos', todos)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})