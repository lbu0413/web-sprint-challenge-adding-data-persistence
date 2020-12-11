// build your `Project` model here
const db = require('../../data/dbConfig')

module.exports = {
    get(){
        return db('projects')
    },
    
    add(name){
        return db('projects')
        .insert(name)
    }
}