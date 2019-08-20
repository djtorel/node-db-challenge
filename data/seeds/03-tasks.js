exports.seed = function(knex) {
  return knex('tasks').insert([
    {
      description: 'task description',
      notes: 'the task notes',
      completed: false,
      project_id: 1,
    },
    {
      description: 'Prepare death ray',
      notes: 'Prepare death ray for world domination, muahahaha',
      completed: false,
      project_id: 2,
    },
    {
      description: 'Demand surrender',
      notes: 'Demand world leaders surrender, muahahaha',
      completed: false,
      project_id: 2,
    },
    {
      description: 'Create React App',
      notes: 'Run Create React App to start Todo App',
      completed: false,
      project_id: 3,
    },
    {
      description: 'Create Interface',
      notes: 'Use React to create interface for React App',
      completed: false,
      project_id: 3,
    },
    {
      description: 'Create Redux Store',
      notes: 'Use Redux to store app state',
      completed: false,
      project_id: 3,
    },
    {
      description: 'Push to GitHub',
      notes: 'Push to GitHub and merge with master',
      completed: false,
      project_id: 3,
    },
    {
      description: 'another task description',
      notes: 'the task notes',
      completed: false,
      project_id: 1,
    },
  ]);
};
