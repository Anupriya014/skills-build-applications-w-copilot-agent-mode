import 'dotenv/config';
import express from 'express';
import { connectDatabase } from './config/database.js';
import Activity from './models/Activity.js';
import Leaderboard from './models/Leaderboard.js';
import Team from './models/Team.js';
import User from './models/User.js';
import Workout from './models/Workout.js';

const app = express();
const port = Number(process.env.PORT || 8000);
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';
const allowedOrigins = new Set([
  'http://localhost:5173',
  ...(codespaceName ? [`https://${codespaceName}-5173.app.github.dev`] : []),
]);

app.use(express.json());
app.use((req, res, next) => {
  const origin = req.get('Origin');
  if (origin && allowedOrigins.has(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.vary('Origin');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.sendStatus(204);
    return;
  }

  next();
});

app.get('/', (_req, res) => {
  res.json({
    message: 'OctoFit API is running',
    endpoints: ['/api/users/', '/api/teams/', '/api/activities/', '/api/leaderboard/', '/api/workouts/'],
    frontend: 'http://localhost:5173',
  });
});

app.get('/api/users/', async (_req, res) => {
  const users = await User.find();
  res.json(users);
});

app.get('/api/teams/', async (_req, res) => {
  const teams = await Team.find();
  res.json(teams);
});

app.get('/api/activities/', async (_req, res) => {
  const activities = await Activity.find();
  res.json(activities);
});

app.get('/api/leaderboard/', async (_req, res) => {
  const leaderboard = await Leaderboard.find();
  res.json(leaderboard);
});

app.get('/api/workouts/', async (_req, res) => {
  const workouts = await Workout.find();
  res.json(workouts);
});

app.listen(port, async () => {
  await connectDatabase();
  console.log(`OctoFit API listening on ${baseUrl}`);
});

export { baseUrl };
