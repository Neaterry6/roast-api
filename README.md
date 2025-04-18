


Roast API 🔥

A fun and savage roast API that delivers random, deep, savage, and personalized roasts with a touch of humor. Perfect for playful banter or light-hearted comebacks. You can also personalize the roast by passing a name in the request!

Features

- *Savage roasts*: Get savage, deep burns.
- *Personalized roasts*: Include a name in your request for a custom roast.
- *General roasts*: Fun, light-hearted comebacks for any situation.
- *Funny roasts*: Add some humor to your insults.
- *Custom ideas*: Create your own roast ideas and add them to the collection.

Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

Installation

Clone this repository to your local machine:

```bash
git clone https://github.com/Neaterry6/roast-api
cd roast-api
```

Install dependencies:

```bash
npm install
```

Usage

Start the server locally:

```bash
npm start
```

The server will start at `http://localhost:3000`. You can now test the API using Postman, cURL, or your browser.

Sample cURL request:

```bashcurl http://localhost:3000/roast
```

The server will return a random roast.

Personalized roast:

To get a custom roast with a name, use:

```bash
curl http://localhost:3000/roast?name=John
```

API Endpoints

`GET /roast`
Returns a random roast.

`GET /roast?name={name}`
Returns a personalized roast, replacing `{name}` with the provided query string.

Deployment

This API is deployed on [Render](https://render.com/). You can check out the live version of the API here:

```
https://your-app-name.onrender.com/roast
```

Steps to deploy on Render:

1. Sign up for Render: [Render.com](https://render.com/)
2. Connect your GitHub repository to Render.
3. Set up a new web service with the *Node* environment.
4. Configure the build and start commands:
   - Build Command: `npm install`
   - Start Command: `npm start`
5. Click on *Create Web Service*.
6. Once deployed, you will receive a public URL to use the API.

Contributing

We welcome contributions! If you'd like to add more roasts, improve the API, or fix a bug, feel free to fork the repository and submit a pull request.

To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Write tests if applicable.
4. Commit your changes.
5. Push your branch to your fork.6. Submit a pull request.

License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
