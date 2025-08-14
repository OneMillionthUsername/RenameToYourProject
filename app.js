// The app.js file contains the core logic of your Express application. It’s responsible for defining routes, middleware, and how requests should be handled.

/**
- Setting up Express: The app.js file creates and configures the Express application
- Handling Middleware: Middleware like express.json() is used for parsing incoming requests.
- Defining Routes: You define the routes that handle HTTP requests in this file.
- Exporting the App: The Express app is exported so it can be used in another file (like server.js) to run the application.
*/

// app.js
import express, { json } from 'express';
import jwt from 'jsonwebtoken';
import session from 'cookie-session';
import path from 'path';

const app = express();
const expiryDate = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

// locals
app.locals.email = 'demo@gmail.com'; // Setting a global variable

// Middleware
app.use(json());
app.use(express.static('public'));
app.use(session({
  name: 'session',
  keys: ['key1', 'key2'],
  cookie: {
    secure: true,
    httpOnly: true,
    domain: 'example.com',
    path: 'foo/bar',
    expires: expiryDate
  }
}));
app.use(
    express.urlencoded({
        extended: true,
        inflate: true,
        limit: "1mb",
        parameterLimit: 5000,
        type: "application/x-www-form-urlencoded",
    })
);
// Prevent open redirects.
app.use((req, res) => {
  try {
    if (new Url(req.query.url).host !== 'example.com') {
      return res.status(400).end(`Unsupported redirect to host: ${req.query.url}`)
    }
  } catch (e) {
    return res.status(400).end(`Invalid url: ${req.query.url}`)
  }
  res.redirect(req.query.url)
})
// Custom error-handling
// custom 404
app.use((req, res, next) => {
  res.status(404).send("Sorry, can't find that!");
});
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

// Sample route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Another route with parameters
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID is ${userId}`);
});

// Export the app to be used by the server
export default app;