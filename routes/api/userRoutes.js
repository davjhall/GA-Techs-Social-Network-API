const router = require('express').Router();

const {
  getUsers,
  getSingleUser,
  updateUser,
  createUsers,
  deleteUser
} = require('../../controllers/userControllers.js');

console.log("we are here");
router.route('/').post(createUsers).get(getUsers); //get all users and create user
// router.route('/').post()
// router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser); //gets a single user, updates user and deletes user

  module.exports = router;