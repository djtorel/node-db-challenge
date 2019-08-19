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

const getTasksByProjectId = project_id =>
  db('tasks as t')
    .select('t.id', 't.description', 't.notes', 't.completed')
    .where({ project_id })
    .map(mapCompleted);

const getTaskById = task_id =>
  db('tasks')
    .where({ id: task_id })
    .map(mapCompleted)
    .then(([task]) => task);

const addTask = (project_id, task) =>
  db('tasks')
    .insert({ ...task, project_id })
    .then(([id]) => getTaskById(id));

module.exports = {
  getTasks,
  getTasksByProjectId,
  getTaskById,
  addTask,
};
