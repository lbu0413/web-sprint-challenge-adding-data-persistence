// build your `/api/resources` router here
const express = require('express')
const router = express.Router()
const Resources = require('./model')

router.get('/', (req, res) => {
    Resources.get()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ err: err.message })
        })
})

router.post('/', (req, res) => {
    const name = req.body
    Resources.add(name)
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ err: err.message })
        })
})

module.exports = router