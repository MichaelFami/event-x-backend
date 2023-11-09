const db = require("../db");
// const users = require ("./data/user.json")

const { User, Organization, Event } = require("../models/index.js");

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
      name: "John",
      username: "John5",
      password: "blahjohn",
      userType: "m",
    },
    {
      name: "Alice",
      username: "Alice123",
      password: "password123",
      userType: "f",
    },
    {
      name: "Bob",
      username: "Bob99",
      password: "bobspassword",
      userType: "m",
    },
    {
      name: "Emily",
      username: "Emily84",
      password: "emilyspass",
      userType: "f",
    },
    {
      name: "Mike",
      username: "Mike21",
      password: "mikesecret",
      userType: "m",
    },
    {
      name: "Linda",
      username: "Linda77",
      password: "lindapw",
      userType: "f",
    },
    {
      name: "David",
      username: "David60",
      password: "davids123",
      userType: "m",
    },
    {
      name: "Sarah",
      username: "Sarah45",
      password: "sarahpass",
      userType: "f",
    },
    {
      name: "Chris",
      username: "Chris88",
      password: "chrissafe",
      userType: "m",
    },
    {
      name: "Megan",
      username: "Megan31",
      password: "megan1234",
      userType: "f",
    },
  ];

  const events = [
    {
      name: "Blood Drive",
      description: "people donate blood",
      location: "3102 n first st Austin, TX",
      capacity: "345",
      date: new Date("2017-04-02T15:30:00Z"),
      rsvp: [],
    },
    {
      name: "Food Bank Fiesta",
      description:
        "Community members gather to donate non-perishable food items.",
      location: "124 Main St, Springfield, IL",
      capacity: 200,
      date: new Date("2018-09-15T12:00:00Z"),
      rsvp: [],
    },
    {
      name: "Blanket Blessings",
      description: "Participants contribute warm blankets for the homeless.",
      location: "500 Oak St, Denver, CO",
      capacity: 150,
      date: new Date("2023-11-20T18:00:00Z"),
      rsvp: [],
    },
    {
      name: "Toy Drive Extravaganza",
      description:
        "A festive event where toys are collected for underprivileged children.",
      location: "815 Pine Ave, San Francisco, CA",
      capacity: 300,
      date: new Date("2023-12-10T14:00:00Z"),
      rsvp: [],
    },
    {
      name: "Books for All",
      description: "Book lovers unite to donate books for a community library.",
      location: "230 Maple Dr, Boston, MA",
      capacity: 180,
      date: new Date("2024-06-25T16:45:00Z"),
      rsvp: [],
    },
    {
      name: "Clean Water Crusade",
      description:
        "Supporters come together to fundraise for clean water initiatives.",
      location: "42 Riverfront Ave, Seattle, WA",
      capacity: 250,
      date: new Date("2024-08-05T13:15:00Z"),
      rsvp: [],
    },
    {
      name: "Winter Warmth Drive",
      description:
        "Collecting winter clothing for those in need during the cold season.",
      location: "710 Pine St, Chicago, IL",
      capacity: 180,
      date: new Date("2024-01-15T17:30:00Z"),
      rsvp: [],
    },
    {
      name: "Green Earth Gathering",
      description:
        "Environmental enthusiasts contribute to tree-planting initiatives.",
      location: "123 Greenway Blvd, Portland, OR",
      capacity: 200,
      date: new Date("2024-04-22T10:00:00Z"),
      rsvp: [],
    },
    {
      name: "Health and Hygiene Fair",
      description: "Donations of hygiene products for underserved communities.",
      location: "890 Wellness Lane, Miami, FL",
      capacity: 150,
      date: new Date("2024-07-08T14:30:00Z"),
      rsvp: [],
    },
    {
      name: "Tech for All",
      description:
        "Gathering used electronics to be refurbished for educational purposes.",
      location: "76 Tech Hub Dr, Silicon Valley, CA",
      capacity: 300,
      date: new Date("2021-10-12T11:00:00Z"),
      rsvp: [],
    },
  ];

  const organizations = [
    {
      name: "Red Cross",
      admin: users[0].id,
      // members:[users[0].id],
      events: [events[0].id],
    },
  ];

  await User.insertMany(users);
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
