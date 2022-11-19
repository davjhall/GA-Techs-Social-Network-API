
// const {Schema, model} = require('mongoose');
// // // const formatDate = require('../utils/formatDate');
// // // // const reactionSchema = require('./Reactions');


// const thoughtsSchema = new Schema(
//     {
//         thoughtText: {
//             type: String,
//             minLength: 1,
//             maxLength: 280,
//             required: true,
//         },
//         createdAt: {
//             type: Date,
//             default: Date.now,
//             // get: date => formatDate(date)
//         },
//         username: {
//             type: String,
//             required: true,
//         },
        
//     },
//     {
//         toJSON: {
//             virtuals: true
//         }
//     });

//     const reactionSchema = new Schema(
//         {
//             reactionId: {
//                 type: Schema.Types.ObjectId,
//                 default: () => new Types.ObjectId
//             },
//             reactionBody: {
//                 type: String,
//                 required: true,
//                 maxLength: 280
//             },
//             username: {
//                 type: String,
//                 required: true,
//             },
//             createdAt: {
//                 type: Date,
//                 default: Date.now,
//                 // get: date => formatDate(date)
//             }
//         },
//         {
//             toJSON: {
//                 virtuals: true
//             },
//             // id: false
//         }
    
//     );


// thoughtsSchema.virtual('reactionCount').get(function () {
//     return this.reactions.length;
// });

// const Thoughts = model('Thoughts', thoughtsSchema);

// module.exports = Thoughts;