import mongoose from "mongoose";

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter a username"],
    unique: true,
  },

  email: {
    type: String,
    required: [true, "Please provide email address"],
    unique: true,
  },

  password: {
    type: String,
    required: [true, "Please provide a password"],
  },

  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPassword: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
  resetPasswordTokenExpiry: String,
  resetPasswordToken: String,
  lastLogin: Date,
  lastLogout: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
