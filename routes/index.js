const router = require('express').Router();

const projectsRouter = require('./projects/projectsRouter');
const resourcesRouter = require('./resources/resourcesRouter');

router.use('/projects', projectsRouter);
router.use('/resources', resourcesRouter);

module.exports = router;
