
const express = require("express");
const app = express();
const port = 3000;

// Your collection of roasts (import or copy from the previous message)
const roasts = require("./roasts.js");

// Helper function to get a random roast
function getRandomRoast() {
  return roasts[Math.floor(Math.random() * roasts.length)];
}

// Middleware to handle JSON requests and responses
app.use(express.json());

// Main route: Get a random roast
app.get("/api/roast", (req, res) => {
  const randomRoast = getRandomRoast();
  res.json({ status: "success", roast: randomRoast });
});

// Light roasts: Less savage, more playful
app.get("/api/roast/light", (req, res) => {
  const lightRoasts = [
    "You’re like a cloud. When you disappear, it’s a beautiful day.",
    "If I had a dollar for every time you said something smart, I'd be broke.",
    "You're the reason they put instructions on shampoo bottles.",
  ];
  const randomRoast = lightRoasts[Math.floor(Math.random() * lightRoasts.length)];
  res.json({ status: "success", roast: randomRoast });
});// Savage roasts: Deeper, harsher burns
app.get("/api/roast/savage", (req, res) => {
  const savageRoasts = [
    "You must be the square root of negative one, because you can’t be real.",
    "The only thing lower than your self-esteem is your IQ.",
    "I don’t need to exercise – I get all the cardio I need just from running away from your stupidity.",
  ];
  const randomRoast = savageRoasts[Math.floor(Math.random() * savageRoasts.length)];
  res.json({ status: "success", roast: randomRoast });
});

// Personalized roast: Takes a name from the query and roasts them
app.get("/api/roast/custom", (req, res) => {
  const name = req.query.name || "Anonymous";
  const customRoast = `name, if you were any dumber, we’d have to water you. Even a houseplant has more common sense than you.`;
  res.json( status: "success", roast: customRoast );
);

// Start the server
app.listen(port, () => 
  console.log(`Roast API is running on http://localhost:{port}`);
});

