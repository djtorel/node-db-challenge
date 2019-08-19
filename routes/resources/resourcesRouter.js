const router = require('express').Router();

router.get('/', async (req, res) => {
  res.status(200).json({ message: 'resourcesRouter working' });
});

module.exports = router;
