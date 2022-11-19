// const { Thoughts } = require('../models');

// const thoughtsController = {
  
//   getAllThoughts(req, res) {  
//     Thoughts.find()
//       .then((thoughts) => res.json(thoughts))
//         .catch((err) => res.status(500).json(err));
      
// },

// createThoughts(req, res) {
//   const data = req.body;
//     console.log(data);
//     Thoughts.create(data)
//       .then((thoughts) => res.json(thoughts))
//       .catch((err) => {
//         // console.log(err);
//         return res.status(500).json(err);
//       });
//   }
// }
// module.exports = thoughtsController;