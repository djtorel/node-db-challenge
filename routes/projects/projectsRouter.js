const router = require('express').Router();

const {
  getProjects,
  getProjectById,
  addProject,
} = require('../../data/models/projectsModel');
const { getTasksByProjectId } = require('../../data/models/tasksModel');
const { getResourcesByProjectId } = require('../../data/models/resourcesModel');

router.get('/', async (req, res) => {
  try {
    const projects = await getProjects();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Cannot get projects' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const project = await getProjectById(id);

    res.status(200).json(project);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Could not get project' });
  }
});

router.get('/:id/tasks', async (req, res) => {
  try {
    const { id } = req.params;
    const tasks = await getTasksByProjectId(id);

    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Could not retrieve tasks for project' });
  }
});

router.get('/:id/resources', async (req, res) => {
  try {
    const { id } = req.params;
    const resources = await getResourcesByProjectId(id);

    res.status(200).json(resources);
  } catch (err) {
    res.status(500).json({ message: 'Could not get resources for project' });
  }
});

router.post('/', async (req, res) => {
  try {
    const projectData = req.body;
    const newProject = await addProject(projectData);

    res.status(201).json(newProject);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Could not add project' });
  }
});

module.exports = router;
