exports.seed = function(knex) {
  return knex('resources').insert([
    {
      name: 'Lambda Student',
      description: 'a soon to be hired developer',
    },
    {
      name: 'MacBook Pro #1',
      description: 'an overly expensive laptop computer',
    },
    {
      name: 'Death Ray',
      description: 'A ray gun that causes death',
    },
    {
      name: 'Secret Base of Doom',
      description: 'A super secret base for world domination',
    },
  ]);
};
