//The server.js file is responsible for configuring and starting the server. It imports the Express app from app.js, sets the port, and tells the app to listen for incoming requests.
/**
 *
- Importing the Express App: It imports the app created in app.js.
- Setting Up the Port: The server listens on a specific port (e.g., 3000).
- Starting the Server: The server is started using app.listen() to handle incoming requests.
- Logging the Server Status: It logs a message when the server starts successfully.
 */

//server.js
import app from './app';  // Import the Express app from app.js

const PORT = process.env.PORT || 3000;  // Set the port to use (default is 3000)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/**
Keep routes modular: Separate routes based on features or entities (e.g., userRoutes, productRoutes).

Use environment variables: Store sensitive information like API keys or database credentials in .env files and access them via process.env.

Error Handling: Implement centralized error handling middleware to catch and respond to errors.

Write Tests: Maintain a separate folder (tests/) for unit and integration tests to ensure your app works as expected.

Follow REST principles: If you're building an API, ensure your routes follow RESTful conventions (e.g., GET /users, POST /users). 
*/
