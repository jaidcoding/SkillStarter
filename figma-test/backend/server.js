import express from 'express';
import { Sequelize, DataTypes } from 'sequelize';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL connection
const sequelize = new Sequelize('postgres://myuser:jaidon@localhost:5432/skillstarter', {
  dialect: 'postgres',
});

// Replace 'myuser', 'jaidon', and 'localhost:5432/skillstarter' with your actual PostgreSQL credentials and database name

// Test the connection
sequelize.authenticate()
  .then(() => console.log('PostgreSQL connected'))
  .catch(err => console.log('Error: ' + err));

// User model
const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  dob: {
    type: DataTypes.STRING,
  },
  residence: {
    type: DataTypes.STRING,
  },
  selectedSkills: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
  profilePicture: {
    type: DataTypes.STRING,
  },
  bio: {
    type: DataTypes.TEXT,
  },
  projects: {
    type: DataTypes.JSONB,
  },
});

// Sync the model with the database
sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.log('Error syncing database: ' + err));

// Routes
app.post('/api/register', async (req, res) => {
  const { email, password, firstName, lastName, dob, residence, selectedSkills } = req.body;
  try {
    const newUser = await User.create({ email, password, firstName, lastName, dob, residence, selectedSkills });
    res.status(201).send('User registered');
  } catch (error) {
    res.status(400).send('Error registering user');
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email, password } });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (error) {
    res.status(400).send('Error logging in');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
