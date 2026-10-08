import { Schema, model } from 'mongoose';
const leaderboardSchema = new Schema({
    name: String,
    score: Number,
});
export default model('Leaderboard', leaderboardSchema);
