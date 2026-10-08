import { Schema, model } from 'mongoose';
const activitySchema = new Schema({
    name: String,
    duration: Number,
    intensity: String,
});
export default model('Activity', activitySchema);
