exports.seed = function(knex) {
  return knex('projects').insert([
    {
      name: 'project name here',
      description: 'the project description',
      completed: false,
    },
    {
      name: 'Super Secret Project',
      description: 'World Domination',
      completed: false,
    },
    {
      name: 'Todo App',
      description: 'Project for Todo App',
      completed: false,
    },
  ]);
};
