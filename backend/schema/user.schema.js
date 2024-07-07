import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    require: true,
    trim: true,
  },
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phoneNo: {
    type: String,
    require: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
