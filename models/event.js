const { Schema } = require('mongoose')



const eventSchema = new Schema (
   {
      name: { type: String, required: true },
      description: { type: String, required: true },
      location: { type: String, required: true },
      capacity: { type: String, required: true },
      date:{type: Date, required: true},
      rsvp: { type: [{ type: Schema.Types.ObjectId, ref: 'User' }], default: [] }, // Array of user IDs referencing User schema


   },

   { timestamps: true})

module.exports = eventSchema

