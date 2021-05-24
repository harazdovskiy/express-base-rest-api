const express = require('express')
const router = express.Router();
const userList = require('../fake-db')
const timeMiddleware = require('../middleware')

router.get('/',
    timeMiddleware,
    (req, res) => {
    res.json({
        requestTime: req.myGeneratedTime,
        data: userList
    })
})

router.post('/', (req, res, next) => {
    const user = req.body;
    userList.push(user);
    res.status(200);
    res.end();
})

router.delete('/:id', (req, res, next) => {
    const userId = req.params.id;
    const userIndex = userList.findIndex(user => user._id === userId);
    userList.splice(userIndex, 1);
    res.status(200);
    res.end();
})

module.exports = router;