const router = require('express').Router();

const { getTasks } = require('../../data/models/tasksModel');

router.get('/', async (req, res) => {
  const tasks = await getTasks();
  res.status(200).json(tasks);
});

module.exports = router;
