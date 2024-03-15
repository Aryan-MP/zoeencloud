const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// MongoDB Connection URL
const mongoURI = 'mongodb://localhost:27017';
const client = new MongoClient(mongoURI);

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Serve index.html as the home page
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname + '/public' });
});

// Connect to MongoDB
async function connectToDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}
connectToDB();

// Handle user signup
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const db = client.db('my-mongodb-database');

    // Check if user already exists
    const existingUser = await db.collection('users').findOne({ username });
    if (existingUser) {
      return res.status(400).send('User already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the user to MongoDB
    await db.collection('users').insertOne({ username, email, password: hashedPassword });

    // Redirect to the home page
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error registering user');
  }
});

// Handle user login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const db = client.db('my-mongodb-database');

    // Find the user by username
    const user = await db.collection('users').findOne({ username });
    if (!user) {
      return res.status(404).send('User not found');
    }

    // Compare passwords
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).send('Invalid password');
    }

    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error logging in');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
