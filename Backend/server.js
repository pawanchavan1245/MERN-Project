const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/authDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Schema
const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
});

const User = mongoose.model("User", UserSchema);

// SIGNUP
app.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password)
    return res.json({ msg: "All fields required" });

  const exist = await User.findOne({ email });
  if (exist) return res.json({ msg: "User already exists" });

  const hashed = await bcrypt.hash(password, 10);

  const user = new User({
    firstName,
    lastName,
    email,
    password: hashed
  });

  await user.save();
  res.json({ msg: "Signup successful" });
});

// SIGNIN
app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.json({ msg: "Invalid email" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.json({ msg: "Wrong password" });

  res.json({ msg: "Login successful" });
});

app.listen(5000, () => console.log("Server running on 5000"));