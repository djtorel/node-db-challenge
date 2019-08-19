const router = require('express').Router();

const {
  getResources,
  addResource,
} = require('../../data/models/resourcesModel');

router.get('/', async (req, res) => {
  const resources = await getResources();
  res.status(200).json(resources);
});

router.post('/', async (req, res) => {
  try {
    const resourceData = req.body;
    const newResource = await addResource(resourceData);

    res.status(201).json(newResource);
  } catch (err) {
    res.status(500).json({ message: 'Could not add resource' });
  }
});

module.exports = router;
