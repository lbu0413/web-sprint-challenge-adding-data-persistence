// build your `Resource` model here
const db = require('../../data/dbConfig')

module.exports = {
    get(){
        return db('resources')
    },
    add(name){
        return db('resources')
        .insert(name)
    }
}