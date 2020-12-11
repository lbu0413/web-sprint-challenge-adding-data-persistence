// build your `Task` model here
const db = require('../../data/dbConfig')

module.exports = {
    get(){
        return db('tasks')
    },
    add(description){
        return db('tasks')
        .insert(description)
        .join('projects', 'tasks.projects_id', 'projects.id')
        .where('tasks.projects_id', id)
    }
}