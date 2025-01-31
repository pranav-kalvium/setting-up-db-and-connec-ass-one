// const express = require('express');
// const { resolve } = require('path');

// const app = express();
// const port = 3010;

// app.use(express.static('static'));

// app.get('/', (req, res) => {
//   res.sendFile(resolve(__dirname, 'pages/index.html'));
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });



const express = require('express');
const connectDB = require('./database'); // Import the connection function

const app = express();

// Call the connectDB function
connectDB();

// Your server setup (routes, middleware, etc.) goes here

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});