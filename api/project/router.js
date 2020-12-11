// build your `/api/projects` router here
const express = require('express')
const router = express.Router()
const Projects = require('./model')

router.get('/', (req, res) => {
    Projects.get()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ err: err.message})
        })
})

router.post('/', (req, res) => {
    const name = req.body
    Projects.add(name)
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            res.status(500).json({ err: err.message })
        })
})

module.exports = router