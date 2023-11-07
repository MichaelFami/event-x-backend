const express = require('express');
const db = require('./db');
const logger = require('morgan');
const cors = require('cors')

const userController = require('./controllers/userController');
const userEventController = require('./controllers/userEventController');
const organizationController = require('./controllers/organizationController');
const eventController = require('./controllers/eventController');
const bodyParser = require("body-parser")


const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json())
app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('this server is running on port 3001 and is connected to mongoDB')
})


app.get('/user', userController.getAllUsers)
app.get('/user/:id', userController.getUserById)
app.post('/user', userController.createUser)
app.put('/user/:id', userController.updateUser)
app.delete('/user/:id', userController.deleteUser)

app.get('/userEvent', userEventController.getAllUserEvents)
app.get('/userEvent/:id', userEventController.getUserEventById)
app.post('/userEvent', userEventController.createUserEvent)
app.put('/userEvent/:id', userEventController.updateUserEvent)
app.delete('/userEvent/:id', userEventController.deleteUserEvent)

app.get('/organization', organizationController.getAllOrganizations)
app.get('/organization/:id', organizationController.getOrganizationById)
app.post('/organization', organizationController.createOrganization)
app.put('/organization/:id', organizationController.updateOrganization)
app.delete('/organization/:id', organizationController.deleteOrganization)

app.get('/event', eventController.getAllEvents)
app.get('/event/:id', eventController.getEventById)
app.post('/event', eventController.createEvent)
app.put('/event/:id', eventController.updateEvent)
app.delete('/event/:id', eventController.deleteEvent)

app.listen(PORT, () => {
console.log(`Listening on port: ${PORT}`)
})