//dbConfig.js: Contains the configuration for connecting to the database, like the host, username, and password.
/**
- Separation of Configurations: Keeps all environment configurations in one place for easier management.
- Environment Flexibility: Allows easy switching of configurations for different environments (development, production).
- Database Configuration: Centralizes database connection settings for better maintainability. 
*/

export const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/mydb';
