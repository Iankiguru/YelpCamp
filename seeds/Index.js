// Importing required modules and files
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campModel');
const mongoose = require('mongoose');

// Establishing connection to MongoDB database
async function connectDB() {
  await mongoose.connect('mongodb://127.0.0.1:27017/YelCamp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    bufferCommands: false // Increase timeout limit
  });
  console.log('Database connected');
}

// Function to return a random element from an array
const sample = (array) => array[Math.floor(Math.random() * array.length)];

// Function to seed the database with 300 randomly generated campgrounds
const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 300; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      // Replace with your own user ID
      author: '5f5c330c2cd79d538f2c66d9',
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
      price,
      geometry: {
        type: 'Point',
        coordinates: [
          cities[random1000].longitude,
          cities[random1000].latitude,
        ],
      },
      images: [
        {
          url: 'https://source.unsplash.com/collection/483251',
          filename: 'unsplash-image',
        },
      ],
    });
    await camp.save();
  }
  console.log('Database seeded');
};

// Connect to database and seed with campgrounds
connectDB().then(()=>{
    seedDB().then(()=>{
        mongoose.connection.close();
    });
})
