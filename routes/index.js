const router = require('express').Router();

const projectsRouter = require('./projects/projectsRouter');
const resourcesRouter = require('./resources/resourcesRouter');
const tasksRouter = require('./tasks/tasksRouter');

router.use('/projects', projectsRouter);
router.use('/resources', resourcesRouter);
router.use('/tasks', tasksRouter);

module.exports = router;
