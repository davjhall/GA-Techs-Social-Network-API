const router = require('express').Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser
} = require('../../controllers/userControllers');


router.route('/').get(getUsers).post(createUser); //get all users

router.route('/:userId').get(getSingleUser); //gets a single user

router.route('/:userId').get(getSingleUser).delete(deleteUser); //delets user by id




// router.route('/', (req, res) => {   //not sure if this goes here
//     Users.find({}, (err, result) => {
//         if (err) {
//             res.status(500).send({ message: 'Internal Server Err' });
//         } else {
//             res.status(200).json(result);
//         }
//     });
// });

// // get a single user by its ID
// router.route('/find-users-id', (req, res) => {
//     Users.findOne({ _id: 'users' }, (err, result) => {
//       if (result) {
//         res.status(200).json(result);
//       } else {
//         console.log('Something is wrong');
//         res.status(500).json({ message: 'something went wrong' });
//       }
//     });
//   });
  


// // Creates a new document
// router.post('/new-users/:users', (req, res) => {
//     const newUsers = new Genre({ name: req.params.users });
//     newUsers.save();
//     if (newUsers) {

//       res.status(200).json(newUsers);
//     } else {
      
//       res.status(500).json({ message: 'something is wrong' });
//     }
//   }); 

  module.exports = router;