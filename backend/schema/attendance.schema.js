import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
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
  },
});

const Attendance = mongoose.model("Attendance", attendanceSchema);
export default Attendance;
