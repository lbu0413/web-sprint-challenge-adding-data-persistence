// build your `/api/tasks` router here

const express = require('express')
const router = express.Router()
const Tasks = require('./model')

router.get('/', (req, res) => {
    Tasks.get()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ err: err.message })
        })
})

router.post('/', (req, res) => {
    const description = req.body
    Tasks.add(description)
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ err: err.message })
        })
})


module.exports = router