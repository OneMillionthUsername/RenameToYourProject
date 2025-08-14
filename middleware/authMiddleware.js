//Middleware functions are executed during the request-response cycle. They can perform tasks like authentication, logging, or validation before the request reaches the route handler.

/**
- Authentication: Middleware is used to secure routes by verifying tokens.
- Reusable Logic: Can be applied to multiple routes to handle common tasks like authentication or logging.
- Flow Control: Uses next() to pass control to the next middleware or route handler.
 */

export default (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).send('No token provided');
    // Check token validity here
    next();
};