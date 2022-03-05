import { Schema, model } from "mongoose";

const DevSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  bio: String,
  avatar: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Dev = model('Dev', DevSchema);

export { Dev };
