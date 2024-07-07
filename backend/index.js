import express, { json } from "express";
import cors from "cors";
import { connectDB } from "./db.js";
import User from "./schema/user.schema.js";
import Attendance from "./schema/attendance.schema.js";
import Admin from "./schema/admin.schema.js";

const app = express();
app.use(cors());
app.use(json());
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`APP IS RUNNNING ON ${PORT}`);
});

app.get("/", (req, res) => {
  console.log("i got called");
  res.status(200).json("Hello world");
});

connectDB(process.env.MONGO_URL)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.post("/register", async (req, res) => {
  const { username, password, email, phoneNo } = req.body;
  console.log(req.body);
  if (!username || !password || !email || !phoneNo) {
    return res.status(403).json();
  }
  const response = await User.create({ username, password, email, phoneNo });
  if (!response) {
    return res.status(403).json({ message: "Error in DB" });
  }
  return res.status(200).json(response);
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  if (!username || !password) {
    return res.status(403).json({ message: "Please add value" });
  }
  const response = await User.findOne({ username });
  if (!response) {
    return res.status(403).json({ message: "Error in DB" });
  }
  if (response.password !== password) {
    return res.status(403).json({ message: "wrong password" });
  }
  return res.status(200).json(response);
});

app.post("/in", async (req, res) => {
  const { inTime, date, id } = req.body;

  if (!inTime || !date || !id) {
    return res.status(403).json({ message: "Please add data" });
  }

  try {
    const response = await Attendance.create({
      inTime,
      date,
      user: id,
    });

    return res.status(200).json({ response });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create attendance record",
      error: error.message,
    });
  }
});

app.post("/out", async (req, res) => {
  const { outTime, date, id } = req.body;
  console.log(req.body);

  if (!outTime || !date || !id) {
    return res.status(403).json({ message: "Please add data" });
  }
  try {
    const response = await Attendance.findOneAndUpdate(
      { _id: id, date },
      {
        outTime,
      },
      { new: true }
    );
    return res.status(200).json({ response });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: error.message,
    });
  }
});

app.post("/report", async (req, res) => {
  const { id } = req.body;
  console.log(id);

  const response = await Attendance.find({ user: id });
  console.log(response);
  if (!response) {
    return res.status(200).json({ message: "error" });
  }

  return res.status(200).json(response);
});

app.post("/admin-login", async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  if (!username || !password) {
    return res.status(403).json({ message: "Please add value" });
  }
  const response = await Admin.findOne({ username });
  if (!response) {
    return res.status(403).json({ message: "Error in DB" });
  }
  if (response.password !== password) {
    return res.status(403).json({ message: "wrong password" });
  }
  return res.status(200).json(response);
});

app.get("/users", async (req, res) => {
  const response = await User.find({});
  return res.status(200).json(response);
});
