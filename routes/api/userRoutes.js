const router = require('express').Router();

const {
  getAllUsers,
  getSingleUser,
  updateUser,
  createUser,
  deleteUser
} = require('../../controllers/userControllers');


router.route('/').get(getAllUsers).post(createUser); //get all users and create user

router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser); //gets a single user, updates user and deletes user

  module.exports = router;