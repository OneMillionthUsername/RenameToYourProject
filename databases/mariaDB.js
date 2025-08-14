//This folder contains database connection logic.

/** 
- Database Connection: Encapsulates the logic for establishing database connections.
- Reusability: This file can be imported in different parts of the app to interact with the database.
- Environment Setup: Makes it easy to configure different databases for different environments (development, production).
*/

import { createConnection } from 'mysql';
const connection = createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb'
});
connection.connect();
export default connection;