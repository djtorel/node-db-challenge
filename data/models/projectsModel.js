const db = require('../dbConfig');

const mapCompleted = require('../utils/mapCompleted');

const getProjects = async () => db('projects').map(mapCompleted);

module.exports = {
  getProjects,
};
