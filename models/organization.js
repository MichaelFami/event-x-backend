const { Schema } = require('mongoose')
const organizationSchema = new Schema (
   {
      name: { type: String, required: true },
      admin: { type: Schema.Types.ObjectId, ref: 'User' },
      // members:{ type: [Schema.Types.ObjectId], ref: 'User', default:undefined },
      events: { type: [Schema.Types.ObjectId], ref: 'Event', default:undefined },
   },

   { timestamps: true})

module.exports = organizationSchema