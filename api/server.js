// build your server here
const express = require('express')
const server = express()
const projectsRouter = require('./project/router')
const resourcesRouter = require('./resource/router')
const tasksRouter = require('./task/router')

server.get('/', (req, res) => {
    res.send('hi there')
})

server.use(express.json())
server.use('/api/projects', projectsRouter)
server.use('/api/resources', resourcesRouter)
server.use('/api/tasks', tasksRouter)


module.exports = server