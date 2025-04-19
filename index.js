const express = require('express');
const { savageRoasts, lightRoasts, generalRoasts, savageBurns, funnyRoasts, personalizedRoasts } = require('./roast');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Routes
app.get('/roast/savage', (req, res) => {
  res.json({ roast: savageRoasts[Math.floor(Math.random() * savageRoasts.length)] });
});

app.get('/roast/light', (req, res) => {
  res.json({ roast: lightRoasts[Math.floor(Math.random() * lightRoasts.length)] });
});

app.get('/roast/general', (req, res) => {
  res.json({ roast: generalRoasts[Math.floor(Math.random() * generalRoasts.length)] });
});

app.get('/roast/savage-burn', (req, res) => {
  res.json({ roast: savageBurns[Math.floor(Math.random() * savageBurns.length)] });
});

app.get('/roast/funny', (req, res) => {
  res.json({ roast: funnyRoasts[Math.floor(Math.random() * funnyRoasts.length)] });
});

app.get('/roast/personalized/:name', (req, res) => {
  const name = req.params.name;
  res.json({ roast: personalizedRoasts(name)[Math.floor(Math.random() * personalizedRoasts(name).length)] });
});

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Roast API! Use endpoints like /roast/savage to get roasts.');
});

// Start the server
app.listen(port, () => {
  console.log(`Roast API is listening on port ${port}`);
});
