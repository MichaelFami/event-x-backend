
const db = require("../db");
// const users = require ("./data/user.json")

const  { User, UserEvent, Organization, Event } = require("../models/index.js")

// Connect to the database
db.on("error", console.error.bind(console, "MongoDB connection error:"));




const main = async () => {
  //  let userList = users.map((user)=>{

  //   return new User(
  //     {name: user.name,
  //   username: user.username,
  //   password: user.password,
  //   userType: user.userType,})
  // }) 

const users = [
  {
      "name": "John",
      "username": "John5",
      "password": "blahjohn",
      "userType": "m"
  },
  {
      "name": "Alice",
      "username": "Alice123",
      "password": "password123",
      "userType": "f"
  },
  {
      "name": "Bob",
      "username": "Bob99",
      "password": "bobspassword",
      "userType": "m"
  },
  {
      "name": "Emily",
      "username": "Emily84",
      "password": "emilyspass",
      "userType": "f"
  },
  {
      "name": "Mike",
      "username": "Mike21",
      "password": "mikesecret",
      "userType": "m"
  },
  {
      "name": "Linda",
      "username": "Linda77",
      "password": "lindapw",
      "userType": "f"
  },
  {
      "name": "David",
      "username": "David60",
      "password": "davids123",
      "userType": "m"
  },
  {
      "name": "Sarah",
      "username": "Sarah45",
      "password": "sarahpass",
      "userType": "f"
  },
  {
      "name": "Chris",
      "username": "Chris88",
      "password": "chrissafe",
      "userType": "m"
  },
  {
      "name": "Megan",
      "username": "Megan31",
      "password": "megan1234",
      "userType": "f"
  },
];

  const events = [
    {
        name: "blood drive",
        description: "people donate blood",
        location: "That one house",
        capacity: "345",
        date:Date("2017-04-02T15:30:00Z"),
  
     },
    
  ];
  const organizations = [
    {
        name: "Red Cross",
        admin: users[0].id,
        members:[users[0].id],
        events: [events[0].id],
     },
    
     
  ];

  const userevents = [
    {
        user_id: users[0].id,
        events_id: events[0].id,
     },
    
     
  ];

  // await User.deleteMany()
  // await UserEvent.deleteMany()
  // await Event.deleteMany()
  // await Organization.deleteMany()

  await User.insertMany(users);
  console.log("created User");


//   User.insertMany(users)
//       .then(function () {
//         console.log("created User");;
//       })
//       .catch(function (err) {
//         console.log(err);
//       });

  await UserEvent.insertMany(userevents);
  console.log("created User");

  await Event.insertMany(events);
  console.log("created event");

  await Organization.insertMany(organizations);
  console.log("created Organization");
};
const run = async () => {
  await main();
  db.close();
};

run();
