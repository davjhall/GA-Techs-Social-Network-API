const { Thoughts } = require('../models');

const thoughtsController = {
  
  getUsers(req, res) {   // Get all Users
    Thoughts.find()
      .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
      
},
}
module.exports = thoughtsController;