const db = require('../dbConfig');

const { getTasksByProjectId } = require('../models/tasksModel');
const { getResourcesByProjectId } = require('../models/resourcesModel');
const mapCompleted = require('../utils/mapCompleted');

const getProjects = () => db('projects').map(mapCompleted);

const getProjectById = async project_id => {
  const [project] = await db('projects')
    .where({ id: project_id })
    .map(mapCompleted);

  const tasks = await getTasksByProjectId(project_id);
  const resources = await getResourcesByProjectId(project_id);

  return project ? { ...project, tasks, resources } : null;
};

const addProject = project =>
  db('projects')
    .insert(project)
    .then(([id]) => getProjectById(id));

module.exports = {
  getProjects,
  getProjectById,
  addProject,
};
