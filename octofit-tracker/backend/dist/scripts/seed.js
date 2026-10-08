import mongoose from 'mongoose';
import User from '../models/User.js';
import Team from '../models/Team.js';
import Activity from '../models/Activity.js';
import Leaderboard from '../models/Leaderboard.js';
import Workout from '../models/Workout.js';
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
async function seedDatabase() {
    try {
        await mongoose.connect(connectionString);
        console.log('Seed the octofit_db database with test data');
        await User.insertMany([{ name: 'Mona' }, { name: 'Noah' }]);
        await Team.insertMany([{ name: 'Octocats' }, { name: 'Trailblazers' }]);
        await Activity.insertMany([{ name: 'Run' }, { name: 'Stretch' }]);
        await Leaderboard.insertMany([{ name: 'Weekly' }, { name: 'Monthly' }]);
        await Workout.insertMany([{ name: 'Intervals' }, { name: 'Strength' }]);
        console.log('Database seeding complete');
        await mongoose.disconnect();
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}
seedDatabase();
