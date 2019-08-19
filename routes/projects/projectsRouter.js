const router = require('express').Router();

const { getProjects } = require('../../data/models/projectsModel');
const { getTasksByProjectId } = require('../../data/models/tasksModel');

router.get('/', async (req, res) => {
  try {
    const projects = await getProjects();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Cannot get projects' });
  }
});

router.get('/:id/tasks', async (req, res) => {
  try {
    const { id } = req.params;
    const tasks = await getTasksByProjectId(id);

    res.status(200).json(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Could not retrieve tasks for project' });
  }
});

module.exports = router;
