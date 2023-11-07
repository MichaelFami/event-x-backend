const mongoose = require('mongoose')
// const eventSchema = require('./event')
const eventSchema = require("./event.js")
const organizationSchema = require('./organization')
const userSchema = require('./user')
const userEventSchema = require('./userEvent')

const Event = mongoose.model('Event', eventSchema)
const Organization = mongoose.model('Organization', organizationSchema)
const User = mongoose.model('User', userSchema)
const UserEvent = mongoose.model('UserEvent', userEventSchema)

module.exports = {
    Event,
    Organization,
    User,
    UserEvent,
    
}
