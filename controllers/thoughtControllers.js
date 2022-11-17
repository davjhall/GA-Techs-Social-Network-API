const { Thoughts } = require('../models');

const thoughtsData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

const seedThoughts = () => Thoughts.bulkCreate(thoughtsData);

module.exports = seedThoughtds;
