const UsersSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        typr: String,
        unique: true,
        required: true,
        // how to match a valid email address
    },
    thoughts: {
        
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Thoughts'

    },
    friends: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users'
        
    }
})