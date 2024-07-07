import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  // Pointing to the user for reference ID
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
    default: "",
  },
  date: {
    type: String,
  },
});

const Attendance = mongoose.model("Attendance", attendanceSchema);
export default Attendance;
