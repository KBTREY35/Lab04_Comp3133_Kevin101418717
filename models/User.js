const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    minlength: [4, "Username must be at least 4 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [
      /^\S+@\S+\.\S+$/,
      "Please enter a valid email address",
    ],
  },
  city: {
    type: String,
    required: [true, "City is required"],
    match: [/^[a-zA-Z\s]+$/, "City must contain only alphabets and spaces"],
  },
  website: {
    type: String,
    required: [true, "Website is required"],
    match: [
      /^(http:\/\/|https:\/\/)[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=.]+$/,
      "Please enter a valid website URL (http or https)",
    ],
  },
  zipCode: {
    type: String,
    required: [true, "Zip Code is required"],
    match: [/^\d{5}-\d{4}$/, "Zip Code format must be 12345-1234"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    match: [/^1-\d{3}-\d{3}-\d{4}$/, "Phone number format must be 1-123-123-1234"],
  },
});

module.exports = mongoose.model("User", UserSchema);
