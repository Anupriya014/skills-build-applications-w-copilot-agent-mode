import mongoose from 'mongoose';
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
export const connectDatabase = () => mongoose.connect(connectionString);
mongoose.connection.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});
