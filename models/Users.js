



const UsersSchema = new Schema({
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
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
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


postSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });

  const Post = model('Users', UsersSchema);

module.exports = Post;