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
        .select('projects.name', 'projects.description','tasks.id', 'tasks.description')
        .where('tasks.projects_id', id)
    }
}