const express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  cors = require('cors'),
  port = process.env.PORT || 4000;

mongoose.set('debug', true);

require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

async function connecting() {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log('--Connected to DB!');
  } catch {
    console.log("++Error: can't connect to DB!");
  }
}

connecting();

app.listen(port, () => {
  console.log('--Server running in port ', port);
});
