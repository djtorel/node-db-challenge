const db = require('../dbConfig');

const getResources = () => db('resources');

const getResourcesByProjectId = project_id =>
  db('projects as p')
    .select('r.id', 'r.name', 'r.description')
    .join('project_resource as pr', 'pr.project_id', 'p.id')
    .join('resources as r', 'r.id', 'pr.resource_id')
    .where({ project_id });

const getResourceById = resource_id =>
  db('resources')
    .where({ id: resource_id })
    .then(([resource]) => resource);

const addResource = resource =>
  db('resources')
    .insert(resource)
    .then(([id]) => getResourceById(id));

module.exports = {
  getResources,
  getResourcesByProjectId,
  getResourceById,
  addResource,
};
