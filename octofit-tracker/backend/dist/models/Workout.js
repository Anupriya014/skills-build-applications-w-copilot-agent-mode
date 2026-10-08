import { Schema, model } from 'mongoose';
const workoutSchema = new Schema({
    name: String,
    focus: String,
    reps: Number,
});
export default model('Workout', workoutSchema);
