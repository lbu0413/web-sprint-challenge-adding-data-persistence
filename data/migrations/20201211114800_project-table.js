
exports.up = function(knex) {
  return knex.schema
  .createTable('tasks', table => {
      table.increments('tasks_id')
      table.text('tasks_descriptions').notNullable()
      table.string('tasks_notes')
      table.boolean('tasks_completed', false).notNullable()
  })
  .createTable('resources', table => {
    table.increments('resources_id')
    table.string('resources_name').notNullable().unique()
    table.text('resources_description')
    table.integer('projects_id')
        .unsigned()
        .notNullable()
        .references('projects_id').inTable('projects')
        .onDelete('RESTRICT').onUpdate('RESTRICT')
})
  .createTable('projects', table => {
    table.increments('projects_id')
    table.string('projects_name', 128).notNullable()
    table.text('projects_description')
    table.boolean('projects_completed', false).notNullable()
    table.integer('tasks_id')
      .unsigned()
      .notNullable()
      .references('tasks_id').inTable('tasks')
      .onDelete('RESTRICT').onUpdate('RESTRICT')
    table.integer('resources_id')
      .unsigned()
      .notNullable()
      .references('resources_id').inTable('resources')
      .onDelete('RESTRICT').onUpdate('RESTRICT')
    
})
};

exports.down = function(knex) {
  
};
