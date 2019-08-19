const router = require('express').Router();

const { getResources } = require('../../data/models/resourcesModel');

router.get('/', async (req, res) => {
  const resources = await getResources();
  res.status(200).json(resources);
});

module.exports = router;
