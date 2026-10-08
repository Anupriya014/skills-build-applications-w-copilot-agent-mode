import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: String,
  email: String,
  activityLevel: String,
});

export default model('User', userSchema);
