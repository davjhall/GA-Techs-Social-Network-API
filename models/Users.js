
const {Schema, model} = require('mongoose');
const thoughtsSchema = require('./Thoughts')



const usersSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            // how to match a valid email address
            required: 'Email address is required',
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        thoughts: [thoughtsSchema],
            
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Users'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }

);

usersSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const Users = model('Users', usersSchema);

module.exports = Users;