module.exports = result => ({
  ...result,
  completed: result.completed === 1 ? true : false,
});
