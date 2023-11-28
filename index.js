const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware for logging incoming requests
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  console.log('Request Body:', req.body); // Log the request body
  next();
});

// Route handling - example root route
app.get('/', (req, res) => {
  res.send('Hello, Express on Heroku!');
});

// POST route to handle incoming data
app.post('/data', (req, res) => {
  console.log('Received data:', req.body); // Log the data received in POST request body
  res.send('Data received by the server');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
