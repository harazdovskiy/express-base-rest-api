const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 3000

const timeMiddleware = require('./middleware')

const users = require('./router/users')
const todos = require('./router/todo')

app.use(bodyParser.json())

app.get('/', 
    (req, res, next) => {
        next('Some fatal error')
    }
)

app.use('/users', users)
app.use('/todos', todos)

app.use(function (err, req, res, next) {
    res.status(400).send(err);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})