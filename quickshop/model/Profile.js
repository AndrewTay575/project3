const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
         ref: 'user'
    },
    jobtitle: {
      type:String
    },
    location: {
        type: String
      },
      social: {
        twitter: {
          type: String
        },
        facebook: {
          type: String
        },
        instagram: {
          type: String
        }
      },
    bio: {
        type: String
      },
    date: {
        type: Date,
        default: Date.now
      }

});

module.exports = Profile = mongoose.model('profile', ProfileSchema);