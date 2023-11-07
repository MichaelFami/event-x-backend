const { Schema } = require('mongoose')
const userSchema = new Schema (
   {
      name: { type: String, required: true },
      username: { type: String, required: true },
      password: { type: Number, required: true },
      // orgMember:{ type: [Schema.Types.ObjectId], ref: 'Organization', default:undefined },
      userType: { type: String, required: true },
   },

   { timestamps: true})

module.exports = userSchema