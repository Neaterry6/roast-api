
// Importing the express module to create the server
const express = require('express');

// Import the roast data from roast.js
const roast = require('./roast');

// Creating the Express app
const app = express();
const port = process.env.PORT || 3000;

// Basic route for the API root (optional)
app.get('/', (req, res) => {
  res.send('Welcome to the Savage Roast API! Use /roast to get a roast');
});

// Endpoint to get a random savage roast
app.get('/roast/savage', (req, res) => {
  const randomIndex = Math.floor(Math.random() * roast.savageRoasts.length);
  const randomRoast = roast.savageRoasts[randomIndex];
  res.json({ roast: randomRoast });
});

// Endpoint to get a random light roast
app.get('/roast/light', (req, res) => {
  const randomIndex = Math.floor(Math.random() * roast.lightRoasts.length);
  const randomRoast = roast.lightRoasts[randomIndex];
  res.json({ roast: randomRoast });
});

// Endpoint to get a random general roast
app.get('/roast/general', (req, res) => {const randomIndex = Math.floor(Math.random() * roast.generalRoasts.length);
  const randomRoast = roast.generalRoasts[randomIndex];
  res.json({ roast: randomRoast });
});

// Endpoint to get a random savage burn
app.get('/roast/burn', (req, res) => {
  const randomIndex = Math.floor(Math.random() * roast.savageBurns.length);
  const randomRoast = roast.savageBurns[randomIndex];
  res.json({ roast: randomRoast });
});

// Endpoint to get a random funny roast
app.get('/roast/funny', (req, res) => {
  const randomIndex = Math.floor(Math.random() * roast.funnyRoasts.length);
  const randomRoast = roast.funnyRoasts[randomIndex];
  res.json({ roast: randomRoast });
});

// Endpoint for personalized roast (using name)
app.get('/roast/personalized', (req, res) => {
  const name = req.query.name || 'Friend'; // Default to 'Friend' if no name is provided
  const personalizedRoastsList = roast.personalizedRoasts(name);
  const randomIndex = Math.floor(Math.random() * personalizedRoastsList.length);
  const randomRoast = personalizedRoastsList[randomIndex];
  res.json({ roast: randomRoast });
});

// Start the server
app.listen(port, () => {
  console.log(`Roast API is running on port ${port}`);
});
