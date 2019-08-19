const router = require('express').Router();

const { getProjects } = require('../../data/models/projectsModel');

router.get('/', async (req, res) => {
  try {
    const projects = await getProjects();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Cannot get projects' });
  }
});

module.exports = router;
