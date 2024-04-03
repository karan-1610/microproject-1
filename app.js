// const express = require('express');
// const path = require('path');
// const data = require('./data/data.json');
// const jsonData = require('./data/data.json');

// app.get('/api/data', (req, res) => {
//   res.json(jsonData);
// });


// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/api/data', (req, res) => {
//   res.json(data);
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require('express');
const path = require('path');
const jsonData = require('./data/data.json');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Route to send the JSON data
app.get('/api/data', (req, res) => {
  res.json(jsonData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
