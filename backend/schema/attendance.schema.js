import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  // Pointing to the user for reference ID
  username: {
    type: String,
    require: true,
  },
  inTime: {
    type: String,
    default: "Absent",
  },
  outTime: {
    type: String,
    default: "Absent",
  },
  date: {
    type: String,
    unique: true,
  },
});

const Attendance = mongoose.model("Attendance", attendanceSchema);
export default Attendance;
