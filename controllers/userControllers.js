const { Users } = require('../models');

const usersController = {
  
  getUsers(req, res) {   // Get all Users
    Users.find()
      .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
      
},

createUsers(req, res) {
  const data = req.body;
    console.log(data);
    Users.create(data)
      .then((user) => res.json(user))
      .catch((err) => {
        // console.log(err);
        return res.status(500).json(err);
      });
  }
}

module.exports = usersController;