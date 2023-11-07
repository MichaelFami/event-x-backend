
const db = require("../db");
const users = require ("./data/user.json")

const  { User, UserEvent, Organization, Event } = ("../models")

// Connect to the database
db.on("error", console.error.bind(console, "MongoDB connection error:"));




const main = async () => {
   let userList = users.map((user)=>{

    return new User(
      {name: user.name,
    username: user.username,
    password: user.password,
    userType: user.userType,})
  }) 
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

  await User.insertMany(userList);
  console.log("created User");

  // await UserEvent.insertMany(userevents);
  // console.log("created User");

  // await Event.insertMany(events);
  // console.log("created event");

  // await Organization.insertMany(organizations);
  // console.log("created Organization");
};
const run = async () => {
  await main();
  db.close();
};

run();
