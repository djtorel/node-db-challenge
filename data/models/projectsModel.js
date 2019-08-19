const db = require('../dbConfig');

const { getTasksByProjectId } = require('../models/tasksModel');
const { getResourcesByProjectId } = require('../models/resourcesModel');
const mapCompleted = require('../utils/mapCompleted');

const getProjects = () => db('projects').map(mapCompleted);

const getProjectById = async project_id => {
  const [project] = await db('projects as p')
    .where({ id: project_id })
    .map(mapCompleted);

  const tasks = await getTasksByProjectId(project_id);
  const resources = await getResourcesByProjectId(project_id);

  return project ? { ...project, tasks, resources } : null;
};

module.exports = {
  getProjects,
  getProjectById,
};
