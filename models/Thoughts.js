const mongoose = require('mongoose');
const formatDate = require('../utils/formatDate');
const reactionSchema = require('./Reactions');


const thoughtsSchema = new mongoose.Schema(
    {
        thoughtText: {
            type: String,
            minLength: 1,
            maxLength: 280,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // get: date => formatDate(date)
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true
        }
    });

    const reactionSchema = new mongoose.Schema(
        {
            reactionId: {
                type: mongoose.Schema.Types.ObjectId,
                default: () => new mongoose.Types.ObjectId
            },
            reactionBody: {
                type: String,
                required: true,
                maxLength: 280
            },
            username: {
                type: String,
                required: true,
            },
            createdAt: {
                type: Date,
                default: Date.now,
                // get: date => formatDate(date)
            }
        },
        {
            toJSON: {
                virtuals: true
            },
            id: false
        }
    
    );


thoughtsSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thoughts = mongoose.model('Thoughts', thoughtsSchema);

module.exports = Thoughts;