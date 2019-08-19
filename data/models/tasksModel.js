const db = require('../dbConfig');

const mapCompleted = require('../utils/mapCompleted');

const getTasks = async () =>
  db('tasks as t')
    .select(
      'p.id as project_id',
      'p.name as project_name',
      'p.description as project_description',
      't.description as task_description',
      't.notes',
      't.completed'
    )
    .join('projects as p', 'p.id', 't.project_id')
    .orderBy('p.id', 'asc')
    .map(mapCompleted);

getTasksByProjectId = project_id =>
  db('tasks as t')
    .select('t.description', 't.notes', 't.completed')
    .where({ project_id })
    .map(mapCompleted);

module.exports = {
  getTasks,
  getTasksByProjectId,
};
