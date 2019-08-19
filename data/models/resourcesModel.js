const db = require('../dbConfig');

const getResources = async () => db('resources');

module.exports = {
  getResources,
};
