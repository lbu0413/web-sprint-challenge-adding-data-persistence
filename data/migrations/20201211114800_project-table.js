
exports.up = function(knex) {
  return knex.schema
  .createTable('tasks', table => {
      table.increments('id')
      table.text('description').notNullable()
      table.string('notes')
      table.boolean('completed', false)
      .notNullable()
      .defaultTo(false)
      table.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id').inTable('projects')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT')
  })
  .createTable('resources', table => {
    table.increments('id')
    table.string('name').notNullable().unique()
    table.text('description')
    // table.integer('projects_id')
    //     .unsigned()
    //     .notNullable()
    //     .references('id').inTable('projects')
    //     .onDelete('RESTRICT').onUpdate('RESTRICT')
})
  .createTable('projects', table => {
    table.increments('id')
    table.string('name').notNullable()
    table.text('description')
    table.boolean('completed', false)
         .notNullable()
         .defaultTo(false)
    // table.integer('tasks_id')
    //   .unsigned()
    //   .notNullable()
    //   .references('id').inTable('tasks')
    //   .onDelete('RESTRICT')
    //   .onUpdate('RESTRICT')
    // table.integer('resources_id')
    //   .unsigned()
    //   .notNullable()
    //   .references('id').inTable('resources')
    //   .onDelete('RESTRICT')
    //   .onUpdate('RESTRICT')
    
})
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
};
