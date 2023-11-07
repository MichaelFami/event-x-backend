const { Schema } = require('mongoose')
const userEventSchema = new Schema (
   {
      user_id:{ type: Schema.Types.ObjectId, ref: 'User' },
      events_id:{ type: [Schema.Types.ObjectId], ref: 'Event', default:undefined },
   },

   { timestamps: true})

module.exports = userEventSchema