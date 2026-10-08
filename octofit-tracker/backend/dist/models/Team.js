import { Schema, model } from 'mongoose';
const teamSchema = new Schema({
    name: String,
    members: [String],
});
export default model('Team', teamSchema);
